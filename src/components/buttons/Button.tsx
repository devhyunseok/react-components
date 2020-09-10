import React, { PropsWithChildren } from 'react';
import { Button as BSButton, ButtonProps } from 'react-bootstrap';

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

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
const Button:React.FC<IButton> = (props:PropsWithChildren<IButton>) => {
  return <BSButton {...props}>{props.children}</BSButton>;
};

export default Button;