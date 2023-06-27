import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`font-semibold uppercase transition-all duration-200 ease-linear border-2 rounded-lg outline-none focus:outline-none`}
`;

export const BlackOutlineButton = styled(BaseButton)`
  ${tw`px-4 leading-5 text-black border-black border-solid xxl:text-lg laptop:py-3 laptop:text-sm hover:text-primary hover:bg-light-blue hover:border-transparent`}
`;

export const WhiteOutlineButton = styled(BaseButton)`
  ${tw`px-4 leading-5 text-white border-white border-solid xxl:text-base laptop:py-3 laptop:text-sm hover:text-primary hover:bg-light-blue hover:border-transparent`}
`;

export const FilledButton = styled(BaseButton)`
  ${tw`border-transparent xxl:px-12 xxl:py-6 text-primary bg-light-blue laptop:px-10 laptop:py-5`}
`;

export const NoOutlineButton = styled(BaseButton)`
  ${tw`px-6 py-4 capitalize bg-transparent border-none text-primary hover:bg-white`}
`;
