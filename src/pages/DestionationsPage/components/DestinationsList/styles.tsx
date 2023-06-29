import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid grid-cols-12 mx-5 laptop:mx-11`}
`;
export const List = styled.div`
  ${tw`grid grid-cols-6 col-span-12 tablet:col-span-10 tablet:col-start-2 xxl:col-span-8 xxl:col-start-3 gap-7`}
`;
export const ListCol = styled.div`
  ${tw`col-span-6 tablet:col-span-3 desktop:col-span-2`}
`;
export const PaginationContainer = styled.div`
  ${tw`grid col-span-8 col-start-3 mt-14`}
`;
