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
          "https://iso.500px.com/wp-content/uploads/2022/09/Honister-Pass-By-Daniel-Casson-2.jpeg"
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
