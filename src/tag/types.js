/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import type { OverrideT } from '../helpers/overrides.js';
import { KIND, VARIANT, SIZE } from './constants.js';

export const TagKind = Object.freeze(KIND);
export const TagVariant = Object.freeze(VARIANT);
export const TagSize = Object.freeze(SIZE);

export type TagKindT = $Keys<typeof TagKind>;
export type TagVariantT = $Values<typeof TagVariant>;
export type TagSizeT = $Keys<typeof TagSize>;

export type OverridesT = {
  Root?: OverrideT,
  Action?: OverrideT,
  ActionIcon?: OverrideT,
  StartEnhancerContainer?: OverrideT,
  Text?: OverrideT,
};

export type PropsT = {
  overrides?: OverridesT,
  /** Include or exclude the "x" button and click action. */
  closeable?: boolean,
  /** Disable control from being changed. */
  disabled?: boolean,
  /** Deprecated. Will be removed in the next major version. */
  isFocused?: boolean,
  /** Deprecated. Will be removed in the next major version. */
  isHovered?: boolean,
  /** Defines tags look by purpose. Set it to one of KIND[key] values. Defaults to KIND.primary */
  kind?: TagKindT,
  /** Defines tags look. Set it to one of VARIANT[key] values. Defaults to VARIANT.light */
  variant?: TagVariantT,
  /** Component or String value for label of tag. Default is empty string. */
  children?: React$Node,
  /** The color theme to be applied to a Tag. Default is `KIND.primary`. */
  color?: string,
  /** Text to display in native OS tooltip on long hover. */
  title?: string,
  /** onClick handler for the action button element. */
  onActionClick?: (e: Event, children?: React$Node) => mixed,
  /** keydown handler for the action button element. */
  onActionKeyDown?: (e: Event, children?: React$Node) => mixed,
  /** onClick handler for the tag. Passing an onClick handler also makes the tag clickable. */
  onClick?: null | ((event: Event) => mixed),
  /** onkeydown handler for the tag. */
  onKeyDown?: null | ((event: Event) => mixed),
  /** Determines the size of the Tag. */
  size?: TagSizeT,
  startEnhancer?: React.AbstractComponent<{||}>,
};

export type SharedPropsArgT = {
  $clickable?: boolean,
  $closeable?: boolean,
  $color?: string,
  $disabled?: boolean,
  $isActive?: boolean,
  $isFocused?: boolean,
  $isHovered?: boolean,
  $kind?: string,
  $variant?: string,
  $isFocusVisible: boolean,
  $size?: string,
};
