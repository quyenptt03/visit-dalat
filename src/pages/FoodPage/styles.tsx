import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
const SubTitle = styled.h5`
  ${tw`text-center text-lg -mt-8 font-medium`}
`;
const SectionSearch = styled.div`
  ${tw`flex justify-center mt-10 h-20`}
`;
const SearchInput = styled.input`
  ${tw`w-full laptop:w-1/2 2xl:w-1/3 pl-4 focus:outline-none text-lg font-medium`}
`;
const SearchButton = styled.button`
  ${tw`h-full w-20 bg-primary flex  justify-center items-center`}
`;
const SearchIconContainer = styled(SearchIcon)`
  ${tw`hidden stroke-white text-white laptop:w-5 laptop:h-5 3xl:w-full 3xl:h-full laptop:block`}
`;

export {
  SubTitle,
  SectionSearch,
  SearchButton,
  SearchInput,
  SearchIconContainer,
};
