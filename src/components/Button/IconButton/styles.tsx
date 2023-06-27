import styled from "styled-components";
import tw from "twin.macro";

export const ButtonContainer = styled.button`
  ${tw`flex items-center justify-center transition-all ease-linear w-11 h-11 bg-light-blue hover:bg-baby-blue disabled:opacity-40 text-primary`}
`;

export const SwiperButton = styled(ButtonContainer)`
  ${tw`rounded-lg`}
`;

export const SaveButton = styled(ButtonContainer)`
  ${tw`w-12 h-12 rounded-tl-lg rounded-br-lg`}
`;

export const BackToTopButton = styled(ButtonContainer)`
  ${tw`w-12 h-12 text-white rounded-lg bg-primary `}
  svg {
    stroke: white !important;
    transition: all 0.5s ease;
  }
  &:hover svg {
    color: #1d764a !important;
  }
`;

export const IconContainer = styled.div`
  ${tw``}
  svg {
    stroke: #1d764a;
  }
`;
