import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapDecorator = (props:any) => {
  return <Fragment>{props.children}</Fragment>;
};

export default BootstrapDecorator;
