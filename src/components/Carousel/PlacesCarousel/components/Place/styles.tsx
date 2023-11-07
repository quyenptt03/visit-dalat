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
  ${tw`flex flex-col justify-between w-full h-full laptop:flex-row`}
`;
const ContentWrapper = styled.div`
  ${tw`w-full mt-28 desktop:w-1/3 3xl:ml-56 3xl:mr-0 laptop:mr-0 text-white 3xl:mt-44 z-[1] laptop:ml-44 laptop:mt-36 laptop:p-0 px-5`}
`;
const Field = styled.span`
  ${tw`
    3xl:text-base
    text-sm
    font-semibold
    uppercase
    3xl:tracking-[0.7em]
    tracking-[0.5em]
  `}
  text-shadow: 1px 1px 10px #000000;
`;
const Title = styled.h2`
  ${tw`mt-4 text-3xl font-black capitalize 3xl:mt-8 3xl:text-6xl laptop:mt-6 laptop:text-5xl`}
  text-shadow: 1px 1px 10px #000000;
`;
const Paragraph = styled.p`
  ${tw`mt-4 text-base font-semibold 3xl:mt-8 3xl:text-xl mb-14 laptop:mb-11 tablet:mt-6`}
  text-shadow: 1px 1px 10px #000000;
`;

const MapContainer = styled.img`
  ${tw`z-[1] 3xl:max-w-[820px] mb-[5%] laptop:max-w-screen-tablet`}
`;
const ButtonContent = styled.div`
  ${tw`flex items-center justify-center`}
`;
const ButtonText = styled.span`
  ${tw`mr-5 font-bold 3xl:text-xl laptop:text-base`}
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
