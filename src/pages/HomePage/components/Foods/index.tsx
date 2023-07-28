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
import { useTranslation } from "react-i18next";

const Foods = () => {
  const { t } = useTranslation("home");
  return (
    <Container>
      <Col>
        <AboveImg>
          <Food
            imageSrc={StrawberryImg}
            caption={t("foods and drinks.strawberry")}
          />
        </AboveImg>
        <BelowImg>
          <Food
            imageSrc={BanhMiXiuMai}
            caption={t("foods and drinks.banh mi xiu mai")}
          />
        </BelowImg>
      </Col>
      <Col2>
        <TopRow>
          <TopRowImg>
            <Food
              imageSrc={BunBo}
              caption={t("foods and drinks.beef noddle")}
            />
          </TopRowImg>
          <TopRowImg>
            <Food
              imageSrc={AvocadoCream}
              caption={t("foods and drinks.avocado icecream")}
            />
          </TopRowImg>
        </TopRow>
        <SecondRow>
          <SecondRowImg1>
            <Food
              imageSrc={MutDacSan}
              caption={t("foods and drinks.sweet jams")}
            />
          </SecondRowImg1>
          <SecondRowImg2>
            <Food
              imageSrc={NemNuong}
              caption={t("foods and drinks.nem nuong")}
            />
          </SecondRowImg2>
        </SecondRow>
      </Col2>
      <Col>
        <AboveImg>
          <Food imageSrc={BanhCan} caption={t("foods and drinks.banh can")} />
        </AboveImg>
        <BelowImg>
          <Food
            imageSrc={BanhTrangNuong}
            caption={t("foods and drinks.banh trang nuong")}
          />
        </BelowImg>
      </Col>
    </Container>
  );
};

export default Foods;
