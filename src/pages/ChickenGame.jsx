import image1 from "../image/cac-thuat-ngu-trong-da-ga-khac-duoc-su-dung-nhieu.jpg";
import image2 from "../image/cach-xem-mat-ga-choi-co-ban.jpg";
import image3 from "../image/ga-da-bi-hoc-anh-huong-den-the-luc-chien-ke-rat-nhieu-nen-ban-can-quan-tam.jpg";
import image4 from "../image/viec-co-che-do-nuoi-duong-thich-hop-truoc-chien-dau-se-giup-ga-khoe-manh.jpg";
import image5 from "../image/tong-quan-da-ga-philippines.jpg";
import image6 from "../image/da-ga-thomo-duoc-menh-danh-la-thien-duong-giai-tri-moi-cho-nhieu-su-ke.jpg";
import image7 from "../image/gioi-thieu-ve-cach-chon-tuong-ga-da.jpg";
import image8 from "../image/mot-so-loai-keo-da-ga-duoc-yeu-thich.jpg";
import image9 from "../image/Choi-da-ga-truc-tuyen-tren-nhieu-thiet-bi-khac-nhau-de-dang.jpg";
import image10 from "../image/Da-ga-truc-tuyen-tai-WS168-King88-co-nguon-goc-ro-rang.jpg";
import { useState } from "react";
import daGa from "../image/Gioi-thieu-ve-tua-game-da-ga.webp";
import ThamGia from "../image/Luat-choi-da-ga-tung-vung-mien-khac-nhau.webp";
import ThuatNgu from "../image/Mot-so-thuat-ngu-thuong-gap-khi-tham-gia-Da-ga.webp";
import HuongDan from "../image/Huong-dan-cach-tham-gia-da-ga-cu-the-nhat.webp";
import clsx from "clsx";
import { Blog } from "../components";

