import { useTranslation } from "react-i18next";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube-icon.svg";
import Logo from "../Logo";
import {
  Connect,
  ConnectItem,
  ConnectList,
  Container,
  Content,
  Copyright,
  LegalInfo,
  LegalInfoItem,
  Row2,
  Row3,
  Title,
  WorkWithUs,
  WorkWithUsItem,
  WorkWithUsList,
} from "./styles";

const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <Container>
      <Content>
        <Logo theme="light" />
        <Row2>
          <WorkWithUs>
            <Title>{t("about us")}</Title>
            <WorkWithUsList>
              <WorkWithUsItem>
                <a href="/">{t("event")}</a>
              </WorkWithUsItem>
              <WorkWithUsItem>
                <a href="/">{t("media")}</a>
              </WorkWithUsItem>
              <WorkWithUsItem>
                <a href="/">{t("travel trade")}</a>
              </WorkWithUsItem>
            </WorkWithUsList>
          </WorkWithUs>
          <Connect>
            <Title>{t("contact")}</Title>
            <ConnectList>
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                </a>
              </ConnectItem>
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              </ConnectItem>
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeIcon />
                </a>
              </ConnectItem>
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon />
                </a>
              </ConnectItem>
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </ConnectItem>
            </ConnectList>
          </Connect>
        </Row2>
        <Row3>
          <Copyright>© VisitDalat.com 2023</Copyright>
          <LegalInfo>
            <LegalInfoItem>
              <a href="/">{t("term of use")}</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">{t("privacy statement")}</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">{t("accessibility")}</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">{t("cookies")}</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">{t("feedback")}</a>
            </LegalInfoItem>
          </LegalInfo>
        </Row3>
      </Content>
    </Container>
  );
};

export default Footer;
