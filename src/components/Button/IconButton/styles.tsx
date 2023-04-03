import styled from "styled-components";
import tw from "twin.macro";

export const ButtonContainer = styled.button`
  ${tw`flex items-center justify-center w-12 h-12 transition-all duration-100 ease-linear bg-light-blue hover:bg-baby-blue `}
`;

export const SwiperButton = styled(ButtonContainer)`
  ${tw`rounded-lg`}
`;

export const SaveButton = styled(ButtonContainer)`
  ${tw`rounded-tl-lg rounded-br-lg`}
`;

export const IconContainer = styled.div`
  ${tw` text-green`}
  svg {
    stroke: #1d764a;
  }
`;
