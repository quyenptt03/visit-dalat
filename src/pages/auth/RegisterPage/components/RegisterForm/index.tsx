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
import { useTranslation } from "react-i18next";

type FormData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};
const RegisterForm = ({ onSubmit }: any) => {
  const { t } = useTranslation("register");

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
          // eslint-disable-next-line no-useless-escape
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Password not match"),
    })
    .required();

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values: object) => {
    if (onSubmit) await onSubmit(values);
  };

  const { isSubmitting } = form.formState;

  return (
    <Container>
      <Greeting>Welcome!</Greeting>
      <Heading>
        <Title>{t("register")}</Title>
        <SubTitle>Lorem Ipsum is simply</SubTitle>
      </Heading>
      <Form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField
          name="email"
          label="email"
          placeholder={t("email placeholder")}
          form={form}
        />
        <InputField
          name="name"
          label={t("name")}
          placeholder={t("name placeholder")}
          form={form}
        />
        <PasswordField
          name="password"
          label={t("password")}
          placeholder={t("password placeholder")}
          form={form}
        />

        <PasswordField
          name="confirmPassword"
          label={t("confirm password")}
          placeholder={t("confirm password placeholder")}
          form={form}
        />
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loading loading={isSubmitting} size={20} color="#fff" />
          ) : (
            `${t("register")}`
          )}
        </SubmitButton>
      </Form>
      <Span>
        {t("callout")} <AuthLink href="/login">{t("login")}</AuthLink>
      </Span>
    </Container>
  );
};

export default RegisterForm;
