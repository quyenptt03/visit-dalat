import React from "react";
import {
  Container,
  Col,
  AboveImg,
  BelowImg,
  Col2,
  TopRow,
  SecondRow,
  TopRowImg,
  SecondRowImg1,
  SecondRowImg2,
} from "./styles";
import StrawberryImg from "../../../../assets/foods/strawberry.png";
import BanhMiXiuMai from "../../../../assets/foods/banh-mi-xiu-mai.png";
import BunBo from "../../../../assets/foods/bun-bo.png";
import AvocadoCream from "../../../../assets/foods/avocado-cream.png";
import MutDacSan from "../../../../assets/foods/mut-dac-san.png";
import NemNuong from "../../../../assets/foods/nem-nuong.png";
import BanhCan from "../../../../assets/foods/banh-can.png";
import BanhTrangNuong from "../../../../assets/foods/banh-trang-nuong.png";

import Food from "./Food";

const Foods = () => {
  return (
    <Container>
      <Col>
        <AboveImg>
          <Food imageSrc={StrawberryImg} caption="Dâu tây Đà Lạt" />
        </AboveImg>
        <BelowImg>
          <Food imageSrc={BanhMiXiuMai} caption="Bánh mì xíu mại" />
        </BelowImg>
      </Col>
      <Col2>
        <TopRow>
          <TopRowImg>
            <Food imageSrc={BunBo} caption="Bún bò" />
          </TopRowImg>
          <TopRowImg>
            <Food imageSrc={AvocadoCream} caption="Bánh mì xíu mại" />
          </TopRowImg>
        </TopRow>
        <SecondRow>
          <SecondRowImg1>
            <Food imageSrc={MutDacSan} caption="Các loại mứt đặc sản" />
          </SecondRowImg1>
          <SecondRowImg2>
            <Food imageSrc={NemNuong} caption="Nem nướng" />
          </SecondRowImg2>
        </SecondRow>
      </Col2>
      <Col>
        <AboveImg>
          <Food imageSrc={BanhCan} caption="Bánh căn" />
        </AboveImg>
        <BelowImg>
          <Food imageSrc={BanhTrangNuong} caption="Bánh tráng nướng" />
        </BelowImg>
      </Col>
    </Container>
  );
};

export default Foods;
