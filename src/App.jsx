import "./index.css";
import logo1 from "./assets/image/king88vina-1.png";
import banner1 from "./assets/image/banner-king88.webp";
import banner2 from "./assets/image/banner-king88-2.webp";
import nhacc from "./assets/image/nha-cung-cap.webp";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide, Swiper } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
function App() {
  return (
    <>
      <div className="bg-black">
        <div className="mx-auto w-main h-[92px] flex items-center text-white justify-between">
          <a href="/">
            <img src={logo1} alt="" className="w-[247px] h-[53px]" />
          </a>
          <ul className="flex gap-6 font-semibold uppercase text-[16px] mt-5">
            <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
              <a href="">KING88</a>
            </li>
            <li className="text-yellow-400 h-9 pb-2 border-b-4 border-yellow-400">
              <a href="" className="flex items-center justify-center">
                Trò chơi <MdKeyboardArrowDown size={18} />
              </a>
            </li>
            <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
              <a href="">Khuyến mãi</a>
            </li>
            <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
              <a href="">Hướng dẫn</a>
            </li>
            <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
              <a href="">Tải app</a>
            </li>
            <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
              <a href="">Đại lý</a>
            </li>
          </ul>
          <div className="flex gap-3">
            <a
              href="https://www.5king88.com/?f=1456978"
              className="py-2 px-6 bg-yellow-500 rounded-md flex items-center gap-2 font-bold uppercase"
            >
              Đăng ký
              <FaPlus size={14} />
            </a>
            <a
              href="https://www.5king88.com/?f=1456978"
              className="py-2 px-6 bg-red-500 rounded-md uppercase font-bold"
            >
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
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
        <div className="mx-auto w-main text-center text-white py-8">
          <h1 className="text-[36px] text-yellow-400 font-bold">
            【 King88 Vina 】
          </h1>
          <span className="text-[24px] font-bold">
            Nổ Hũ | Casino | Xổ Số | Thể Thao | Tặng Ngay 88K
          </span>
        </div>
      </div>
      <div className="bg-[#3D3A3A] py-8 text-white">
        <div className="mx-auto w-main flex flex-col justify-center">
          <img src={nhacc} alt="" />
          <div className="text-center mt-4">
            <button className="font-bold text-lg bg-yellow-400 py-3 px-5 rounded-lg uppercase">
              Nhập mã gift code
            </button>
          </div>
          <p className="mt-3">
            Từ khoá tìm kiếm:
            <strong>
              0king88 | 5king88 | 55king88 | 66king88 | 99king88 | 11king88 |
              22king88 | 33king88 | 44king88 | king 88.com | king88bet |
              king88345 | king88.com | king88234 | king888 | 88king | kinh88 |
              01king88 | 77king88 | 88king88
            </strong>
          </p>
        </div>
      </div>
      <div className="bg-[#5B5B5B]">
        <div className="mx-auto w-main text-[#9a9999] py-2 text-sm">
          Copyright 2024 © King88.net
        </div>
      </div>
    </>
  );
}

export default App;
