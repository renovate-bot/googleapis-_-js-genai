/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {ApiClient} from './_api_client';
import * as types from './types';

export function tModel(apiClient: ApiClient, model: string | unknown): string {
  if (!model || typeof model !== 'string') {
    throw new Error('model is required and must be a string');
  }

  if (apiClient.isVertexAI()) {
    if (
      model.startsWith('publishers/') ||
      model.startsWith('projects/') ||
      model.startsWith('models/')
    ) {
      return model;
    } else if (model.indexOf('/') >= 0) {
      const parts = model.split('/', 2);
      return `publishers/${parts[0]}/models/${parts[1]}`;
    } else {
      return `publishers/google/models/${model}`;
    }
  } else {
    if (model.startsWith('models/') || model.startsWith('tunedModels/')) {
      return model;
    } else {
      return `models/${model}`;
    }
  }
}

export function tCachesModel(
  apiClient: ApiClient,
  model: string | unknown,
): string {
  const transformedModel = tModel(apiClient, model as string);
  if (!transformedModel) {
    return '';
  }

  if (transformedModel.startsWith('publishers/') && apiClient.isVertexAI()) {
    // vertex caches only support model name start with projects.
    return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/${transformedModel}`;
  } else if (transformedModel.startsWith('models/') && apiClient.isVertexAI()) {
    return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/publishers/google/${transformedModel}`;
  } else {
    return transformedModel;
  }
}

export function tPart(
  apiClient: ApiClient,
  origin?: types.PartUnion | null,
): types.Part {
  if (!origin) {
    throw new Error('PartUnion is required');
  }
  if (typeof origin === 'object') {
    return origin;
  }
  if (typeof origin === 'string') {
    return {text: origin};
  }
  throw new Error(`Unsupported part type: ${typeof origin}`);
}

export function tParts(
  apiClient: ApiClient,
  origin?: types.PartListUnion | null,
): types.Part[] {
  if (!origin) {
    throw new Error('PartListUnion is required');
  }
  if (Array.isArray(origin)) {
    return origin.map((item) => tPart(apiClient, item as types.PartUnion)!);
  }
  return [tPart(apiClient, origin)!];
}

export function tContent(
  apiClient: ApiClient,
  origin?: types.ContentUnion,
): types.Content {
  if (!origin) {
    throw new Error('ContentUnion is required');
  }
  if (typeof origin === 'object' && 'parts' in origin) {
    return origin;
  }
  return {
    role: 'user',
    parts: tParts(apiClient, origin as types.PartListUnion)!,
  };
}

export function tContentsForEmbed(
  apiClient: ApiClient,
  origin: types.ContentListUnion,
): types.ContentUnion[] {
  if (!origin) {
    return [];
  }
  if (apiClient.isVertexAI() && Array.isArray(origin)) {
    return origin.flatMap((item) => {
      const content = tContent(apiClient, item as types.ContentUnion);
      if (
        content.parts &&
        content.parts.length > 0 &&
        content.parts[0].text !== undefined
      ) {
        return [content.parts[0].text];
      }
      return [];
    });
  } else if (apiClient.isVertexAI()) {
    const content = tContent(apiClient, origin as types.ContentUnion);
    if (
      content.parts &&
      content.parts.length > 0 &&
      content.parts[0].text !== undefined
    ) {
      return [content.parts[0].text];
    }
    return [];
  }
  if (Array.isArray(origin)) {
    return origin.map(
      (item) => tContent(apiClient, item as types.ContentUnion)!,
    );
  }
  return [tContent(apiClient, origin as types.ContentUnion)!];
}

export function tContents(
  apiClient: ApiClient,
  origin: types.ContentListUnion,
): types.Content[] {
  if (!origin) {
    return [];
  }
  if (Array.isArray(origin)) {
    return origin.map((item) => tContent(apiClient, item));
  }
  return [tContent(apiClient, origin)];
}

export function processSchema(apiClient: ApiClient, schema: types.Schema) {
  if (!apiClient.isVertexAI()) {
    if ('title' in schema) {
      delete schema['title'];
    }

    if ('default' in schema) {
      throw new Error(
        'Default value is not supported in the response schema for the Gemini API.',
      );
    }
  }

  if ('anyOf' in schema) {
    if (!apiClient.isVertexAI()) {
      throw new Error(
        'AnyOf is not supported in the response schema for the Gemini API.',
      );
    }
    if (schema['anyOf'] !== undefined) {
      for (const subSchema of schema['anyOf']) {
        processSchema(apiClient, subSchema);
      }
    }
  }
}

