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

const PageContainer = styled.div`
  ${tw`mt-20 xxl:mt-24`}
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
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default DetailPlace;
