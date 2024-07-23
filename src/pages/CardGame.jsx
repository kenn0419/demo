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
import sanhCasino from "../image/Kham-pha-the-gioi-game-bai-King88.webp";
import ThamGia from "../image/Thiet-ke-game-Sam-Loc-voi-do-hoa-mang-tinh-tham-my.webp";
import baiCasino from "../image/Trai-nghiem-Poker-cuc-dinh.webp";
import Tuagamehot from "../image/Huong-dan-tham-gia-game-bai-tai-King88-cuc-chi-tiet.webp";
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
const CardGame = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto w-main text-white">
        <h1 className="uppercase font-bold text-main pt-4 pb-4 text-center">
          GAME BÀI KING88
        </h1>
        <p className="py-4 text-sm">
          Dòng <strong className="text-main">game bài King88</strong> hiện đang
          là điểm đến hàng đầu, thu hút sự yêu thích và đánh giá cao từ đông đảo
          người dùng. Tuy nhiên, vẫn có một số tân thủ còn băn khoăn về địa chỉ
          cá cược này. Hãy cùng khám phá những thông tin thú vị về trò chơi
          trong bài viết dưới đây.
        </p>
        <p className="py-4 text-center">
          ✅ Xem thêm :{" "}
          <strong className="text-main"> Game nổ hũ tại King88</strong>
        </p>
        <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
          Nội dung game bài King88 là như thế nào?
        </h3>
        <p className="pb-4">
          Game bài King88 là một thế giới trực tuyến hoàn hảo, tương thích với
          mọi thiết bị từ điện thoại đến laptop, chỉ cần có kết nối internet.
          Mỗi trò chơi tại đây sử dụng bộ bài Tây 52 lá quen thuộc, nhưng lại
          mang đậm bản sắc riêng và có luật lệ khác nhau.
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
              Khám phá thế giới game bài King88
            </span>
          </div>
          <div
            className={clsx(
              "w-full transition-all duration-500",
              expanded ? "block" : "hidden"
            )}
          >
            <p className="mb-4">
              Tại King88, người chơi có thể trải nghiệm đa dạng các trò như Xóc
              Đĩa, Tài Xỉu, Bầu Cua, Sâm và nhiều trò chơi khác. Mỗi phiên bản
              đều mang đến cách chơi độc đáo, tạo nên sức hút khác biệt mà không
              ai nên bỏ lỡ. Nỗ lực đầu tư liên tục vào trang web king88vina.com,
              đam mê đánh bài được thoả mãn đầy đủ và đa dạng.
            </p>
            <p className="mb-4">
              Ngoài ra, khách hàng khi tham gia tại game bài King88 sẽ được tận
              hưởng nhiều dịch vụ hấp dẫn và ưu đãi nổi bật. Đã có hàng triệu
              thành viên đánh giá cao về nhà cái chúng tôi khi trải nghiệm tại
              đây. Hãy cùng tìm hiểu chi tiết về các trò chơi trong phần tiếp
              theo nhé!
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Một số tựa game phổ biến tại game bài King88
            </h3>
            <p className="mb-4">
              Game bài King88 là một địa điểm cá cược nổi tiếng, thu hút đông
              đảo khách hàng bởi sự đa dạng và hấp dẫn của các sản phẩm game.
              Với cam kết liên tục cập nhật các trò chơi mới nhất, King88 không
              ngừng phục vụ các bet thủ đam mê bộ môn này. Trang web đã cam kết
              đem đến cho bạn những trải nghiệm an toàn và độc đáo hơn cả khi
              tham gia vào king88vina.com.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Chinh phục Sâm Lốc và giành chiến thắng lớn tại game bài King88
            </h3>
            <p className="mb-4">
              Sâm Lốc, một trong những trò chơi phổ biến tại các nhà cái, thu
              hút sự tham gia từ 2 đến 4 người ngồi cùng bàn. Điều đặc biệt là
              người chơi có thể tự tạo để trải nghiệm cùng bạn bè.
            </p>
            <p className="pb-4">
              {
                "So với Tiến Lê, Sâm Lốc khác biệt hoàn toàn với việc không xác định sức mạnh của các chất bài như rô, cơ, bích, chuồn. Trong trò chơi này, lá bài 2 được coi là có giá trị cao nhất, còn quân 3 thì có giá trị thấp nhất. Thứ tự sắp xếp như sau: 2>A>K>Q>J>10>9>8>7>6>5>4>3."
              }
            </p>
            <div>
              <div className="w-[960px] mx-auto flex justify-center flex-col">
                <img src={ThamGia} alt="" className="mb-2" />
                <span className="text-center italic">
                  Tham gia game tại King88 cực nhanh chóng và dễ dàng
                </span>
              </div>
            </div>
            <p className="mb-4">
              Trò chơi trực tuyến bắt đầu với hướng chơi theo chiều kim đồng hồ.
              Người chơi phải đánh lá bài có giá trị lớn hơn lá bài trước đó để
              chặn đứng. Quy tắc trong Sâm Lốc rất rõ ràng, đánh 2 lá cuối cùng
              được coi là thối và dẫn đến thất bại ngay lập tức.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Đắm chìm trong Tiến lên – Game bài hấp dẫn
            </h4>
            <p className="pb-4">
              Tiến Lên, một trò chơi đánh bài không thể bỏ qua, với sự kết hợp
              giữa đơn giản nhưng không kém phần hấp dẫn. Đặc biệt, tại Việt
              nam, game này đã trở thành một hiện tượng trong giới cá cược
              online. Người tham gia thường tụ tập, thưởng thức những giây phút
              đầy cảm xúc khi tham gia giao đấu trên bàn cờ.
            </p>
            <p className="mb-4">
              Phiên bản Tiến Lên Miền Nam online tại king88vina.com duy trì luật
              chơi truyền thống, giúp người chơi dễ dàng tiếp cận. Đây là một
              trải nghiệm giải trí thu hút lượng thành viên đông đảo hàng ngày
              tại King88 Club. Số lượng các anh em tham gia không ngừng tăng
              lên, là minh chứng cho sức ảnh hưởng không nhỏ của trò này trong
              cộng đồng cá cược.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Khám phá thế giới độc nhất của Poker
            </h4>
            <p className="pb-4">
              Sức hấp dẫn của Poker là không thể phủ nhận, đặc biệt khi nó là
              một trong những trò chơi bài King88 được đông đảo đảo người hâm mộ
              yêu thích. Khi bước chân vào thế giới của Poker, người tham gia
              cần có tư duy, chiến lược và khả năng đánh giá tình hình.
            </p>
            <p className="mb-4">
              Sự căng thẳng và hồi hộp trong từng ván bài, kết hợp với việc phải
              đưa ra những quyết định chiến lược, tất cả tạo nên một hành trình
              không thể nào quên khi tham gia vào thế giới game bài.
            </p>
            <div>
              <div className="w-[960px] mx-auto flex justify-center flex-col">
                <img src={baiCasino} alt="" className="mb-2" />
                <span className="text-center italic">
                  Trải nghiệm Poker cực đỉnh
                </span>
              </div>
            </div>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Hướng dẫn tham gia một cách chi tiết
            </h3>
            <p className="pb-4">
              Để tham gia trò chơi đánh bài trực tuyến, cộng đồng bet thủ cần
              tuân theo một số bước đơn giản dưới đây:
            </p>
            <p className="mb-4">
              Truy cập vào link chính thức king88vina.com của cổng game và hoàn
              thành quá trình đăng ký tài khoản thành công. Đây là bước quan
              trọng nhất để tất cả thành viên bắt đầu chuyến hành trình trải
              nghiệm của mình.
            </p>
            <p className="mb-4">
              Sau khi hoàn thành đăng ký, đăng nhập vào tài khoản và thực hiện
              thao tác nạp tiền để có nguồn vốn chơi game.
            </p>
            <p className="mb-4">
              Tiếp theo, người chơi tìm đến mục “Game bài” và bắt đầu.
            </p>
            <p className="mb-4">
              Sau khi chuyển đến sảnh game, cược thủ có thể lựa chọn trò chơi mà
              mình muốn tham gia tuỳ thuộc vào nhu cầu cá nhân.
            </p>
            <p className="mb-4">
              Cuối cùng, chỉ cần ngồi xuống và chuẩn bị sẵn sàng và tham gia vào
              trò chơi theo luật lệ đã được quy định trước.{" "}
            </p>
            <div>
              <div className="w-[960px] mx-auto flex justify-center flex-col">
                <img src={Tuagamehot} alt="" className="mb-2" />
                <span className="text-center italic">
                  Hướng dẫn tham gia game bài tại King88 cực chi tiết
                </span>
              </div>
            </div>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Kết luận
            </h3>
            <p className="pb-4">
              Mọi thông tin chi tiết về game bài King88 đã được chia sẻ ở trên.
              Chúng tôi hy vọng rằng tất cả các thành viên đều đã nắm rõ và tự
              tin khi tham gia vào trải nghiệm cá cược trực tuyến.
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

export default CardGame;
