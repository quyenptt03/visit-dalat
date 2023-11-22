import { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { useLocation } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopButton";
import Footer from "../../components/Footer";
import { SectionMarginer } from "../../components/Marginer";
import Navbar from "../../components/Navbar";
import { getSingleDestination } from "../../redux/destination/actions";
import { useAppDispatch } from "../../redux/hook";
import Details from "./components/Details";
import Map from "./components/Map";
import CommentSection from "../../components/Comment";
import CommentForm from "../../components/CommentForm";
import SectionHeader from "../../components/SectionHeader";

const PageContainer = styled.div`
  ${tw`mt-20 3xl:mt-24`}
`;

const DetailPlace = () => {
  const location = useLocation();
  const destinationsId = location.pathname.split("/destinations/")[1];

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingleDestination(destinationsId));
  }, [destinationsId, dispatch]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <Details />
        <SectionMarginer>
          <Map />
        </SectionMarginer>
      </PageContainer>
      <SectionMarginer>
        <SectionHeader field={""} title={"Bình luận"} />

        <CommentSection
          imgAccount={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&usqp=CAU"
          }
          name="Leslie Alexander"
          time="March 12.2020.7:08 pm"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        lorem id penatibus imperdiet."
          AnsimgAcount={
            "https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg"
          }
          Ansname="Jenifier Lopez"
          Anstime="March 12.2020.7:08 pm"
          AnscontComment="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CommentSection
          imgAccount={
            "https://imgupscaler.com/images/samples/Imgupscaler_1_2x.webp"
          }
          name="Jane Cooper"
          time="March 12.2020.7:08 pm"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        lorem id penatibus imperdiet."
        />
        <CommentSection
          imgAccount={
            "https://tjzk.replicate.delivery/models_models_featured_image/40223a51-a460-4f27-b13a-bf5d6429b686/output_1.png"
          }
          name="Jenny Wilson"
          time="March 12.2020.7:08 pm"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
        lorem id penatibus imperdiet."
        />
        <CommentForm />
      </SectionMarginer>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default DetailPlace;
