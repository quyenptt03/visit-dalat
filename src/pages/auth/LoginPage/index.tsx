import { useNavigate } from "react-router-dom";
import LoginBG from "../../../assets/images/login-bg.png";
import Logo from "../../../components/Logo";
import { useAppDispatch } from "../../../redux/hook";
import LoginForm from "./components/LoginForm";
import { Background, Container, LogoContainer } from "./styles";
import { login } from "../../../redux/auth/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values: any) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      navigate("/");
      enqueueSnackbar("Login successfully!!!", { variant: "success" });
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
        <LoginForm onSubmit={handleFormSubmit} />
        <Background src={LoginBG} alt="Register background" />
      </Container>
    </>
  );
};

export default LoginPage;
