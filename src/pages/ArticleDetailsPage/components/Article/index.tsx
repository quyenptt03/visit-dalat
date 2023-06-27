import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { getSingleArticle } from "../../../../redux/article/actions";
import { TextButton } from "../../../../components/Button";
import { ReactComponent as SaveIcon } from "../../../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../../../assets/icons/share-icon.svg";
import {
  Container,
  ArticleContainer,
  ArticleHero,
  Title,
  Action,
  Buttons,
  ButtonContent,
  IconText,
  Icon,
  Image,
  ParagraphContainer,
  Paragraph,
  ParagraphTitle,
  ParagraphContent,
} from "./styles";

const Article = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const articleId = location.pathname.split("/articles/")[1];

  useEffect(() => {
    dispatch(getSingleArticle(articleId));
  }, [articleId, dispatch]);

  const { isLoading, article } = useAppSelector((state) => state.article);
  console.log({ isLoading, article });

  return (
    <Container>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ArticleContainer>
          <ArticleHero>
            <Title>{article?.title}</Title>
            <Action>
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
            </Action>
            <Image src={article?.featuredImage} alt="hero image" />
          </ArticleHero>
          <ParagraphContainer>
            {article?.body.map((paragraph, index) => (
              <Paragraph key={index}>
                <ParagraphTitle>{paragraph.pTitle}</ParagraphTitle>
                <ParagraphContent>{paragraph.pContent}</ParagraphContent>
                <Image src={paragraph.image} alt="paragraph image" />
              </Paragraph>
            ))}
          </ParagraphContainer>
        </ArticleContainer>
      )}
    </Container>
  );
};

export default Article;
