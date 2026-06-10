window.CODES = {
 "取词失效": {
  "cat": "Kích hoạt / cài đặt",
  "name": "Chụp màn hình chết toàn bộ",
  "alias": "chụp chụp màn hình không hoạt động không phản hồi rê chuột capture 取词",
  "trigger": "Ngay sau cài / cập nhật, rê chuột hay phím chụp không làm gì",
  "official": "Chụp màn hình cần Youdao chạy nền với chụp đã bật; bản desktop chính thức cung cấp chụp thông minh / chụp clipboard / chụp OCR.",
  "cause": "Chụp màn hình dùng hook toàn cục chèn vào ứng dụng tiền cảnh để đọc văn bản của nó: cần tiến trình Youdao chạy + công tắc chụp chính bật + phím kích hoạt khớp. Thiếu một, trông «chết hẳn», thường bị nhầm phần mềm hỏng.",
  "fix": "Kiểm tra biểu tượng khay có hoạt động (xám = chưa chạy, nhấp đúp để mở); Cài đặt → Chụp và bôi chọn, tích «bật chụp» và chọn chế độ (rê chuột / giữ Ctrl); khởi động lại Youdao và thử lại.",
  "scene": "Youdao không tự khởi động, không biểu tượng khay → chụp không bao giờ phản hồi; chạy thủ công là sửa được."
 },
 "划词不弹窗": {
  "cat": "Kích hoạt / cài đặt",
  "name": "Dịch bôi chọn không hiện popup",
  "alias": "bôi chọn dịch không popup 划词 bôi chọn tô sáng",
  "trigger": "Bôi chọn một cụm từ không bật popup dịch",
  "official": "Dịch bôi chọn cần «bôi chọn» bật với «tự dịch khi bôi chọn» được tích; có thể dịch khi bôi chọn hoặc bằng phím.",
  "cause": "Bôi chọn và chụp là công tắc riêng: nhiều người bật chụp nhưng không bật bôi chọn, hoặc tắt «tự dịch khi bôi chọn», nên «bôi chọn không hiện gì»; phím tắt bôi chọn cũng có thể bị chiếm.",
  "fix": "Cài đặt → Chụp và bôi chọn, tích «bật dịch bôi chọn» và «tự dịch khi bôi chọn»; nếu bằng phím, xác nhận phím đó trống; bôi chọn trong trình duyệt còn cần tiện ích chụp.",
  "scene": "Không phản hồi trong PDF / web nhưng popup trong Notepad → thường do tương thích ứng dụng đó (tiện ích / chế độ bảo vệ), không phải công tắc bôi chọn."
 },
 "Word取词": {
  "cat": "Tương thích ứng dụng",
  "name": "Chụp/bôi chọn trong Word / Office hỏng",
  "alias": "word office excel chụp bôi chọn câu add-in com education 365 plugin",
  "trigger": "Sau khi cài / đổi Office (nhất là Education, 365), Word / Excel không dịch bôi chọn",
  "official": "Youdao tích hợp Office qua add-in COM để dịch bôi chọn / câu; nếu add-in bị tắt hoặc chưa đăng ký, hỏng.",
  "cause": "Office tắt add-in COM bên thứ ba vì tương thích hoặc chính sách; đổi phiên bản (vd. Education mới) khiến add-in cũ chưa đăng ký cho Office mới, nên «trước được, giờ không».",
  "fix": "Word: Tệp → Tùy chọn → Phần bổ trợ → dưới cùng «Quản lý: Phần bổ trợ COM» → Đến → tích add-in Youdao; nếu không, cài lại Youdao để đăng ký lại; đảm bảo bitness Youdao và Office khớp.",
  "scene": "Sau Office Education mới dịch bôi chọn chết và add-in có trong danh sách nhưng chưa tích → bật nó là khôi phục."
 },
 "PDF取词": {
  "cat": "Tương thích ứng dụng",
  "name": "Chụp trong PDF / Acrobat hỏng",
  "alias": "pdf acrobat reader chụp bôi chọn yodaodict.api chế độ bảo vệ plug_ins autotray quét",
  "trigger": "Adobe Acrobat / Reader: bôi chọn trong PDF không làm gì, hoặc «không tải được plugin»",
  "official": "Bản chính thức hỗ trợ chụp màn hình PDF trong Adobe Reader / Acrobat; bản «portable» không chính thức không chụp được PDF, và PDF phải là văn bản, không phải ảnh.",
  "cause": "Ba nguyên nhân: ① «chế độ bảo vệ» Acrobat là sandbox chặn chèn YodaoDict.api bên thứ ba; ② lệch bitness giữa Acrobat 64-bit và add-in Youdao cũ cho «plugin không tương thích»; ③ PDF là bản quét (ảnh, không lớp văn bản).",
  "fix": "Tắt trong Acrobat Chỉnh sửa → Tùy chọn → Bảo mật (nâng cao) → «Bật chế độ bảo vệ khi khởi động», mở Youdao trước Acrobat; với cảnh báo «không tương thích» 64-bit, cài Youdao mới nhất, hoặc sao YodaoDict.api vào plug_ins của Acrobat; với bản quét dùng OCR chụp mạnh.",
  "scene": "Acrobat 64-bit, bôi chọn không làm gì, «không tải được YodaoDict.api» → tắt chế độ bảo vệ + sao .api vào plug_ins là khôi phục."
 },
 "浏览器划词": {
  "cat": "Tương thích ứng dụng",
  "name": "Bôi chọn/chụp trong Chrome / trình duyệt hỏng",
  "alias": "chrome edge firefox trình duyệt bôi chọn chụp tiện ích plugin tăng tốc phần cứng 360 adblock",
  "trigger": "Không chụp trên trang web / không popup bôi chọn, trong khi Notepad v.v. vẫn được",
  "official": "Chrome / Firefox v.v. cần tiện ích chụp Youdao riêng; bản desktop chính thức cung cấp «chụp Chrome».",
  "cause": "Trình duyệt là sandbox riêng: ① thiếu tiện ích chụp Youdao, hook toàn cục không đọc văn bản DOM; ② tăng tốc phần cứng GPU kết xuất trang thành texture không lớp đọc được; ③ công tắc adblock / bảo mật (vd. trình duyệt 360) chặn chụp.",
  "fix": "Cài tiện ích chụp Youdao cho trình duyệt của bạn (qua cài đặt Youdao hoặc cửa hàng); tắt «dùng tăng tốc phần cứng» trong cài đặt trình duyệt rồi khởi động lại; tắt adblock ở trình duyệt 360.",
  "scene": "Bôi chọn trong Chrome không làm gì; cài tiện ích Youdao là sửa; vài trang vẫn hỏng do texture tăng tốc - tắt tăng tốc."
 },
 "截图翻译": {
  "cat": "Phím tắt",
  "name": "OCR ảnh chụp/vùng không hoạt động",
  "alias": "ảnh chụp vùng ocr nhận diện quick ocr phím tắt ctrl alt o dịch vùng",
  "trigger": "Phím tắt nhận diện ảnh chụp không làm gì / không nhận diện được văn bản",
  "official": "OCR ảnh chụp cần phím tắt nhận diện ảnh chụp đã đặt (vd. Ctrl+Alt+O) và mô-đun OCR đã tải; bạn chọn vùng màn hình bằng cách kéo.",
  "cause": "OCR ảnh chụp không cần lớp văn bản - nó nhận diện vùng đã chọn bằng ảnh, nên cần mô-đun OCR đã tải + phím tắt trống + (macOS) quyền ghi màn hình để đọc điểm ảnh.",
  "fix": "Cài đặt → Phím tắt, gán phím không xung đột cho «OCR ảnh chụp»; tải mô-đun OCR lần đầu dùng; trên macOS cấp «Ghi màn hình»; chọn vùng rõ hơn nếu nhận diện kém.",
  "scene": "Phím tắt không làm gì → thường công cụ chụp đã chiếm phím; đổi tổ hợp là khôi phục."
 },
 "快捷键冲突": {
  "cat": "Phím tắt",
  "name": "Xung đột phím tắt chụp / ảnh chụp",
  "alias": "phím tắt xung đột bị chiếm ctrl công cụ chụp bộ gõ qq",
  "trigger": "Phím chụp / ảnh chụp không làm gì, hoặc «đã bị hệ thống chiếm»",
  "official": "Chụp / bôi chọn / nhận diện ảnh chụp đều tùy chỉnh được trong Phím tắt; khi xung đột nó cảnh báo, và bạn có thể gán lại hoặc đặt lại.",
  "cause": "Phím tắt toàn cục là ai-trước-được-trước: công cụ chụp, bộ gõ, QQ / WeChat hay từ điển khác có thể giữ cùng tổ hợp, nên phím Youdao không làm gì.",
  "fix": "Cài đặt → Phím tắt, chú ý cảnh báo xung đột; đổi sang tổ hợp hiếm hơn như Ctrl+Shift+chữ / Alt+chữ; đóng từng ứng dụng giữ phím để tìm thủ phạm.",
  "scene": "Sau khi cài công cụ chụp mới phím chụp chết → gán lại phím Youdao hoặc của công cụ."
 },
 "macOS权限": {
  "cat": "Quyền",
  "name": "macOS chụp / phím tắt cần cấp quyền",
  "alias": "mac macos quyền trợ năng ghi màn hình accessibility cấp quyền riêng tư",
  "trigger": "Chụp và phím tắt chết trên macOS, nhất là sau cập nhật hệ thống",
  "official": "macOS phải cấp cho Youdao «Trợ năng» (giám sát phím tắt / điều khiển) và «Ghi màn hình» (đọc màn hình để chụp / ảnh chụp) trong Cài đặt hệ thống → Quyền riêng tư và bảo mật.",
  "cause": "Sandbox macOS đòi cấp quyền tường minh: thiếu «Trợ năng» không nghe được phím tắt toàn cục, thiếu «Ghi màn hình» không đọc được điểm ảnh; cập nhật thường đặt lại cả hai.",
  "fix": "Cài đặt hệ thống → Quyền riêng tư và bảo mật → tích Youdao trong «Trợ năng» và «Ghi màn hình» rồi khởi động lại; cấp lại sau mỗi cập nhật macOS.",
  "scene": "Sau cập nhật macOS chụp chết hẳn → quyền bị đặt lại; tích lại cả hai là khôi phục."
 },
 "管理员权限": {
  "cat": "Quyền",
  "name": "Không chụp trong ứng dụng nâng quyền (UAC)",
  "alias": "quản trị uac nâng quyền administrator chạy với tư cách admin mức đặc quyền trình quản lý tác vụ",
  "trigger": "Ứng dụng thường chụp tốt; một ứng dụng «chạy với tư cách quản trị» thì không",
  "official": "Trên Windows, vài trường hợp cần Youdao «chạy với tư cách quản trị» để chụp trong ứng dụng nâng quyền.",
  "cause": "Mức toàn vẹn Windows (UAC) cách ly tiến trình: hook quyền thường không thể chèn vào tiến trình toàn vẹn cao (quản trị) và ngược lại, nên «chỉ ứng dụng đó không chụp».",
  "fix": "Chuột phải Youdao «Chạy với tư cách quản trị» để khớp mức đặc quyền của đích; hoặc đặt luôn chạy với tư cách quản trị (thuộc tính tương thích).",
  "scene": "Không chụp trong công cụ dev / cửa sổ từ xa chạy với tư cách quản trị → chạy Youdao với tư cách quản trị là khôi phục."
 },
 "弹窗飞走": {
  "cat": "Kết xuất / hiển thị",
  "name": "Popup ngoài màn hình khi nhiều màn hình / DPI cao",
  "alias": "nhiều màn hình hai màn hình dpi cao tỷ lệ popup ngoài màn hình ghim cửa sổ 4k laptop",
  "trigger": "Khi nhiều màn hình / DPI cao popup chụp xuất hiện ở chỗ không thấy",
  "official": "Cài đặt chụp cung cấp «ghim vị trí cửa sổ» để ghim popup dịch tại một điểm cố định.",
  "cause": "Khi tỷ lệ DPI mỗi màn hình khác nhau, tọa độ popup được tính với tỷ lệ sai, nên nó «bay» ra ngoài màn hình hoặc tới màn hình không thấy.",
  "fix": "Tích «ghim vị trí cửa sổ» trong cài đặt chụp và đặt ở góc trên trái màn hình chính; giữ tỷ lệ màn hình nhất quán; khởi động lại Youdao để làm mới tọa độ nếu cần.",
  "scene": "4K ngoài + laptop tỷ lệ khác, chụp có «tiếng nhưng không cửa sổ» → ghim vị trí cửa sổ là giải quyết."
 },
 "64位": {
  "cat": "Tương thích ứng dụng",
  "name": "Tương thích chụp ứng dụng / hệ thống 64-bit",
  "alias": "64-bit x64 plugin không tương thích acrobat bitness 32-bit tương thích",
  "trigger": "Chụp hỏng hoặc báo plugin không tương thích trong Acrobat / ứng dụng 64-bit",
  "official": "Bản desktop Youdao tương thích 64-bit và hỗ trợ chụp màn hình trên hệ thống 64-bit; bản cũ có thể không tương thích với plugin của vài ứng dụng 64-bit.",
  "cause": "DLL hook 32/64-bit không trộn lẫn: thành phần chèn của Youdao cũ không khớp với host 64-bit (vd. Acrobat 64-bit), nên host từ chối nạp và báo «plugin không tương thích».",
  "fix": "Cập nhật lên Youdao mới nhất (có thành phần chụp 64-bit); nếu Acrobat 64-bit vẫn hỏng, sao YodaoDict.api phù hợp vào plug_ins của nó và chạy Youdao với tư cách quản trị.",
  "scene": "Sau khi nâng lên Acrobat 64-bit bôi chọn chết → cài Youdao mới nhất là khôi phục."
 },
 "绿色版": {
  "cat": "Mạng / cài đặt",
  "name": "Bản portable / nhẹ không chụp được",
  "alias": "portable nhẹ không chính thức chụp pdf hook dll đăng ký xanh",
  "trigger": "Trên Youdao «portable / nhẹ» bên thứ ba, chụp PDF / toàn cục không hoạt động",
  "official": "Tuyên bố chính thức: bản «portable» không chính thức của Youdao không chụp PDF đúng cách - cài bản tiêu chuẩn chính thức mới nhất.",
  "cause": "Chụp màn hình phụ thuộc các thành phần hook / plugin được đăng ký vào hệ thống khi cài; bản portable bỏ hoặc không đăng ký chúng vì «không cần cài», nên chụp toàn cục / PDF chết.",
  "fix": "Gỡ bản portable và cài Youdao tiêu chuẩn chính thức mới nhất từ trang (ghi đè) để các thành phần chụp đăng ký đúng.",
  "scene": "Lấy bản portable cho tiện, chụp PDF không bao giờ chạy → bản chính thức là khôi phục."
 },
 "全屏取词": {
  "cat": "Kết xuất / hiển thị",
  "name": "Chụp hỏng ở toàn màn hình / game",
  "alias": "toàn màn hình game toàn màn hình độc quyền hook hỏng video",
  "trigger": "Chụp không làm gì trong ứng dụng toàn màn hình / game / video toàn màn hình độc quyền",
  "official": "Ở toàn màn hình (nhất là độc quyền) hook chụp toàn cục có thể hỏng - dùng chế độ cửa sổ hoặc OCR ảnh chụp.",
  "cause": "Toàn màn hình độc quyền bỏ qua tổng hợp cửa sổ thường và chiếm nhập liệu/kết xuất, nên hook toàn cục không nhận sự kiện / văn bản và chụp chết ở toàn màn hình.",
  "fix": "Chuyển ứng dụng sang «cửa sổ / cửa sổ không viền»; hoặc dùng OCR ảnh chụp (chọn vùng) thay vì chụp rê chuột cho nội dung toàn màn hình.",
  "scene": "Không chụp trong game toàn màn hình độc quyền → dùng cửa sổ không viền, hoặc OCR ảnh chụp."
 },
 "取词慢": {
  "cat": "Mạng / cài đặt",
  "name": "Chụp chậm / thỉnh thoảng không phản hồi",
  "alias": "chụp chậm lag độ trễ không phản hồi mạng tốc độ trực tuyến",
  "trigger": "Chụp chạy nhưng popup chậm, đôi khi không có",
  "official": "Tốc độ chụp màn hình phụ thuộc mạng; trên mạng thường phản hồi thường dưới 1 giây.",
  "cause": "Định nghĩa trực tuyến cần truy vấn mạng, nên dao động / DNS chậm làm trễ popup; OCR ảnh chụp cũng nhận diện cục bộ, nên mô-đun chưa sẵn sàng chậm hoặc dự phòng hỏng.",
  "fix": "Kiểm tra / chuyển sang mạng ổn định hơn; bật từ điển cục bộ tăng cường cho từ thông dụng để giảm gọi mạng; xác nhận mô-đun OCR đã tải; khởi động lại Youdao nếu cần.",
  "scene": "Chụp mất vài giây trên mạng yếu → chuyển mạng / bật từ điển cục bộ tăng tốc rõ rệt."
 },
 "扫描件取词": {
  "cat": "Kết xuất / hiển thị",
  "name": "Không thể chụp bản quét / ảnh",
  "alias": "bản quét ảnh pdf ảnh ocr chụp mạnh ảnh chụp không lớp văn bản nhận diện",
  "trigger": "Chụp không làm gì trên ảnh / PDF quét",
  "official": "Ảnh / bản quét không có lớp văn bản, nên chụp thường không đọc được - bật «OCR chụp mạnh» để nhận diện bằng ảnh.",
  "cause": "Chụp thường đọc bộ đệm văn bản của ứng dụng; bản quét / ảnh chỉ có điểm ảnh, không mã hóa ký tự, nên không có gì để chụp - phải OCR ảnh thành văn bản.",
  "fix": "Cài đặt → Chụp và bôi chọn, tích «OCR chụp mạnh cho mọi phần mềm» và tải mô-đun OCR; hoặc dùng OCR ảnh chụp trên vùng; dùng bản gốc rõ hơn nếu nhận diện kém.",
  "scene": "PDF giấy đã quét không chọn được → bật OCR chụp mạnh làm nó nhận diện được."
 },
 "输入法冲突": {
  "cat": "Phím tắt",
  "name": "Bộ gõ / phần mềm khác cướp phím",
  "alias": "bộ gõ sogou pinyin cướp phím ctrl bị chiếm xung đột từ điển khác",
  "trigger": "Bộ kích hoạt chụp (vd. Ctrl) bị bộ gõ / ứng dụng khác lấy",
  "official": "Nếu bộ kích hoạt (vd. Ctrl) bị phần mềm khác chiếm, chụp bị ưu tiên trước và không làm gì; đổi bộ kích hoạt chụp.",
  "cause": "Chụp thường kích hoạt bằng phím Ctrl / F; bộ gõ, từ điển khác và công cụ clipboard có thể nghe cùng phím, và ai đăng ký trước thì phản hồi, nên chụp Youdao bị «cướp».",
  "fix": "Đổi bộ kích hoạt chụp Youdao sang tổ hợp độc đáo hơn / sang rê chuột; hoặc chỉnh phím tắt ứng dụng xung đột; đóng từng ứng dụng nghi ngờ để tìm kẻ cướp.",
  "scene": "Sau khi cài công cụ clipboard, chụp bằng Ctrl chết → đổi bộ kích hoạt Youdao là khôi phục."
 }
};
window.LABELS = {"miss": "Triệu chứng chưa có. Thử từ khóa khác (chụp / pdf / bôi chọn / phím tắt) hoặc xem bảng đầy đủ bên dưới.", "codeword": ""};
window.FIELDS = [["trigger", "Khi nào xảy ra"], ["official", "Triệu chứng L1 / định vị chính thức"], ["cause", "Nguyên nhân gốc L2"], ["fix", "Cách kiểm tra / khắc phục"], ["scene", "Ca thực tế"]];
window.THEAD = ["Triệu chứng", "Nhóm", "Triệu chứng L1 / định vị chính thức", "Nguyên nhân gốc L2"];
