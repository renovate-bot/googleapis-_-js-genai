/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {ApiClient} from '../_api_client';
import * as common from '../_common';
import * as t from '../_transformers';
import * as types from '../types';

export function partToMldev(
  apiClient: ApiClient,
  fromObject: types.Part,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  if (common.getValueByPath(fromObject, ['videoMetadata']) !== undefined) {
    throw new Error('videoMetadata parameter is not supported in Gemini API.');
  }

  const fromThought = common.getValueByPath(fromObject, ['thought']);
  if (fromThought != null) {
    common.setValueByPath(toObject, ['thought'], fromThought);
  }

  const fromCodeExecutionResult = common.getValueByPath(fromObject, [
    'codeExecutionResult',
  ]);
  if (fromCodeExecutionResult != null) {
    common.setValueByPath(
      toObject,
      ['codeExecutionResult'],
      fromCodeExecutionResult,
    );
  }

  const fromExecutableCode = common.getValueByPath(fromObject, [
    'executableCode',
  ]);
  if (fromExecutableCode != null) {
    common.setValueByPath(toObject, ['executableCode'], fromExecutableCode);
  }

  const fromFileData = common.getValueByPath(fromObject, ['fileData']);
  if (fromFileData != null) {
    common.setValueByPath(toObject, ['fileData'], fromFileData);
  }

  const fromFunctionCall = common.getValueByPath(fromObject, ['functionCall']);
  if (fromFunctionCall != null) {
    common.setValueByPath(toObject, ['functionCall'], fromFunctionCall);
  }

  const fromFunctionResponse = common.getValueByPath(fromObject, [
    'functionResponse',
  ]);
  if (fromFunctionResponse != null) {
    common.setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
  }

  const fromInlineData = common.getValueByPath(fromObject, ['inlineData']);
  if (fromInlineData != null) {
    common.setValueByPath(toObject, ['inlineData'], fromInlineData);
  }

  const fromText = common.getValueByPath(fromObject, ['text']);
  if (fromText != null) {
    common.setValueByPath(toObject, ['text'], fromText);
  }

  return toObject;
}

export function partToVertex(
  apiClient: ApiClient,
  fromObject: types.Part,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromVideoMetadata = common.getValueByPath(fromObject, [
    'videoMetadata',
  ]);
  if (fromVideoMetadata != null) {
    common.setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
  }

  const fromThought = common.getValueByPath(fromObject, ['thought']);
  if (fromThought != null) {
    common.setValueByPath(toObject, ['thought'], fromThought);
  }

  const fromCodeExecutionResult = common.getValueByPath(fromObject, [
    'codeExecutionResult',
  ]);
  if (fromCodeExecutionResult != null) {
    common.setValueByPath(
      toObject,
      ['codeExecutionResult'],
      fromCodeExecutionResult,
    );
  }

  const fromExecutableCode = common.getValueByPath(fromObject, [
    'executableCode',
  ]);
  if (fromExecutableCode != null) {
    common.setValueByPath(toObject, ['executableCode'], fromExecutableCode);
  }

  const fromFileData = common.getValueByPath(fromObject, ['fileData']);
  if (fromFileData != null) {
    common.setValueByPath(toObject, ['fileData'], fromFileData);
  }

  const fromFunctionCall = common.getValueByPath(fromObject, ['functionCall']);
  if (fromFunctionCall != null) {
    common.setValueByPath(toObject, ['functionCall'], fromFunctionCall);
  }

  const fromFunctionResponse = common.getValueByPath(fromObject, [
    'functionResponse',
  ]);
  if (fromFunctionResponse != null) {
    common.setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
  }

  const fromInlineData = common.getValueByPath(fromObject, ['inlineData']);
  if (fromInlineData != null) {
    common.setValueByPath(toObject, ['inlineData'], fromInlineData);
  }

  const fromText = common.getValueByPath(fromObject, ['text']);
  if (fromText != null) {
    common.setValueByPath(toObject, ['text'], fromText);
  }

  return toObject;
}

