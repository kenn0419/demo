import image1 from "../image/dinh-nghia-xa-keo-la-gi.jpg";
import image2 from "../image/so-luoc-ve-keo-chau-au-hot-nhat-hien-nay.jpg";
import image3 from "../image/dinh-nghia-ve-keo-penalty-tai-nha-cai.jpg";
import image4 from "../image/keo-chap-phat-goc-duoc-hieu-nhu-the-nao.jpg";
import image5 from "../image/Tim-hieu-chung-ve-keo-chan-le-la-gi.jpg";
import image6 from "../image/Cach-ca-cuoc-keo-chap-dong-banh-de-chien-thang-nhat.jpg";
import image7 from "../image/Kinh-nghiem-soi-cau-keo-tren-keo-duoi-hay-ma-ban-nen-biet.jpg";
import image8 from "../image/Kinh-nghiem-cuoc-rung-hieu-qua-cho-cac-bet-thu.jpg";
import image9 from "../image/Hinh-thuc-Keo-chap-dong-banh-1_4-trai.jpg";
import image10 from "../image/Cach-doc-keo-ti-so-cuc-ky-don-gian.jpg";
import { useState } from "react";
import sanhCasino from "../image/Ca-cuoc-the-thao-king88-da-dang-phong-phu-cac-the-loai-choi.webp";
import ThamGia from "../image/Tao-tai-khoan-tai-king88-de-trai-nghiem-nhung-dich-vu-hot-nhat.webp";
import baiCasino from "../image/Game-ca-cupc-bong-da-rat-duoc-yeu-thich-tai-nha-cai-king88.webp";
import Tuagamehot from "../image/Da-dang-tro-choi-la-mot-diem-manh-thu-hut-luong-lon-nguoi-tham-gia-king88.webp";
import clsx from "clsx";
import { Blog } from "../components";

