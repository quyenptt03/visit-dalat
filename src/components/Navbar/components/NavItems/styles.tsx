import styled from "styled-components";
import tw from "twin.macro";
interface NavbarProps {
  $open?: boolean;
}
export const ListContainer = styled.ul`
  ${tw`
    laptop:flex
    list-none
    // laptop:w-[38%]
    justify-center
    items-center
    transition-all duration-500 ease-in
  `}
`;
