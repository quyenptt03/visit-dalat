import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`flex min-h-[80vh] flex-col laptop:flex-row`}
`;

export const PlaceDescription = styled.div`
  ${tw`w-full laptop:w-1/2`}
`;
export const Images = styled.div`
  ${tw`w-full h-full laptop:w-1/2`}
`;
