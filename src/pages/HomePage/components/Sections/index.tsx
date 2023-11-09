import { useTranslation } from "react-i18next";
import DalatGreen from "../../../../assets/images/dalat-green.png";
import {
  ActivitiesCarousel,
  HomeCarousel,
  HotelsCarousel,
  PlacesCarousel,
  PostsCarousel,
} from "../../../../components/Carousel";
import MoreInfo from "../../../../components/Carousel/PlacesCarousel/components/Place";
import { SectionMarginer } from "../../../../components/Marginer";
import SectionHeader from "../../../../components/SectionHeader";
import Foods from "../Foods";

const PostsSection = () => {
  const { t } = useTranslation("home");
  return (
    <SectionMarginer>
      <SectionHeader
        field={t("featured articles.articles")}
        title={t("featured articles.featured articles")}
      />
      <PostsCarousel />
    </SectionMarginer>
  );
};

const PlacesSection = () => {
  return (
    <SectionMarginer>
      <PlacesCarousel />
    </SectionMarginer>
  );
};

const ActivitiesSection = () => {
  const { t } = useTranslation("home");
  return (
    <SectionMarginer>
      <SectionHeader
        field={t("featured activities.activities")}
        title={t("featured activities.featured activities")}
      />
      <ActivitiesCarousel />
    </SectionMarginer>
  );
};

const FoodsSection = () => {
  const { t } = useTranslation("home");
  return (
    <SectionMarginer>
      <SectionHeader
        field={t("foods and drinks.foods and drinks")}
        title={t("foods and drinks.cuisine")}
      />
      <Foods />
    </SectionMarginer>
  );
};
const MoreInfoSection = () => {
  const { t } = useTranslation("home");
  return (
    <SectionMarginer>
      <MoreInfo
        title={t("another information.green travel")}
        p={t("another information.description")}
        imageAdr={DalatGreen}
        showBtn={true}
      />
    </SectionMarginer>
  );
};

const HotelsSection = () => {
  const { t } = useTranslation("home");
  return (
    <SectionMarginer>
      <SectionHeader
        field={t("places to stay.places to stay")}
        title={t("places to stay.best places to stay in Dalat")}
      />
      <HotelsCarousel showSeeMoreBtn={true} />
    </SectionMarginer>
  );
};
export {
  ActivitiesSection,
  FoodsSection,
  HotelsSection,
  MoreInfoSection,
  PlacesSection,
  PostsSection,
  HomeCarousel as TopSection,
};
