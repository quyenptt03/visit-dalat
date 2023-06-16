import React from "react";
import bannerBG from "../../assets/images/banner-background.svg";
import { TextButton } from "../Button";
import { ReactComponent as SaveIcon } from "../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share-icon.svg";
import {
  Container,
  Background,
  Wrapper,
  Texts,
  Title,
  Desc,
  Buttons,
  ButtonContent,
  IconText,
  Icon,
} from "./styles";
const Banner = () => {
  return (
    <Container>
      <Background src={bannerBG} alt="banner" />
      <Wrapper>
        <Texts>
          <Title>Tất Cả Bài Viết</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </Desc>
        </Texts>
        <Buttons>
          <TextButton theme="noOutlined">
            <ButtonContent>
              <IconText>Lưu</IconText>
              <Icon>
                <SaveIcon />
              </Icon>
            </ButtonContent>
          </TextButton>
          <TextButton theme="noOutlined">
            <ButtonContent>
              <IconText>Chia sẻ</IconText>
              <Icon>
                <ShareIcon />
              </Icon>
            </ButtonContent>
          </TextButton>
        </Buttons>
      </Wrapper>
    </Container>
  );
};
export default Banner;
