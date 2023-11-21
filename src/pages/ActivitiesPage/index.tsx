import BackToTopButton from "../../components/BackToTopButton";
import Background from "../../components/Background";
import { HotelsCarousel } from "../../components/Carousel";
import Footer from "../../components/Footer";
import { SectionMarginer } from "../../components/Marginer";
import Navbar from "../../components/Navbar";
import SectionHeader from "../../components/SectionHeader";
import ActivityList from "./components/ActitvityList";
import Cards from "./components/Cards";
import ActivityArticles from "./components/ActivityArticles";

const ActivitiesPage = () => {
  return (
    <>
      <Navbar />
      <Background
        title={"Những hoạt động đáng trải nghiệm"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
        }
        img={
          "https://glamptrip.vn/wp-content/uploads/2022/07/291030700_369215465325874_5477922491951934741_n.jpg"
        }
      />
      <SectionMarginer>
        <SectionHeader
          field={"Hoạt động"}
          title={"TOP những hoạt động nên trải nghiệm"}
        />
        <ActivityList />
      </SectionMarginer>
      <SectionMarginer background={true}>
        <Cards />
      </SectionMarginer>
      <SectionMarginer>
        <SectionHeader field="Hoạt động" title={"Lorem ipsum dolor sit amet"} />
        <ActivityArticles />
      </SectionMarginer>
      <SectionMarginer background={true}>
        <SectionHeader field={"Địa điểm"} title={"Địa điểm trải nghiệm"} />
        <HotelsCarousel showSeeMoreBtn={true} />
      </SectionMarginer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ActivitiesPage;
