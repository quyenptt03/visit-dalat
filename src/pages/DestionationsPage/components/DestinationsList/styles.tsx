import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid grid-cols-12 mx-5 laptop:mx-11 3xl:mx-11 2xl:mx-36`}
`;
export const List = styled.div`
  ${tw`grid grid-cols-6 col-span-12 tablet:col-span-10 tablet:col-start-2 3xl:col-span-8 3xl:col-start-3 2xl:gap-3 3xl:gap-0`}
`;
export const ListCol = styled.div`
  ${tw`col-span-6 tablet:col-span-3 desktop:col-span-2`}
`;
export const PaginationContainer = styled.div`
  ${tw`grid col-span-8 col-start-3 mt-14`}
`;
