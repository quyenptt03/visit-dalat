import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { TextButton } from "../../../../components/Button";
import { ReactComponent as SaveIcon } from "../../../../assets/icons/save-icon.svg";
import { ReactComponent as ShareIcon } from "../../../../assets/icons/share-icon.svg";
import { ReactComponent as MoneyIcon } from "../../../../assets/icons/money-icon.svg";
import { ReactComponent as ClockIcon } from "../../../../assets/icons/clock-icon.svg";
import { ReactComponent as AddressIcon } from "../../../../assets/icons/address-icon.svg";
import { ReactComponent as ArrowUpIcon } from "../../../../assets/icons/arrow-up-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../assets/icons/arrow-down-icon.svg";

const Container = styled.div`
  ${tw`w-full h-full bg-bg-blue`}
`;

const Wrapper = styled.div`
  ${tw`ml-11 pt-20 mr-[340px]`}
`;
const Buttons = styled.div`
  ${tw`flex justify-end`}
`;
const Button = styled.button`
  span {
    ${tw`text-sm`}
  }
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center text-green`}
`;
const IconText = styled.span`
  ${tw`mr-2 text-base font-bold`}
`;
const Icon = styled.div`
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;
const Title = styled.h1`
  ${tw`mb-6 text-6xl font-extrabold text-black mt-9`}
`;
const Info = styled.div`
  ${tw`flex items-center w-full mb-4 bg-white h-14`}
`;
const InfoItem = styled.div`
  ${tw`flex ml-3 mr-10 `}
`;
const Text = styled.span`
  ${tw`ml-4 text-base font-medium text-black`}
`;
const Paragraph = styled.p`
  ${tw`mt-6 mb-8 text-base font-normal leading-5 text-black`}
`;

const Description = () => {
  const descParagraph =
    "Ngôi làng du lịch nổi tiếng cách trung tâm thành phố Đà Lạt khoảng  20 km, trong một hòn đảo nhỏ và hút khách đông đảo mỗi ngày. Làng Cù Nơi ở Suối Cạn, xã Lát, huyện Lạc Dương (tỉnh Lâm Đồng), rộng hơn 20 ha. Ngay đây là một con suối, là nguồn nước chính cho ngôi làng K'ho sinh sinh sống. Từ trung tâm đến thành phố Đà Lạt khoảng 20 km. Đây là một phần của đường Đông Trường Sơn nối liền TP Đà Lạt và tỉnh Đak Lak. Làng Cù Lần là khu vực sinh thái đầu tiên và có rõ ràng rõ ràng sơ đồ tại khu vực Lạc Dương kể từ khi chủ thầu đầu tiên, một kiến ​​thức về tạo thân kiến ​​nhưng hài hòa. Du khách có thể trải qua những cảm giác mạnh mẽ khi băng thông qua các địa hình bất ngờ của các đồi núi, nước suối, các cánh rừng được chăm chút, tái sinh màu xanh lá cây và sống mới. Ngôi làng nhỏ này được cho là lấy tên từ một cây cọ xen kẽ ở rừng núi, đồng thời từ các tạp chí động vật quý hiếm trong Sách Đỏ.";
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
        <Title>Làng Cù Lần</Title>
        <Info>
          <InfoItem>
            <MoneyIcon />
            <Text>Từ 60.000 đ / 90 phút</Text>
          </InfoItem>
          <InfoItem>
            <ClockIcon />
            <Text>Mở cửa: 8:00 AM - 5:00 PM</Text>
          </InfoItem>
        </Info>
        <Info>
          <InfoItem>
            <AddressIcon />
            <Text>Địa chỉ: ĐT722 Xã Lát, Huyện Lạc Dương, Tỉnh Lâm Đồng</Text>
          </InfoItem>
        </Info>
        <Paragraph>
          {isReadMore ? descParagraph.slice(0, 400) : descParagraph}
        </Paragraph>
        {descParagraph.length > 400 && (
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
