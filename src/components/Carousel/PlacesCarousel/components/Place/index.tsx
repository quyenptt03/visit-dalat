import React from "react";
import { Link } from "react-router-dom";
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
  url?: string;
}

const Place = (props: IPlaceProps) => {
  const { field, title, p, imageAdr, mapImg, showBtn, url } = props;
  return (
    <PlaceContainer>
      <Image src={imageAdr} alt="place" loading="lazy" />
      <Wrapper>
        <ContentWrapper>
          <Field>{field}</Field>
          <Title>{title}</Title>
          <Paragraph>{p}</Paragraph>
          {showBtn && (
            <TextButton theme="filled">
              <ButtonContent as={Link} to={url}>
                <ButtonText>Khám phá</ButtonText>
                <ForwardIconContainer />
              </ButtonContent>
            </TextButton>
          )}
        </ContentWrapper>
        <MapContainer src={mapImg} loading="lazy" />
      </Wrapper>
    </PlaceContainer>
  );
};

export default Place;
