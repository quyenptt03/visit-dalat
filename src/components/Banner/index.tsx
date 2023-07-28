import { useTranslation } from "react-i18next";
import { ReactComponent as SaveIcon } from "../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share-icon.svg";
import bannerBG from "../../assets/images/banner-background.svg";
import { TextButton } from "../Button";
import {
  Background,
  ButtonContent,
  Buttons,
  Container,
  Desc,
  Icon,
  IconText,
  Texts,
  Title,
  Wrapper,
} from "./styles";

const Banner = () => {
  const { t } = useTranslation("articles");
  return (
    <Container>
      <Background src={bannerBG} alt="banner" />
      <Wrapper>
        <Texts>
          <Title>{t("title")}</Title>
          <Desc>{t("subtitle")}</Desc>
        </Texts>
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
      </Wrapper>
    </Container>
  );
};
export default Banner;
