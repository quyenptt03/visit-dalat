import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import heroImg from "../../assets/places-to-stay/home-bg.png";
import { SectionMarginer } from "../../components/Marginer";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import { HotelsCarousel } from "../../components/Carousel";
import data from "../../data/places-to-stay.json";

const PlacesToStayPage = () => {
  return (
    <>
      <Navbar />
      <Background
        title={"Nơi nghỉ chân tuyệt vời"}
        subtitle={
          "Lorrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
        }
        img={heroImg}
      />
      <SectionMarginer>
        <SectionHeader field={"Lưu trú"} title={"Khách sạn"} />
        <HotelsCarousel hotelsInfo={data.hotels} showSeeMoreBtn={false} />
      </SectionMarginer>
      <SectionMarginer background={true}>
        <SectionHeader field={"Lưu trú"} title={"Nhà nghỉ"} />
        <HotelsCarousel hotelsInfo={data.motels} showSeeMoreBtn={false} />
      </SectionMarginer>
      <SectionMarginer>
        <SectionHeader field={"Lưu trú"} title={"Homestay"} />
        <HotelsCarousel hotelsInfo={data.homestays} showSeeMoreBtn={false} />
      </SectionMarginer>
      <SectionMarginer background={true}>
        <SectionHeader field={"Lưu trú"} title={"Khu nghỉ dưỡng"} />
        <HotelsCarousel hotelsInfo={data.resorts} showSeeMoreBtn={false} />
      </SectionMarginer>
      <SectionMarginer>
        <SectionHeader field={"Lưu trú"} title={"Camping và Slamping"} />
        <HotelsCarousel
          hotelsInfo={data["camping and slamping"]}
          showSeeMoreBtn={false}
        />
      </SectionMarginer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default PlacesToStayPage;
