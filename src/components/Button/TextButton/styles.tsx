import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`
    uppercase
    font-semibold
    outline-none
    border-2
    rounded-lg
    focus:outline-none
    transition-all
    duration-200
    ease-linear
  `}
`;

export const BlackOutlineButton = styled(BaseButton)`
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  ${tw`
    px-4
    text-black
    text-lg
    border-black
    leading-5
    border-solid
    hover:text-green
    hover:bg-light-blue
    hover:border-transparent
  `}
`;

export const FilledButton = styled(BaseButton)`
  ${tw`
    text-green
    bg-light-blue
    px-12
    py-6
  `}
`;
