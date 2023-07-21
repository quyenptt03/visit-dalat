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
import Loading from "../../../../../components/Loading";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = ({ onSubmit }: any) => {
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Please enter you email")
        .email("Please enter a valid email address."),
      password: yup.string().required("Please enter your password"),
    })
    .required();

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values: any) => {
    if (onSubmit) await onSubmit(values);
  };

  const { isSubmitting } = form.formState;

  return (
    <Container>
      <Greeting>Welcome!</Greeting>
      <Heading>
        <Title>Sign in to</Title>
        <SubTitle>Lorem Ipsum is simply</SubTitle>
      </Heading>
      <Form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="email"
          label="email"
          placeholder="Enter you email"
          form={form}
        />
        <PasswordField
          name="password"
          label="password"
          placeholder="Enter you password"
          form={form}
        />
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loading loading={isSubmitting} size={20} color="#fff" />
          ) : (
            "Login"
          )}
        </SubmitButton>
      </Form>
      <Span>
        Don't have an Account ? <AuthLink href="/register">Register</AuthLink>
      </Span>
    </Container>
  );
};

export default LoginForm;
