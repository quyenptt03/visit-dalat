import React, { useState } from "react";
import { TextButton } from "../../../../components/Button";
import {
  Container,
  Wrapper,
  Buttons,
  Button,
  ButtonContent,
  IconText,
  Icon,
  Title,
  Info,
  InfoItem,
  Text,
  Paragraph,
} from "./styles";
import { ReactComponent as SaveIcon } from "../../../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../../../assets/icons/share-icon.svg";
import { ReactComponent as MoneyIcon } from "../../../../assets/icons/money-icon.svg";
import { ReactComponent as ClockIcon } from "../../../../assets/icons/clock-icon.svg";
import { ReactComponent as AddressIcon } from "../../../../assets/icons/address-icon.svg";
import { ReactComponent as ArrowUpIcon } from "../../../../assets/icons/arrow-up-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/icons/arrow-down-icon.svg";

const Description = (props: any) => {
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
        <Title>{data.name}</Title>
        <Info>
          <InfoItem>
            <MoneyIcon />
            <Text>
              Từ {data.pricePerTicket} đ / {data.timePerTicket} phút
            </Text>
          </InfoItem>
          <InfoItem>
            <ClockIcon />
            <Text>
              Mở cửa: {data.openingTime} - {data.closingTime}
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
                <IconText>Đọc thêm</IconText>
                <Icon>
                  <ArrowDownIcon />
                </Icon>
              </ButtonContent>
            ) : (
              <ButtonContent>
                <IconText>Ẩn bớt</IconText>
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