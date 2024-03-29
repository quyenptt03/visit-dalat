import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`font-semibold uppercase transition-all duration-200 ease-linear border-2 rounded-lg outline-none focus:outline-none min-w-[160px]`}
`;

export const BlackOutlineButton = styled(BaseButton)`
  ${tw`px-4 py-3 leading-5 text-black border-black border-solid 3xl:text-lg laptop:text-sm hover:text-primary hover:bg-secondary hover:border-transparent`}
`;

export const WhiteOutlineButton = styled(BaseButton)`
  ${tw`px-4 leading-5 text-white border-white border-solid 3xl:text-base laptop:py-3 laptop:text-sm hover:text-primary hover:bg-secondary hover:border-transparent`}
`;

export const FilledButton = styled(BaseButton)`
  ${tw`px-8 py-4 border-transparent laptop:px-10 laptop:py-5 3xl:px-12 3xl:py-6 text-primary bg-secondary`}
`;

export const NoOutlineButton = styled(BaseButton)`
  ${tw`px-6 py-4 capitalize bg-transparent border-none text-primary hover:bg-white`}
`;
