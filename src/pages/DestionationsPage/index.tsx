import DestinationsList from "./components/DestinationsList";
import Background from "../../components/Background";
import bgImg from "../../assets/images/destination-home.png";
import SectionHeader from "../../components/SectionHeader";
import { SectionMarginer } from "../../components/Marginer";
import BackToTopButton from "../../components/BackToTopButton";
import { HotelsCarousel } from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
const DestinationsPage = () => {
  const { t } = useTranslation("destinations");
  return (
    <>
      <Navbar />
      <Background
        title={t("hero image.title")}
        subtitle={t("hero image.subtitle")}
        img={bgImg}
      />
      <SectionMarginer>
        <SectionHeader
          field={t("destinations.field")}
          title={t("destinations.title")}
        />
        <DestinationsList />
      </SectionMarginer>
      <SectionMarginer background={true}>
        <SectionHeader
          field={t("places to stay.places to stay")}
          title={t("places to stay.best places to stay in Dalat")}
        />
        <HotelsCarousel />
      </SectionMarginer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default DestinationsPage;
