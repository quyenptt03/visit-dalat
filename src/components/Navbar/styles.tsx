import styled from "styled-components";
import tw from "twin.macro";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

export const NavbarContainer = styled.div`
  ${tw`
    mx-auto
    pl-20
    pr-32
    h-24
    w-full
    flex
    items-center
    border-b-light-blue
    border-b
    justify-between
  `}
`;
export const NavarRightSide = styled.div`
  ${tw`
    flex
  `}
`;

export const Icon = styled.button`
  ${tw`
    mr-11
  `}
`;
export const SearchIconContainer = styled(SearchIcon)`
  ${tw`
  `}
`;
