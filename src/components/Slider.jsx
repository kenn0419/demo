import banner1 from "../image/banner-king88.webp";
import banner2 from "../image/banner-king88-2.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="bg-black">
        <div className="mx-auto phone:w-full phone:block laptop:w-main text-center text-white py-8">
          <h1 className="text-[36px] text-yellow-400 font-bold">
            【 King88 Vina 】
          </h1>
          <span className="text-[24px] font-bold">
            Nổ Hũ | Casino | Xổ Số | Thể Thao | Tặng Ngay 88K
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
