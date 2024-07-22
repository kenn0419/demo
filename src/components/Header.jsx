import logo1 from "../image/king88vina-1.png";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#141414] fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto w-main h-[92px] flex items-center text-white justify-between">
        <Link to="/">
          <img src={logo1} alt="" className="w-[247px] h-[53px]" />
        </Link>
        <ul className="flex gap-4 font-semibold uppercase text-[16px] mt-5">
          <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
            <Link to={"/"}>KING88</Link>
          </li>
          <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400 relative group">
            <span className="flex items-center justify-center">
              Trò chơi <MdKeyboardArrowDown size={18} />
            </span>
            <ul className="hidden absolute left-0 top-[90%] w-[220px] z-10 mt-2 group-hover:block bg-white border border-gray-200 shadow-lg text-sm text-[#333]">
              <li className="p-3 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                <a className="w-full block" href="">
                  Bắn cá King88
                </a>
              </li>
              <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                <a className="w-full block" href="">
                  Casino Online King88
                </a>
              </li>
              <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                <a className="w-full block" href="">
                  Đá gà King88
                </a>
              </li>
              <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                <a className="w-full block" href="">
                  Game bài King88
                </a>
              </li>
              <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                <a className="w-full block" href="">
                  Nổ hũ King88
                </a>
              </li>
              <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                <a className="w-full block" href="">
                  Thể thao King88
                </a>
              </li>
            </ul>
          </li>
          <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
            <Link to={"/promotion"}>Khuyến mãi</Link>
          </li>
          <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
            <Link to={"/instruct"}>Hướng dẫn</Link>
          </li>
          <li className="hover:text-yellow-400 h-9 pb-2 hover:border-b-4 border-yellow-400">
            <Link to={"/download-app"}>Tải app</Link>
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
  );
};

export default Header;
