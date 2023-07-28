import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as SaveIcon } from "../../../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../../../assets/icons/share-icon.svg";
import { TextButton } from "../../../../components/Button";
import Loading from "../../../../components/Loading";
import { getSingleArticle } from "../../../../redux/article/actions";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import {
  Action,
  ArticleContainer,
  ArticleHero,
  ButtonContent,
  Buttons,
  Container,
  Icon,
  IconText,
  Image,
  Paragraph,
  ParagraphContainer,
  ParagraphContent,
  ParagraphTitle,
  Title,
} from "./styles";
import { useTranslation } from "react-i18next";

const Article = () => {
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const location = useLocation();
  const articleId = location.pathname.split("/articles/")[1];

  useEffect(() => {
    dispatch(getSingleArticle(articleId));
  }, [articleId, dispatch]);

  const { isLoading, article } = useAppSelector((state) => state.article);
  return (
    <Container>
      {isLoading ? (
        <Loading loading={isLoading} color="#1d764a" size={50} />
      ) : (
        <ArticleContainer>
          <ArticleHero>
            <Title>{article?.title}</Title>
            <Action>
              <Buttons>
                <TextButton theme="noOutlined">
                  <ButtonContent>
                    <IconText>{t("save")}</IconText>
                    <Icon>
                      <SaveIcon />
                    </Icon>
                  </ButtonContent>
                </TextButton>
                <TextButton theme="noOutlined">
                  <ButtonContent>
                    <IconText>{t("share")}</IconText>
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
