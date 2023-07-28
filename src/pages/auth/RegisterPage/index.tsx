import { unwrapResult } from "@reduxjs/toolkit";
import LoginBG from "../../../assets/images/login-bg-img.png";
import Logo from "../../../components/Logo";
import { register } from "../../../redux/auth/authSlice";
import { useAppDispatch } from "../../../redux/hook";
import RegisterForm from "./components/RegisterForm";
import { Background, Container, LogoContainer } from "./styles";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values: object) => {
    try {
      const action = register(values);
      const actionResult = await dispatch(action);
      unwrapResult(actionResult);
      navigate("/");
      enqueueSnackbar("Register successfully!!!", { variant: "success" });
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <>
      <LogoContainer>
        <Logo theme="dark" />
      </LogoContainer>
      <Container>
        <RegisterForm onSubmit={handleFormSubmit} />
        <Background src={LoginBG} alt="Register background" />
      </Container>
    </>
  );
};

export default RegisterPage;