export function contentToMldev(
  apiClient: ApiClient,
  fromObject: types.Content,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromParts = common.getValueByPath(fromObject, ['parts']);
  if (fromParts != null) {
    if (Array.isArray(fromParts)) {
      common.setValueByPath(
        toObject,
        ['parts'],
        fromParts.map((item) => {
          return partToMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['parts'], fromParts);
    }
  }

  const fromRole = common.getValueByPath(fromObject, ['role']);
  if (fromRole != null) {
    common.setValueByPath(toObject, ['role'], fromRole);
  }

  return toObject;
}

export function contentToVertex(
  apiClient: ApiClient,
  fromObject: types.Content,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromParts = common.getValueByPath(fromObject, ['parts']);
  if (fromParts != null) {
    if (Array.isArray(fromParts)) {
      common.setValueByPath(
        toObject,
        ['parts'],
        fromParts.map((item) => {
          return partToVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['parts'], fromParts);
    }
  }

  const fromRole = common.getValueByPath(fromObject, ['role']);
  if (fromRole != null) {
    common.setValueByPath(toObject, ['role'], fromRole);
  }

  return toObject;
}

export function schemaToMldev(
  apiClient: ApiClient,
  fromObject: types.Schema,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  if (common.getValueByPath(fromObject, ['example']) !== undefined) {
    throw new Error('example parameter is not supported in Gemini API.');
  }

  if (common.getValueByPath(fromObject, ['pattern']) !== undefined) {
    throw new Error('pattern parameter is not supported in Gemini API.');
  }

  if (common.getValueByPath(fromObject, ['default']) !== undefined) {
    throw new Error('default parameter is not supported in Gemini API.');
  }

  if (common.getValueByPath(fromObject, ['maxLength']) !== undefined) {
    throw new Error('maxLength parameter is not supported in Gemini API.');
  }

  if (common.getValueByPath(fromObject, ['minLength']) !== undefined) {
    throw new Error('minLength parameter is not supported in Gemini API.');
  }

  if (common.getValueByPath(fromObject, ['minProperties']) !== undefined) {
    throw new Error('minProperties parameter is not supported in Gemini API.');
  }

  if (common.getValueByPath(fromObject, ['maxProperties']) !== undefined) {
    throw new Error('maxProperties parameter is not supported in Gemini API.');
  }

  const fromAnyOf = common.getValueByPath(fromObject, ['anyOf']);
  if (fromAnyOf != null) {
    common.setValueByPath(toObject, ['anyOf'], fromAnyOf);
  }

  const fromDescription = common.getValueByPath(fromObject, ['description']);
  if (fromDescription != null) {
    common.setValueByPath(toObject, ['description'], fromDescription);
  }

  const fromEnum = common.getValueByPath(fromObject, ['enum']);
  if (fromEnum != null) {
    common.setValueByPath(toObject, ['enum'], fromEnum);
  }

  const fromFormat = common.getValueByPath(fromObject, ['format']);
  if (fromFormat != null) {
    common.setValueByPath(toObject, ['format'], fromFormat);
  }

  const fromItems = common.getValueByPath(fromObject, ['items']);
  if (fromItems != null) {
    common.setValueByPath(toObject, ['items'], fromItems);
  }

  const fromMaxItems = common.getValueByPath(fromObject, ['maxItems']);
  if (fromMaxItems != null) {
    common.setValueByPath(toObject, ['maxItems'], fromMaxItems);
  }

  const fromMaximum = common.getValueByPath(fromObject, ['maximum']);
  if (fromMaximum != null) {
    common.setValueByPath(toObject, ['maximum'], fromMaximum);
  }

  const fromMinItems = common.getValueByPath(fromObject, ['minItems']);
  if (fromMinItems != null) {
    common.setValueByPath(toObject, ['minItems'], fromMinItems);
  }

  const fromMinimum = common.getValueByPath(fromObject, ['minimum']);
  if (fromMinimum != null) {
    common.setValueByPath(toObject, ['minimum'], fromMinimum);
  }

  const fromNullable = common.getValueByPath(fromObject, ['nullable']);
  if (fromNullable != null) {
    common.setValueByPath(toObject, ['nullable'], fromNullable);
  }

  const fromProperties = common.getValueByPath(fromObject, ['properties']);
  if (fromProperties != null) {
    common.setValueByPath(toObject, ['properties'], fromProperties);
  }

  const fromPropertyOrdering = common.getValueByPath(fromObject, [
    'propertyOrdering',
  ]);
  if (fromPropertyOrdering != null) {
    common.setValueByPath(toObject, ['propertyOrdering'], fromPropertyOrdering);
  }

  const fromRequired = common.getValueByPath(fromObject, ['required']);
  if (fromRequired != null) {
    common.setValueByPath(toObject, ['required'], fromRequired);
  }

  const fromTitle = common.getValueByPath(fromObject, ['title']);
  if (fromTitle != null) {
    common.setValueByPath(toObject, ['title'], fromTitle);
  }

  const fromType = common.getValueByPath(fromObject, ['type']);
  if (fromType != null) {
    common.setValueByPath(toObject, ['type'], fromType);
  }

  return toObject;
}

export function schemaToVertex(
  apiClient: ApiClient,
  fromObject: types.Schema,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromExample = common.getValueByPath(fromObject, ['example']);
  if (fromExample != null) {
    common.setValueByPath(toObject, ['example'], fromExample);
  }

  const fromPattern = common.getValueByPath(fromObject, ['pattern']);
  if (fromPattern != null) {
    common.setValueByPath(toObject, ['pattern'], fromPattern);
  }

  const fromDefault = common.getValueByPath(fromObject, ['default']);
  if (fromDefault != null) {
    common.setValueByPath(toObject, ['default'], fromDefault);
  }

  const fromMaxLength = common.getValueByPath(fromObject, ['maxLength']);
  if (fromMaxLength != null) {
    common.setValueByPath(toObject, ['maxLength'], fromMaxLength);
  }

  const fromMinLength = common.getValueByPath(fromObject, ['minLength']);
  if (fromMinLength != null) {
    common.setValueByPath(toObject, ['minLength'], fromMinLength);
  }

  const fromMinProperties = common.getValueByPath(fromObject, [
    'minProperties',
  ]);
  if (fromMinProperties != null) {
    common.setValueByPath(toObject, ['minProperties'], fromMinProperties);
  }

  const fromMaxProperties = common.getValueByPath(fromObject, [
    'maxProperties',
  ]);
  if (fromMaxProperties != null) {
    common.setValueByPath(toObject, ['maxProperties'], fromMaxProperties);
  }

  const fromAnyOf = common.getValueByPath(fromObject, ['anyOf']);
  if (fromAnyOf != null) {
    common.setValueByPath(toObject, ['anyOf'], fromAnyOf);
  }

  const fromDescription = common.getValueByPath(fromObject, ['description']);
  if (fromDescription != null) {
    common.setValueByPath(toObject, ['description'], fromDescription);
  }

  const fromEnum = common.getValueByPath(fromObject, ['enum']);
  if (fromEnum != null) {
    common.setValueByPath(toObject, ['enum'], fromEnum);
  }

  const fromFormat = common.getValueByPath(fromObject, ['format']);
  if (fromFormat != null) {
    common.setValueByPath(toObject, ['format'], fromFormat);
  }

  const fromItems = common.getValueByPath(fromObject, ['items']);
  if (fromItems != null) {
    common.setValueByPath(toObject, ['items'], fromItems);
  }

  const fromMaxItems = common.getValueByPath(fromObject, ['maxItems']);
  if (fromMaxItems != null) {
    common.setValueByPath(toObject, ['maxItems'], fromMaxItems);
  }

  const fromMaximum = common.getValueByPath(fromObject, ['maximum']);
  if (fromMaximum != null) {
    common.setValueByPath(toObject, ['maximum'], fromMaximum);
  }

  const fromMinItems = common.getValueByPath(fromObject, ['minItems']);
  if (fromMinItems != null) {
    common.setValueByPath(toObject, ['minItems'], fromMinItems);
  }

  const fromMinimum = common.getValueByPath(fromObject, ['minimum']);
  if (fromMinimum != null) {
    common.setValueByPath(toObject, ['minimum'], fromMinimum);
  }

  const fromNullable = common.getValueByPath(fromObject, ['nullable']);
  if (fromNullable != null) {
    common.setValueByPath(toObject, ['nullable'], fromNullable);
  }

  const fromProperties = common.getValueByPath(fromObject, ['properties']);
  if (fromProperties != null) {
    common.setValueByPath(toObject, ['properties'], fromProperties);
  }

  const fromPropertyOrdering = common.getValueByPath(fromObject, [
    'propertyOrdering',
  ]);
  if (fromPropertyOrdering != null) {
    common.setValueByPath(toObject, ['propertyOrdering'], fromPropertyOrdering);
  }

  const fromRequired = common.getValueByPath(fromObject, ['required']);
  if (fromRequired != null) {
    common.setValueByPath(toObject, ['required'], fromRequired);
  }

  const fromTitle = common.getValueByPath(fromObject, ['title']);
  if (fromTitle != null) {
    common.setValueByPath(toObject, ['title'], fromTitle);
  }

  const fromType = common.getValueByPath(fromObject, ['type']);
  if (fromType != null) {
    common.setValueByPath(toObject, ['type'], fromType);
  }

  return toObject;
}

export function functionDeclarationToMldev(
  apiClient: ApiClient,
  fromObject: types.FunctionDeclaration,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  if (common.getValueByPath(fromObject, ['response']) !== undefined) {
    throw new Error('response parameter is not supported in Gemini API.');
  }

  const fromDescription = common.getValueByPath(fromObject, ['description']);
  if (fromDescription != null) {
    common.setValueByPath(toObject, ['description'], fromDescription);
  }

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  const fromParameters = common.getValueByPath(fromObject, ['parameters']);
  if (fromParameters != null) {
    common.setValueByPath(toObject, ['parameters'], fromParameters);
  }

  return toObject;
}

export function functionDeclarationToVertex(
  apiClient: ApiClient,
  fromObject: types.FunctionDeclaration,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromResponse = common.getValueByPath(fromObject, ['response']);
  if (fromResponse != null) {
    common.setValueByPath(
      toObject,
      ['response'],
      schemaToVertex(apiClient, fromResponse),
    );
  }

  const fromDescription = common.getValueByPath(fromObject, ['description']);
  if (fromDescription != null) {
    common.setValueByPath(toObject, ['description'], fromDescription);
  }

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  const fromParameters = common.getValueByPath(fromObject, ['parameters']);
  if (fromParameters != null) {
    common.setValueByPath(toObject, ['parameters'], fromParameters);
  }

  return toObject;
}

export function googleSearchToMldev(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function googleSearchToVertex(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function dynamicRetrievalConfigToMldev(
  apiClient: ApiClient,
  fromObject: types.DynamicRetrievalConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromMode = common.getValueByPath(fromObject, ['mode']);
  if (fromMode != null) {
    common.setValueByPath(toObject, ['mode'], fromMode);
  }

  const fromDynamicThreshold = common.getValueByPath(fromObject, [
    'dynamicThreshold',
  ]);
  if (fromDynamicThreshold != null) {
    common.setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
  }

  return toObject;
}

export function dynamicRetrievalConfigToVertex(
  apiClient: ApiClient,
  fromObject: types.DynamicRetrievalConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromMode = common.getValueByPath(fromObject, ['mode']);
  if (fromMode != null) {
    common.setValueByPath(toObject, ['mode'], fromMode);
  }

  const fromDynamicThreshold = common.getValueByPath(fromObject, [
    'dynamicThreshold',
  ]);
  if (fromDynamicThreshold != null) {
    common.setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
  }

  return toObject;
}

export function googleSearchRetrievalToMldev(
  apiClient: ApiClient,
  fromObject: types.GoogleSearchRetrieval,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromDynamicRetrievalConfig = common.getValueByPath(fromObject, [
    'dynamicRetrievalConfig',
  ]);
  if (fromDynamicRetrievalConfig != null) {
    common.setValueByPath(
      toObject,
      ['dynamicRetrievalConfig'],
      dynamicRetrievalConfigToMldev(apiClient, fromDynamicRetrievalConfig),
    );
  }

  return toObject;
}

export function googleSearchRetrievalToVertex(
  apiClient: ApiClient,
  fromObject: types.GoogleSearchRetrieval,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromDynamicRetrievalConfig = common.getValueByPath(fromObject, [
    'dynamicRetrievalConfig',
  ]);
  if (fromDynamicRetrievalConfig != null) {
    common.setValueByPath(
      toObject,
      ['dynamicRetrievalConfig'],
      dynamicRetrievalConfigToVertex(apiClient, fromDynamicRetrievalConfig),
    );
  }

  return toObject;
}

export function toolToMldev(
  apiClient: ApiClient,
  fromObject: types.Tool,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromFunctionDeclarations = common.getValueByPath(fromObject, [
    'functionDeclarations',
  ]);
  if (fromFunctionDeclarations != null) {
    if (Array.isArray(fromFunctionDeclarations)) {
      common.setValueByPath(
        toObject,
        ['functionDeclarations'],
        fromFunctionDeclarations.map((item) => {
          return functionDeclarationToMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['functionDeclarations'],
        fromFunctionDeclarations,
      );
    }
  }

  if (common.getValueByPath(fromObject, ['retrieval']) !== undefined) {
    throw new Error('retrieval parameter is not supported in Gemini API.');
  }

  const fromGoogleSearch = common.getValueByPath(fromObject, ['googleSearch']);
  if (fromGoogleSearch != null) {
    common.setValueByPath(toObject, ['googleSearch'], googleSearchToMldev());
  }

  const fromGoogleSearchRetrieval = common.getValueByPath(fromObject, [
    'googleSearchRetrieval',
  ]);
  if (fromGoogleSearchRetrieval != null) {
    common.setValueByPath(
      toObject,
      ['googleSearchRetrieval'],
      googleSearchRetrievalToMldev(apiClient, fromGoogleSearchRetrieval),
    );
  }

  const fromCodeExecution = common.getValueByPath(fromObject, [
    'codeExecution',
  ]);
  if (fromCodeExecution != null) {
    common.setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
  }

  return toObject;
}

export function toolToVertex(
  apiClient: ApiClient,
  fromObject: types.Tool,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromFunctionDeclarations = common.getValueByPath(fromObject, [
    'functionDeclarations',
  ]);
  if (fromFunctionDeclarations != null) {
    if (Array.isArray(fromFunctionDeclarations)) {
      common.setValueByPath(
        toObject,
        ['functionDeclarations'],
        fromFunctionDeclarations.map((item) => {
          return functionDeclarationToVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['functionDeclarations'],
        fromFunctionDeclarations,
      );
    }
  }

  const fromRetrieval = common.getValueByPath(fromObject, ['retrieval']);
  if (fromRetrieval != null) {
    common.setValueByPath(toObject, ['retrieval'], fromRetrieval);
  }

  const fromGoogleSearch = common.getValueByPath(fromObject, ['googleSearch']);
  if (fromGoogleSearch != null) {
    common.setValueByPath(toObject, ['googleSearch'], googleSearchToVertex());
  }

  const fromGoogleSearchRetrieval = common.getValueByPath(fromObject, [
    'googleSearchRetrieval',
  ]);
  if (fromGoogleSearchRetrieval != null) {
    common.setValueByPath(
      toObject,
      ['googleSearchRetrieval'],
      googleSearchRetrievalToVertex(apiClient, fromGoogleSearchRetrieval),
    );
  }

  const fromCodeExecution = common.getValueByPath(fromObject, [
    'codeExecution',
  ]);
  if (fromCodeExecution != null) {
    common.setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
  }

  return toObject;
}

export function sessionResumptionConfigToMldev(
  apiClient: ApiClient,
  fromObject: types.SessionResumptionConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromHandle = common.getValueByPath(fromObject, ['handle']);
  if (fromHandle != null) {
    common.setValueByPath(toObject, ['handle'], fromHandle);
  }

  if (common.getValueByPath(fromObject, ['transparent']) !== undefined) {
    throw new Error('transparent parameter is not supported in Gemini API.');
  }

  return toObject;
}

export function sessionResumptionConfigToVertex(
  apiClient: ApiClient,
  fromObject: types.SessionResumptionConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromHandle = common.getValueByPath(fromObject, ['handle']);
  if (fromHandle != null) {
    common.setValueByPath(toObject, ['handle'], fromHandle);
  }

  const fromTransparent = common.getValueByPath(fromObject, ['transparent']);
  if (fromTransparent != null) {
    common.setValueByPath(toObject, ['transparent'], fromTransparent);
  }

  return toObject;
}

export function audioTranscriptionConfigToMldev(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function audioTranscriptionConfigToVertex(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function automaticActivityDetectionToMldev(
  apiClient: ApiClient,
  fromObject: types.AutomaticActivityDetection,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromDisabled = common.getValueByPath(fromObject, ['disabled']);
  if (fromDisabled != null) {
    common.setValueByPath(toObject, ['disabled'], fromDisabled);
  }

  const fromStartOfSpeechSensitivity = common.getValueByPath(fromObject, [
    'startOfSpeechSensitivity',
  ]);
  if (fromStartOfSpeechSensitivity != null) {
    common.setValueByPath(
      toObject,
      ['startOfSpeechSensitivity'],
      fromStartOfSpeechSensitivity,
    );
  }

  const fromEndOfSpeechSensitivity = common.getValueByPath(fromObject, [
    'endOfSpeechSensitivity',
  ]);
  if (fromEndOfSpeechSensitivity != null) {
    common.setValueByPath(
      toObject,
      ['endOfSpeechSensitivity'],
      fromEndOfSpeechSensitivity,
    );
  }

  const fromPrefixPaddingMs = common.getValueByPath(fromObject, [
    'prefixPaddingMs',
  ]);
  if (fromPrefixPaddingMs != null) {
    common.setValueByPath(toObject, ['prefixPaddingMs'], fromPrefixPaddingMs);
  }

  const fromSilenceDurationMs = common.getValueByPath(fromObject, [
    'silenceDurationMs',
  ]);
  if (fromSilenceDurationMs != null) {
    common.setValueByPath(
      toObject,
      ['silenceDurationMs'],
      fromSilenceDurationMs,
    );
  }

  return toObject;
}

export function automaticActivityDetectionToVertex(
  apiClient: ApiClient,
  fromObject: types.AutomaticActivityDetection,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromDisabled = common.getValueByPath(fromObject, ['disabled']);
  if (fromDisabled != null) {
    common.setValueByPath(toObject, ['disabled'], fromDisabled);
  }

  const fromStartOfSpeechSensitivity = common.getValueByPath(fromObject, [
    'startOfSpeechSensitivity',
  ]);
  if (fromStartOfSpeechSensitivity != null) {
    common.setValueByPath(
      toObject,
      ['startOfSpeechSensitivity'],
      fromStartOfSpeechSensitivity,
    );
  }

  const fromEndOfSpeechSensitivity = common.getValueByPath(fromObject, [
    'endOfSpeechSensitivity',
  ]);
  if (fromEndOfSpeechSensitivity != null) {
    common.setValueByPath(
      toObject,
      ['endOfSpeechSensitivity'],
      fromEndOfSpeechSensitivity,
    );
  }

  const fromPrefixPaddingMs = common.getValueByPath(fromObject, [
    'prefixPaddingMs',
  ]);
  if (fromPrefixPaddingMs != null) {
    common.setValueByPath(toObject, ['prefixPaddingMs'], fromPrefixPaddingMs);
  }

  const fromSilenceDurationMs = common.getValueByPath(fromObject, [
    'silenceDurationMs',
  ]);
  if (fromSilenceDurationMs != null) {
    common.setValueByPath(
      toObject,
      ['silenceDurationMs'],
      fromSilenceDurationMs,
    );
  }

  return toObject;
}

export function realtimeInputConfigToMldev(
  apiClient: ApiClient,
  fromObject: types.RealtimeInputConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromAutomaticActivityDetection = common.getValueByPath(fromObject, [
    'automaticActivityDetection',
  ]);
  if (fromAutomaticActivityDetection != null) {
    common.setValueByPath(
      toObject,
      ['automaticActivityDetection'],
      automaticActivityDetectionToMldev(
        apiClient,
        fromAutomaticActivityDetection,
      ),
    );
  }

  const fromActivityHandling = common.getValueByPath(fromObject, [
    'activityHandling',
  ]);
  if (fromActivityHandling != null) {
    common.setValueByPath(toObject, ['activityHandling'], fromActivityHandling);
  }

  const fromTurnCoverage = common.getValueByPath(fromObject, ['turnCoverage']);
  if (fromTurnCoverage != null) {
    common.setValueByPath(toObject, ['turnCoverage'], fromTurnCoverage);
  }

  return toObject;
}

export function realtimeInputConfigToVertex(
  apiClient: ApiClient,
  fromObject: types.RealtimeInputConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromAutomaticActivityDetection = common.getValueByPath(fromObject, [
    'automaticActivityDetection',
  ]);
  if (fromAutomaticActivityDetection != null) {
    common.setValueByPath(
      toObject,
      ['automaticActivityDetection'],
      automaticActivityDetectionToVertex(
        apiClient,
        fromAutomaticActivityDetection,
      ),
    );
  }

  const fromActivityHandling = common.getValueByPath(fromObject, [
    'activityHandling',
  ]);
  if (fromActivityHandling != null) {
    common.setValueByPath(toObject, ['activityHandling'], fromActivityHandling);
  }

  const fromTurnCoverage = common.getValueByPath(fromObject, ['turnCoverage']);
  if (fromTurnCoverage != null) {
    common.setValueByPath(toObject, ['turnCoverage'], fromTurnCoverage);
  }

  return toObject;
}

export function slidingWindowToMldev(
  apiClient: ApiClient,
  fromObject: types.SlidingWindow,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTargetTokens = common.getValueByPath(fromObject, ['targetTokens']);
  if (fromTargetTokens != null) {
    common.setValueByPath(toObject, ['targetTokens'], fromTargetTokens);
  }

  return toObject;
}

export function slidingWindowToVertex(
  apiClient: ApiClient,
  fromObject: types.SlidingWindow,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTargetTokens = common.getValueByPath(fromObject, ['targetTokens']);
  if (fromTargetTokens != null) {
    common.setValueByPath(toObject, ['targetTokens'], fromTargetTokens);
  }

  return toObject;
}

export function contextWindowCompressionConfigToMldev(
  apiClient: ApiClient,
  fromObject: types.ContextWindowCompressionConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTriggerTokens = common.getValueByPath(fromObject, [
    'triggerTokens',
  ]);
  if (fromTriggerTokens != null) {
    common.setValueByPath(toObject, ['triggerTokens'], fromTriggerTokens);
  }

  const fromSlidingWindow = common.getValueByPath(fromObject, [
    'slidingWindow',
  ]);
  if (fromSlidingWindow != null) {
    common.setValueByPath(
      toObject,
      ['slidingWindow'],
      slidingWindowToMldev(apiClient, fromSlidingWindow),
    );
  }

  return toObject;
}

export function contextWindowCompressionConfigToVertex(
  apiClient: ApiClient,
  fromObject: types.ContextWindowCompressionConfig,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTriggerTokens = common.getValueByPath(fromObject, [
    'triggerTokens',
  ]);
  if (fromTriggerTokens != null) {
    common.setValueByPath(toObject, ['triggerTokens'], fromTriggerTokens);
  }

  const fromSlidingWindow = common.getValueByPath(fromObject, [
    'slidingWindow',
  ]);
  if (fromSlidingWindow != null) {
    common.setValueByPath(
      toObject,
      ['slidingWindow'],
      slidingWindowToVertex(apiClient, fromSlidingWindow),
    );
  }

  return toObject;
}

export function liveConnectConfigToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveConnectConfig,
  parentObject: Record<string, unknown>,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromGenerationConfig = common.getValueByPath(fromObject, [
    'generationConfig',
  ]);
  if (parentObject !== undefined && fromGenerationConfig != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig'],
      fromGenerationConfig,
    );
  }

  const fromResponseModalities = common.getValueByPath(fromObject, [
    'responseModalities',
  ]);
  if (parentObject !== undefined && fromResponseModalities != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig', 'responseModalities'],
      fromResponseModalities,
    );
  }

  const fromSpeechConfig = common.getValueByPath(fromObject, ['speechConfig']);
  if (parentObject !== undefined && fromSpeechConfig != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig', 'speechConfig'],
      fromSpeechConfig,
    );
  }

  const fromSystemInstruction = common.getValueByPath(fromObject, [
    'systemInstruction',
  ]);
  if (parentObject !== undefined && fromSystemInstruction != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'systemInstruction'],
      contentToMldev(apiClient, t.tContent(apiClient, fromSystemInstruction)),
    );
  }

  const fromTools = common.getValueByPath(fromObject, ['tools']);
  if (parentObject !== undefined && fromTools != null) {
    if (Array.isArray(fromTools)) {
      common.setValueByPath(
        parentObject,
        ['setup', 'tools'],
        t.tTools(
          apiClient,
          t.tTools(apiClient, fromTools).map((item) => {
            return toolToMldev(apiClient, t.tTool(apiClient, item));
          }),
        ),
      );
    } else {
      common.setValueByPath(
        parentObject,
        ['setup', 'tools'],
        t.tTools(apiClient, fromTools),
      );
    }
  }

  const fromSessionResumption = common.getValueByPath(fromObject, [
    'sessionResumption',
  ]);
  if (parentObject !== undefined && fromSessionResumption != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'sessionResumption'],
      sessionResumptionConfigToMldev(apiClient, fromSessionResumption),
    );
  }

  const fromRealtimeInputConfig = common.getValueByPath(fromObject, [
    'realtimeInputConfig',
  ]);
  if (parentObject !== undefined && fromRealtimeInputConfig != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'realtimeInputConfig'],
      realtimeInputConfigToMldev(apiClient, fromRealtimeInputConfig),
    );
  }

  const fromContextWindowCompression = common.getValueByPath(fromObject, [
    'contextWindowCompression',
  ]);
  if (parentObject !== undefined && fromContextWindowCompression != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'contextWindowCompression'],
      contextWindowCompressionConfigToMldev(
        apiClient,
        fromContextWindowCompression,
      ),
    );
  }

  return toObject;
}

