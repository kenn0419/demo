import image1 from "../image/game-bai-tien-len-doi-thuong-la-gi.jpg";
import image2 from "../image/khai-niem-ve-lieng-cao-to-3-cay.jpg";
import image3 from "../image/sanh-co-quay-roulette.png";
import image4 from "../image/mg-va-king88-hop-tac.png";
import image5 from "../image/Da-dang-tua-game-va-phong-phu-cac-the-loai-choi.png";
import image6 from "../image/Game-bai-JILI-King88-vo-cung-thu-hut-va-hap-dan.webp";
import image7 from "../image/Game-bai-RICH88-King88-cuon-hut-hap-dan-nguoi-choi.webp";
import image8 from "../image/Game-bai-SG-da-nen-tang-phong-phu-hap-dan.webp";
import image9 from "../image/Game-bai-WG-King88-duoc-dong-dao-nguoi-choi-tin-dung.webp";

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
    link: "https://king88vina.vip/game-bai-tien-len-doi-thuong-pho-bien-2024/",
    title: "Những Loại Game Bài Tiến Lên Đổi Thưởng Phổ Biến 2024 ",
    desc: "Trò chơi tiến lên đổi thưởng là một hình thức đánh bài trực tuyến không [...]  ",
    comments: null,
  },
  {
    id: 2,
    image: image2,
    link: "https://king88vina.vip/choi-lieng-cao-to-3-cay/",
    title: "Hướng Dẫn Chi Tiết Kinh Nghiệm Chơi Liêng Cào Tố 3 Cây ",
    desc: "Chắc hẳn trong thế giới bài bạc, game thủ quá quen thuộc với nhiều thể [...]",
    comments: null,
  },
  {
    id: 3,
    image: image3,
    link: "https://king88vina.vip/game-bai-ps-king88-trai-nghiem-casino-chuan-vip-quoc-te/",
    title: "Game Bài PS King88 – Trải Nghiệm Casino Chuẩn VIP Quốc Tế",
    desc: "Game bài PS King88 là nơi tốt nhất để các tay chơi trải nghiệm hòa [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "https://king88vina.vip/game-bai-mg-king88-nang-tam-trai-nghiem-cho-cac-tay-choi/",
    title: "Game Bài MG King88 – Nâng Tầm Trải Nghiệm Cho Các Tay Chơi",
    desc: "Tìm hiểu sơ lược về sảnh game bài MG King88 và các trò chơi hot [...]",
    comments: null,
  },
  {
    id: 5,
    image: image5,
    link: "https://king88vina.vip/game-bai-km-king88-tro-choi-doi-thuong-hot-nhat-thoi-dai/",
    title: "Game bài KM King88 – Trò chơi đổi thưởng hot nhất thời đại",
    desc: "Game bài KM King88 là trò chơi không thể không thử sức khi đến nhà [...]",
    comments: null,
  },
  {
    id: 6,
    image: image6,
    link: "https://king88vina.vip/game-bai-jili-king88-thu-vi-phong-phu-va-vo-cung-hap-dan/",
    title: "Game Bài JILI King88 – Thú Vị, Phong Phú Và Vô Cùng Hấp Dẫn",
    desc: "Game bài JILI King88 đang ngày càng phát triển, trở thành một thiên đường cá [...]",
    comments: null,
  },
  {
    id: 7,
    image: image7,
    link: "https://king88vina.vip/game-bai-rich88-king88-thu-hut-bang-giao-dien-dep-mat/",
    title: "Game bài RICH88 King88 – Thu hút bằng giao diện đẹp mắt",
    desc: "Game bài RICH88 King88 là nền tảng vô cùng hấp dẫn hiện nay. Với rất [...]",
    comments: null,
  },
  {
    id: 8,
    image: image8,
    link: "https://king88vina.vip/game-bai-sg-thu-thuat-thang-tron-cung-chuyen-gia/",
    title: "Game Bài Sg – Thủ Thuật Thắng Trọn Cùng Chuyên Gia",
    desc: "Game bài SG được xem là một trong những trò chơi đứng đầu thị trường [...]",
    comments: null,
  },
  {
    id: 9,
    image: image9,
    link: "https://king88vina.vip/game-bai-wg-king88-hap-dan-thu-vi-va-loi-cuon/",
    title: "Game bài WG King88 – Hấp dẫn, thú vị và lôi cuốn",
    desc: "Game bài WG nhà cái King88 đã và đang dần phát triển trở thành một [...]",
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
      <div className="mx-auto phone:w-full laptop:w-main text-white">
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
              "phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col",
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
              <div className="phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col">
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
              <div className="phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col">
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
              <div className="phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col">
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