const blogs = [
  {
    id: 1,
    image: image1,
    link: "https://king88vina.vip/thuat-ngu-trong-da-ga/",
    title: "Thuật Ngữ Trong Đá Gà – Từ Ngữ Chuyên Dùng Trong Đá Gà ",
    desc: "Thuật ngữ trong đá gà là điều mà người chơi cần tìm hiểu kỹ lưỡng [...]",
    comments: null,
  },
  {
    id: 2,
    image: image2,
    link: "https://king88vina.vip/cach-xem-mat-ga-choi/",
    title: "Cách Xem Mắt Gà Chọi Hay, Chuẩn Cho Các Trận Chiến Khốc Liệt",
    desc: "Cách xem mắt gà chọi sẽ giúp bạn có được những sự chọn lọc chuẩn [...]",
    comments: null,
  },
  {
    id: 3,
    image: image3,
    link: "https://king88vina.vip/cach-nuoi-ga-da-khong-bi-hoc/",
    title: "Cách Nuôi Gà Đá Không Bị Hốc Theo Chuẩn Chuyên Gia Kinh88",
    desc: "Cách nuôi gà đá không bị hốc luôn được nhiều sư kê chú trọng, do [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "https://king88vina.vip/cach-nuoi-ga-da-bo/",
    title: "Cách Nuôi Gà Đá Bo Đúng Cách Theo Chuyên Gia King88",
    desc: "Cách nuôi gà đá bo lớn nhanh và đúng cách là các phương pháp mà [...]",
    comments: null,
  },
  {
    id: 5,
    image: image5,
    link: "https://king88vina.vip/da-ga-philippines/",
    title: "Đá Gà Philippines – Bí Kíp Thắng Lớn Cùng Cao Thủ King88",
    desc: "Đá gà Philippines là là sân chơi hợp pháp, được nhà nước Philippines thừa nhận [...]",
    comments: null,
  },
  {
    id: 6,
    image: image6,
    link: "https://king88vina.vip/da-ga-thomo/",
    title: "Đá Gà Thomo Là Gì? Luật Chơi Đá Gà Chuẩn Như Thế Nào?",
    desc: "Đá gà Thomo là một chuỗi những giải thi đấu lớn và trường Thomo là [...]",
    comments: null,
  },
  {
    id: 7,
    image: image7,
    link: "https://king88vina.vip/cach-chon-tuong-ga-da/",
    title: "Cách Chọn Tướng Gà Đá Chuẩn Nhất Dành Cho Dân Sành Gà Chọi",
    desc: "Cách chọn tướng gà đá là một kỹ năng không phải ai cũng có thể [...]",
    comments: null,
  },
  {
    id: 8,
    image: image8,
    link: "https://king88vina.vip/keo-da-ga-cua-sat/",
    title: "Kinh Nghiệm Bắt Kèo Đá Gà Cựa Sắt Hiệu Quả Từ Các Cao Thủ",
    desc: "Kèo đá gà cựa sắt là một trong những kèo cược được ưa chuộng bởi [...]",
    comments: null,
  },
  {
    id: 9,
    image: image9,
    link: "https://king88vina.vip/cach-da-ga-sv128-king88-co-hoi-chien-thang-cao-cho-gamer/",
    title: "Cách Đá Gà SV128 King88 Cơ Hội Chiến Thắng Cao Cho Gamer",
    desc: "Đá gà SV128 King88 có lẽ không còn quá xa lạ đối với các anh [...]",
    comments: null,
  },
  {
    id: 10,
    image: image10,
    link: "https://king88vina.vip/da-ga-ws168-king88-choi-ca-cuoc-online-day-kich-tinh/",
    title: "Đá Gà WS168 King88 – Chơi Cá Cược Online Đầy Kịch Tính",
    desc: "Đá gà Ws168 King88 mang lại cho thành viên những giây phút trải nghiệm cá [...]",
    comments: null,
  },
];
const ChickenGame = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto phone:w-full laptop:w-main text-white">
        <h1 className="uppercase font-bold text-main pt-4 pb-4 text-center">
          ĐÁ GÀ KING88
        </h1>
        <p className="py-4 text-sm italic">
          <strong className="text-main">Đá gà King88</strong> hiện tại là một
          hình thức giải trí được nhiều người Việt Nam ưa thích. Nơi đây hứa hẹn
          mở ra nhiều cơ hội tham gia cá cược trực tuyến thông qua nhà cái. Nếu
          bạn chưa tìm hiểu về cách thức tham gia, hãy khám phá bài viết dưới
          đây. Chúng tôi sẽ cung cấp thông tin chi tiết về dịch vụ cá cược tại
          king88, một lựa chọn thuận tiện và phổ biến ngay tại thời điểm này.
        </p>
        <p className="py-4 text-center">
          ✅ Xem thêm : <strong className="text-main">Game bài King88</strong>
        </p>
        <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
          Đôi nét về đá gà king88 online
        </h3>
        <p className="pb-4">
          Đá gà King88 – một trò chơi dân gian online lâu đời, đã đang và sẽ thu
          hút sự quan tâm của nhiều người Việt Nam. Thường được tổ chức tại các
          sự kiện lớn và những lễ hội quan trọng, bộ môn này nhanh chóng trở
          thành niềm vui phổ biến.
        </p>
        <div className="relative">
          <div
            className={clsx(
              "phone:w-full laptop:w-main mx-auto flex justify-center flex-col",
              expanded ? "h-auto" : "h-[100px] overflow-hidden"
            )}
          >
            <img
              src={daGa}
              alt=""
              className={clsx("mb-2", expanded ? "h-auto" : "")}
            />
            <span className="text-center italic">
              Giới thiệu về tựa game đá gà King88
            </span>
          </div>
          <div
            className={clsx(
              "w-full transition-all duration-500",
              expanded ? "block" : "hidden"
            )}
          >
            <p className="mb-4">
              Tham gia tại các trang web cá cược trực tuyến, người chơi có thể
              thoải mái thoả mãn nhu cầu cá cược chọi gà. Cơ hội dự đoán tỉ số
              cho các trận đấu quan tâm sẽ mở ra. Và đặc biệt hơn nữa, các bạn
              sẽ có cơ hội theo dõi toàn bộ diễn biến của các trận đấu trực
              tuyến từ đầu đến cuối. Với chỉ một chiếc điện thoại thông minh có
              kết nối mạng, anh em đã sẵn sàng trải nghiệm xem và tham gia cá
              cược từ bất kỳ đầu và bất cứ lúc nào rồi đấy!
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Luật chơi đá gà King88
            </h3>
            <p className="mb-4">
              Trong mỗi trận đấu, hai chiến kê sẽ đối đầu với nhau, đều là những
              chiến kê sở hữu kỹ thuật đánh mổ và tính hăng máu được rèn luyện
              kỹ lưỡng. Có ba loại luật chơi chính cho đá gà ở miền Bắc, Trung
              và nam, với sự khác biệt chủ yếu về cân nặng và thời gian thi đấu.
              Ví dụ, ở miền Bắc, hạng nặng yêu cầu gà nặng hơn 4 cân, hạng trung
              từ 3 đến 4 cân và hạng nhẹ dưới 3 cân.
            </p>
            <div>
              <div className="phone:w-full laptop:w-main mx-auto flex justify-center flex-col">
                <img src={ThamGia} alt="" className="mb-2" />
                <span className="text-center italic">
                  Luật chơi đá gà từng vùng miền khác nhau
                </span>
              </div>
            </div>
            <p className="pb-4">
              Người chơi tham gia cá cược vào quá trình dự đoán chiến kê nào sẽ
              giành chiến thắng. Mỗi con gà phải đáp ứng các yêu cầu về cân nặng
              và trình để có thể tham gia chọi. Các hiệp đấu kéo dài khoảng 15
              phút , có một khoảng nghỉ 5 phút sau mỗi hiệp. Từng chú sẽ thi đấu
              với nhau, và điều kiện xử thua xảy ra khi có một trong hai con bị
              chết, kêu la hét inh ỏi hoặc chạy trốn quanh trại. Ngoài ra, nếu
              gà chiến không có hành động đá hoặc cắn đối phương, liên tục nhảy
              cót cũng được quy là thất bại.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Một số thuật ngữ thường gặp tại Đá gà King88
            </h3>
            <p className="mb-4">
              Trong thế giới cá cược đá gà online, có nhiều nhà cái có danh
              tiếng cung cấp dịch vụ chất lượng. Khách hàng có thể tự do lựa
              chọn giữa những tên tuổi nhà cái để trải nghiệm những khoảnh khắc
              thú vị của việc xem cá cược:
            </p>
            <p className="mb-4">
              Wala: Ký hiệu cược đại diện chiến kê của đội khách chiến thắng.{" "}
              <br />
              Meron: Ký tự ám chỉ cược cho chiến kê từ phía nhà cái chiến thắng.{" "}
              <br />
              BBD: Ký tự ám chỉ cửa cược tỷ số hoà.
            </p>
            <p className="mb-4">
              Ngoài ra, trong một trận đấu chọi gà, còn những thuật ngữ khác
              như:
            </p>

            <div>
              <div className="phone:w-full laptop:w-main mx-auto flex justify-center flex-col">
                <img src={ThuatNgu} alt="" className="mb-2" />
                <span className="text-center italic">
                  Một số thuật ngữ thường gặp khi tham gia Đá gà
                </span>
              </div>
            </div>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Cách để tham gia cá cược đá gà King88
            </h3>
            <p className="mb-4">
              Để tham gia cá cược đá gà King88, bước đầu tiên là chọn một nhà
              cái cung cấp dịch vụ uy tín nhất. Việc lựa chọn các sảnh game đáng
              tin cậy và chất lượng nên được ưu tiên. Những công việc này sẽ đảm
              bảo cho bạn quá trình xem trận đấu được nâng cao cũng như tính an
              toàn và độ tin cậy khi nhận tiền thưởng. Sau khi chọn, bạn có thể
              thoải mái trực tiếp tham gia chọi và lựa chọn các trận đấu mà bạn
              quan tâm.
            </p>
            <p className="my-4">
              Có 3 cửa sự lựa chọn đặt cược trước khi trận đấu đá gà diễn ra.
            </p>
            <div>
              <div className="phone:w-full laptop:w-main mx-auto flex justify-center flex-col">
                <img src={HuongDan} alt="" className="mb-2" />
                <span className="text-center italic">
                  Hướng dẫn cách tham gia đá gà cụ thể nhất
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Cửa Meron
              </h4>
              <p className="pb-4">
                Meron là lựa chọn của bạn nếu bạn dự đoán gà từ phía nhà cái sẽ
                giành chiến thắng. Cửa đặt này thường thành công vì các gà chiến
                được chọn từ sảnh game có chất lượng tốt, và do đó, chúng có tỷ
                lệ thắng cao.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Cửa Wala
              </h4>
              <p className="pb-4">
                Nếu bạn tin rằng gà chiến từ phía người chơi sẽ giành chiến
                thắng, hãy đặt vào cửa này. Mặc dù mức cược thường thấp hơn,
                nhưng việc chọn tại Wala không đảm bảo về chất lượng. Do đó, khi
                xem xét việc vào tiền, bạn nên cân nhắc một cách kỹ lưỡng.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Cửa BDD
              </h4>
              <p className="mb-4">
                Nếu bạn dự đoán rằng trận đấu sẽ kết thúc với tỷ số hoà, cửa này
                có thể là sự lựa chọn phù hợp. Tuy xác suất thường thấp, nhưng
                trong đá gà, khả năng xác định thắng bại thường rõ ràng hơn do
                tính hiếu thắng của các chú gà chọi.
              </p>

              <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Kết luận
              </h3>
              <p className="pb-4">
                Đừng chần chừ, đăng ký ngay tại king88vina.com để tham gia trải
                nghiệm đá gà King88 và mở ra cơ hội kiếm lợi nhuận từ hình thức
                cá cược độc đáo này. Chúc bạn gặt hái nhiều may mắn và tận hưởng
                những giây phút thú vị trên chặn đường chơi vào tiền của mình.
              </p>
            </div>
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

export default ChickenGame;
