import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.li`
  ${tw`flex flex-col `}
`;
export const NavItemText = styled.a`
  ${tw`text-base font-semibold text-black uppercase transition-all duration-200 ease-linear cursor-pointer `}}
`;
export const UnderLine = styled.span<{ isHovered: boolean }>`
  height: 2px;
  ${tw`invisible w-1/2 mx-auto transition-all duration-200 ease-linear bg-green`}

  ${({ isHovered }: { isHovered: boolean }) => isHovered && tw`visible `}
`;
