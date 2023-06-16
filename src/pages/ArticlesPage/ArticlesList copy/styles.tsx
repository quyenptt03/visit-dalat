import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid grid-cols-12 mx-11 my-16`}
`;
export const List = styled.div`
  ${tw` col-span-8 col-start-3 grid grid-cols-3 gap-7`}
`;
export const ListCol = styled.div`
  ${tw``}
`;
export const FilterContainer = styled.div`
  ${tw`col-span-8 col-start-3 mb-8`}
`;
export const PaginationContainer = styled.div`
  ${tw`col-span-8 col-start-3 grid mt-14`}
`;
export const CategoriesContainer = styled.div`
  ${tw``}
`;
export const SearchContainer = styled.div`
  ${tw`mb-8 w-2/5 `}
`;
export const TitleContainer = styled.div`
  ${tw`flex mb-5`}
`;
export const Title = styled.h5`
  ${tw`text-black font-bold `}
`;
export const ClearBtn = styled.button`
  ${tw`text-sm font-bold text-green ml-7 items-center`}
`;
