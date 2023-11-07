import styled from "styled-components";
import tw from "twin.macro";

export const CarouselContainer = styled.div`
  ${tw`3xl:mx-32 laptop:mx-24`};
`;

export const SliderContainer = styled.div`
  ${tw`mt-5 3xl:mt-7`};
`;

export const SwiperBtns = styled.div`
  ${tw`flex justify-end mr-5 `}
`;

export const NextButtonContainer = styled.div`
  ${tw`ml-5`}
`;
export const ItemContainer = styled.div`
  ${tw`w-full tablet:w-1/2 3xl:w-1/3`}
`;
