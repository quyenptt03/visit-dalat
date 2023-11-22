import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-wrap mx-0 3xl:mx-52 2xl:mx-28 laptop:mx-2`}
`;
const ItemContainer = styled.div`
  ${tw`w-full tablet:w-1/2 2xl:w-1/3 3xl:h-[323px] laptop:h-72 2xl:h-64 h-56 mb-28`}
`;

export { Container, ItemContainer };
