/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Scenario as TooltipArrowMargin } from './tooltip-arrow-margin.scenario.js';
import { Scenario as TooltipComplex } from './tooltip-complex.scenario.js';
import { Scenario as TooltipDefault } from './tooltip.scenario.js';
import { Scenario as TooltipInteractiveElement } from './tooltip-interactive-element.scenario.js';

export const ArrowMargin = () => <TooltipArrowMargin />;
export const Complex = () => <TooltipComplex />;
export const Tooltip = () => <TooltipDefault />;
export const TooltipInteractive = () => <TooltipInteractiveElement />;
