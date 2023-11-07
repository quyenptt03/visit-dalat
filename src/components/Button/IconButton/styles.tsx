import styled from "styled-components";
import tw from "twin.macro";

export const ButtonContainer = styled.button`
  ${tw`flex items-center justify-center transition-all ease-linear w-11 h-11 3xl:w-11 3xl:h-11 2xl:w-10 2xl:h-10 bg-secondary hover:bg-baby-blue disabled:opacity-40 text-primary`}
`;

export const SwiperButton = styled(ButtonContainer)`
  ${tw`rounded-lg`}
`;

export const SaveButton = styled(ButtonContainer)`
  ${tw`3xl:w-12 3xl:h-12 rounded-tl-lg rounded-br-lg h-11 w-11`}
`;

export const BackToTopButton = styled(ButtonContainer)`
  ${tw`w-10 h-10 text-white rounded-lg bg-primary 3xl:w-12 3xl:h-12`}
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
