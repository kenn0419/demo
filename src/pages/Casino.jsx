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
import sanhCasino from "../image/Sanh-casino-online.webp";
import ThamGia from "../image/Huong-dan-cach-tham-gia-tro-choi-ban-ca.webp";
import baiCasino from "../image/Nhung-game-bai-casino-thu-vi-nhat.webp";
import Tuagamehot from "../image/Rong-ho-tua-game-hot-hit-nhat-hien-nay.webp";
import clsx from "clsx";
import { Blog } from "../components";

const blogs = [
  {
    id: 1,
    image: image1,
    link: "https://king88vina.vip/cach-choi-roulette/",
    title: "Bật Mí Cách Chơi Roulette Dễ Về Bờ Cho Các Cược Thủ",
    desc: "Roulette là một trong những trò chơi game bài ăn khách được thiết kế tỷ [...]",
    comments: null,
  },
  {
    id: 2,
    image: image2,
    link: "https://king88vina.vip/cach-choi-poker-2-la/",
    title: "Hướng Dẫn Cách Chơi Poker 2 lá Đơn Giản Cho Tân Thủ",
    desc: "Để nâng cao tỷ lệ giành chiến thắng trong game bài poker. Không đơn thuần [...]",
    comments: null,
  },
  {
    id: 3,
    image: image3,
    link: "https://king88vina.vip/hack-game-casino/",
    title: "Hướng Dẫn Game Thủ Cách Cài Đặt Tool Hack Game Casino",
    desc: "Tool hack game casino được rất nhiều anh em lựa chọn để sử dụng chơi [...]",
    comments: null,
  },
  {
    id: 4,
    image: image4,
    link: "https://king88vina.vip/hand-poker/",
    title: "Khám Phá Các Hand Poker Giúp Bắt Đầu Thuận Lợi",
    desc: "Bạn đã từng nghe đến Hand Poker chưa? Đó là một khía cạnh thú vị [...]",
    comments: null,
  },
  {
    id: 5,
    image: image5,
    link: "https://king88vina.vip/danh-baccarat-theo-nhom/",
    title: "Đánh Baccarat Theo Nhóm Và Những Điều Bet Thủ Cần Biết ",
    desc: "Khi tiếp xúc với thế giới của trò chơi Baccarat, bạn sẽ thường nghe đến [...]",
    comments: null,
  },
  {
    id: 6,
    image: image6,
    link: "https://king88vina.vip/win-three-cards/",
    title: "Cùng King88 Tìm Hiểu Tựa Game Win Three Cards Chi Tiết Nhất",
    desc: "Win three cards, một trò chơi từ lâu đã phổ biến trên thị trường casino [...]",
    comments: null,
  },
  {
    id: 7,
    image: image7,
    link: "https://king88vina.vip/khai-niem-flush-poker-la-gi-xep-hang-bo-bai-chuyen-nghiep/",
    title: "Khái Niệm Flush Poker Là Gì? – Xếp Hạng Bộ Bài Chuyên Nghiệp",
    desc: "Flush poker là gì? Phương pháp chơi của thuật ngữ này có điều gì khác [...]",
    comments: null,
  },
  {
    id: 8,
    image: image8,
    link: "https://king88vina.vip/casino-ag-king88-dang-cap-song-bai-online-tu-nha-cai-uy-tin/",
    title: "Casino AG King88: Đẳng Cấp Sòng Bài Online Từ Nhà Cái Uy Tín",
    desc: "Nếu bạn là người yêu thích các trò chơi sòng bài quốc tế thì chắc [...]",
    comments: null,
  },
  {
    id: 9,
    image: image9,
    link: "https://king88vina.vip/cac-dang-cuoc-trong-poker-hap-dan-thu-vi-va-da-dang/",
    title: "Các Dạng Cược Trong Poker Hấp Dẫn, Thú Vị Và Đa Dạng",
    desc: "Tìm hiểu ngay các dạng cược trong Poker , mang đến cho game thủ góc [...]",
    comments: null,
  },
  {
    id: 10,
    image: image10,
    link: "https://king88vina.vip/dinh-nghia-bluff-poker-la-gi-chien-thuat-choi-hieu-qua/",
    title: "Định Nghĩa Bluff Poker Là Gì? Chiến Thuật Chơi Hiệu Quả",
    desc: "Bluff poker là gì? tại sao lại khiến các cược thủ thích thú đến vậy? [...]",
    comments: null,
  },
];
const Casino = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="bg-black pl-3">
      <div className="mx-auto phone:w-full laptop:w-main text-white">
        <h1 className="uppercase font-bold text-main pt-4 pb-4 text-center">
          CASINO ONLINE KING88
        </h1>
        <p className="py-4 text-sm">
          <strong className="text-main">Casino online King88</strong> đang dần
          phát triển, hoàn thiện để trở thành nền tảng số 1 hiện nay. Nơi đây
          mang đến cho người chơi những dịch vụ hot hit, độc đáo cùng với đó là
          các chương trình khuyến mãi vô cùng hấp dẫn. Bài viết này, chúng tôi
          sẽ giới thiệu khái quát, mang đến cho bạn một vài thông tin cần biết
          về nhà cái này.
        </p>
        <p className="py-4 text-center">
          ✅ Xem thêm : <strong className="text-main">Đá gà King88</strong>
        </p>
        <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
          Tổng quan về casino online King88
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
              Sảnh casino online King88 có gì đặc sắc
            </span>
          </div>
          <div
            className={clsx(
              "w-full transition-all duration-500",
              expanded ? "block" : "hidden"
            )}
          >
            <p className="mb-4">
              Khi tham gia vào sòng casino online King88, các bạn có cơ hội giao
              lưu cùng các cược thủ nhằm học hỏi kinh nghiệm. Điều này giúp ích
              mọi người trong quá trình trau dồi kinh nghiệm chơi.
            </p>
            <p className="mb-4">
              Hầu hết mỗi danh mục game tại nhà cái{" "}
              <strong className="text-main">king88</strong> đều được trau dồi
              chăm chút từ những điều nhỏ nhất và gây ấn tượng là về giao diện.
              Hình ảnh các Dealer xinh đẹp, nóng bỏng kết hợp cùng dàn âm thanh
              sống động đều mang đến cảm giác chân thực cho người chơi.
            </p>
            <p className="mb-4">
              Đồng thời tại King88, tỷ lệ thắng cùng vô cùng cao đi kèm với
              nhiều mã khuyến mãi dành cho tất cả thành viên. Kết hợp với đó là
              trải nghiệm các dịch vụ nạp rút tiền an toàn nên còn chần chừ gì
              nữa mà không tham gia ngay thôi nào.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Hướng dẫn cách tham gia vào casino King88
            </h3>
            <div>
              <div className="phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col">
                <img src={ThamGia} alt="" className="mb-2" />
                <span className="text-center italic">
                  Tham gia game tại King88 cực nhanh chóng và dễ dàng
                </span>
              </div>
            </div>
            <p className="pb-4">
              Để tránh bỡ ngỡ khi tham gia sòng bài{" "}
              <strong className="font-bold">casino online King88</strong>, chúng
              tôi đem đến các bước truy cập cực kỳ đơn giản kể cả tân binh lần
              đầu biết đến cũng có thể thực hiện được. Thao tác 5 bước sau đây
              chắc chắn giúp ích bạn trong quá trình trải nghiệm game này nhé.
            </p>
            <p className="mb-4">
              Bước 1: Đầu tiên truy cập đường link của King88 là điều thiết yếu.
              Bạn cần đăng nhập hoặc đăng ký tài khoản thành viên tại đây để bắt
              đầu các bước tiếp theo <br />
              Bước 2: Hãy thực hiện thao tác nạp tiền vào tài khoản để tạo quỹ
              chung. Từ đó mà có thể cá cược bất cứ trò nào bạn yêu thích <br />{" "}
              Bước 3: Khi truy cập trang chủ có vô số các trò casino cho mọi
              người chọn từ game bài cho đến xổ số <br /> Bước 4: Cuối cùng chỉ
              cần dự đoán về kết quả trò chơi sau đó đặt cược và nếu thắng thì
              nhận phần thưởng khủng từ King88
            </p>
            <p className="mb-4">
              Cách đặt cược ở các sảnh game tương tự nhau. Dưới sự dẫn dắt
              chuyên nghiệp của các MC, anh em sẽ nhanh chóng làm quen và nắm
              bắt kinh nghiệm trong quá trình cược.
            </p>
            <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
              Một số game casino online tại King88
            </h3>
            <p className="mb-4">
              Bên cạnh đó khi tham gia sảnh casino online King88, bạn sẽ có cơ
              hội trải nghiệm toàn bộ trò chơi thú vị với tỷ lệ trả thưởng cao.
              Đặc biệt có một số game mà bạn nên thử như sau
            </p>
            <div>
              <div className="phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col">
                <img src={baiCasino} alt="" className="mb-2" />
                <span className="text-center italic">
                  Những game bài casino thú vị nhất
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Trò chơi baccarat với sự yêu thích của cược thủ
              </h4>
              <p className="pb-4">
                Baccarat hay còn được xem là trận đối đầu trên bàn cờ. Mọi người
                cần cố gắng để dự đoán xem cửa nào có tổng điểm lớn hơn để chiến
                thắng. Và tất nhiên thì cách chơi baccarat cũng không quá khó
                như mọi người tưởng tượng.
              </p>
              <p className="mb-4">
                Về cơ bản nó giống như trò chơi bài phổ biến trong văn hoá bài
                cào của người Việt. Điều đặc biệt ở chỗ khi tham gia baccarat
                tất cả các ván sẽ sử dụng lá bài thứ ba. Hầu hết mỗi cửa chỉ sử
                dụng khoảng 2 lá bài.
              </p>
              <p className="mb-4">
                Nếu tổng điểm 2 quân ban đầu thấp hơn thì người chơi phải rút
                thêm lá thứ ba nhằm xác định kết quả. Baccarat cũng sử dụng bộ
                tú lơ khơ 52 lá được trộn lên đều từ 4 đến 5 bài.
              </p>
              <p className="mb-4">
                Trong quá trình tham gia ván đấu có khả năng mọi người sở hữu
                hai lá bài giống nhau. Chính vì thế chỉ cần trò chơi bắt đầu thì
                dealer sẽ phân phối hai quân cho các cửa nhà cái và nhà con.
              </p>
              <p className="mb-4">
                Mọi người có khoảng chừng 30 giây nhằm dự đoán cửa nào có số
                điểm cao hơn. Tiếp đó nhiệm vụ của dealer tiến hành lật bài và
                tính điểm tại hai cửa. Nếu số điểm đạt từ 7 đến 9 thì được xem
                là thắng tự nhiên.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Tựa game rồng hổ hot hit
              </h4>
              <p className="pb-4">
                Tại hầu hết các nhà cái uy tín hiện này, rồng hổ đang dần trở
                thành một tựa game sở hữu lượng người chơi rất lớn. Đặc biệt,
                tại casino online King88, trò chơi này còn có lượng fan đông đảo
                hơn cả bởi luật chơi dễ dàng cùng với tỷ lệ thắng rất cao phù
                hợp với rất nhiều người.
              </p>
              <div>
                <div className="phone:w-[90%] laptop:w-[960px] mx-auto flex justify-center flex-col">
                  <img src={Tuagamehot} alt="" className="mb-2" />
                  <span className="text-center italic">
                    Rồng hổ – Tựa game hot hit nhất hiện nay
                  </span>
                </div>
              </div>
              <p className="mb-4">
                Những người tham gia chỉ cần đặt niềm tin, sự may mắn của mình
                vào một trong hai cửa rồng và hổ tại đây. Tỷ lệ chiến thắng của
                tựa game này là 50-50, một tỷ lệ chiến thắng cực cao dành cho
                các cược thủ.
              </p>
              <h4 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Game bài poker thú vị, hấp dẫn với tỷ lệ cược vô cùng cao
              </h4>
              <p className="pb-4">
                Poker từ lâu đã là một thể loại game không thể thiếu được tại
                các sòng bài uy tín.{" "}
                <strong className="font-bold">Casino online King88</strong> cũng
                không phải ngoại lệ. Với một tựa game vừa đòi hỏi khả năng tư
                duy kết hợp sự quyết đoán và những chiến thuật hợp lý, poker đã
                trở thành một trò chơi thu hút được rất nhiều người chơi tham
                gia.
              </p>
              <p className="pb-4">
                Poker tại sàn cược này còn mang đến cho các cược thủ một trải
                nghiệm chân thật nhất về tựa game này. Đem đến cho những người
                tham gia những trận đấu căng thẳng, hấp dẫn và đầy sự tính toán.
                Một cảm giác như đang chơi tại sòng thật, một cảm nhận không
                phải ở nền tảng nào người chơi cũng cảm nhận được.
              </p>
              <h3 className="text-main font-bold text-[1.25rem] mt-5 pb-2">
                Kết luận
              </h3>
              <p className="pb-4">
                Như vậy, chúng tôi đã gửi đến bạn những thông tin cần biết trước
                khi bắt đầu tham gia vào Casino online King88. Hy vọng với bài
                viết này, mọi người sẽ có cho mình những điều bổ ích và thú vị
                và có thêm sự tin tưởng vào nhà cái uy tín này.
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

export default Casino;
