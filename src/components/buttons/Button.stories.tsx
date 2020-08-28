import React from 'react';
import Button, {Variants} from './Button';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import BootstrapDecorator from '../bootstrap.decorator';
import styled from 'styled-components';
import {withInfo} from '@storybook/addon-info';

export const button = () => {
  const variant = select('버튼 색상', Variants, Variants.Primary);
  const buttonSize = select('버튼 크기', ['sm', 'lg'], 'sm');
  const buttonText = text('버튼명', '버튼');

  return (
    <Button variant={variant} size={buttonSize}>
      {buttonText}
    </Button>
  );
};

export default {
  title: 'Button',
  description: 'simple',
  component: Button,
  decorators: [withKnobs, withInfo({
    header: false
  }), (storyFn: any) => <BootstrapDecorator>{storyFn()}</BootstrapDecorator>],
};