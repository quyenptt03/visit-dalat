import styled from "styled-components";
import tw from "twin.macro";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

export const NavbarContainer = styled.div`
  ${tw`fixed top-0 z-10 flex items-center justify-between w-full h-24 pl-20 pr-32 mx-auto /*border-b border-b-light-blue*/`}
`;
export const NavbarContainer2 = styled.div`
  ${tw`fixed top-0 z-10 flex items-center justify-between w-full h-24 pl-20 pr-32 mx-auto bg-white border-b border-b-light-blue`}
`;
export const NavarRightSide = styled.div`
  ${tw`flex `}
`;

export const Icon = styled.button`
  ${tw` mr-11`}
`;
export const SearchIconContainer = styled(SearchIcon)`
  ${tw`stroke-black`}
`;
