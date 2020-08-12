import React, { useRef, InputHTMLAttributes, useEffect } from "react";

import { InputBlock } from "./styles";
import { useField } from "@unform/core";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
}

const Input: React.FC<IInputProps> = ({ name, title, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <InputBlock>
      <label htmlFor={name}>{title}</label>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />

      {error && <div>ERRO</div>}
    </InputBlock>
  );
};

export default Input;
