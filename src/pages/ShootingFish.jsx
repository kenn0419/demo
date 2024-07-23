import image1 from "../image/cach-choi-ban-ca-bien-sau.webp";
import image2 from "../image/tim-hieu-tong-quan.webp";
import image3 from "../image/tim-hieu-doi-net-ve-ban-ca.webp";
import image4 from "../image/tong-quan-chi-tiet-ve-ban-ca.webp";
import { useState } from "react";
import trainghiem from "../image/Trai-nghiem-ban-ca.webp";
import ThamGia from "../image/Tham-gia-game.webp";
import GiaoDien from "../image/Giao-dien-do-hoa.webp";
import HuongDan from "../image/Huong-dan-dang-ky.webp";
import clsx from "clsx";
import { Blog } from "../components";

const blogs = [
  {
    id: 1,
    image: image1,
    link: "",
    title: "Ưu Điểm Game Bắn Cá Biển Sâu Thu Hút Số Lượng Lớn Cược Thủ",
    desc: "Bắn cá biển sâu là tựa game mới xuất hiện không lâu thuộc sảnh game [...]",
    comments: 2,
  },
  {
    id: 2,
    image: image2,
    link: "",
    title: "Game Bắn Cá Long Vương Đổi Tiền Thưởng Khủng Tại King88",
    desc: "Game bắn cá long vương là trò chơi trực tuyến đổi thưởng khủng được nhiều [...]",
    comments: 1,
  },
  {
    id: 3,
    image: image3,
    link: "",
    title: "Bắn Cá HD – Sự Đột Phá Đầy Tính Đổi Mới Ấn Tượng Tại King88",
    desc: "Bắn cá HD – Sự đột phá ấn tượng đã mang đến sức hút lớn [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "",
    title: "Cách Chơi Bắn Cá Kui Lee Tại Cổng Game King88 Hot Hit Nhất 2024",
    desc: "Cách chơi bắn cá Kui Lee là từ khóa đang được cộng đồng ngư thủ [...]",
    comments: null,
  },
];

