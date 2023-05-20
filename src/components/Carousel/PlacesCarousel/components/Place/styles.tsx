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
  ${tw`w-1/3 ml-56 text-white mt-44 z-[1]`}
`;
const Field = styled.span`
  ${tw`
    text-base
    font-semibold
    uppercase
    tracking-[0.7em]
  `}
  text-shadow: 1px 1px 10px #000000;
`;
const Title = styled.h2`
  ${tw`mt-8 text-6xl font-black capitalize`}
  text-shadow: 1px 1px 10px #000000;
`;
const Paragraph = styled.p`
  ${tw`mt-8 text-xl font-semibold mb-14`}
  text-shadow: 1px 1px 10px #000000;
`;

const MapContainer = styled.img`
  ${tw`z-[1] max-w-[820px] mb-[5%]`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center`}
`;
const ButtonText = styled.span`
  ${tw`mr-5 text-xl font-bold`}
`;
const ForwardIconContainer = styled(ForwardIcon)`
  ${tw` stroke-green`}
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
