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

const ErrorPage = () => {
  return (
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
  );
};

export default ErrorPage;
