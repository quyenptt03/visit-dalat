import React from "react";
import { Controller } from "react-hook-form";
import {
  Container,
  Label,
  InputContainer,
  Input,
  Notification,
} from "./styles";

const InputField = (props: {
  name: string;
  label: string;
  placeholder: string;
  form: any;
}) => {
  const { name, label, placeholder, form } = props;
  const { formState } = form;
  const error = formState.errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value } }) => (
        <Container>
          <Label htmlFor={name}>
            {label}
            <InputContainer>
              <Input
                id={name}
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                $hasError={!!error}
              ></Input>
            </InputContainer>
          </Label>
          {!!error && <Notification>{error.message}</Notification>}
        </Container>
      )}
    />
  );
};

export default InputField;