export function liveConnectConfigToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveConnectConfig,
  parentObject: Record<string, unknown>,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromGenerationConfig = common.getValueByPath(fromObject, [
    'generationConfig',
  ]);
  if (parentObject !== undefined && fromGenerationConfig != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig'],
      fromGenerationConfig,
    );
  }

  const fromResponseModalities = common.getValueByPath(fromObject, [
    'responseModalities',
  ]);
  if (parentObject !== undefined && fromResponseModalities != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig', 'responseModalities'],
      fromResponseModalities,
    );
  } else {
    // Set default to AUDIO to align with MLDev API.
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig', 'responseModalities'],
      ['AUDIO'],
    );
  }

  const fromSpeechConfig = common.getValueByPath(fromObject, ['speechConfig']);
  if (parentObject !== undefined && fromSpeechConfig != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'generationConfig', 'speechConfig'],
      fromSpeechConfig,
    );
  }

  const fromSystemInstruction = common.getValueByPath(fromObject, [
    'systemInstruction',
  ]);
  if (parentObject !== undefined && fromSystemInstruction != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'systemInstruction'],
      contentToVertex(apiClient, t.tContent(apiClient, fromSystemInstruction)),
    );
  }

  const fromTools = common.getValueByPath(fromObject, ['tools']);
  if (parentObject !== undefined && fromTools != null) {
    if (Array.isArray(fromTools)) {
      common.setValueByPath(
        parentObject,
        ['setup', 'tools'],
        t.tTools(
          apiClient,
          t.tTools(apiClient, fromTools).map((item) => {
            return toolToVertex(apiClient, t.tTool(apiClient, item));
          }),
        ),
      );
    } else {
      common.setValueByPath(
        parentObject,
        ['setup', 'tools'],
        t.tTools(apiClient, fromTools),
      );
    }
  }

  const fromSessionResumption = common.getValueByPath(fromObject, [
    'sessionResumption',
  ]);
  if (parentObject !== undefined && fromSessionResumption != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'sessionResumption'],
      sessionResumptionConfigToVertex(apiClient, fromSessionResumption),
    );
  }

  const fromRealtimeInputConfig = common.getValueByPath(fromObject, [
    'realtimeInputConfig',
  ]);
  if (parentObject !== undefined && fromRealtimeInputConfig != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'realtimeInputConfig'],
      realtimeInputConfigToVertex(apiClient, fromRealtimeInputConfig),
    );
  }

  const fromContextWindowCompression = common.getValueByPath(fromObject, [
    'contextWindowCompression',
  ]);
  if (parentObject !== undefined && fromContextWindowCompression != null) {
    common.setValueByPath(
      parentObject,
      ['setup', 'contextWindowCompression'],
      contextWindowCompressionConfigToVertex(
        apiClient,
        fromContextWindowCompression,
      ),
    );
  }

  return toObject;
}

