import React from "react";
import { Image, Container, WrapTitle, SubTitle, Title } from "./styles";

interface IBackgroundProps {
  title: string;
  subtitle: string;
  img: string;
}

const Background = (props: IBackgroundProps) => {
  const { title, subtitle, img } = props;
  return (
    <Container>
      <WrapTitle>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </WrapTitle>
      <Image src={img} alt="background image" />
    </Container>
  );
};

export default Background;
