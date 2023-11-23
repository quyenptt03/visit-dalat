import { Link } from "react-router-dom";
import { IconButton } from "../../Button";
import {
  Container,
  Image,
  ImageContainer,
  Info,
  Title,
  Description,
  ButtonContainer,
} from "./styles";

interface IArticle {
  name: string;
  description: string;
  imgSrc: string;
  url?: string;
  swap?: Boolean;
}

const ArticleV1 = (props: IArticle) => {
  const { name, description, imgSrc, url, swap } = props;
  return (
    <Container>
      <ImageContainer swap={swap}>
        <Image src={imgSrc} alt="article image" />
        <ButtonContainer>
          <IconButton type="saveBtn" />
        </ButtonContainer>
      </ImageContainer>
      <Info>
        <Title as={Link} to={url}>
          {name}
        </Title>
        <Description>{description.slice(0, 450)}...</Description>
      </Info>
    </Container>
  );
};

export default ArticleV1;
