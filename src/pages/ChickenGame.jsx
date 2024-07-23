import image1 from "../image/khai-niem-ve-cach-choi-roulette.jpg";
import image2 from "../image/luat-cua-cach-choi-poker-2-la.jpg";
import image3 from "../image/cach-cai-dat-cong-cu-hack-game-don-gian.jpg";
import image4 from "../image/kham-pha-hand-poker-la-gi.jpg";
import image5 from "../image/danh-baccarat-theo-nhom-de-nhan-duoc-su-ho-tro-dich-thuc.jpg";
import image6 from "../image/gioi-thieu-tong-quan-ve-win-three-cards.jpg";
import image7 from "../image/uu-diem-khi-dung-flush-poker.png";
import image8 from "../image/gioi-thieu-ag-casino.png";
import image9 from "../image/khai-niem-poker-la-gi.png";
import image10 from "../image/loi-ich-khi-dung-bluff-poker.png";
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
    link: "",
    title: "Bật Mí Cách Chơi Roulette Dễ Về Bờ Cho Các Cược Thủ",
    desc: "Roulette là một trong những trò chơi game bài ăn khách được thiết kế tỷ [...]",
    comments: null,
  },
  {
    id: 2,
    image: image2,
    link: "",
    title: "Hướng Dẫn Cách Chơi Poker 2 lá Đơn Giản Cho Tân Thủ",
    desc: "Để nâng cao tỷ lệ giành chiến thắng trong game bài poker. Không đơn thuần [...]",
    comments: null,
  },
  {
    id: 3,
    image: image3,
    link: "",
    title: "Hướng Dẫn Game Thủ Cách Cài Đặt Tool Hack Game Casino",
    desc: "Tool hack game casino được rất nhiều anh em lựa chọn để sử dụng chơi [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "",
    title: "Khám Phá Các Hand Poker Giúp Bắt Đầu Thuận Lợi",
    desc: "Bạn đã từng nghe đến Hand Poker chưa? Đó là một khía cạnh thú vị [...]",
    comments: null,
  },
  {
    id: 5,
    image: image5,
    link: "",
    title: "Đánh Baccarat Theo Nhóm Và Những Điều Bet Thủ Cần Biết ",
    desc: "Khi tiếp xúc với thế giới của trò chơi Baccarat, bạn sẽ thường nghe đến [...]",
    comments: null,
  },
  {
    id: 6,
    image: image6,
    link: "",
    title: "Cùng King88 Tìm Hiểu Tựa Game Win Three Cards Chi Tiết Nhất",
    desc: "Win three cards, một trò chơi từ lâu đã phổ biến trên thị trường casino [...]",
    comments: null,
  },
  {
    id: 7,
    image: image7,
    link: "",
    title: "Khái Niệm Flush Poker Là Gì? – Xếp Hạng Bộ Bài Chuyên Nghiệp",
    desc: "Flush poker là gì? Phương pháp chơi của thuật ngữ này có điều gì khác [...]",
    comments: null,
  },
  {
    id: 8,
    image: image8,
    link: "",
    title: "Casino AG King88: Đẳng Cấp Sòng Bài Online Từ Nhà Cái Uy Tín",
    desc: "Nếu bạn là người yêu thích các trò chơi sòng bài quốc tế thì chắc [...]",
    comments: null,
  },
  {
    id: 9,
    image: image9,
    link: "",
    title: "Các Dạng Cược Trong Poker Hấp Dẫn, Thú Vị Và Đa Dạng",
    desc: "Tìm hiểu ngay các dạng cược trong Poker , mang đến cho game thủ góc [...]",
    comments: null,
  },
  {
    id: 10,
    image: image10,
    link: "",
    title: "Định Nghĩa Bluff Poker Là Gì? Chiến Thuật Chơi Hiệu Quả",
    desc: "Bluff poker là gì? tại sao lại khiến các cược thủ thích thú đến vậy? [...]",
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
      <div className="mx-auto w-main text-white">
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
              "w-[960px] mx-auto flex justify-center flex-col",
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
              <div className="w-[960px] mx-auto flex justify-center flex-col">
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
              <div className="w-[960px] mx-auto flex justify-center flex-col">
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
              <div className="w-[960px] mx-auto flex justify-center flex-col">
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
