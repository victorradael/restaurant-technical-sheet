import React, { InputHTMLAttributes } from "react";

import { InputBlock } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
}

const Input: React.FC<IInputProps> = ({ name, title, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={name}>{title}</label>
      <input {...rest} />
    </InputBlock>
  );
};

export default Input;
