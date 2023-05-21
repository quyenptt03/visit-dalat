import styled from "styled-components";
import tw from "twin.macro";

export const SectionMargin = styled.div`
  ${tw`py-20`}
  background-color: ${(props: { background: boolean }) =>
    props.background === true ? "#F1F8FF" : "#FFFFFF"}
`;
