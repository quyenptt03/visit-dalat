import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
  ${tw`mb-16 text-center laptop:mb-12`}
`;
export const Field = styled.h4`
  ${tw`
      uppercase
      font-semibold
      xxl:tracking-[0.7em]  
      text-dark-gray
      xxl:mb-7
      laptop:tracking-[0.5em]
      laptop:mb-6
  `}
`;
export const Title = styled.h1`
  ${tw`font-bold text-black xxl:text-4xl laptop:text-3xl`}
`;
