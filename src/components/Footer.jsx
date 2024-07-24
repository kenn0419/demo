import nhacc from "../image/nha-cung-cap.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-[#3D3A3A] py-8 text-white">
        <div className="mx-auto phone:w-full laptop:w-main flex flex-col items-center justify-center">
          <img
            src={nhacc}
            alt=""
            className="phone: w-[90%] laptop:w-full object-contain"
          />
          <div className="text-center mt-4">
            <button className="font-bold text-lg bg-yellow-400 py-3 px-5 rounded-lg uppercase">
              Nhập mã gift code
            </button>
          </div>
          <p className="mt-3 pl-3">
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
      <div className="bg-[#5B5B5B] w-full pl-3">
        <div className="mx-auto phone:w-full laptop:w-main text-[#9a9999] py-2 text-sm">
          Copyright 2024 © King88.net
        </div>
      </div>
    </>
  );
};

export default Footer;
