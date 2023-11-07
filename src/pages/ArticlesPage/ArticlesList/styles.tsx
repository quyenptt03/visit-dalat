import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid grid-cols-12 3xl:mx-11 2xl:mx-36 2xl:my-16 my-7 mx-5`}
`;
export const List = styled.div`
  ${tw`col-span-12 tablet:col-span-10 tablet:col-start-2 3xl:col-span-8 3xl:col-start-3 grid grid-cols-6 2xl:gap-3 3xl:gap-0`}
`;
export const ListCol = styled.div`
  ${tw`col-span-6 tablet:col-span-3 desktop:col-span-2`}
`;
export const FilterContainer = styled.div`
  ${tw`mx-5 col-span-12 tablet:col-span-10 tablet:col-start-2 3xl:col-span-8 3xl:col-start-3 mb-8`}
`;
export const PaginationContainer = styled.div`
  ${tw`col-span-8 col-start-3 grid mt-14`}
`;
export const CategoriesContainer = styled.div`
  ${tw``}
`;
export const SearchContainer = styled.div`
  ${tw`mb-8 3xl:w-2/5 w-full desktop:w-1/2`}
`;
export const TitleContainer = styled.div`
  ${tw`flex mb-5`}
`;
export const Title = styled.h5`
  ${tw`text-black font-bold `}
`;
export const ClearBtn = styled.button`
  ${tw`text-sm font-bold text-primary ml-7 items-center`}
`;
