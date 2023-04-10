import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import place1 from "../../../../../assets/images/place1.png";
import { TextButton } from "../../../../Button";
import { ReactComponent as Map } from "../../../../../assets/icons/dalat-map.svg";
import { ReactComponent as ForwardIcon } from "../../../../../assets/icons/forward-icon.svg";

const PlaceContainer = styled.div`
  ${tw`relative w-full h-screen`}
`;
const Image = styled.img`
  ${tw`absolute inset-0 w-full h-full`}
`;
const Wrapper = styled.div`
  ${tw`flex justify-between w-full h-full `}
`;
const ContentWrapper = styled.div`
  ${tw`w-1/3 ml-56 text-white mt-44 z-[1]`}
`;
const Field = styled.span`
  ${tw`
    text-base
    font-semibold
    uppercase
    tracking-[0.7em]
    drop-shadow-[1px 1px 10px rgba(0,0,0,0)]
  `}
`;
const Title = styled.h2`
  ${tw`text-6xl font-bold mt-8 capitalize
    drop-shadow-[1px 1px 10px rgba(0,0,0,0)]`}
`;
const Paragraph = styled.p`
  ${tw`font-semibold text-xl mt-8 mb-14
    drop-shadow-[1px 1px 10px rgba(0,0,0,0)]`}
`;

const MapContainer = styled.div`
  ${tw`z-[1] mt-[10%]`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center`}
`;
const ButtonText = styled.span`
  ${tw`mr-5 text-xl font-bold`}
`;
const ForwardIconContainer = styled(ForwardIcon)`
  ${tw` stroke-green`}
`;
const Place = () => {
  return (
    <PlaceContainer>
      <Image src={place1} alt="place" />
      <Wrapper>
        <ContentWrapper>
          <Field>Địa điểm</Field>
          <Title>Thành phố Đà Lạt</Title>
          <Paragraph>
            Bạn muốn du lịch Đà Lạt nhưng không biết bắt đầu từ đâu? Đừng lo,
            hãy để chúng tôi giới thiệu với bạn những địa điểm tuyệt vời. Tiếp
            tục cuộn ngang để tìm hiểu thêm.
          </Paragraph>
          <TextButton theme="filled">
            <ButtonContent>
              <ButtonText>Khám phá</ButtonText>
              <ForwardIconContainer />
            </ButtonContent>
          </TextButton>
        </ContentWrapper>
        <MapContainer>
          <Map />
        </MapContainer>
      </Wrapper>
    </PlaceContainer>
  );
};

export default Place;
