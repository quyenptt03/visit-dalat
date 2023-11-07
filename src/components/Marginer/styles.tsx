import styled from "styled-components";
import tw from "twin.macro";

export const SectionMargin = styled.div`
  ${tw`py-8 3xl:py-20 laptop:py-16 tablet:py-12`}
  background-color: ${(props: { background: boolean }) =>
    props.background === true ? "#F1F8FF" : "#FFFFFF"}
`;
