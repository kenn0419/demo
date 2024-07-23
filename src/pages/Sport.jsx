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
const Sport = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto w-main text-white">
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
              "w-[960px] mx-auto flex justify-center flex-col",
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
              <div className="w-[960px] mx-auto flex justify-center flex-col">
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
              <div className="w-[960px] mx-auto flex justify-center flex-col">
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
              <div className="w-[960px] mx-auto flex justify-center flex-col">
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
