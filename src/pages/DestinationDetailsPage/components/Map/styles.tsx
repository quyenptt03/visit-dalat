import styled from "styled-components";
import tw from "twin.macro";
import "leaflet/dist/leaflet.css";

export const Container = styled.div`
  ${tw`w-full `}
`;
export const Title = styled.h3`
  ${tw`mb-8 text-xl font-bold text-center text-black tablet:mb-16 tablet:text-3xl 3xl:text-4xl`}
`;
export const Image = styled.img``;
export const PopUpContent = styled.div`
  ${tw`w-40`}
`;
