import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import bannerBG from "../../assets/images/banner-background.svg";
import { TextButton } from "../Button";
import { ReactComponent as SaveIcon } from "../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share-icon.svg";

const Container = styled.div`
  ${tw`relative grid w-full grid-cols-12 mt-20 h-80 xxl:mt-24 bg-bg-blue `}
`;
const Background = styled.img`
  ${tw`absolute w-5/12 h-full`}
`;
const Wrapper = styled.div`
  ${tw`z-10 flex justify-between col-span-8 col-start-3 mt-16 mx-6`}
`;
const Texts = styled.div`
  ${tw`w-1/2`}
`;
const Title = styled.h1`
  ${tw`text-3xl font-bold xxl:text-4xl mb-5`}
`;
const Desc = styled.p`
  ${tw`text-sm xxl:text-base`}
`;
const Buttons = styled.div`
  ${tw``}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center text-green`}
`;
const IconText = styled.span`
  ${tw`mr-2 text-sm font-bold xxl:text-base`}
`;
const Icon = styled.div`
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;
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
