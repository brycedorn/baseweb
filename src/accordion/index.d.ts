import * as React from 'react';
import {StyletronComponent} from 'styletron-react';
import {Override} from '../overrides';

export interface STATE_CHANGE_TYPE {
  expand: 'expand';
}

export interface AccordionOverrides<T> {
  Content?: Override<T>;
  ContentAnimationContainer?: Override<T>;
  Header?: Override<T>;
  PanelContainer?: Override<T>;
  Root?: Override<T>;
  ToggleIcon?: Override<T>;
  ToggleIconGroup?: Override<T>;
}

export interface SharedProps {
  $color?: string;
  $disabled?: boolean;
  $expanded?: boolean;
  $size?: string | number;
}

export type StateReducer<T> = (
  stateChangeType: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
  nextState: T,
  currentState: T,
) => T;

export interface AccordionProps {
  accordion?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  initialState?: AccordionState;
  onChange?: (args: {expanded: React.Key[]}) => any;
  overrides?: AccordionOverrides<SharedProps>;
  stateReducer?: StateReducer<AccordionState>;
  renderAll?: boolean;
}

export type StatelessAccordionProps = {
  accordion?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  expanded: React.Key[];
  onChange?: (args: {expanded: React.Key[]; key: React.Key}) => any;
  overrides?: AccordionOverrides<SharedProps> & PanelOverrides<SharedProps>;
  renderAll?: boolean;
};

export const StatelessAccordion: React.FC<StatelessAccordionProps>;

export interface AccordionState {
  expanded: React.Key[];
}

export class Accordion extends React.Component<AccordionProps, AccordionState> {
  onPanelChange(key: React.Key, onChange: () => any, ...args: any): void;
  internalSetState(
    type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
    changes: AccordionState,
  ): void;
  getItems(): React.ReactNode;
}

export interface PanelOverrides<T> {
  PanelContainer?: Override<T>;
  Header?: Override<T>;
  ToggleIcon?: Override<T>;
  ToggleIconGroup?: Override<T>;
  Content?: Override<T>;
  ContentAnimationContainer?: Override<T>;
}

export interface SharedPanelProps {
  children: React.ReactNode;
  disabled?: boolean;
  key?: React.Key;
  onChange?: (args: {expanded: boolean}) => any;
  onClick?: (e: Event) => any;
  onKeyDown?: (e: KeyboardEvent) => any;
  overrides?: PanelOverrides<SharedProps>;
  title?: React.ReactNode;
  renderAll?: boolean;
}

export interface SharedStatefulPanelContainerProps {
  initialState?: PanelState;
  onChange?: (args: {expanded: boolean}) => any;
  stateReducer?: StateReducer<PanelState>;
}

export type PanelProps = SharedPanelProps & {expanded?: boolean};

export class Panel extends React.Component<PanelProps> {
  onClick(e: Event): void;
  onKeyDown(e: KeyboardEvent): void;
  getSharedProps(): SharedProps;
}

export type StatefulPanelProps = SharedPanelProps &
  SharedStatefulPanelContainerProps;

export const StatefulPanel: React.FC<StatefulPanelProps>;

export type StatefulPanelContainerProps = SharedStatefulPanelContainerProps & {
  children: React.ReactNode;
};

export interface PanelState {
  expanded: boolean;
}

export class StatefulPanelContainer extends React.Component<
  StatefulPanelContainerProps,
  PanelState
> {
  onChange(args: any): void;
  internalSetState(
    type: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE],
    changes: PanelState,
  ): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledPanelContainer: StyletronComponent<any>;
export const StyledHeader: StyletronComponent<any>;
export const StyledContent: StyletronComponent<any>;
export const StyledContentAnimationContainer: StyletronComponent<any>;
export const StyledToggleIcon: StyletronComponent<any>;
export const StyledToggleIconGroup: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