export function liveConnectParametersToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveConnectParameters,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModel = common.getValueByPath(fromObject, ['model']);
  if (fromModel != null) {
    common.setValueByPath(
      toObject,
      ['setup', 'model'],
      t.tModel(apiClient, fromModel),
    );
  }

  const fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig != null) {
    common.setValueByPath(
      toObject,
      ['config'],
      liveConnectConfigToMldev(apiClient, fromConfig, toObject),
    );
  }

  delete toObject['config'];

  return toObject;
}

export function liveConnectParametersToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveConnectParameters,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModel = common.getValueByPath(fromObject, ['model']);
  if (fromModel != null) {
    common.setValueByPath(
      toObject,
      ['setup', 'model'],
      t.tModel(apiClient, fromModel),
    );
  }

  const fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig != null) {
    common.setValueByPath(
      toObject,
      ['config'],
      liveConnectConfigToVertex(apiClient, fromConfig, toObject),
    );
  }

  delete toObject['config'];

  return toObject;
}

export function liveClientSetupToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveClientSetup,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModel = common.getValueByPath(fromObject, ['model']);
  if (fromModel != null) {
    common.setValueByPath(toObject, ['model'], fromModel);
  }

  const fromGenerationConfig = common.getValueByPath(fromObject, [
    'generationConfig',
  ]);
  if (fromGenerationConfig != null) {
    common.setValueByPath(toObject, ['generationConfig'], fromGenerationConfig);
  }

  const fromSystemInstruction = common.getValueByPath(fromObject, [
    'systemInstruction',
  ]);
  if (fromSystemInstruction != null) {
    common.setValueByPath(
      toObject,
      ['systemInstruction'],
      contentToMldev(apiClient, t.tContent(apiClient, fromSystemInstruction)),
    );
  }

  const fromTools = common.getValueByPath(fromObject, ['tools']);
  if (fromTools != null) {
    if (Array.isArray(fromTools)) {
      common.setValueByPath(
        toObject,
        ['tools'],
        t.tTools(
          apiClient,
          t.tTools(apiClient, fromTools).map((item) => {
            return toolToMldev(apiClient, t.tTool(apiClient, item));
          }),
        ),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['tools'],
        t.tTools(apiClient, fromTools),
      );
    }
  }

  const fromRealtimeInputConfig = common.getValueByPath(fromObject, [
    'realtimeInputConfig',
  ]);
  if (fromRealtimeInputConfig != null) {
    common.setValueByPath(
      toObject,
      ['realtimeInputConfig'],
      realtimeInputConfigToMldev(apiClient, fromRealtimeInputConfig),
    );
  }

  const fromSessionResumption = common.getValueByPath(fromObject, [
    'sessionResumption',
  ]);
  if (fromSessionResumption != null) {
    common.setValueByPath(
      toObject,
      ['sessionResumption'],
      sessionResumptionConfigToMldev(apiClient, fromSessionResumption),
    );
  }

  const fromContextWindowCompression = common.getValueByPath(fromObject, [
    'contextWindowCompression',
  ]);
  if (fromContextWindowCompression != null) {
    common.setValueByPath(
      toObject,
      ['contextWindowCompression'],
      contextWindowCompressionConfigToMldev(
        apiClient,
        fromContextWindowCompression,
      ),
    );
  }

  return toObject;
}

