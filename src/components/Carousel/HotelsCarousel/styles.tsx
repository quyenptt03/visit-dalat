import styled from "styled-components";
import tw from "twin.macro";

export const CarouselContainer = styled.div`
  ${tw`xxl:mx-32 laptop:mx-24`};
`;

export const SliderContainer = styled.div`
  ${tw`mt-5  xxl:mt-7`};
`;

export const SwiperBtns = styled.div`
  ${tw`flex justify-end mr-5 `}
`;

export const NextButtonContainer = styled.div`
  ${tw`ml-5`}
`;
export const ItemContainer = styled.div`
  ${tw`w-full tablet:w-1/2 xxl:w-1/3`}
`;
