import {
  HomeCarousel,
  PostsCarousel,
  PlacesCarousel,
  ActivitiesCarousel,
} from "../../../../components/Carousel";
import Foods from "../Foods";
import SectionHeader from "../../../../components/SectionHeader";
import { SectionMarginer } from "../../../../components/Marginer";

const PostsSection = () => {
  return (
    <SectionMarginer>
      <SectionHeader field="Bài viết" title="Bài viết mới nhất" />
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
  return (
    <SectionMarginer>
      <SectionHeader field="Hoạt động" title="Các hoạt động nổi bật" />
      <ActivitiesCarousel />
    </SectionMarginer>
  );
};

const FoodsSection = () => {
  return (
    <SectionMarginer>
      <SectionHeader field="Ẩm thực" title="Món ngon Đà Lạt" />
      <Foods />
    </SectionMarginer>
  );
};

export {
  HomeCarousel as TopSection,
  PostsSection,
  PlacesSection,
  ActivitiesSection,
  FoodsSection,
};
