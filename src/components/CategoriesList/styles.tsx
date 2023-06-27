import styled from "styled-components";
import tw from "twin.macro";

const Title = styled.h5`
  ${tw`text-black font-bold mb-4`}
`;
const Container = styled.div`
  ${tw` flex flex-wrap`}
`;
const CategoryItem = styled.div`
  ${tw`cursor-pointer`}
`;
const CheckboxContainer = styled.div`
  ${tw`border-solid border-[1px] border-primary rounded-3xl w-fit px-7 py-3 mr-4 mb-2 hover:bg-bg-blue flex`}
`;
const CheckboxInput = styled.input`
  ${tw`appearance-none`}
`;
const CheckboxLabel = styled.label`
  ${tw`text-primary font-bold text-sm cursor-pointer flex`}
`;
const CheckboxName = styled.span`
  ${tw`mr-1`}
`;
const NumOfArticles = styled.span`
  ${tw``}
`;
const CloseBtnContainer = styled.span`
  ${tw`ml-2 flex items-center justify-center`}

  svg {
    ${tw`stroke-2`}
  }
`;

export {
  Title,
  Container,
  CategoryItem,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxName,
  NumOfArticles,
  CloseBtnContainer,
};
