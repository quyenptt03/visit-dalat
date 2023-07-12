import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.fieldset`
  ${tw`h-28`}
`;
const Label = styled.label`
  ${tw`text-base capitalize `}
`;
const InputContainer = styled.div`
  ${tw``}
`;
const Input = styled.input`
  ${tw`py-4 px-6 rounded-lg mt-2 border-solid border-[0.6px] text-sm w-full focus:outline-none`}
  border-color: ${(props: { $hasError: boolean }) =>
    props.$hasError === true ? "#DC2626" : "#222222"}
`;
const Notification = styled.p`
  ${tw`text-sm text-red-600 mt-1`}
`;

export { Container, Label, InputContainer, Input, Notification };