export function liveClientSetupToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveClientSetup,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModel = common.getValueByPath(fromObject, ['model']);
  if (fromModel != null) {
    common.setValueByPath(toObject, ['model'], fromModel);
  }

  const fromGenerationConfig = common.getValueByPath(fromObject, [
    'generationConfig',
  ]);
  if (fromGenerationConfig != null) {
    common.setValueByPath(toObject, ['generationConfig'], fromGenerationConfig);
  }

  const fromSystemInstruction = common.getValueByPath(fromObject, [
    'systemInstruction',
  ]);
  if (fromSystemInstruction != null) {
    common.setValueByPath(
      toObject,
      ['systemInstruction'],
      contentToVertex(apiClient, t.tContent(apiClient, fromSystemInstruction)),
    );
  }

  const fromTools = common.getValueByPath(fromObject, ['tools']);
  if (fromTools != null) {
    if (Array.isArray(fromTools)) {
      common.setValueByPath(
        toObject,
        ['tools'],
        t.tTools(
          apiClient,
          t.tTools(apiClient, fromTools).map((item) => {
            return toolToVertex(apiClient, t.tTool(apiClient, item));
          }),
        ),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['tools'],
        t.tTools(apiClient, fromTools),
      );
    }
  }

  const fromRealtimeInputConfig = common.getValueByPath(fromObject, [
    'realtimeInputConfig',
  ]);
  if (fromRealtimeInputConfig != null) {
    common.setValueByPath(
      toObject,
      ['realtimeInputConfig'],
      realtimeInputConfigToVertex(apiClient, fromRealtimeInputConfig),
    );
  }

  const fromSessionResumption = common.getValueByPath(fromObject, [
    'sessionResumption',
  ]);
  if (fromSessionResumption != null) {
    common.setValueByPath(
      toObject,
      ['sessionResumption'],
      sessionResumptionConfigToVertex(apiClient, fromSessionResumption),
    );
  }

  const fromContextWindowCompression = common.getValueByPath(fromObject, [
    'contextWindowCompression',
  ]);
  if (fromContextWindowCompression != null) {
    common.setValueByPath(
      toObject,
      ['contextWindowCompression'],
      contextWindowCompressionConfigToVertex(
        apiClient,
        fromContextWindowCompression,
      ),
    );
  }

  return toObject;
}

