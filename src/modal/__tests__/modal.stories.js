/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Scenario as ModalSelect } from './modal-select.scenario.js';
import { Scenario as ModalUncloseable } from './modal-uncloseable.scenario.js';
import { Scenario as ModalDefault } from './modal.scenario.js';

export const Select = () => <ModalSelect />;
export const Uncloseable = () => <ModalUncloseable />;
export const Modal = () => <ModalDefault />;
