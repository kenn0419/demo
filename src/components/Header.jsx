/* eslint-disable react/prop-types */
import logo1 from "../image/king88vina-1.png";
import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
const Header = ({ setShowMenu }) => {
  return (
    <div className="bg-[#141414] w-full">
      <div className="mx-auto tablet:w-full tablet:block tablet:py-5 laptop:w-main laptop:h-[92px] laptop:flex items-center text-white justify-between">
        <div className="flex w-full h-full justify-between items-center flex-auto">
          <span
            className="tablet:block laptop:hidden cursor-pointer"
            onClick={() => setShowMenu(true)}
          >
            <IoMenu size={36} />
          </span>
          <NavLink to="/">
            <img src={logo1} alt="" className="w-[247px] h-[53px]" />
          </NavLink>
          <ul className="gap-4 font-semibold uppercase text-[16px] mt-5 phone:hidden tablet:hidden laptop:flex">
            <li className="h-9">
              <NavLink
                to={"/"}
                className="pb-2 hover:text-yellow-400 hover:border-b-4 border-yellow-400"
              >
                KING88
              </NavLink>
            </li>
            <li className="h-9 pb-2 hover:text-yellow-400 hover:border-b-4 border-yellow-400 relative group">
              <span className="flex items-center justify-center">
                Trò chơi <MdKeyboardArrowDown size={18} />
              </span>
              <ul className="hidden absolute left-0 top-[90%] w-[220px] z-10 mt-2 group-hover:block bg-white border border-gray-200 shadow-lg text-sm text-[#333]">
                <li className="p-3 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                  <NavLink to={"/ban-ca"} className="w-full block">
                    Bắn cá King88
                  </NavLink>
                </li>
                <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                  <NavLink to={"/casino-online"} className="w-full block">
                    Casino Online King88
                  </NavLink>
                </li>
                <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                  <NavLink to={"/da-ga"} className="w-full block">
                    Đá gà King88
                  </NavLink>
                </li>
                <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                  <NavLink to={"/game-bai"} className="w-full block">
                    Game bài King88
                  </NavLink>
                </li>
                <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                  <NavLink to={"/no-hu"} className="w-full block">
                    Nổ hũ King88
                  </NavLink>
                </li>
                <li className="p-2 border-b-[1px] border-[#444] hover:bg-[#333] hover:text-white">
                  <NavLink to={"/the-thao"} className="w-full block">
                    Thể thao King88
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="h-9">
              <NavLink
                className="pb-2 hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                activeClassName="hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                to={"/promotion"}
              >
                Khuyến mãi
              </NavLink>
            </li>
            <li className="h-9">
              <NavLink
                className="pb-2 hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                activeClassName="hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                to={"/instruct"}
              >
                Hướng dẫn
              </NavLink>
            </li>
            <li className="h-9">
              <NavLink
                className="pb-2 hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                activeClassName="hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                to={"/download-app"}
              >
                Tải app
              </NavLink>
            </li>
            <li className="h-9">
              <NavLink
                className="pb-2 hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                activeClassName="hover:text-yellow-400 hover:border-b-4 border-yellow-400"
                to={"/agency"}
              >
                Đại lý
              </NavLink>
            </li>
          </ul>
          <span className="tablet:block laptop:hidden">
            <IoSearch size={30} />
          </span>
        </div>
        <div className="flex gap-3 py-3 tablet:bg-[#191919] justify-center tablet:w-full laptop:w-[35%] laptop:bg-transparent">
          <a
            href="https://www.5king88.com/?f=1456978"
            className="py-2 px-4 bg-yellow-500 rounded-md flex items-center gap-2 font-bold uppercase"
          >
            Đăng ký
            <FaPlus size={14} />
          </a>
          <a
            href="https://www.5king88.com/?f=1456978"
            className="py-2 px-4 bg-red-500 rounded-md uppercase font-bold"
          >
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
