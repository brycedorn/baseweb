/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Scenario as FormControlId } from './form-control-id.scenario.js';
import { Scenario as FormControlDefault } from './form-control.scenario.js';
import { Scenario as FormControlWithCounter } from './form-control-with-counter.scenario.js';

export const Id = () => <FormControlId />;
export const FormControl = () => <FormControlDefault />;
export const WithCounter = () => <FormControlWithCounter />;