export function liveClientContentToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveClientContent,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTurns = common.getValueByPath(fromObject, ['turns']);
  if (fromTurns != null) {
    if (Array.isArray(fromTurns)) {
      common.setValueByPath(
        toObject,
        ['turns'],
        fromTurns.map((item) => {
          return contentToMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['turns'], fromTurns);
    }
  }

  const fromTurnComplete = common.getValueByPath(fromObject, ['turnComplete']);
  if (fromTurnComplete != null) {
    common.setValueByPath(toObject, ['turnComplete'], fromTurnComplete);
  }

  return toObject;
}

export function liveClientContentToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveClientContent,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTurns = common.getValueByPath(fromObject, ['turns']);
  if (fromTurns != null) {
    if (Array.isArray(fromTurns)) {
      common.setValueByPath(
        toObject,
        ['turns'],
        fromTurns.map((item) => {
          return contentToVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['turns'], fromTurns);
    }
  }

  const fromTurnComplete = common.getValueByPath(fromObject, ['turnComplete']);
  if (fromTurnComplete != null) {
    common.setValueByPath(toObject, ['turnComplete'], fromTurnComplete);
  }

  return toObject;
}

export function activityStartToMldev(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function activityStartToVertex(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function activityEndToMldev(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function activityEndToVertex(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function liveClientRealtimeInputToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveClientRealtimeInput,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromMediaChunks = common.getValueByPath(fromObject, ['mediaChunks']);
  if (fromMediaChunks != null) {
    common.setValueByPath(toObject, ['mediaChunks'], fromMediaChunks);
  }

  const fromActivityStart = common.getValueByPath(fromObject, [
    'activityStart',
  ]);
  if (fromActivityStart != null) {
    common.setValueByPath(toObject, ['activityStart'], activityStartToMldev());
  }

  const fromActivityEnd = common.getValueByPath(fromObject, ['activityEnd']);
  if (fromActivityEnd != null) {
    common.setValueByPath(toObject, ['activityEnd'], activityEndToMldev());
  }

  return toObject;
}

export function liveClientRealtimeInputToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveClientRealtimeInput,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromMediaChunks = common.getValueByPath(fromObject, ['mediaChunks']);
  if (fromMediaChunks != null) {
    common.setValueByPath(toObject, ['mediaChunks'], fromMediaChunks);
  }

  const fromActivityStart = common.getValueByPath(fromObject, [
    'activityStart',
  ]);
  if (fromActivityStart != null) {
    common.setValueByPath(toObject, ['activityStart'], activityStartToVertex());
  }

  const fromActivityEnd = common.getValueByPath(fromObject, ['activityEnd']);
  if (fromActivityEnd != null) {
    common.setValueByPath(toObject, ['activityEnd'], activityEndToVertex());
  }

  return toObject;
}

export function functionResponseToMldev(
  apiClient: ApiClient,
  fromObject: types.FunctionResponse,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromId = common.getValueByPath(fromObject, ['id']);
  if (fromId != null) {
    common.setValueByPath(toObject, ['id'], fromId);
  }

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  const fromResponse = common.getValueByPath(fromObject, ['response']);
  if (fromResponse != null) {
    common.setValueByPath(toObject, ['response'], fromResponse);
  }

  return toObject;
}

export function functionResponseToVertex(
  apiClient: ApiClient,
  fromObject: types.FunctionResponse,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  if (common.getValueByPath(fromObject, ['id']) !== undefined) {
    throw new Error('id parameter is not supported in Vertex AI.');
  }

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  const fromResponse = common.getValueByPath(fromObject, ['response']);
  if (fromResponse != null) {
    common.setValueByPath(toObject, ['response'], fromResponse);
  }

  return toObject;
}

export function liveClientToolResponseToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveClientToolResponse,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromFunctionResponses = common.getValueByPath(fromObject, [
    'functionResponses',
  ]);
  if (fromFunctionResponses != null) {
    if (Array.isArray(fromFunctionResponses)) {
      common.setValueByPath(
        toObject,
        ['functionResponses'],
        fromFunctionResponses.map((item) => {
          return functionResponseToMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['functionResponses'],
        fromFunctionResponses,
      );
    }
  }

  return toObject;
}

export function liveClientToolResponseToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveClientToolResponse,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromFunctionResponses = common.getValueByPath(fromObject, [
    'functionResponses',
  ]);
  if (fromFunctionResponses != null) {
    if (Array.isArray(fromFunctionResponses)) {
      common.setValueByPath(
        toObject,
        ['functionResponses'],
        fromFunctionResponses.map((item) => {
          return functionResponseToVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['functionResponses'],
        fromFunctionResponses,
      );
    }
  }

  return toObject;
}

export function liveClientMessageToMldev(
  apiClient: ApiClient,
  fromObject: types.LiveClientMessage,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromSetup = common.getValueByPath(fromObject, ['setup']);
  if (fromSetup != null) {
    common.setValueByPath(
      toObject,
      ['setup'],
      liveClientSetupToMldev(apiClient, fromSetup),
    );
  }

  const fromClientContent = common.getValueByPath(fromObject, [
    'clientContent',
  ]);
  if (fromClientContent != null) {
    common.setValueByPath(
      toObject,
      ['clientContent'],
      liveClientContentToMldev(apiClient, fromClientContent),
    );
  }

  const fromRealtimeInput = common.getValueByPath(fromObject, [
    'realtimeInput',
  ]);
  if (fromRealtimeInput != null) {
    common.setValueByPath(
      toObject,
      ['realtimeInput'],
      liveClientRealtimeInputToMldev(apiClient, fromRealtimeInput),
    );
  }

  const fromToolResponse = common.getValueByPath(fromObject, ['toolResponse']);
  if (fromToolResponse != null) {
    common.setValueByPath(
      toObject,
      ['toolResponse'],
      liveClientToolResponseToMldev(apiClient, fromToolResponse),
    );
  }

  return toObject;
}

export function liveClientMessageToVertex(
  apiClient: ApiClient,
  fromObject: types.LiveClientMessage,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromSetup = common.getValueByPath(fromObject, ['setup']);
  if (fromSetup != null) {
    common.setValueByPath(
      toObject,
      ['setup'],
      liveClientSetupToVertex(apiClient, fromSetup),
    );
  }

  const fromClientContent = common.getValueByPath(fromObject, [
    'clientContent',
  ]);
  if (fromClientContent != null) {
    common.setValueByPath(
      toObject,
      ['clientContent'],
      liveClientContentToVertex(apiClient, fromClientContent),
    );
  }

  const fromRealtimeInput = common.getValueByPath(fromObject, [
    'realtimeInput',
  ]);
  if (fromRealtimeInput != null) {
    common.setValueByPath(
      toObject,
      ['realtimeInput'],
      liveClientRealtimeInputToVertex(apiClient, fromRealtimeInput),
    );
  }

  const fromToolResponse = common.getValueByPath(fromObject, ['toolResponse']);
  if (fromToolResponse != null) {
    common.setValueByPath(
      toObject,
      ['toolResponse'],
      liveClientToolResponseToVertex(apiClient, fromToolResponse),
    );
  }

  return toObject;
}

export function liveServerSetupCompleteFromMldev(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function liveServerSetupCompleteFromVertex(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function partFromMldev(
  apiClient: ApiClient,
  fromObject: types.Part,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromThought = common.getValueByPath(fromObject, ['thought']);
  if (fromThought != null) {
    common.setValueByPath(toObject, ['thought'], fromThought);
  }

  const fromCodeExecutionResult = common.getValueByPath(fromObject, [
    'codeExecutionResult',
  ]);
  if (fromCodeExecutionResult != null) {
    common.setValueByPath(
      toObject,
      ['codeExecutionResult'],
      fromCodeExecutionResult,
    );
  }

  const fromExecutableCode = common.getValueByPath(fromObject, [
    'executableCode',
  ]);
  if (fromExecutableCode != null) {
    common.setValueByPath(toObject, ['executableCode'], fromExecutableCode);
  }

  const fromFileData = common.getValueByPath(fromObject, ['fileData']);
  if (fromFileData != null) {
    common.setValueByPath(toObject, ['fileData'], fromFileData);
  }

  const fromFunctionCall = common.getValueByPath(fromObject, ['functionCall']);
  if (fromFunctionCall != null) {
    common.setValueByPath(toObject, ['functionCall'], fromFunctionCall);
  }

  const fromFunctionResponse = common.getValueByPath(fromObject, [
    'functionResponse',
  ]);
  if (fromFunctionResponse != null) {
    common.setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
  }

  const fromInlineData = common.getValueByPath(fromObject, ['inlineData']);
  if (fromInlineData != null) {
    common.setValueByPath(toObject, ['inlineData'], fromInlineData);
  }

  const fromText = common.getValueByPath(fromObject, ['text']);
  if (fromText != null) {
    common.setValueByPath(toObject, ['text'], fromText);
  }

  return toObject;
}

export function partFromVertex(
  apiClient: ApiClient,
  fromObject: types.Part,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromVideoMetadata = common.getValueByPath(fromObject, [
    'videoMetadata',
  ]);
  if (fromVideoMetadata != null) {
    common.setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
  }

  const fromThought = common.getValueByPath(fromObject, ['thought']);
  if (fromThought != null) {
    common.setValueByPath(toObject, ['thought'], fromThought);
  }

  const fromCodeExecutionResult = common.getValueByPath(fromObject, [
    'codeExecutionResult',
  ]);
  if (fromCodeExecutionResult != null) {
    common.setValueByPath(
      toObject,
      ['codeExecutionResult'],
      fromCodeExecutionResult,
    );
  }

  const fromExecutableCode = common.getValueByPath(fromObject, [
    'executableCode',
  ]);
  if (fromExecutableCode != null) {
    common.setValueByPath(toObject, ['executableCode'], fromExecutableCode);
  }

  const fromFileData = common.getValueByPath(fromObject, ['fileData']);
  if (fromFileData != null) {
    common.setValueByPath(toObject, ['fileData'], fromFileData);
  }

  const fromFunctionCall = common.getValueByPath(fromObject, ['functionCall']);
  if (fromFunctionCall != null) {
    common.setValueByPath(toObject, ['functionCall'], fromFunctionCall);
  }

  const fromFunctionResponse = common.getValueByPath(fromObject, [
    'functionResponse',
  ]);
  if (fromFunctionResponse != null) {
    common.setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
  }

  const fromInlineData = common.getValueByPath(fromObject, ['inlineData']);
  if (fromInlineData != null) {
    common.setValueByPath(toObject, ['inlineData'], fromInlineData);
  }

  const fromText = common.getValueByPath(fromObject, ['text']);
  if (fromText != null) {
    common.setValueByPath(toObject, ['text'], fromText);
  }

  return toObject;
}

export function contentFromMldev(
  apiClient: ApiClient,
  fromObject: types.Content,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromParts = common.getValueByPath(fromObject, ['parts']);
  if (fromParts != null) {
    if (Array.isArray(fromParts)) {
      common.setValueByPath(
        toObject,
        ['parts'],
        fromParts.map((item) => {
          return partFromMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['parts'], fromParts);
    }
  }

  const fromRole = common.getValueByPath(fromObject, ['role']);
  if (fromRole != null) {
    common.setValueByPath(toObject, ['role'], fromRole);
  }

  return toObject;
}

export function contentFromVertex(
  apiClient: ApiClient,
  fromObject: types.Content,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromParts = common.getValueByPath(fromObject, ['parts']);
  if (fromParts != null) {
    if (Array.isArray(fromParts)) {
      common.setValueByPath(
        toObject,
        ['parts'],
        fromParts.map((item) => {
          return partFromVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['parts'], fromParts);
    }
  }

  const fromRole = common.getValueByPath(fromObject, ['role']);
  if (fromRole != null) {
    common.setValueByPath(toObject, ['role'], fromRole);
  }

  return toObject;
}

export function transcriptionFromMldev(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function transcriptionFromVertex(): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  return toObject;
}

export function liveServerContentFromMldev(
  apiClient: ApiClient,
  fromObject: types.LiveServerContent,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModelTurn = common.getValueByPath(fromObject, ['modelTurn']);
  if (fromModelTurn != null) {
    common.setValueByPath(
      toObject,
      ['modelTurn'],
      contentFromMldev(apiClient, fromModelTurn),
    );
  }

  const fromTurnComplete = common.getValueByPath(fromObject, ['turnComplete']);
  if (fromTurnComplete != null) {
    common.setValueByPath(toObject, ['turnComplete'], fromTurnComplete);
  }

  const fromInterrupted = common.getValueByPath(fromObject, ['interrupted']);
  if (fromInterrupted != null) {
    common.setValueByPath(toObject, ['interrupted'], fromInterrupted);
  }

  const fromGenerationComplete = common.getValueByPath(fromObject, [
    'generationComplete',
  ]);
  if (fromGenerationComplete != null) {
    common.setValueByPath(
      toObject,
      ['generationComplete'],
      fromGenerationComplete,
    );
  }

  return toObject;
}

export function liveServerContentFromVertex(
  apiClient: ApiClient,
  fromObject: types.LiveServerContent,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModelTurn = common.getValueByPath(fromObject, ['modelTurn']);
  if (fromModelTurn != null) {
    common.setValueByPath(
      toObject,
      ['modelTurn'],
      contentFromVertex(apiClient, fromModelTurn),
    );
  }

  const fromTurnComplete = common.getValueByPath(fromObject, ['turnComplete']);
  if (fromTurnComplete != null) {
    common.setValueByPath(toObject, ['turnComplete'], fromTurnComplete);
  }

  const fromInterrupted = common.getValueByPath(fromObject, ['interrupted']);
  if (fromInterrupted != null) {
    common.setValueByPath(toObject, ['interrupted'], fromInterrupted);
  }

  const fromGenerationComplete = common.getValueByPath(fromObject, [
    'generationComplete',
  ]);
  if (fromGenerationComplete != null) {
    common.setValueByPath(
      toObject,
      ['generationComplete'],
      fromGenerationComplete,
    );
  }

  return toObject;
}

export function functionCallFromMldev(
  apiClient: ApiClient,
  fromObject: types.FunctionCall,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromId = common.getValueByPath(fromObject, ['id']);
  if (fromId != null) {
    common.setValueByPath(toObject, ['id'], fromId);
  }

  const fromArgs = common.getValueByPath(fromObject, ['args']);
  if (fromArgs != null) {
    common.setValueByPath(toObject, ['args'], fromArgs);
  }

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  return toObject;
}

export function functionCallFromVertex(
  apiClient: ApiClient,
  fromObject: types.FunctionCall,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromArgs = common.getValueByPath(fromObject, ['args']);
  if (fromArgs != null) {
    common.setValueByPath(toObject, ['args'], fromArgs);
  }

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  return toObject;
}

export function liveServerToolCallFromMldev(
  apiClient: ApiClient,
  fromObject: types.LiveServerToolCall,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromFunctionCalls = common.getValueByPath(fromObject, [
    'functionCalls',
  ]);
  if (fromFunctionCalls != null) {
    if (Array.isArray(fromFunctionCalls)) {
      common.setValueByPath(
        toObject,
        ['functionCalls'],
        fromFunctionCalls.map((item) => {
          return functionCallFromMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['functionCalls'], fromFunctionCalls);
    }
  }

  return toObject;
}

export function liveServerToolCallFromVertex(
  apiClient: ApiClient,
  fromObject: types.LiveServerToolCall,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromFunctionCalls = common.getValueByPath(fromObject, [
    'functionCalls',
  ]);
  if (fromFunctionCalls != null) {
    if (Array.isArray(fromFunctionCalls)) {
      common.setValueByPath(
        toObject,
        ['functionCalls'],
        fromFunctionCalls.map((item) => {
          return functionCallFromVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(toObject, ['functionCalls'], fromFunctionCalls);
    }
  }

  return toObject;
}

export function liveServerToolCallCancellationFromMldev(
  apiClient: ApiClient,
  fromObject: types.LiveServerToolCallCancellation,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromIds = common.getValueByPath(fromObject, ['ids']);
  if (fromIds != null) {
    common.setValueByPath(toObject, ['ids'], fromIds);
  }

  return toObject;
}

export function liveServerToolCallCancellationFromVertex(
  apiClient: ApiClient,
  fromObject: types.LiveServerToolCallCancellation,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromIds = common.getValueByPath(fromObject, ['ids']);
  if (fromIds != null) {
    common.setValueByPath(toObject, ['ids'], fromIds);
  }

  return toObject;
}

export function modalityTokenCountFromMldev(
  apiClient: ApiClient,
  fromObject: types.ModalityTokenCount,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModality = common.getValueByPath(fromObject, ['modality']);
  if (fromModality != null) {
    common.setValueByPath(toObject, ['modality'], fromModality);
  }

  const fromTokenCount = common.getValueByPath(fromObject, ['tokenCount']);
  if (fromTokenCount != null) {
    common.setValueByPath(toObject, ['tokenCount'], fromTokenCount);
  }

  return toObject;
}

export function modalityTokenCountFromVertex(
  apiClient: ApiClient,
  fromObject: types.ModalityTokenCount,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromModality = common.getValueByPath(fromObject, ['modality']);
  if (fromModality != null) {
    common.setValueByPath(toObject, ['modality'], fromModality);
  }

  const fromTokenCount = common.getValueByPath(fromObject, ['tokenCount']);
  if (fromTokenCount != null) {
    common.setValueByPath(toObject, ['tokenCount'], fromTokenCount);
  }

  return toObject;
}

export function usageMetadataFromMldev(
  apiClient: ApiClient,
  fromObject: types.UsageMetadata,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromPromptTokenCount = common.getValueByPath(fromObject, [
    'promptTokenCount',
  ]);
  if (fromPromptTokenCount != null) {
    common.setValueByPath(toObject, ['promptTokenCount'], fromPromptTokenCount);
  }

  const fromCachedContentTokenCount = common.getValueByPath(fromObject, [
    'cachedContentTokenCount',
  ]);
  if (fromCachedContentTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['cachedContentTokenCount'],
      fromCachedContentTokenCount,
    );
  }

  const fromResponseTokenCount = common.getValueByPath(fromObject, [
    'responseTokenCount',
  ]);
  if (fromResponseTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['responseTokenCount'],
      fromResponseTokenCount,
    );
  }

  const fromToolUsePromptTokenCount = common.getValueByPath(fromObject, [
    'toolUsePromptTokenCount',
  ]);
  if (fromToolUsePromptTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['toolUsePromptTokenCount'],
      fromToolUsePromptTokenCount,
    );
  }

  const fromThoughtsTokenCount = common.getValueByPath(fromObject, [
    'thoughtsTokenCount',
  ]);
  if (fromThoughtsTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['thoughtsTokenCount'],
      fromThoughtsTokenCount,
    );
  }

  const fromTotalTokenCount = common.getValueByPath(fromObject, [
    'totalTokenCount',
  ]);
  if (fromTotalTokenCount != null) {
    common.setValueByPath(toObject, ['totalTokenCount'], fromTotalTokenCount);
  }

  const fromPromptTokensDetails = common.getValueByPath(fromObject, [
    'promptTokensDetails',
  ]);
  if (fromPromptTokensDetails != null) {
    if (Array.isArray(fromPromptTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['promptTokensDetails'],
        fromPromptTokensDetails.map((item) => {
          return modalityTokenCountFromMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['promptTokensDetails'],
        fromPromptTokensDetails,
      );
    }
  }

  const fromCacheTokensDetails = common.getValueByPath(fromObject, [
    'cacheTokensDetails',
  ]);
  if (fromCacheTokensDetails != null) {
    if (Array.isArray(fromCacheTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['cacheTokensDetails'],
        fromCacheTokensDetails.map((item) => {
          return modalityTokenCountFromMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['cacheTokensDetails'],
        fromCacheTokensDetails,
      );
    }
  }

  const fromResponseTokensDetails = common.getValueByPath(fromObject, [
    'responseTokensDetails',
  ]);
  if (fromResponseTokensDetails != null) {
    if (Array.isArray(fromResponseTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['responseTokensDetails'],
        fromResponseTokensDetails.map((item) => {
          return modalityTokenCountFromMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['responseTokensDetails'],
        fromResponseTokensDetails,
      );
    }
  }

  const fromToolUsePromptTokensDetails = common.getValueByPath(fromObject, [
    'toolUsePromptTokensDetails',
  ]);
  if (fromToolUsePromptTokensDetails != null) {
    if (Array.isArray(fromToolUsePromptTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['toolUsePromptTokensDetails'],
        fromToolUsePromptTokensDetails.map((item) => {
          return modalityTokenCountFromMldev(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['toolUsePromptTokensDetails'],
        fromToolUsePromptTokensDetails,
      );
    }
  }

  return toObject;
}

export function usageMetadataFromVertex(
  apiClient: ApiClient,
  fromObject: types.UsageMetadata,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromPromptTokenCount = common.getValueByPath(fromObject, [
    'promptTokenCount',
  ]);
  if (fromPromptTokenCount != null) {
    common.setValueByPath(toObject, ['promptTokenCount'], fromPromptTokenCount);
  }

  const fromCachedContentTokenCount = common.getValueByPath(fromObject, [
    'cachedContentTokenCount',
  ]);
  if (fromCachedContentTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['cachedContentTokenCount'],
      fromCachedContentTokenCount,
    );
  }

  const fromResponseTokenCount = common.getValueByPath(fromObject, [
    'candidatesTokenCount',
  ]);
  if (fromResponseTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['responseTokenCount'],
      fromResponseTokenCount,
    );
  }

  const fromToolUsePromptTokenCount = common.getValueByPath(fromObject, [
    'toolUsePromptTokenCount',
  ]);
  if (fromToolUsePromptTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['toolUsePromptTokenCount'],
      fromToolUsePromptTokenCount,
    );
  }

  const fromThoughtsTokenCount = common.getValueByPath(fromObject, [
    'thoughtsTokenCount',
  ]);
  if (fromThoughtsTokenCount != null) {
    common.setValueByPath(
      toObject,
      ['thoughtsTokenCount'],
      fromThoughtsTokenCount,
    );
  }

  const fromTotalTokenCount = common.getValueByPath(fromObject, [
    'totalTokenCount',
  ]);
  if (fromTotalTokenCount != null) {
    common.setValueByPath(toObject, ['totalTokenCount'], fromTotalTokenCount);
  }

  const fromPromptTokensDetails = common.getValueByPath(fromObject, [
    'promptTokensDetails',
  ]);
  if (fromPromptTokensDetails != null) {
    if (Array.isArray(fromPromptTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['promptTokensDetails'],
        fromPromptTokensDetails.map((item) => {
          return modalityTokenCountFromVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['promptTokensDetails'],
        fromPromptTokensDetails,
      );
    }
  }

  const fromCacheTokensDetails = common.getValueByPath(fromObject, [
    'cacheTokensDetails',
  ]);
  if (fromCacheTokensDetails != null) {
    if (Array.isArray(fromCacheTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['cacheTokensDetails'],
        fromCacheTokensDetails.map((item) => {
          return modalityTokenCountFromVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['cacheTokensDetails'],
        fromCacheTokensDetails,
      );
    }
  }

  const fromResponseTokensDetails = common.getValueByPath(fromObject, [
    'candidatesTokensDetails',
  ]);
  if (fromResponseTokensDetails != null) {
    if (Array.isArray(fromResponseTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['responseTokensDetails'],
        fromResponseTokensDetails.map((item) => {
          return modalityTokenCountFromVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['responseTokensDetails'],
        fromResponseTokensDetails,
      );
    }
  }

  const fromToolUsePromptTokensDetails = common.getValueByPath(fromObject, [
    'toolUsePromptTokensDetails',
  ]);
  if (fromToolUsePromptTokensDetails != null) {
    if (Array.isArray(fromToolUsePromptTokensDetails)) {
      common.setValueByPath(
        toObject,
        ['toolUsePromptTokensDetails'],
        fromToolUsePromptTokensDetails.map((item) => {
          return modalityTokenCountFromVertex(apiClient, item);
        }),
      );
    } else {
      common.setValueByPath(
        toObject,
        ['toolUsePromptTokensDetails'],
        fromToolUsePromptTokensDetails,
      );
    }
  }

  const fromTrafficType = common.getValueByPath(fromObject, ['trafficType']);
  if (fromTrafficType != null) {
    common.setValueByPath(toObject, ['trafficType'], fromTrafficType);
  }

  return toObject;
}

export function liveServerGoAwayFromMldev(
  apiClient: ApiClient,
  fromObject: types.LiveServerGoAway,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTimeLeft = common.getValueByPath(fromObject, ['timeLeft']);
  if (fromTimeLeft != null) {
    common.setValueByPath(toObject, ['timeLeft'], fromTimeLeft);
  }

  return toObject;
}

export function liveServerGoAwayFromVertex(
  apiClient: ApiClient,
  fromObject: types.LiveServerGoAway,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromTimeLeft = common.getValueByPath(fromObject, ['timeLeft']);
  if (fromTimeLeft != null) {
    common.setValueByPath(toObject, ['timeLeft'], fromTimeLeft);
  }

  return toObject;
}

export function liveServerSessionResumptionUpdateFromMldev(
  apiClient: ApiClient,
  fromObject: types.LiveServerSessionResumptionUpdate,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromNewHandle = common.getValueByPath(fromObject, ['newHandle']);
  if (fromNewHandle != null) {
    common.setValueByPath(toObject, ['newHandle'], fromNewHandle);
  }

  const fromResumable = common.getValueByPath(fromObject, ['resumable']);
  if (fromResumable != null) {
    common.setValueByPath(toObject, ['resumable'], fromResumable);
  }

  const fromLastConsumedClientMessageIndex = common.getValueByPath(fromObject, [
    'lastConsumedClientMessageIndex',
  ]);
  if (fromLastConsumedClientMessageIndex != null) {
    common.setValueByPath(
      toObject,
      ['lastConsumedClientMessageIndex'],
      fromLastConsumedClientMessageIndex,
    );
  }

  return toObject;
}

export function liveServerSessionResumptionUpdateFromVertex(
  apiClient: ApiClient,
  fromObject: types.LiveServerSessionResumptionUpdate,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromNewHandle = common.getValueByPath(fromObject, ['newHandle']);
  if (fromNewHandle != null) {
    common.setValueByPath(toObject, ['newHandle'], fromNewHandle);
  }

  const fromResumable = common.getValueByPath(fromObject, ['resumable']);
  if (fromResumable != null) {
    common.setValueByPath(toObject, ['resumable'], fromResumable);
  }

  const fromLastConsumedClientMessageIndex = common.getValueByPath(fromObject, [
    'lastConsumedClientMessageIndex',
  ]);
  if (fromLastConsumedClientMessageIndex != null) {
    common.setValueByPath(
      toObject,
      ['lastConsumedClientMessageIndex'],
      fromLastConsumedClientMessageIndex,
    );
  }

  return toObject;
}

export function liveServerMessageFromMldev(
  apiClient: ApiClient,
  fromObject: types.LiveServerMessage,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromSetupComplete = common.getValueByPath(fromObject, [
    'setupComplete',
  ]);
  if (fromSetupComplete != null) {
    common.setValueByPath(
      toObject,
      ['setupComplete'],
      liveServerSetupCompleteFromMldev(),
    );
  }

  const fromServerContent = common.getValueByPath(fromObject, [
    'serverContent',
  ]);
  if (fromServerContent != null) {
    common.setValueByPath(
      toObject,
      ['serverContent'],
      liveServerContentFromMldev(apiClient, fromServerContent),
    );
  }

  const fromToolCall = common.getValueByPath(fromObject, ['toolCall']);
  if (fromToolCall != null) {
    common.setValueByPath(
      toObject,
      ['toolCall'],
      liveServerToolCallFromMldev(apiClient, fromToolCall),
    );
  }

  const fromToolCallCancellation = common.getValueByPath(fromObject, [
    'toolCallCancellation',
  ]);
  if (fromToolCallCancellation != null) {
    common.setValueByPath(
      toObject,
      ['toolCallCancellation'],
      liveServerToolCallCancellationFromMldev(
        apiClient,
        fromToolCallCancellation,
      ),
    );
  }

  const fromUsageMetadata = common.getValueByPath(fromObject, [
    'usageMetadata',
  ]);
  if (fromUsageMetadata != null) {
    common.setValueByPath(
      toObject,
      ['usageMetadata'],
      usageMetadataFromMldev(apiClient, fromUsageMetadata),
    );
  }

  const fromGoAway = common.getValueByPath(fromObject, ['goAway']);
  if (fromGoAway != null) {
    common.setValueByPath(
      toObject,
      ['goAway'],
      liveServerGoAwayFromMldev(apiClient, fromGoAway),
    );
  }

  const fromSessionResumptionUpdate = common.getValueByPath(fromObject, [
    'sessionResumptionUpdate',
  ]);
  if (fromSessionResumptionUpdate != null) {
    common.setValueByPath(
      toObject,
      ['sessionResumptionUpdate'],
      liveServerSessionResumptionUpdateFromMldev(
        apiClient,
        fromSessionResumptionUpdate,
      ),
    );
  }

  return toObject;
}

export function liveServerMessageFromVertex(
  apiClient: ApiClient,
  fromObject: types.LiveServerMessage,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromSetupComplete = common.getValueByPath(fromObject, [
    'setupComplete',
  ]);
  if (fromSetupComplete != null) {
    common.setValueByPath(
      toObject,
      ['setupComplete'],
      liveServerSetupCompleteFromVertex(),
    );
  }

  const fromServerContent = common.getValueByPath(fromObject, [
    'serverContent',
  ]);
  if (fromServerContent != null) {
    common.setValueByPath(
      toObject,
      ['serverContent'],
      liveServerContentFromVertex(apiClient, fromServerContent),
    );
  }

  const fromToolCall = common.getValueByPath(fromObject, ['toolCall']);
  if (fromToolCall != null) {
    common.setValueByPath(
      toObject,
      ['toolCall'],
      liveServerToolCallFromVertex(apiClient, fromToolCall),
    );
  }

  const fromToolCallCancellation = common.getValueByPath(fromObject, [
    'toolCallCancellation',
  ]);
  if (fromToolCallCancellation != null) {
    common.setValueByPath(
      toObject,
      ['toolCallCancellation'],
      liveServerToolCallCancellationFromVertex(
        apiClient,
        fromToolCallCancellation,
      ),
    );
  }

  const fromUsageMetadata = common.getValueByPath(fromObject, [
    'usageMetadata',
  ]);
  if (fromUsageMetadata != null) {
    common.setValueByPath(
      toObject,
      ['usageMetadata'],
      usageMetadataFromVertex(apiClient, fromUsageMetadata),
    );
  }

  const fromGoAway = common.getValueByPath(fromObject, ['goAway']);
  if (fromGoAway != null) {
    common.setValueByPath(
      toObject,
      ['goAway'],
      liveServerGoAwayFromVertex(apiClient, fromGoAway),
    );
  }

  const fromSessionResumptionUpdate = common.getValueByPath(fromObject, [
    'sessionResumptionUpdate',
  ]);
  if (fromSessionResumptionUpdate != null) {
    common.setValueByPath(
      toObject,
      ['sessionResumptionUpdate'],
      liveServerSessionResumptionUpdateFromVertex(
        apiClient,
        fromSessionResumptionUpdate,
      ),
    );
  }

  return toObject;
}
