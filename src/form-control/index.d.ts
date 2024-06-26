import * as React from 'react';
import {StyletronComponent} from 'styletron-react';
import {Override} from '../overrides';

export const StyledLabel: StyletronComponent<any>;
export const StyledCaption: StyletronComponent<any>;
export const StyledControlContainer: StyletronComponent<any>;

export interface FormControlOverrides {
  Label?: Override<any>;
  Caption?: Override<any>;
  ControlContainer?: Override<any>;
}

export interface FormControlState {
  captionId: string;
}

export interface FormControlProps {
  children: React.ReactNode;
  disabled?: boolean;
  overrides?: FormControlOverrides;
  label?: React.ReactNode;
  caption?: React.ReactNode;
  error?: boolean | React.ReactNode;
  positive?: React.ReactNode;
  htmlFor?: string;
  counter?: boolean | {length?: number; maxLength?: number; error?: boolean};
}

export class FormControl extends React.Component<
  FormControlProps,
  FormControlState
> {}

export interface FormControlChildProps {
  'aria-describedby': string | null,
  'aria-errormessage': string | null,
  key: React.Key,
  disabled: boolean,
  error: boolean,
  positive: boolean
}