const ShootingFish = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto w-main text-white">
        <h1 className="uppercase font-bold text-main pt-4 pb-4 text-center">
          BẮN CÁ KING88
        </h1>
        <p className="italic py-4 text-sm">
          Trải nghiệm <strong className="text-main">bắn cá King88</strong> đang
          tạo nên một làn sóng mạnh mẽ trong thế giới game bắn cá online đổi
          thưởng từ lúc mới ra mắt. Nó không chỉ gây ấn tượng là một trò chơi
          thú vị mà còn thu hút đông đảo các anh em bởi những phần thưởng hấp
          dẫn. Từ đó, bắn cá King88 là một hiện tượng rầm rộ. Chúng tôi sẽ giới
          thiệu chi tiết hơn và giải thích lý do vì sao đây lại trở thành một xu
          hướng không thể bỏ qua!
        </p>
        <p className="py-4 text-center">
          ✅ Xem thêm : <strong className="text-main">Casino</strong>
        </p>
        <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
          Bắn cá King88 là gì?
        </h3>
        <p className="pb-4">
          Bắn cá King88, một biến thể độc đáo của trò chơi bắn cá truyền thống.
          Đây là sự tiếp nối từ những phiên bản truyền thống được chơi tại siêu
          thị. Và kể từ đó, tựa game đã trở thành một hiện tượng thu hút sự quan
          tâm và ủng hộ đông đảo người tham gia. Từ những lý do trên, nó đã trở
          thành đề tài hấp dẫn khi các nhà cái quyết định mở rộng kinh doanh
          thông qua nền tảng online.
        </p>
        <div className="relative">
          <div
            className={clsx(
              "w-[960px] mx-auto flex justify-center flex-col",
              expanded ? "h-auto" : "h-[100px] overflow-hidden"
            )}
          >
            <img
              src={trainghiem}
              alt=""
              className={clsx("mb-2", expanded ? "h-auto" : "")}
            />
            <span className="text-center italic">
              Trải nghiệm bắn cá King88 là gì?
            </span>
          </div>
          <div
            className={clsx(
              "w-full transition-all duration-500",
              expanded ? "block" : "hidden"
            )}
          >
            <p className="mb-4">
              Ngày nay, trò chơi không chỉ giới hạn ở những lối chơi đơn giản và
              nhàm chán, các tựa bắn cá trực tuyến ngày càng phát triển và đa
              dạng. Đặc biệt tại King88, sự hợp tác chặt chẽ với nhiều nhà phát
              hành game đã mang lại trải nghiệm độc đáo và hấp dẫn cho các khách
              hàng, đưa bắn cá King88 này lên một tầm cao mới.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Chơi bắn cá tại King88 có lợi gì?
            </h3>
            <p className="pb-4">
              Chơi game bắn cá tại King88 mang đến những lợi ích đặc sắc gì?
              Trong thị trường game online đổi thưởng gần đây, trò chơi bắn cá
              đã thu hút sự chú ý của người dùng với nhiều ưu điểm độc đáo. Hãy
              cùng chúng tôi khám phá các điểm mạnh đặc biệt mà nó mang lại nhé.
            </p>
            <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Tham gia cuộc chơi nhanh chóng và dễ dàng
            </h4>
            <p className="pb-4">
              Hành trình bắn cá King88 diễn ra cực nhanh chóng và dễ dàng, đứng
              đầu trong danh sách những ưu điểm không thể bỏ qua. Lợi thế này
              mang lại sự thuận tiện tối đa, cho phép người chơi tham gia mọi
              lúc, mọi nơi. Điều này đồng nghĩa với việc trải nghiệm game trực
              tuyến mang lại sự tiện lợi hơn đáng kể so với việc tham gia tại
              các địa điểm truyền thống. Phương thức chơi online mở ra cơ hội
              cho bạn thưởng thức bất kỳ khi nào và bất kỳ đâu, chỉ cần có kết
              nối internet.
            </p>
            <div>
              <div className="w-[960px] mx-auto flex justify-center flex-col">
                <img src={ThamGia} alt="" className="mb-2" />
                <span className="text-center italic">
                  Tham gia game tại King88 cực nhanh chóng và dễ dàng
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Cách chơi đơn giản
              </h4>
              <p className="pb-4">
                Được xem là một trong những trò chơi online tại nhà cái có
                phương thức chơi đơn giản nhất, phù hợp với mọi lứa tuổi. Tất cả
                các quy tắc đều được giảm thiểu để anh em có thể nắm bắt một
                cách dễ dàng. Hơn nữa, với lối tối giản này, tạo điều kiện thuật
                lợi để các thành viên có thể linh hoạt điều chỉnh phong cách
                trải nghiệm cá nhân theo sở thích của riêng mình.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Các tựa game đa dạng
              </h4>
              <p className="pb-4">
                Sảnh chơi game đa dạng tại địa điểm bắn cá King88 đổi thưởng ở
                đây thực sự đặc sắc, với đa dạng các tựa đề được cung cấp. Trong
                khu vực giải trí của nhà cái king88vina.com chúng tôi, hệ thống
                liên tục cập nhật và đổi mới. King88 hứa hẹn mang đến hành trình
                mới lạ và chất lượng cao trong trò chơi, nhằm phục vụ các anh em
                một cách tốt nhất.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Thiết kế giao diện đồ hoạ cực đẹp
              </h4>
              <p className="pb-4">
                Giao diện cùng đồ hoạ của trò chơi đã trải qua những cải tiến
                đáng kể so với quá khứ. Đặc biệt, khi sự chú ý của khách hàng
                ngày càng tập trung vào thiết kế game. Yêu cầu về đồ hoạ từ phía
                người dùng ngày càng cao hơn. Điều này đã thúc đẩy các nhà phát
                triển phải nâng cao chất lượng của trang web.
              </p>
              <div>
                <div className="w-[960px] mx-auto flex justify-center flex-col">
                  <img src={GiaoDien} alt="" className="mb-2" />
                  <span className="text-center italic">
                    Giao diện đồ hoạ được thiết kế cực tỉ mỉ
                  </span>
                </div>
              </div>
              <p className="pb-4">
                Tại king88vina.com, giao diện của tất cả các trò chơi bắn cá
                được chăm chút tỉ mỉ đến từng chi tiết. Điều này không chỉ tạo
                ra một ấn tượng tích cực đối với người chơi mà còn mang lại trải
                nghiệm game sống động và hấp dẫn trên từng khoảnh khắc.
              </p>
              <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Hướng dẫn tham gia bắn cá King88
              </h3>
              <p className="pb-4">
                Để tham gia trải nghiệm trò chơi bắn cá King88 online đổi
                thưởng, trước hết, bạn cần tạo một tài khoản cá nhân trên trang
                web. Nếu đã có trước đó, bạn chỉ cần đăng nhập và bắt đầu chơi
                ngay lập tức.
              </p>
              <p className="pb-4">
                Để đăng ký tài khoản mới tại nhà cái King88 chúng tôi, thực hiện
                những bước đơn giản sau đây:
              </p>
              <p className="pb-4">
                Truy cập trang chủ chính thức king88vina.com và chọn mục “Đăng
                ký” ở góc phải trên cùng của màn hình.
              </p>
              <p className="pb-4">
                Điền đầy đủ và chính xác thông tin được yêu cầu, sau đó nhấn
                đăng ký để hoàn thành nhiệm vụ.
              </p>
              <p className="pb-4">
                Kiểm tra lại thông tin đã điền và xác nhận để tiếp tục.
              </p>
              <p className="pb-4">
                Hệ thống của nhà cái sẽ kiểm tra và xác nhận người dùng bằng mã
                OTP. Tuy nhiên, sau khi có tài khoản cá nhân, bạn cần liên kết
                ngân hàng hoặc ví điện tử để thực hiện được các giao dịch nạp và
                rút tiền.
              </p>
              <div>
                <div className="w-[800px] mx-auto flex justify-center items-center flex-col">
                  <img src={HuongDan} alt="" className="mb-2" />
                  <span className="text-center italic">
                    Hướng dẫn đăng ký tham gia bắn cá King88
                  </span>
                </div>
              </div>
              <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Kết luận
              </h3>
              <p className="pb-4">
                Vừa rồi là những thông tin về trò chơi bắn cá King88 online đổi
                thưởng tại nhà cái chúng tôi. Nhà cái chân thành cảm ơn sự quan
                tâm của các anh em đối với bài viết này. Chúc quý vị luôn đạt
                được nhiều phần thưởng hấp dẫn trong hành trình trải nghiệm game
                của mình. Hãy luôn theo dõi và đón chờ những hướng dẫn tiếp
                theo.
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

export default ShootingFish;
