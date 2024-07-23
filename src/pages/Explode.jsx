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
import sanhCasino from "../image/Game-no-hu-King88-cuc-thu-vi.webp";
import ThamGia from "../image/No-hu-King88-so-huu-nhieu-tinh-nang-doc-dao.webp";
import baiCasino from "../image/Trai-nghiem-muot-ma-tai-No-hu-tren-thiet-bi-di-dong.webp";
import Tuagamehot from "../image/Tong-hop-mot-so-cau-hoi-thuong-gap-tai-King88.webp";
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
const Explode = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto w-main text-white">
        <h1 className="uppercase font-bold text-main pt-4 pb-4 text-center">
          NỔ HŨ KING88
        </h1>
        <p className="py-4 text-sm">
          Game nổ hũ <strong className="text-main">King88,</strong> , điểm đến
          yêu thích của những người chơi cá cược, hứa hẹn mang một trải nghiệm
          giải trí cực kỳ hấp dẫn. Sảnh chơi độc đáo này sẽ đưa ra thị trường
          phiên bản quay xu đổi thưởng mới, với những phần thưởng khổng lồ. Nếu
          bạn chưa khám phá hết sức cuốn hết từ sản phẩm này, hãy cùng chúng tôi
          xem qua từng chi tiết từ A – Z dưới đây.
        </p>
        <p className="py-4 text-center">
          ✅ Xem thêm : <strong className="text-main">Cá cược thể thao</strong>
        </p>
        <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
          Game nổ hũ King88 là gì?
        </h3>
        <p className="pb-4">
          <strong className="text-main">Game nổ hũ tại King88</strong> là một
          trải nghiệm slot quay thưởng hàng ngày. Nơi đây là điểm đến đa dạng
          cho các thành viên nhà cái. Bắt nguồn từ máy xèng châu Âu, game nổ hũ
          King88 cung cấp nhiều server và các phiên bản khác nhau. Các tựa game
          như Maya Golden City, Fortune Lions, Fu lu Show đến các nhà tài trợ
          danh giá như PG, Jili, T1, Rich88, BSP và nhiều hơn nữa.
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
              Game nổ hũ King88 cực thú vị
            </span>
          </div>
          <div
            className={clsx(
              "w-full transition-all duration-500",
              expanded ? "block" : "hidden"
            )}
          >
            <p className="mb-4">
              Mỗi tựa game nổ hũ gửi đến quý khách hàng hành trình độc đáo với
              cốt truyện và mức tiền thưởng riêng biệt. Sự đa dạng, phong phú
              giúp các thành viên của Casino hoàn toàn đắm chìm trong thế giới
              đa sắc màu của trò chơi. Trong bối cảnh có vô số địa chỉ quay slot
              trên thị trường, Nổ hũ King88 vẫn giữ vững lòng tin từ cộng đồng
              bet thủ.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Các tính năng độc đáo của Game nổ hũ King88
            </h3>
            <p className="mb-4">
              Nhìn nhận những đặc điểm độc đáo của sảnh nổ hũ online King88, có
              thể đề cập đến các tính năng sau:
            </p>
            <p className="mb-4">
              Giao diện 3D xuất sắc, tái tạo chân thực cả về hình ảnh và âm
              thanh, với sự đa dạng về chủ đề. <br /> Hơn 300 phiên bản trò chơi
              và 13 sảnh game, mang lại nhiều sự lựa chọn cho các thành viên.{" "}
              <br /> Tiện ích trò chuyện trực tiếp tại các server, tạo cơ hội
              giao lưu và chia sẻ kinh nghiệm cho người chơi. <br /> Phiên bản
              chơi Slot trên ứng dụng di động, đảm bảo trải nghiệm mượt mà và
              trơn tru. <br /> Danh mục “cược của tôi” sẽ ghi lại lịch sử quay
              hũ, để cho người chơi xác định được thời điểm nổ Jackpot nhiều
              nhất.
            </p>
            <div>
              <div className="w-[960px] mx-auto flex justify-center flex-col">
                <img src={ThamGia} alt="" className="mb-2" />
                <span className="text-center italic">
                  Nổ hũ King88 sở hữu nhiều tính năng độc đáo
                </span>
              </div>
            </div>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Cách trải nghiệm game nổ hũ King88 trên điện thoại
            </h3>
            <p className="pb-4">
              Trải nghiệm nổ hũ King88 trên điện thoại di động đã được đơn giản
              hoá với việc phát triển ứng dụng cho cả hai hệ điều hành Android
              và iOS. Dưới đây là cách cho bạn tải ứng dụng:
            </p>
            <p className="mb-4">
              Nhấp vào nút “Tải app” trên thanh menu công cụ ở góc trái màn hình
              trang chủ king88vina.com. <br /> Chọn link tải App hoặc quét mã QR
              tương ứng với hệ điều hành của bạn. <br /> (iOS/ Android) Cho phép
              iOS/Android cài đặt ứng dụng, xác nhận bằng cách nhấn “Huỷ” nếu
              bạn gặp cảnh báo.
            </p>
            <p className="mb-4">Cài đặt App trên điện thoại:</p>
            <p className="mb-4">
              {
                " iOS: Cài đặt -> Cài đặt chung -> Quản lý ứng dụng -> Bấm “Tin cậy”"
              }
              <br />
              Android: Cài đặt {"-> "}Cấp quyền cho phép App hiển thị nội dung
              tại màn hình chính.
            </p>
            <div>
              <div className="w-[960px] mx-auto flex justify-center flex-col">
                <img src={baiCasino} alt="" className="mb-2" />
                <span className="text-center italic">
                  Trải nghiệm mượt mà tại Nổ hũ trên thiết bị di động
                </span>
              </div>
            </div>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Bí quyết chơi game nổ hũ King88
            </h3>
            <p className="mb-4">
              Các mẹo chơi game slot quay hũ tại King88 mà chúng tôi chia sẻ
              dưới đây đến từ những cao thủ có kinh nghiệm, mang lại những lời
              khuyên hữu ích cho cả tân thủ:
            </p>
            <p className="mb-4">
              Tìm hiểu và chọn những tựa game đơn giản vì chúng thường có tỷ lệ
              thắng cao, từ đó tăng cơ hội nổ Jackpot. <br /> Tập trung vào các
              game cơ bản thay vì những tựa game có hình ảnh đặc sắc nhưng chưa
              được kiểm chứng. <br /> Ưu tiên chơi những trò chơi cao với mức
              cược tối đa để tăng khả năng nhận được phần thưởng lớn. <br /> Sử
              dụng chiến thuật đặt cược tối đa hợp lý, đặc biệt phù hợp cho
              những người chơi có nguồn tài chính vững vàng. Khoảng 90% bet thủ
              trong sảnh Nổ hũ thường áp dụng chiến thuật này. <br /> Hạn chế sử
              dụng chế độ Auto vì có thể giảm khả năng chiến thắng do kết quả
              thường khá thấp.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Một số câu hỏi thường gặp khi chơi game nổ hũ King88
            </h3>
            <p className="mb-4">
              Dưới đây là một tổng hợp các câu hỏi thường gặp khi tham gia trải
              nghiệm chơi nổ hũ King88, kèm theo những giải đáp ngắn gọn và rõ
              ràng nhất.
            </p>
            <div>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Quay hũ ở nhiều phiên bản cùng lúc có khả thi không?
              </h4>
              <p className="pb-4">
                Không, trong mỗi lượt chơi, thành viên chỉ có khả năng quay hũ ở
                một phiên bản game duy nhất. Sau khi kết thúc vòng, các bạn có
                thể chuyển sang hình thức khác. Đồng thời, cần lưu ý rằng việc
                sử dụng đồng thời hai thiết bị để đăng nhập vào cùng một tài
                khoản có thể dẫn đến mất thông tin.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Khi nào thì nên nghỉ chơi nổ hũ?
              </h4>
              <p className="pb-4">
                Bet thủ nên tự đặt mục tiêu và tuân thủ theo kế hoạch đã được
                lên trước. Khi các bạn đã đạt được 20% lợi nhuận so với vốn ban
                đầu, việc dừng lại sẽ là một chiến lược chơi an toàn và hiệu
                quả.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Bao nhiêu tuổi thì được tham gia game nổ hũ ?
              </h4>
              <p className="pb-4">
                Để tham gia trải nghiệm slot game quay hũ tại king88vina.com,
                chỉ những người chơi từ 18 tuổi trở lên mới được phép đăng ký
                thành viên. Ở lứa này, các bạn có đủ khả năng tự chịu trách
                nhiệm với hành động cá nhân và đáp ứng đủ điều kiện để đặt cược.
              </p>
              <div>
                <div className="w-[960px] mx-auto flex justify-center flex-col">
                  <img src={Tuagamehot} alt="" className="mb-2" />
                  <span className="text-center italic">
                    Tổng hợp một số câu hỏi thường gặp tại King88
                  </span>
                </div>
              </div>
              <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Kết luận
              </h3>
              <p className="pb-4">
                Cuối cùng, thông qua bài viết về game nổ hũ King88, chúng tôi hy
                vọng mang đến cho các bet thủ một kiến thức sâu rộng về phiên
                bản đổi thưởng chất lượng này. Để trải nghiệm sự mới mẻ trong
                lĩnh vực cá cược và nhận được những phần quà khổng lồ, hãy đăng
                ký ngay một tài khoản thành viên tại king88vina.com.
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

export default Explode;
