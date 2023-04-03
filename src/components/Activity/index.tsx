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
import Activity1 from "../../assets/images/activity1.png";

const Activity = () => {
  return (
    <ActivityContainer>
      <ImageContainer>
        <Image src={Activity1} alt="activity1" />
        <Content>
          <Title>Cắm trại</Title>
          <SubTitle>230 hoạt động</SubTitle>
        </Content>
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
    </ActivityContainer>
  );
};

export default Activity;
