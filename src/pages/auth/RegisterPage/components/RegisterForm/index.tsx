import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../../components/form-controls/InputField";
import PasswordField from "../../../../../components/form-controls/PasswordField";
import {
  AuthLink,
  Container,
  Form,
  Greeting,
  Heading,
  Span,
  SubTitle,
  SubmitButton,
  Title,
} from "./styles";

type FormData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};
const RegisterForm = (onSubmit: any) => {
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Please enter you email")
        .email("Please enter a valid email address."),
      name: yup.string().required("Please enter your name"),
      password: yup
        .string()
        .required("Please enter your password")
        // .min(6, "must contain 6 characters"),
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Password not match"),
    })
    .required();

  const checkKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") e.preventDefault();
  };
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values: any) => {
    console.log("RegisterForm submit: ", values);
  };
  return (
    <Container>
      <Greeting>Welcome!</Greeting>
      <Heading>
        <Title>Sign up to</Title>
        <SubTitle>Lorem Ipsum is simply</SubTitle>
      </Heading>
      <Form
        onSubmit={form.handleSubmit(handleSubmit)}
        onKeyDown={(e: KeyboardEvent) => checkKeyDown(e)}
      >
        <InputField
          name="email"
          label="email"
          placeholder="Enter you email"
          form={form}
        />
        <InputField
          name="name"
          label="name"
          placeholder="Enter you name"
          form={form}
        />
        <PasswordField
          name="password"
          label="password"
          placeholder="Enter you password"
          form={form}
        />

        <PasswordField
          name="confirmPassword"
          label="confirm password"
          placeholder="Confirm your password"
          form={form}
        />
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
      <Span>
        Already have an Account ? <AuthLink href="/login">Register</AuthLink>
      </Span>
    </Container>
  );
};

export default RegisterForm;
