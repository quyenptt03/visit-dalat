import { useState } from "react";
import { ReactComponent as AddressIcon } from "../../../../assets/icons/address-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/icons/arrow-down-icon.svg";
import { ReactComponent as ArrowUpIcon } from "../../../../assets/icons/arrow-up-icon.svg";
import { ReactComponent as ClockIcon } from "../../../../assets/icons/clock-icon.svg";
import { ReactComponent as MoneyIcon } from "../../../../assets/icons/money-icon.svg";
import { ReactComponent as SaveIcon } from "../../../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../../../assets/icons/share-icon.svg";
import { TextButton } from "../../../../components/Button";
import {
  Button,
  ButtonContent,
  Buttons,
  Container,
  Icon,
  IconText,
  Info,
  InfoItem,
  Paragraph,
  Text,
  Title,
  Wrapper,
} from "./styles";
import { useTranslation } from "react-i18next";

const Description = (props: any) => {
  const { t } = useTranslation("destination");
  const { data } = props;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Container>
      <Wrapper>
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
        <Title>{data.name}</Title>
        <Info>
          <InfoItem>
            <MoneyIcon />
            <Text>
              {t("from")} {data.pricePerTicket} đ / {data.timePerTicket}{" "}
              {t("minutes")}
            </Text>
          </InfoItem>
          <InfoItem>
            <ClockIcon />
            <Text>
              {t("open")}: {data.openingTime} - {data.closingTime}
            </Text>
          </InfoItem>
        </Info>
        <Info>
          <InfoItem>
            <AddressIcon />
            <Text>{data.address}</Text>
          </InfoItem>
        </Info>
        <Paragraph>
          {isReadMore ? data.description.slice(0, 400) : data.description}
        </Paragraph>
        {data.description.length > 400 && (
          <Button onClick={toggleReadMore}>
            {isReadMore ? (
              <ButtonContent>
                <IconText>{t("read more")}</IconText>
                <Icon>
                  <ArrowDownIcon />
                </Icon>
              </ButtonContent>
            ) : (
              <ButtonContent>
                <IconText>{t("read less")}</IconText>
                <Icon>
                  <ArrowUpIcon />
                </Icon>
              </ButtonContent>
            )}
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default Description;
