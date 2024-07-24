import image1 from "../image/Giao-dien-cua-trang-chu-king88.webp";
import image2 from "../image/Doi-mat-khau.webp";
import image3 from "../image/Nhan-tien-thuong.webp";
import image4 from "../image/Nap-tien.jpg";
import { Blog } from "../components";

const blogs = [
  {
    id: 1,
    image: image1,
    link: "https://king88vina.vip/dang-ky-king88/",
    title: "Hướng Dẫn Đăng Ký King88 Nhanh, Gọn, Lẹ",
    desc: "Đăng ký king88 để nhận được nhiều quà tặng và tha hồ hốt bạc từ [...]",
    comments: 10,
  },
  {
    id: 2,
    image: image2,
    link: "https://king88vina.vip/doi-mat-khau-king88/",
    title: "Hướng Dẫn Cách Đổi Mật Khẩu King88 Dễ Như Ăn Cháo",
    desc: "Đổi mật khẩu king88 nhanh chóng, chỉ với vài thao tác đơn giản nhưng lại [...]",
    comments: null,
  },
  {
    id: 3,
    image: image3,
    link: "https://king88vina.vip/rut-tien-king88/",
    title: "Hướng Dẫn Cách Rút Tiền King88 Nhanh Chóng, An Toàn",
    desc: "Anh em mới tham gia chơi game online chắc hẳn ai cũng muốn biết cách [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "https://king88vina.vip/nap-tien-king88/",
    title: "Hướng Dẫn Nạp Tiền King88 Siêu Đơn Giản ",
    desc: "Nạp tiền King88 là bước đầu tiên nhưng cũng rất quan trọng khi người chơi [...]",
    comments: null,
  },
];
const Instruct = () => {
  return <Blog title={"Hướng dẫn"} blogs={blogs} />;
};

export default Instruct;
