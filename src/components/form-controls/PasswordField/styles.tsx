import styled from "styled-components";
import tw from "twin.macro";
const Container = styled.fieldset`
  ${tw`min-h-[7rem] `}
`;
const Label = styled.label`
  ${tw`text-base capitalize`}
`;
const InputContainer = styled.div`
  ${tw`relative flex items-center w-full`}
`;
const Input = styled.input`
  ${tw`py-4 px-6 rounded-lg mt-2 border-solid border-[0.6px] text-sm w-full focus:outline-none`}
  border-color: ${(props: { $hasError: boolean }) =>
    props.$hasError === true ? "#DC2626" : "#222222"}
`;
const Notification = styled.p`
  ${tw`mt-1 text-sm text-red-600`}
`;
const IconButton = styled.div`
  ${tw`absolute mt-1 right-3`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

export { Container, Label, InputContainer, Input, Notification, IconButton };
