import React from "react";
import Logo from "../Logo";
import {
  Container,
  Content,
  Title,
  Row2,
  WorkWithUs,
  WorkWithUsList,
  WorkWithUsItem,
  Connect,
  ConnectItem,
  ConnectList,
  Row3,
  Copyright,
  LegalInfo,
  LegalInfoItem,
  LanguageContainer,
  Language,
  LanguageOptions,
  LanguageLabel,
} from "./styles";

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/youtube-icon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github-icon.svg";
import { ReactComponent as TiktokIcon } from "../../assets/icons/tiktok-icon.svg";
import { ReactComponent as PinterestIcon } from "../../assets/icons/pinterest-icon.svg";
import { ReactComponent as LanguageIcon } from "../../assets/icons/language-icon.svg";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Logo theme="light" />
        <Row2>
          <WorkWithUs>
            <Title>Về chúng tôi</Title>
            <WorkWithUsList>
              <WorkWithUsItem>
                <a href="/">Sự kiện</a>
              </WorkWithUsItem>
              <WorkWithUsItem>
                <a href="/">Truyền thông</a>
              </WorkWithUsItem>
              <WorkWithUsItem>
                <a href="/">Du lịch lữ hành</a>
              </WorkWithUsItem>
            </WorkWithUsList>
          </WorkWithUs>
          <Connect>
            <Title>Liên hệ</Title>
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
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiktokIcon />
                </a>
              </ConnectItem>
              <ConnectItem>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PinterestIcon />
                </a>
              </ConnectItem>
            </ConnectList>
          </Connect>
        </Row2>
        <Row3>
          <Copyright>© VisitDalat.com 2023</Copyright>
          <LegalInfo>
            <LegalInfoItem>
              <a href="/">Điều khoản sử dụng</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">Bảo mật thông tin</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">Khả năng truy cập</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">Cookies</a>
            </LegalInfoItem>
            <LegalInfoItem>
              <a href="/">Phản hồi</a>
            </LegalInfoItem>
          </LegalInfo>
          <LanguageContainer>
            <LanguageLabel htmlFor="lang">
              <LanguageIcon />
            </LanguageLabel>
            <Language id="lang">
              <LanguageOptions>Tiếng Việt</LanguageOptions>
              <LanguageOptions>English</LanguageOptions>
            </Language>
          </LanguageContainer>
        </Row3>
      </Content>
    </Container>
  );
};

export default Footer;
