import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import ArticleListV2 from "./ArticleListV2";
import Background from "../../components/Background";
import { SectionMarginer } from "../../components/Marginer";

const ArticlePageV2 = () => {
  return (
    <>
      <Navbar />
      <Background
        title={"Bài viết"}
        subtitle={
          "Lorrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
        }
        img={
          "https://photo2.tinhte.vn/data/attachment-files/2022/09/6122275_da_lat_7.jpg"
        }
      />
      <SectionMarginer>
        <ArticleListV2 />
      </SectionMarginer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default ArticlePageV2;
