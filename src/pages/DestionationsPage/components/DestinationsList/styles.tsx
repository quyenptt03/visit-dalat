import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`grid grid-cols-12 mx-11`}
`;
export const List = styled.div`
  ${tw` col-span-8 col-start-3 grid grid-cols-3 gap-7`}
`;
export const ListCol = styled.div`
  ${tw``}
`;
export const PaginationContainer = styled.div`
  ${tw`col-span-8 col-start-3 grid mt-14`}
`;
