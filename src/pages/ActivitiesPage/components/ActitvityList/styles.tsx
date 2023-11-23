import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-wrap mx-0 3xl:mx-52 2xl:mx-28 laptop:mx-2`}
`;
const ItemContainer = styled.div`
  ${tw`w-1/4 mb-10`}
`;

export { Container, ItemContainer };
