/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Code generated by the Google Gen AI SDK generator DO NOT EDIT.

import * as common from '../_common.js';
import * as t from '../_transformers.js';
import * as types from '../types.js';

export function getOperationParametersToMldev(
  fromObject: types.GetOperationParameters,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromOperationName = common.getValueByPath(fromObject, [
    'operationName',
  ]);
  if (fromOperationName != null) {
    common.setValueByPath(
      toObject,
      ['_url', 'operationName'],
      fromOperationName,
    );
  }

  const fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig != null) {
    common.setValueByPath(toObject, ['config'], fromConfig);
  }

  return toObject;
}

export function getOperationParametersToVertex(
  fromObject: types.GetOperationParameters,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromOperationName = common.getValueByPath(fromObject, [
    'operationName',
  ]);
  if (fromOperationName != null) {
    common.setValueByPath(
      toObject,
      ['_url', 'operationName'],
      fromOperationName,
    );
  }

  const fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig != null) {
    common.setValueByPath(toObject, ['config'], fromConfig);
  }

  return toObject;
}

export function fetchPredictOperationParametersToVertex(
  fromObject: types.FetchPredictOperationParameters,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromOperationName = common.getValueByPath(fromObject, [
    'operationName',
  ]);
  if (fromOperationName != null) {
    common.setValueByPath(toObject, ['operationName'], fromOperationName);
  }

  const fromResourceName = common.getValueByPath(fromObject, ['resourceName']);
  if (fromResourceName != null) {
    common.setValueByPath(toObject, ['_url', 'resourceName'], fromResourceName);
  }

  const fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig != null) {
    common.setValueByPath(toObject, ['config'], fromConfig);
  }

  return toObject;
}

export function videoFromMldev(
  fromObject: types.Video,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromUri = common.getValueByPath(fromObject, ['video', 'uri']);
  if (fromUri != null) {
    common.setValueByPath(toObject, ['uri'], fromUri);
  }

  const fromVideoBytes = common.getValueByPath(fromObject, [
    'video',
    'encodedVideo',
  ]);
  if (fromVideoBytes != null) {
    common.setValueByPath(toObject, ['videoBytes'], t.tBytes(fromVideoBytes));
  }

  const fromMimeType = common.getValueByPath(fromObject, ['encoding']);
  if (fromMimeType != null) {
    common.setValueByPath(toObject, ['mimeType'], fromMimeType);
  }

  return toObject;
}

export function generatedVideoFromMldev(
  fromObject: types.GeneratedVideo,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromVideo = common.getValueByPath(fromObject, ['_self']);
  if (fromVideo != null) {
    common.setValueByPath(toObject, ['video'], videoFromMldev(fromVideo));
  }

  return toObject;
}

export function generateVideosResponseFromMldev(
  fromObject: types.GenerateVideosResponse,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromGeneratedVideos = common.getValueByPath(fromObject, [
    'generatedSamples',
  ]);
  if (fromGeneratedVideos != null) {
    let transformedList = fromGeneratedVideos;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedVideoFromMldev(item);
      });
    }
    common.setValueByPath(toObject, ['generatedVideos'], transformedList);
  }

  const fromRaiMediaFilteredCount = common.getValueByPath(fromObject, [
    'raiMediaFilteredCount',
  ]);
  if (fromRaiMediaFilteredCount != null) {
    common.setValueByPath(
      toObject,
      ['raiMediaFilteredCount'],
      fromRaiMediaFilteredCount,
    );
  }

  const fromRaiMediaFilteredReasons = common.getValueByPath(fromObject, [
    'raiMediaFilteredReasons',
  ]);
  if (fromRaiMediaFilteredReasons != null) {
    common.setValueByPath(
      toObject,
      ['raiMediaFilteredReasons'],
      fromRaiMediaFilteredReasons,
    );
  }

  return toObject;
}

