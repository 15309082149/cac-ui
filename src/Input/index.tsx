import React, { type FC } from 'react';
import './style/input.scss';
interface Props {
  content: string;
  size: string;
  type: string;
  state: string;
}
const Input: FC<Props> = (props) => {
  return (
    <input
      className={
        'ipt-' +
        props.size +
        ' ipt-' +
        (props.state ? props.state + ' ipt-false' : ' ipt-true')
      }
      placeholder={props.content}
      type={props.type}
    ></input>
  );
};

export default Input;
