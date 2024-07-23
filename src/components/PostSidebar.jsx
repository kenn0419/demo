import { Link } from "react-router-dom";

const PostSidebar = () => {
  return (
    <>
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
        <h3 className="uppercase text-white font-bold text-sm">Chuyên mục</h3>
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
        <h3 className="uppercase text-white font-bold text-sm">BÀI VIẾT MỚI</h3>
        <ul className="mt-4">
          <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
            <Link>
              Định nghĩa xả kèo là gì? Bí Quyết Chơi Xả Kèo Thành Công
            </Link>
          </li>
          <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
            <Link>
              Tổng Quan Về Kèo Châu Âu Tại Nhà Cái 66King88 Dành Cho Cược Thủ
            </Link>
          </li>
          <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
            <Link>
              Kèo Penalty – Những Thông Tin Quan Trọng Dành Cho Tân Thủ
            </Link>
          </li>
          <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
            <Link>Các Loại Kèo Chấp Phạt Góc Hấp Dẫn Dành Cho Tân Thủ</Link>
          </li>
          <li className="py-2 hover:text-yellow-600 border-b-2 border-white">
            <Link>Thuật Ngữ Trong Đá Gà – Từ Ngữ Chuyên Dùng Trong Đá Gà </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PostSidebar;
