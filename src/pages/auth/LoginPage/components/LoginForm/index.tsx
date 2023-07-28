import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import Loading from "../../../../../components/Loading";
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
  password: string;
};

const LoginForm = ({ onSubmit }: any) => {
  const { t } = useTranslation("login");

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
        <Title>{t("sign in")}</Title>
        <SubTitle>Lorem Ipsum is simply</SubTitle>
      </Heading>
      <Form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="email"
          label="email"
          placeholder={t("email placeholder")}
          form={form}
        />
        <PasswordField
          name="password"
          label={t("password")}
          placeholder={t("password placeholder")}
          form={form}
        />
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loading loading={isSubmitting} size={20} color="#fff" />
          ) : (
            `${t("login")}`
          )}
        </SubmitButton>
      </Form>
      <Span>
        {t("callout")} <AuthLink href="/register">{t("register")}</AuthLink>
      </Span>
    </Container>
  );
};

export default LoginForm;
