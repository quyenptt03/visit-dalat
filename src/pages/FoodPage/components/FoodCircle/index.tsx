import { Container, Item, Image, Title } from "./styles";

interface CircleProps {
  img: string;
  title: string;
}

const FoodCircle = (props: CircleProps) => {
  const { img, title } = props;
  return (
    <Container>
      <Item>
        <Image src={img} alt="food-cicle" />
      </Item>
      <Title>{title}</Title>
    </Container>
  );
};

export default FoodCircle;
