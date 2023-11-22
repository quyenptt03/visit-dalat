import BackToTopButton from "../../components/BackToTopButton";
import Background from "../../components/Background";
import { HotelsCarousel } from "../../components/Carousel";
import Footer from "../../components/Footer";
import { SectionMarginer } from "../../components/Marginer";
import Navbar from "../../components/Navbar";
import SectionHeader from "../../components/SectionHeader";
import FoodList from "./components/FoodList";
import FoodCircles from "./components/FoodCircles";
import FoodArticles from "./components/FoodArticles";
import {
  SubTitle,
  SectionSearch,
  SearchButton,
  SearchInput,
  SearchIconContainer,
} from "./styles";
import data from "../../data/foods.json";

const FoodPage = () => {
  return (
    <>
      <Navbar />
      <Background
        title={"Ẩm thực"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
        }
        img={
          "https://anestisxasapotaverna.gr/wp-content/uploads/2021/12/ARTICLE-1.jpg"
        }
      />
      <SectionMarginer>
        <SectionHeader field={"Ẩm thực"} title={"Món ngon Đà Lạt"} />
        <FoodList />
      </SectionMarginer>

      <SectionMarginer>
        <SectionHeader field={"Lorem"} title={"Lorem ipsum dolor"} />
        <FoodCircles />
      </SectionMarginer>
      <SectionMarginer background={true}>
        <SectionHeader field={""} title={"Bếp ngon gia đình Việt"} />

        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,incididunt ut
          labore et dolor.
        </SubTitle>
        <SectionSearch>
          <SearchInput type="text" placeholder="Search..." name="search" />
          <SearchButton>
            <SearchIconContainer />
          </SearchButton>
        </SectionSearch>
      </SectionMarginer>
      <SectionMarginer>
        <SectionHeader field={"Lorem"} title={"Lorem ipsum dolor"} />
        <FoodArticles />
      </SectionMarginer>
      <SectionMarginer>
        <SectionHeader field="Ẩm thực" title="Các quán ăn nên trải nghiệm" />
        <HotelsCarousel
          hotelsInfo={data.featuredRestaurants}
          showSeeMoreBtn={false}
        />
      </SectionMarginer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default FoodPage;
