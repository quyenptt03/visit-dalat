import styled from "styled-components";
import tw from "twin.macro";

import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

interface NavbarProps {
  $open?: boolean;
}

export const NavbarContainer = styled.div`
  ${tw`fixed top-0 z-30 flex items-center justify-between w-full h-24 pl-20 pr-32 mx-auto /*border-b border-b-secondary*/`}
`;

export const NavbarContainer2 = styled.div<{ $open?: boolean }>`
  ${tw` laptop:py-0 bg-white fixed top-0 z-50 laptop:flex laptop:items-center w-full tablet:h-20 3xl:h-24 h-20 laptop:pl-20 laptop:pr-32 mx-auto  /* border-b border-b-secondary*/ justify-between`}
  background: ${(props: NavbarProps) =>
    props.$open === true ? "var(--secondary-color)" : "#fff"};
`;
export const NavarRightSide = styled.div`
  ${tw`flex items-center w-full mb-20 justify-evenly laptop:w-auto laptop:justify-normal laptop:mb-0`}
`;

export const Icon = styled.button`
  ${tw`absolute laptop:mr-11 top-8 right-4 laptop:hidden`}
  svg {
    ${tw`w-8 h-8`}
  }
`;
export const SearchIconContainer = styled(SearchIcon)`
  ${tw`hidden stroke-black laptop:w-5 laptop:h-5 3xl:w-full 3xl:h-full laptop:block`}
`;
export const WishListContainer = styled.a`
  ${tw`laptop:mr-11`}
  svg {
    ${tw`w-7 h-7 stroke-black `}
  }
  svg path {
    ${tw`stroke-[1.5]`}
  }
`;

export const Nav = styled.div`
  ${tw`flex flex-col items-center justify-around w-full h-screen mt-3 transition-all duration-300 ease-linear laptop:justify-between laptop:w-2/3 laptop:flex-row laptop:bg-white bg-secondary laptop:h-full laptop:mt-0 laptop:translate-x-0`}
  transform: ${(props: NavbarProps) =>
    props.$open === true ? "translateX(0)" : "translateX(100%);"};
`;

export const LanguageContainer = styled.div`
  ${tw`flex items-center col-span-6 mr-5 laptop:text-sm`}
`;
export const Language = styled.select`
  ${tw`text-lg font-semibold bg-transparent outline-none appearance-none cursor-pointer text-primary`}
`;
export const LanguageOptions = styled.option`
  ${tw`text-base font-bold text-black uppercase laptop:text-lg`}
`;
export const LanguageLabel = styled.label`
  ${tw`mr-3 text-black`}
`;
export const UserContainer = styled.div`
  ${tw`relative`}
`;
export const AvatarContainer = styled.button`
  ${tw`w-10 h-10 rounded-full`}
`;
export const Avatar = styled.img`
  ${tw`w-full h-full rounded-full `}
`;
