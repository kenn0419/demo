import { Link } from "react-router-dom";
import image1 from "../image/Giao-dien-cua-trang-chu-king88.webp";
import image2 from "../image/Doi-mat-khau.webp";
import image3 from "../image/Nhan-tien-thuong.webp";
import image4 from "../image/Nap-tien.jpg";
// import { IoSearch } from "react-icons/io5";
const Instruct = () => {
  return (
    <div className="bg-black">
      <div className="w-main mx-auto">
        <h1 className="uppercase font-bold text-main pt-4 pb-8 text-center">
          Hướng dẫn
        </h1>
        <div className="flex gap-4 pb-8">
          <div className="flex gap-3 pr-4 border-r-2 border-white flex-wrap w-[75%] justify-between pb-8">
            <div className="flex flex-col justify-center">
              <Link to={"https://king88vina.vip/dang-ky-king88/"}>
                <img src={image1} alt="" className="w-[435px] object-cover" />
              </Link>
              <div className="w-[435px] py-5">
                <Link
                  to={"https://king88vina.vip/dang-ky-king88/"}
                  className="text-main w-full block text-center text-sm font-bold"
                >
                  Hướng Dẫn Đăng Ký King88 Nhanh, Gọn, Lẹ{" "}
                </Link>
                <span className="text-white w-full block text-center mt-2">
                  Đăng ký king88 để nhận được nhiều quà tặng và tha hồ hốt bạc
                  từ [...]
                </span>
                <span className="text-xs text-[#777] text-center block mt-2">
                  10 COMMENTS
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Link to={"https://king88vina.vip/dang-ky-king88/"}>
                <img src={image2} alt="" className="w-[435px] object-cover" />
              </Link>
              <div className="w-[435px] py-5">
                <Link
                  to={"https://king88vina.vip/dang-ky-king88/"}
                  className="text-main w-full block text-center text-sm font-bold"
                >
                  Đổi mật khẩu king88 nhanh chóng, chỉ với vài thao tác đơn giản
                  nhưng lại [...]
                </Link>
                <span className="text-white w-full block text-center mt-2">
                  Đăng ký king88 để nhận được nhiều quà tặng và tha hồ hốt bạc
                  từ [...]
                </span>
                {/* <span className="text-xs text-[#777] text-center block mt-2">
                  10 COMMENTS
                </span> */}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Link to={"https://king88vina.vip/dang-ky-king88/"}>
                <img src={image3} alt="" className="w-[435px] object-cover" />
              </Link>
              <div className="w-[435px] py-5">
                <Link
                  to={"https://king88vina.vip/dang-ky-king88/"}
                  className="text-main w-full block text-center text-sm font-bold"
                >
                  Hướng Dẫn Cách Rút Tiền King88 Nhanh Chóng, An Toàn
                </Link>
                <span className="text-white w-full block text-center mt-2">
                  Anh em mới tham gia chơi game online chắc hẳn ai cũng muốn
                  biết cách [...]
                </span>
                {/* <span className="text-xs text-[#777] text-center block mt-2">
                  10 COMMENTS
                </span> */}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Link to={"https://king88vina.vip/dang-ky-king88/"}>
                <img src={image4} alt="" className="w-[435px] object-cover" />
              </Link>
              <div className="w-[435px] py-5">
                <Link
                  to={"https://king88vina.vip/dang-ky-king88/"}
                  className="text-main w-full block text-center text-sm font-bold"
                >
                  Hướng Dẫn Nạp Tiền King88 Siêu Đơn Giản
                </Link>
                <span className="text-white w-full block text-center mt-2">
                  Nạp tiền King88 là bước đầu tiên nhưng cũng rất quan trọng khi
                  người chơi [...]
                </span>
                {/* <span className="text-xs text-[#777] text-center block mt-2">
                  10 COMMENTS
                </span> */}
              </div>
            </div>
          </div>
          <div className="w-[20%]">
            {/* <div className="flex items-center mb-5">
              <input
                type="text"
                className="w-full outline-none py-2 pl-2 pr-5 "
                placeholder="Search..."
              />
              <span className="bg-main p-2">
                <IoSearch color="white" size={24} />
              </span>
            </div> */}
            <div className="text-main">
              <h3 className="uppercase text-white font-bold text-sm">
                Chuyên mục
              </h3>
              <ul className="mt-4">
                <li className="pb-2 hover:text-yellow-600">
                  <Link>Hướng dẫn</Link>
                </li>
                <li className="pb-2 hover:text-yellow-600">
                  <Link>Bắn cá</Link>
                </li>
                <li className="pb-2 hover:text-yellow-600">
                  <Link>Nổ hũ</Link>
                </li>
                <li className="pb-2 hover:text-yellow-600">
                  <Link>
                    Game bà<i></i>
                  </Link>
                </li>
                <li className="pb-2 hover:text-yellow-600">
                  <Link>Casino</Link>
                </li>
                <li className="pb-2 hover:text-yellow-600">
                  <Link>Thể thao</Link>
                </li>
                <li className="pb-2 hover:text-yellow-600">
                  <Link>Đá gà</Link>
                </li>
              </ul>
            </div>
            <div className="text-main mt-5">
              <h3 className="uppercase text-white font-bold text-sm">
                BÀI VIẾT MỚI
              </h3>
              <ul className="mt-4">
                <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
                  <Link>
                    Định nghĩa xả kèo là gì? Bí Quyết Chơi Xả Kèo Thành Công
                  </Link>
                </li>
                <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
                  <Link>
                    Tổng Quan Về Kèo Châu Âu Tại Nhà Cái 66King88 Dành Cho Cược
                    Thủ
                  </Link>
                </li>
                <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
                  <Link>
                    Kèo Penalty – Những Thông Tin Quan Trọng Dành Cho Tân Thủ
                  </Link>
                </li>
                <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
                  <Link>
                    Các Loại Kèo Chấp Phạt Góc Hấp Dẫn Dành Cho Tân Thủ
                  </Link>
                </li>
                <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
                  <Link>
                    Thuật Ngữ Trong Đá Gà – Từ Ngữ Chuyên Dùng Trong Đá Gà{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruct;
