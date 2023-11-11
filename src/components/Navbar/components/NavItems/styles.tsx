import styled from "styled-components";
import tw from "twin.macro";

export const ListContainer = styled.ul`
  ${tw`
    laptop:flex
    list-none
    justify-center
    items-center
    transition-all duration-500 ease-in
  `}
`;
