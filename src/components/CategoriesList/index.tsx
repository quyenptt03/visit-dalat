import { useTranslation } from "react-i18next";
import { ReactComponent as CloseIcon } from "../../assets/icons/x-icon.svg";
import { useAppSelector } from "../../redux/hook";
import {
  CategoryItem,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  CheckboxName,
  CloseBtnContainer,
  Container,
  NumOfArticles,
  Title,
} from "./styles";

const CategoriesList = ({ handleCategoryCheck, isChecked }: any) => {
  const { t } = useTranslation("articles");

  const { categories } = useAppSelector((state) => state.categories);
  return (
    <>
      <Title>{t("select category")}</Title>
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
