import React from "react";
import { TextButton } from "../../components/Button";
import { Link } from "react-router-dom";
import ErrorIcon from "../../assets/icons/ErrorIcon.svg";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  ButtonContent,
  ButtonText,
  ForwardIconContainer,
  ErrorImage,
} from "./styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>404</Title>
          <SubTitle>Không tìm thấy trang</SubTitle>
          <TextButton theme="filled">
            <ButtonContent as={Link} to={"/"}>
              <ButtonText>Go back</ButtonText>
              <ForwardIconContainer />
            </ButtonContent>
          </TextButton>
        </Wrapper>
        <ErrorImage src={ErrorIcon} alt="404 error" />
      </Container>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ErrorPage;
