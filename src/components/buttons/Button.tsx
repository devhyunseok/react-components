import React, {PropsWithChildren} from 'react';
import {Button as BSButton, ButtonProps} from "react-bootstrap";

export enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  OutlinePrimary = 'outline-primary',
  OutlineSecondary = 'outline-secondary',
  OutlineSuccess = 'outline-success',
  OutlineDanger = 'outline-danger',
  OutlineWarning = 'outline-warning',
  OutlineInfo = 'outline-info'
}

interface IButton extends ButtonProps {
  variant?:Variants
}

const Button: React.FC<IButton> = (props: PropsWithChildren<IButton>) => {
  return <BSButton {...props}>{props.children}</BSButton>
};

export default Button;
