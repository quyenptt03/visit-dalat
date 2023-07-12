import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { ReactComponent as Visibility } from "../../../assets/icons/show-password.svg";
import { ReactComponent as VisibilityOff } from "../../../assets/icons/hide-password.svg";
import {
  Container,
  Label,
  InputContainer,
  Input,
  Notification,
  IconButton,
} from "./styles";

const PasswordField = (props: {
  name: string;
  label: string;
  placeholder: string;
  form: any;
}) => {
  const { name, label, placeholder, form } = props;
  const { formState } = form;
  const error = formState.errors[name];

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
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
                type={showPassword ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                $hasError={!!error}
              ></Input>
              <IconButton onClick={toggleShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputContainer>
          </Label>
          {!!error && <Notification>{error.message}</Notification>}
        </Container>
      )}
    />
  );
};

export default PasswordField;