const blogs = [
  {
    id: 1,
    image: image1,
    link: "https://king88vina.vip/xa-keo-la-gi/",
    title: "Định nghĩa xả kèo là gì? Bí Quyết Chơi Xả Kèo Thành Công",
    desc: "Xả kèo là gì – Là câu hỏi được nhiều anh em quan tâm khi [...]",
    comments: null,
  },
  {
    id: 2,
    image: image2,
    link: "https://king88vina.vip/keo-chau-au/",
    title: "Tổng Quan Về Kèo Châu Âu Tại Nhà Cái 66King88 Dành Cho Cược Thủ",
    desc: "Kèo châu Âu tại 66King88 là một trong những loại cược phổ biến và được [...]",
    comments: null,
  },
  {
    id: 3,
    image: image3,
    link: "https://king88vina.vip/keo-penalty/",
    title: "Kèo Penalty – Những Thông Tin Quan Trọng Dành Cho Tân Thủ",
    desc: "Kèo penalty được biết đến là loại kèo phổ biến trong bóng đá. Vậy bạn [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "https://king88vina.vip/keo-chap-phat-goc/",
    title: "Các Loại Kèo Chấp Phạt Góc Hấp Dẫn Dành Cho Tân Thủ",
    desc: "Kèo chấp phạt góc có điều gì thú vị mà lại thu hút nhiều người [...]",
    comments: null,
  },
  {
    id: 5,
    image: image5,
    link: "https://king88vina.vip/tuyet-chieu-danh-keo-chan-le-bat-bai-tan-thu-nen-biet/",
    title: "Tuyệt Chiêu Đánh Kèo Chẵn Lẻ Bất Bại Tân Thủ Nên Biết",
    desc: "Kèo chẵn lẻ sẽ giúp bạn tối ưu hóa cơ hội thắng của mình trong [...]",
    comments: null,
  },
  {
    id: 6,
    image: image6,
    link: "https://king88vina.vip/keo-chap-dong-banh-tai-king88-co-hoi-chien-thang-cao/",
    title: "Kèo Chấp Đồng Banh Tại King88 Cơ Hội Chiến Thắng Cao",
    desc: "Kèo chấp đồng banh là một trong những tỷ lệ cược không mấy xa lạ [...]",
    comments: null,
  },
  {
    id: 7,
    image: image7,
    link: "https://king88vina.vip/keo-tren-keo-duoi-la-gi-ban-da-co-kinh-nghiem-soi-keo-chuan/",
    title: "Kèo Trên Kèo Dưới Là Gì? Bạn Đã Có Kinh Nghiệm Soi Kèo Chuẩn",
    desc: "Kèo trên kèo dưới là gì, không phải là câu hỏi quá khó đối với [...]",
    comments: null,
  },
  {
    id: 8,
    image: image8,
    link: "https://king88vina.vip/keo-rung-bong-da-cach-choi-hieu-qua-tai-san-choi-king88/",
    title: "Kèo Rung Bóng Đá – Cách Chơi Hiệu Quả Tại Sân Chơi King88",
    desc: "Kèo rung là tỷ lệ cược khá phổ biến và được nhiều anh em game [...]",
    comments: null,
  },
  {
    id: 9,
    image: image9,
    link: "https://king88vina.vip/keo-chap-dong-banh-va-nhung-thong-tin-thu-vi-ban-nen-biet/",
    title: "Kèo chấp đồng banh và những thông tin thú vị bạn nên biết",
    desc: "Kèo chấp đồng banh là một trong những loại kèo xuất hiện phổ biến tại [...]",
    comments: null,
  },
  {
    id: 10,
    image: image10,
    link: "https://king88vina.vip/cach-doc-keo-bong-da-chi-tiet-tu-king88-danh-cho-tan-thu/",
    title: "Cách Đọc Kèo Bóng Đá Chi Tiết Từ 33king88 Dành Cho Tân Thủ",
    desc: "Cách đọc kèo bóng đá được đánh giá là một trong những kỹ năng quan [...]",
    comments: null,
  },
];
const Sport = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto phone:w-full laptop:w-main text-white">
        <h1 className="uppercase font-bold text-main pt-4 pb-4 text-center">
          THỂ THAO KING88
        </h1>
        <p className="py-4 text-sm">
          Cá cược thể thao King88 dành cho những người đam mê những trận đấu thể
          thao. Nếu bạn là người yêu thích bóng đá, bóng rổ, tennis,… thì nhất
          định phải thử sức game này. Vậy tại{" "}
          <strong className="text-main">King88</strong> sở hữu những trò thể
          thao nào? Chúng tôi sẽ giới thiệu cho bạn ngay sau đây!
        </p>
        <p className="py-4 text-center">
          ✅ Xem thêm : <strong className="text-main">bắn cá King88</strong>
        </p>
        <div className="relative">
          <div
            className={clsx(
              "phone:w-full laptop:w-main mx-auto flex justify-center flex-col",
              expanded ? "h-auto" : "h-[100px] overflow-hidden"
            )}
          >
            <img
              src={sanhCasino}
              alt=""
              className={clsx("mb-2", expanded ? "h-auto" : "")}
            />
            <span className="text-center italic">
              Cá cược thể thao King88 – Đa dạng, phong phú các thể loại chơi
            </span>
          </div>
          <div
            className={clsx(
              "w-full transition-all duration-500",
              expanded ? "block" : "hidden"
            )}
          >
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Cá cược thể thao King88 là gì?
            </h3>
            <p className="mb-4">
              <strong className="text-main">Cá cược thể thao</strong> là một
              hình thức cá cược thể thao online. Tựa game này được phát hành tại
              nhà cái King88. Nhà cái này là một trong những nhà cái uy tín và
              lớn nhất tại Việt Nam. Cổng game đã có nhiều năm hoạt động trong
              ngành cá cược nên người chơi hãy yên tâm.
            </p>
            <p className="mb-4">
              Game thủ có thể chơi cá cược tại ứng dụng hoặc trang web của
              King88 đều được. Thể thao luôn là phân loại game được nhiều người
              lựa chọn nhất. Phải chăng vì nó có sức hút mãnh liệt và sự gay cấn
              trong từng trận đấu. Là một tay chơi cao thủ chắc chắn bạn phải
              thử qua game này.
            </p>
            <div>
              <div className="phone:w-full laptop:w-main mx-auto flex justify-center flex-col">
                <img src={ThamGia} alt="" className="mb-2" />
                <span className="text-center italic">
                  Tạo tài khoản tại King88 để trải nghiệm những dịch vụ hot nhất
                </span>
              </div>
            </div>
            <p className="mb-4">
              King88 cung cấp rất nhiều các game thuộc thể loại này. Từ đó người
              chơi có thể thỏa sức lựa chọn mà không sợ chán. Mỗi trò sẽ có luật
              chơi nên game thủ phải tìm hiểu kỹ trước khi thử sức.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Điểm qua một số game cá cược thể thao King88
            </h3>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Game bóng đá tại cá cược thể thao King88
            </h4>
            <p className="pb-4">
              Bóng đá là hình thức đặt cược hấp dẫn nhất tại King88. Nhà cái
              cung cấp kèo cá cược bóng đá trực tuyến từ các giải đấu bóng đá
              hàng đầu trên khắp hành tinh. Đầu tiên phải nhắc đến các giải đấu
              lớn Ngoại hạng Anh. Cụ thể như La Liga, Bundesliga, Champions
              League và Europa League, . ..
            </p>
            <div>
              <div className="phone:w-full laptop:w-main mx-auto flex justify-center flex-col">
                <img src={baiCasino} alt="" className="mb-2" />
                <span className="text-center italic">
                  Game cá cược bóng đá rất được yêu thích tại nhà cái King88
                </span>
              </div>
            </div>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Game bóng rổ trong cá cược thể thao King88
            </h4>
            <p className="pb-4">
              Bóng rổ cũng là tựa game được nhiều người lựa chọn. Độ phổ biến
              của nó không kém cạnh gì bóng đá. Nhà cái cung cấp tỷ lệ cá cược
              đa dạng. Điều này được áp dụng ở tất cả các giải đấu bóng rổ lớn
              nhỏ trên toàn cầu. Bạn sẽ được theo dõi các giải từ NBA,
              EuroLeague cho đến FIBA World Cup, . ..
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Bộ môn cầu lông
            </h4>
            <p className="pb-4">
              Cầu lông là hình thức đặt cược đang ngày càng thịnh hành tại
              King88. Các giải đấu được sử dụng trong ván cược đến từ BWF World
              Tour Finals, Uber Cup, . .. Nếu bạn là người yêu thích bóng rổ
              ngoài đời thì không thể bỏ qua tựa game online này.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Thể loại tennis trong cá cược thể thao King88
            </h4>
            <p className="pb-4">
              Lại một phương thức cá cược phổ biến nữa gọi tên bộ môn tennis.
              Lựa chọn tham gia tại King88 bạn sẽ được thử sức với các trận đấu
              quy mô thế giới. Đây sẽ là cơ hội để người chơi tích lũy thêm
              nhiều kinh nghiệm.
            </p>
            <p className="pb-4">
              Tennis là một lựa chọn không hề tồi. Sau khi trải nghiệm các bộ
              môn hot như bóng đá, bóng rổ, bạn có thể trải nghiệm thử tennis.
              Chơi game này sẽ giúp bạn biết được khả năng của bản thân đến đâu.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Loại hình đua ngựa
            </h4>
            <p className="pb-4">
              Với những người đam mê tốc độ và sự nhanh chóng thì không thể bỏ
              qua game này. Đua ngựa là bộ môn truyền thống và phát triển lên
              thành hình thức chơi online. Một số giải đấu lớn nhỏ bạn sẽ được
              tham gia như Grand National, Kentucky Derby,…
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Trò chơi bóng chuyền tại King88
            </h4>
            <p className="pb-4">
              Đã là tay chơi đam mê thể thao thì không thể bỏ qua bóng chuyền.
              King88 cung cấp khá nhiều tỷ lệ cá cược lớn nhỏ khác nhau ở trò
              này. Thật hấp dẫn là bạn sẽ được tham gia 2 giải đấu tầm cỡ thế
              giới như FIVB World Cup và Volleyball Nations League.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Ưu điểm khi chơi cá cược thể thao King88
            </h3>
            <p className="pb-4">
              Đây là một trong những hình thức cá cược phổ biến được nhiều người
              biết đến. Thể loại này sở hữu nhiều ưu điểm nên thu hút đông đảo
              người chơi tại King88. Một số ưu điểm nhất định phải kể đến như:
            </p>
            <div>
              <div className="phone:w-full laptop:w-main mx-auto flex justify-center flex-col">
                <img src={Tuagamehot} alt="" className="mb-2" />
                <span className="text-center italic">
                  Đa dạng trò chơi là một điểm mạnh thu hút lượng lớn người tham
                  gia King88
                </span>
              </div>
            </div>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Sở hữu đa dạng game cá cược thể thao King88
            </h4>
            <p className="pb-4">
              Như thông tin đã kể trên thì King88 sở hữu rất nhiều game thuộc
              thể loại cá cược thể thao. Người chơi có thể lựa chọn bất kỳ trò
              chơi nào phù hợp với sở thích, nhu cầu của bản thân.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Tỷ lệ thắng cược hấp dẫn
            </h4>
            <p className="pb-4">
              Tất cả các game thể thao tại đây đều có tỷ lệ cá cược cao. Game
              thủ khi thắng cược sẽ nhận về rất nhiều tiền. Tỷ lệ này được cập
              nhật liên tục theo diễn biến của mỗi trận đấu. Bạn có thể thoải
              mái đặt cược với những mức cược cao nhất.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Chơi cá cược thể thao King88 sẽ được bảo mật thông tin
            </h4>
            <p className="pb-4">
              Hệ thống bảo mật tại King88 là loại tiên tiến nhất. Từ đó đảm bảo
              mọi thông tin cá nhân của người chơi sẽ không bị bên thứ ba xâm
              nhập. Kể cả những giao dịch nạp, rút tiền cũng được bảo mật tuyệt
              đối. Người chơi hoàn toàn có thể yên tâm khi trải nghiệm tại nhà
              cái này. Chúng tôi luôn mong muốn mang đến cho game thủ những dịch
              vụ tốt nhất.
            </p>
            <p className="pb-4">
              Trên đây là những ưu điểm của trò cá cược thể thao. Đây là lựa
              chọn không hề tồi ngoài các game casino, nổ hũ,… Nếu có thời gian
              bạn hãy trải nghiệm thể loại này để hiểu rõ hơn về bộ môn thể thao
              nhé!
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Kết luận
            </h3>
            <p className="pb-4">
              <strong className="font-bold">Cá cược thể thao King88</strong> là
              thể loại game được rất nhiều người biết đến. Bạn nhất định phải
              trải nghiệm một số game thể thao như bóng rổ, bóng đá, tennis,…
              Đây là thể loại game có tỷ lệ cá cược cực kỳ cao mà bạn nên thử.
              Chúc bạn có được những giây phút chơi game thật vui vẻ!
            </p>
          </div>
          <div
            className={clsx(
              "py-4 text-center",
              !expanded && "absolute bottom-0 w-full h-[100px] bg-blurColor"
            )}
            onClick={toggleExpand}
          >
            <button
              className={clsx(
                "py-2 px-9 text-white bg-[#422908] hover:bg-[#764B06] text-center rounded-md"
              )}
            >
              {expanded ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <Blog blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default Sport;
