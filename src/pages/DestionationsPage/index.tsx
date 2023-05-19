import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DestinationsList from "./components/DestinationsList";
import Background from "../../components/Background";
import bgImg from "../../assets/images/destination-home.png";
import SectionHeader from "../../components/SectionHeader";
import { SectionMarginer } from "../../components/Marginer";
const DestinationsPage = () => {
  return (
    <div>
      <Navbar />
      <Background
        title="Địa Điểm Nổi Bật Ở Đà Lạt"
        subtitle="Lorrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
        img={bgImg}
      />
      <SectionMarginer>
        <SectionHeader
          field="Địa điểm"
          title="Những Địa Điểm Du Lịch ở Đà Lạt"
        />
        <DestinationsList />
      </SectionMarginer>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
