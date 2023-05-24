import styled from "styled-components";
import tw from "twin.macro";

export const SectionMargin = styled.div`
  ${tw`xxl:py-20 laptop:py-16`}
  background-color: ${(props: { background: boolean }) =>
    props.background === true ? "#F1F8FF" : "#FFFFFF"}
`;
