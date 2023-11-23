import tw from "twin.macro";
import styled from "styled-components";
import { IconButton } from "../../Button";
import { Link } from "react-router-dom";
import { Container, Image, ImageContainer, Info, Title } from "./styles";

interface IArticleV2 {
  name: string;
  imgSrc: string;
  url?: string;
}

const ArticleV2 = (props: IArticleV2) => {
  const { name, imgSrc, url } = props;
  return (
    <Container as={Link} to={url}>
      <ImageContainer>
        <Image src={imgSrc} alt="article image" />
      </ImageContainer>
      <Info>
        <Title>{name}</Title>
      </Info>
    </Container>
  );
};

export default ArticleV2;
