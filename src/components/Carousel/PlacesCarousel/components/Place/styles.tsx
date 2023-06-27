import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as ForwardIcon } from "../../../../../assets/icons/forward-icon.svg";
const PlaceContainer = styled.div`
  ${tw`relative w-full h-screen`}
`;
const Image = styled.img`
  ${tw`absolute inset-0 object-cover w-full h-full bg-black brightness-75`}
`;
const Wrapper = styled.div`
  ${tw`flex justify-between w-full h-full `}
`;
const ContentWrapper = styled.div`
  ${tw`w-1/3 xxl:ml-56 text-white xxl:mt-44 z-[1] laptop:ml-44 laptop:mt-36`}
`;
const Field = styled.span`
  ${tw`
    xxl:text-base
    laptop:text-[13px]
    laptop:tracking-[0.5em]
    font-semibold
    uppercase
    xxl:tracking-[0.7em]
  `}
  text-shadow: 1px 1px 10px #000000;
`;
const Title = styled.h2`
  ${tw`font-black capitalize xxl:mt-8 xxl:text-6xl laptop:mt-6 laptop:text-5xl`}
  text-shadow: 1px 1px 10px #000000;
`;
const Paragraph = styled.p`
  ${tw`font-semibold xxl:mt-8 xxl:text-xl mb-14 laptop:mb-11 laptop:text-base`}
  text-shadow: 1px 1px 10px #000000;
`;

const MapContainer = styled.img`
  ${tw`z-[1] xxl:max-w-[820px] mb-[5%] laptop:max-w-screen-tablet`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center`}
`;
const ButtonText = styled.span`
  ${tw`mr-5 font-bold xxl:text-xl laptop:text-base`}
`;
const ForwardIconContainer = styled(ForwardIcon)`
  ${tw` stroke-primary`}
`;

export {
  PlaceContainer,
  Image,
  Wrapper,
  ContentWrapper,
  Field,
  Title,
  Paragraph,
  MapContainer,
  ButtonContent,
  ButtonText,
  ForwardIconContainer,
};
