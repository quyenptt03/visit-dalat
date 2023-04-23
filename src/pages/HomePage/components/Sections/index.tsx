import {
  HomeCarousel,
  PostsCarousel,
  PlacesCarousel,
  ActivitiesCarousel,
  HotelsCarousel,
} from "../../../../components/Carousel";
import Foods from "../Foods";
import MoreInfo from "../../../../components/Carousel/PlacesCarousel/components/Place";
import SectionHeader from "../../../../components/SectionHeader";
import { SectionMarginer } from "../../../../components/Marginer";

import DalatGreen from "../../../../assets/images/dalat-green.png";

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
const MoreInfoSection = () => {
  return (
    <SectionMarginer>
      <MoreInfo
        title="Du lịch xanh"
        p="Được vinh danh là  thành phố du lịch sạch của ASEAN.  Cùng tìm hiểu thêm để có những chuyến du lịch tuyệt vời ở Đà Lạt"
        imageAdr={DalatGreen}
        showBtn={true}
      />
    </SectionMarginer>
  );
};

const HotelsSection = () => {
  return (
    <SectionMarginer>
      <SectionHeader field="Lưu trú" title="Nơi nghỉ chân lý tưởng" />
      <HotelsCarousel />
    </SectionMarginer>
  );
};
export {
  HomeCarousel as TopSection,
  PostsSection,
  PlacesSection,
  ActivitiesSection,
  FoodsSection,
  MoreInfoSection,
  HotelsSection,
};
