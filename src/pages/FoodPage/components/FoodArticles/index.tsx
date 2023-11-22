import HotelCard from "../../../../components/Hotel";
import data from "../../../../data/foods.json";
import { Container, ItemContainer } from "./styles";

const FoodArticles = () => {
  return (
    <Container>
      {data.foodArticles.map((item) => (
        <ItemContainer>
          <HotelCard title={item.title} imgSrc={item.imgSrc} star={0} />
        </ItemContainer>
      ))}
    </Container>
  );
};

export default FoodArticles;
