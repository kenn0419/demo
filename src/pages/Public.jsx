/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Public = ({ showMenu, setShowMenu }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative w-full h-screen">
      {showMenu && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
          <div className="w-[250px] h-full bg-[#f3f3f3] py-5 px-3">
            <span
              className="flex justify-end"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose size={24} cursor={"pointer"} />
            </span>
            <div className="flex justify-center w-full mt-8 pb-10">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-1 w-40 shadow-lg shadow-white-500/40 outline-none"
              />
              <span className="bg-main flex items-center p-2">
                <IoSearch size={18} color="white" />
              </span>
            </div>
            <ul className="font-semibold uppercase mt-5 phone:flex tablet:flex flex-col laptop:hidden text-[13px]">
              <li className="hover:text-text-black hover:bg-[#ccc] p-4 cursor-pointer border-t border-[#ccc] text-[#666666D9] ">
                <Link className="w-full block" to={"/"}>
                  KING88
                </Link>
              </li>
              <li
                className="cursor-pointer border-t border-[#ccc] text-[#666666D9]"
                onClick={() => setShow((prev) => !prev)}
              >
                <span className="flex items-center justify-between hover:text-text-black hover:bg-[#ccc] p-4">
                  Trò chơi <MdKeyboardArrowDown size={20} />
                </span>
                {show && (
                  <ul className="w-[220px] mt-2 group-hover:block bg-[#f3f3f3] text-sm text-[#666666D9] transition-all duration-300">
                    <li className="py-2 font-medium px-5 text-[13px] hover:text-black">
                      <Link to={"/ban-ca"} className="w-full block">
                        Bắn cá King88
                      </Link>
                    </li>
                    <li className="py-2 font-medium px-5 text-[13px] hover:text-black">
                      <Link to={"/casino-online"} className="w-full block">
                        Casino Online King88
                      </Link>
                    </li>
                    <li className="py-2 font-medium px-5 text-[13px] hover:text-black">
                      <Link to={"/da-ga"} className="w-full block">
                        Đá gà King88
                      </Link>
                    </li>
                    <li className="py-2 font-medium px-5 text-[13px] hover:text-black">
                      <Link to={"/game-bai"} className="w-full block">
                        Game bài King88
                      </Link>
                    </li>
                    <li className="py-2 font-medium px-5 text-[13px] hover:text-black">
                      <Link to={"/no-hu"} className="w-full block">
                        Nổ hũ King88
                      </Link>
                    </li>
                    <li className="py-2 font-medium px-5 text-[13px] hover:text-black">
                      <Link to={"/the-thao"} className="w-full block">
                        Thể thao King88
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:text-text-black hover:bg-[#ccc] p-4 cursor-pointer border-t border-[#ccc] text-[#666666D9]">
                <Link className="w-full block" to={"/promotion"}>
                  Khuyến mãi
                </Link>
              </li>
              <li className="hover:text-text-black hover:bg-[#ccc] p-4 cursor-pointer border-t border-[#ccc] text-[#666666D9]">
                <Link className="w-full block" to={"/instruct"}>
                  Hướng dẫn
                </Link>
              </li>
              <li className="hover:text-text-black hover:bg-[#ccc] p-4 cursor-pointer border-t border-[#ccc] text-[#666666D9]">
                <Link className="w-full block" to={"/download-app"}>
                  Tải app
                </Link>
              </li>
              <li className="hover:text-text-black hover:bg-[#ccc] p-4 cursor-pointer border-t border-[#ccc] text-[#666666D9]">
                <Link className="w-full block" to={"/agency"}>
                  Đại lý
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Header setShowMenu={setShowMenu} />
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Public;
