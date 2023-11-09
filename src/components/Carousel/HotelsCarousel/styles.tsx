import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as ForwardIcon } from "../../../assets/icons/forward-icon.svg";

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
export const Button = styled.div`
  ${tw`flex start-0 ml-3`}
`;
export const ButtonText = styled.span`
  ${tw`mr-2 font-bold 3xl:text-lg text-sm text-primary`}
`;
export const ForwardIconContainer = styled(ForwardIcon)`
  ${tw` stroke-primary  text-primary w-5 h-5`}
`;
