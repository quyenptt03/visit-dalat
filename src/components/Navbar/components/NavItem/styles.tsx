import styled from "styled-components";
import tw from "twin.macro";

interface IUnderlineProps {
  isHovered: boolean;
}

export const Container = styled.li`
  ${tw`
    flex
    flex-col
  `}
`;
export const NavItemText = styled.a`
  ${tw`
    text-black
    uppercase
    font-semibold
    text-lg
    cursor-pointer
    hover:text-green
    transition-all
    duration-200
    ease-linear
  `}}
`;
export const UnderLine = styled.span<IUnderlineProps>`
  height: 2px;
  ${tw`
    w-1/2
    mx-auto
    bg-green
    transition-all
    duration-200
    ease-linear
    invisible
  `}
  ${({ isHovered }) =>
    isHovered &&
    tw`
      visible
    `}
`;
