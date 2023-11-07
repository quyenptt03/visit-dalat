import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`mb-16 text-center laptop:mb-12 `}
`;
export const Field = styled.h4`
  ${tw`
      uppercase
      font-semibold
      3xl:tracking-[0.7em] 
      tracking-[0.4em] 
      text-dark-gray
      3xl:mb-7
      laptop:tracking-[0.5em]
      laptop:mb-6
      mb-4
  `}
`;
export const Title = styled.h1`
  ${tw`text-2xl font-bold text-black 3xl:text-4xl laptop:text-3xl`}
`;
