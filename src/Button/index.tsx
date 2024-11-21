import React, { type FC } from 'react';
import './style/button.scss';

interface Props {
  type: string;
  onClick: string;
  content: string;
  size: string;
  disabled: string;
}
const Button: FC<Props> = (props) => (
  <button
    type="button"
    className={
      props.type +
      ' btn1 ' +
      props.size +
      ' ' +
      (props.disabled ? 'true' : 'false')
    }
  >
    {props.content}
  </button>
);

export default Button;