export function generateVideosOperationFromMldev(
  fromObject: types.GenerateVideosOperation,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  const fromMetadata = common.getValueByPath(fromObject, ['metadata']);
  if (fromMetadata != null) {
    common.setValueByPath(toObject, ['metadata'], fromMetadata);
  }

  const fromDone = common.getValueByPath(fromObject, ['done']);
  if (fromDone != null) {
    common.setValueByPath(toObject, ['done'], fromDone);
  }

  const fromError = common.getValueByPath(fromObject, ['error']);
  if (fromError != null) {
    common.setValueByPath(toObject, ['error'], fromError);
  }

  const fromResponse = common.getValueByPath(fromObject, [
    'response',
    'generateVideoResponse',
  ]);
  if (fromResponse != null) {
    common.setValueByPath(
      toObject,
      ['response'],
      generateVideosResponseFromMldev(fromResponse),
    );
  }

  return toObject;
}

export function videoFromVertex(
  fromObject: types.Video,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromUri = common.getValueByPath(fromObject, ['gcsUri']);
  if (fromUri != null) {
    common.setValueByPath(toObject, ['uri'], fromUri);
  }

  const fromVideoBytes = common.getValueByPath(fromObject, [
    'bytesBase64Encoded',
  ]);
  if (fromVideoBytes != null) {
    common.setValueByPath(toObject, ['videoBytes'], t.tBytes(fromVideoBytes));
  }

  const fromMimeType = common.getValueByPath(fromObject, ['mimeType']);
  if (fromMimeType != null) {
    common.setValueByPath(toObject, ['mimeType'], fromMimeType);
  }

  return toObject;
}

export function generatedVideoFromVertex(
  fromObject: types.GeneratedVideo,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromVideo = common.getValueByPath(fromObject, ['_self']);
  if (fromVideo != null) {
    common.setValueByPath(toObject, ['video'], videoFromVertex(fromVideo));
  }

  return toObject;
}

export function generateVideosResponseFromVertex(
  fromObject: types.GenerateVideosResponse,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromGeneratedVideos = common.getValueByPath(fromObject, ['videos']);
  if (fromGeneratedVideos != null) {
    let transformedList = fromGeneratedVideos;
    if (Array.isArray(transformedList)) {
      transformedList = transformedList.map((item) => {
        return generatedVideoFromVertex(item);
      });
    }
    common.setValueByPath(toObject, ['generatedVideos'], transformedList);
  }

  const fromRaiMediaFilteredCount = common.getValueByPath(fromObject, [
    'raiMediaFilteredCount',
  ]);
  if (fromRaiMediaFilteredCount != null) {
    common.setValueByPath(
      toObject,
      ['raiMediaFilteredCount'],
      fromRaiMediaFilteredCount,
    );
  }

  const fromRaiMediaFilteredReasons = common.getValueByPath(fromObject, [
    'raiMediaFilteredReasons',
  ]);
  if (fromRaiMediaFilteredReasons != null) {
    common.setValueByPath(
      toObject,
      ['raiMediaFilteredReasons'],
      fromRaiMediaFilteredReasons,
    );
  }

  return toObject;
}

export function generateVideosOperationFromVertex(
  fromObject: types.GenerateVideosOperation,
): Record<string, unknown> {
  const toObject: Record<string, unknown> = {};

  const fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName != null) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  const fromMetadata = common.getValueByPath(fromObject, ['metadata']);
  if (fromMetadata != null) {
    common.setValueByPath(toObject, ['metadata'], fromMetadata);
  }

  const fromDone = common.getValueByPath(fromObject, ['done']);
  if (fromDone != null) {
    common.setValueByPath(toObject, ['done'], fromDone);
  }

  const fromError = common.getValueByPath(fromObject, ['error']);
  if (fromError != null) {
    common.setValueByPath(toObject, ['error'], fromError);
  }

  const fromResponse = common.getValueByPath(fromObject, ['response']);
  if (fromResponse != null) {
    common.setValueByPath(
      toObject,
      ['response'],
      generateVideosResponseFromVertex(fromResponse),
    );
  }

  return toObject;
}
