import React from "react";
import { TextButton } from "../../../../Button";
import {
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
} from "./styles";

interface IPlaceProps {
  field?: string;
  title: string;
  p: string;
  imageAdr: string;
  mapImg?: string;
  showBtn: boolean;
}

const Place = (props: IPlaceProps) => {
  const { field, title, p, imageAdr, mapImg, showBtn } = props;
  return (
    <PlaceContainer>
      <Image src={imageAdr} alt="place" />
      <Wrapper>
        <ContentWrapper>
          <Field>{field}</Field>
          <Title>{title}</Title>
          <Paragraph>{p}</Paragraph>
          {showBtn && (
            <TextButton theme="filled">
              <ButtonContent>
                <ButtonText>Khám phá</ButtonText>
                <ForwardIconContainer />
              </ButtonContent>
            </TextButton>
          )}
        </ContentWrapper>
        <MapContainer src={mapImg} />
      </Wrapper>
    </PlaceContainer>
  );
};

export default Place;
