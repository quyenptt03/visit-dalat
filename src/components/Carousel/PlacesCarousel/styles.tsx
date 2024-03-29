import styled from "styled-components";
import tw from "twin.macro";

export const CarouselContainer = styled.div`
  ${tw`relative`}
`;
export const SwiperBtns = styled.div`
  ${tw`absolute 3xl:right-[132px] 3xl:bottom-32 z-[1] laptop:bottom-24 laptop:right-[108px] laptop:flex hidden`}
`;
export const NextButtonContainer = styled.div`
  ${tw`ml-5`}
`;
