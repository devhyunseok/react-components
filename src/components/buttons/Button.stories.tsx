import React from 'react';
import Button, {Variants} from "./Button";
import {select, text, withKnobs} from "@storybook/addon-knobs";
import BootstrapDecorator from "../bootstrap.decorator";
import styled from "styled-components";

export const button = () => {
  const variant = select('버튼 색상', Variants, Variants.Primary);
  const buttonSize = select('버튼 크기', ['sm', 'lg'], 'sm');
  const buttonText = text('버튼명', '버튼');

  return (
    <Container>
      <Item>
        <h5>Bootstrap Buttons</h5>
        <Button variant={variant} size={buttonSize}>
          {buttonText}
        </Button>
        <Button variant={Variants.Secondary} size={buttonSize}>
          {buttonText}
        </Button>
        <Button variant={Variants.Danger} size={buttonSize}>
          {buttonText}
        </Button>
        <Button variant={Variants.Warning} size={buttonSize}>
          {buttonText}
        </Button>
        <Button variant={Variants.OutlinePrimary} size={buttonSize}>
          {buttonText}
        </Button>
        <Button variant={Variants.OutlineSecondary} size={buttonSize}>
          {buttonText}
        </Button>
      </Item>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const Item = styled.div`
  flex: 1;
  
  button + button {
    margin-left: 10px;
  }
`;

export default {
  title: 'Components|Button',
  decorators: [(storyFn:any) => <BootstrapDecorator>{storyFn()}</BootstrapDecorator>, withKnobs],
};
