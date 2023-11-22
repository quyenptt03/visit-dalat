import tw from "twin.macro";
import styled from "styled-components";
import data from "../../../../data/foods.json";
import HotelCard from "../../../../components/Hotel";
import { Container, ItemContainer } from "./styles";

const FoodList = () => {
  return (
    <Container>
      {data.foods.map((item) => (
        <ItemContainer>
          <HotelCard
            key={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            star={0}
          />
        </ItemContainer>
      ))}
    </Container>
  );
};

export default FoodList;
