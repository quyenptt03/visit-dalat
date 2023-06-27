import React from "react";
import { IconButton } from "../Button";
import {
  ActivityContainer,
  ImageContainer,
  Image,
  Content,
  Title,
  SubTitle,
  ButtonContainer,
} from "./styles";

interface IActivityProps {
  title: string;
  subTitle: string;
  image: string;
}

const Activity = (props: IActivityProps) => {
  const { title, subTitle, image } = props;
  return (
    <ActivityContainer>
      <ImageContainer>
        <Image src={image} alt="activity" loading="lazy" />
        <Content>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Content>
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
    </ActivityContainer>
  );
};

export default Activity;
