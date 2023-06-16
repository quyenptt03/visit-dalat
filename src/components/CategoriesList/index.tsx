import { useAppSelector } from "../../redux/hook";
import { ReactComponent as CloseIcon } from "../../assets/icons/x-icon.svg";
import {
  Title,
  Container,
  CategoryItem,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxName,
  NumOfArticles,
  CloseBtnContainer,
} from "./styles";

const CategoriesList = ({ handleCategoryCheck, isChecked }: any) => {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <>
      <Title>Chọn một phân loại</Title>
      <Container>
        {categories?.map((category) => (
          <CategoryItem key={category._id}>
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                id={category.slug}
                name={category.slug}
                onChange={handleCategoryCheck}
              />
              <CheckboxLabel htmlFor={category.slug}>
                <CheckboxName>{category.name}</CheckboxName>
                <NumOfArticles>{`(${category.numOfArticles})`}</NumOfArticles>
                {isChecked(category.slug) && (
                  <CloseBtnContainer>
                    <CloseIcon />
                  </CloseBtnContainer>
                )}
              </CheckboxLabel>
            </CheckboxContainer>
          </CategoryItem>
        ))}
      </Container>
    </>
  );
};

export default CategoriesList;
