import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`font-semibold uppercase transition-all duration-200 ease-linear border-2 rounded-lg outline-none focus:outline-none`}
`;

export const BlackOutlineButton = styled(BaseButton)`
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  ${tw`px-4 text-lg leading-5 text-black border-black border-solid hover:text-green hover:bg-light-blue hover:border-transparent`}
`;

export const WhiteOutlineButton = styled(BaseButton)`
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  ${tw`px-4 text-base leading-5 text-white border-white border-solid hover:text-green hover:bg-light-blue hover:border-transparent`}
`;

export const FilledButton = styled(BaseButton)`
  ${tw`px-12 py-6 border-transparent text-green bg-light-blue`}
`;

export const NoOutlineButton = styled(BaseButton)`
  ${tw`px-6 py-4 capitalize bg-transparent border-none text-green hover:bg-white`}
`;
