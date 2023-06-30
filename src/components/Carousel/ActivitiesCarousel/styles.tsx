import styled from "styled-components";
import tw from "twin.macro";

export const CarouselContainer = styled.div`
  ${tw`mx-0 xxl:mx-52 laptop:mx-20`};
`;

export const SliderContainer = styled.div`
  ${tw` mt-7`};
`;

export const SwiperBtns = styled.div`
  ${tw`flex justify-end `}
`;

export const NextButtonContainer = styled.div`
  ${tw`ml-5 mr-3 `}
`;

export const ItemContainer = styled.div`
  ${tw`w-full tablet:w-1/2 xxl:w-1/4 laptop:w-1/3`}
`;
