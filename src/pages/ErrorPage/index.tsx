import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ErrorIcon from "../../assets/icons/error-icon.svg";
import BackToTopButton from "../../components/BackToTopButton";
import { TextButton } from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  ButtonContent,
  ButtonText,
  Container,
  ErrorImage,
  ForwardIconContainer,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";

const ErrorPage = () => {
  const { t } = useTranslation("errorpage");
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>404</Title>
          <SubTitle>{t("not found")}</SubTitle>
          <TextButton theme="filled">
            <ButtonContent as={Link} to={"/"}>
              <ButtonText>{t("go back")}</ButtonText>
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