export function tSchema(
  apiClient: ApiClient,
  schema: types.Schema,
): types.Schema {
  processSchema(apiClient, schema);
  return schema;
}

export function tSpeechConfig(
  apiClient: ApiClient,
  speechConfig: types.SpeechConfigUnion,
): types.SpeechConfig {
  if (typeof speechConfig === 'object' && 'voiceConfig' in speechConfig) {
    return speechConfig;
  } else if (typeof speechConfig === 'string') {
    return {
      voiceConfig: {
        prebuiltVoiceConfig: {
          voiceName: speechConfig,
        },
      },
    };
  } else {
    throw new Error(`Unsupported speechConfig type: ${typeof speechConfig}`);
  }
}

export function tTool(apiClient: ApiClient, tool: types.Tool): types.Tool {
  return tool;
}

export function tTools(
  apiClient: ApiClient,
  tool: types.Tool[] | unknown,
): types.Tool[] {
  if (!Array.isArray(tool)) {
    throw new Error('tool is required and must be an array of Tools');
  }
  return tool;
}

/**
 * Prepends resource name with project, location, resource_prefix if needed.
 *
 * @param client The API client.
 * @param resourceName The resource name.
 * @param resourcePrefix The resource prefix.
 * @param splitsAfterPrefix The number of splits after the prefix.
 * @returns The completed resource name.
 *
 * Examples:
 *
 * ```
 * resource_name = '123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = True
 * client.project = 'bar'
 * client.location = 'us-west1'
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns: 'projects/bar/locations/us-west1/cachedContents/123'
 * ```
 *
 * ```
 * resource_name = 'projects/foo/locations/us-central1/cachedContents/123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = True
 * client.project = 'bar'
 * client.location = 'us-west1'
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns: 'projects/foo/locations/us-central1/cachedContents/123'
 * ```
 *
 * ```
 * resource_name = '123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = False
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns 'cachedContents/123'
 * ```
 *
 * ```
 * resource_name = 'some/wrong/cachedContents/resource/name/123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = False
 * # client.vertexai = True
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * -> 'some/wrong/resource/name/123'
 * ```
 */
function resourceName(
  client: ApiClient,
  resourceName: string,
  resourcePrefix: string,
  splitsAfterPrefix: number = 1,
): string {
  const shouldAppendPrefix =
    !resourceName.startsWith(`${resourcePrefix}/`) &&
    resourceName.split('/').length === splitsAfterPrefix;
  if (client.isVertexAI()) {
    if (resourceName.startsWith('projects/')) {
      return resourceName;
    } else if (resourceName.startsWith('locations/')) {
      return `projects/${client.getProject()}/${resourceName}`;
    } else if (resourceName.startsWith(`${resourcePrefix}/`)) {
      return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourceName}`;
    } else if (shouldAppendPrefix) {
      return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourcePrefix}/${resourceName}`;
    } else {
      return resourceName;
    }
  }
  if (shouldAppendPrefix) {
    return `${resourcePrefix}/${resourceName}`;
  }
  return resourceName;
}

export function tCachedContentName(
  apiClient: ApiClient,
  name: string | unknown,
): string {
  if (typeof name !== 'string') {
    throw new Error('name must be a string');
  }
  return resourceName(apiClient, name, 'cachedContents');
}

export function tTuningJobStatus(
  apiClient: ApiClient,
  status: string | unknown,
): string {
  switch (status) {
    case 'STATE_UNSPECIFIED':
      return 'JOB_STATE_UNSPECIFIED';
    case 'CREATING':
      return 'JOB_STATE_RUNNING';
    case 'ACTIVE':
      return 'JOB_STATE_SUCCEEDED';
    case 'FAILED':
      return 'JOB_STATE_FAILED';
    default:
      return status as string;
  }
}

export function tBytes(
  apiClient: ApiClient,
  fromImageBytes: string | unknown,
): string {
  if (typeof fromImageBytes !== 'string') {
    throw new Error('fromImageBytes must be a string');
  }
  // TODO(b/389133914): Remove dummy bytes converter.
  return fromImageBytes;
}
export function tFileName(
  apiClient: ApiClient,
  fromName: string | unknown,
): string {
  if (typeof fromName !== 'string') {
    throw new Error('fromName must be a string');
  }
  // Remove the files/ prefx for MLdev urls to get the actual name of the file.
  if (fromName.startsWith('files/')) {
    return fromName.split('files/')[1];
  }
  return fromName;
}
