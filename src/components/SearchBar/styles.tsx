import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.form`
  ${tw`flex border-b-[1px] border-b-gray py-3 w-full`}
`;
const InputSpan = styled.span`
  ${tw`mr-5`}
  svg {
    ${tw`w-5 h-5`}
  }
`;
const Input = styled.input`
  ${tw`w-full text-sm font-medium placeholder:text-sm placeholder:font-semibold focus:outline-none `}
`;

export { Container, InputSpan, Input };
