/* Ngày 3 – Bravo, theo dõi đơn, thu tiền, chăm sóc, thực chiến. Dùng lại IMG, KEEP, SAY, TASK, DIALOG */
const DAY3 = [
{
 t:'Mở đầu Ngày 3: bán xong chưa phải hết việc', time:'9:00–9:15',
 goal:['Hiểu vòng đời một đơn hàng từ cuộc gọi đến khi thu đủ tiền','Biết tiêu chí đánh giá cuối khóa để được nhận làm việc'],
 html:`
 ${IMG('kh01-9.jpg','KH01 – Phần II: Thao tác lên đơn hàng, theo dõi đơn hàng và quản lý công nợ')}
 <div class="say" style="font-style:normal"><b>"Bán xong không phải là hết việc. Việc của nhân viên bán hàng được tính là hoàn thành khi công ty thu đủ tiền hàng."</b></div>
 <h4>Vòng đời một đơn bán buôn</h4>
 <div class="flow"><span>Gọi, chốt đơn<small>Ngày 2</small></span><span>Zalo xác nhận<small>NVBH</small></span><span>Lên đơn Bravo<small>NVBH</small></span><span>Duyệt đơn<small>NVBH</small></span><span>Xuất kho<small>Thủ kho</small></span><span>Hóa đơn<small>Kế toán</small></span><span>Giao hàng<small>Đội xe</small></span><span>Thu tiền, báo có<small>NVBH + Kế toán</small></span></div>
 <h4>Lịch Ngày 3</h4>
 <div class="tbl"><table><tr><th>Giờ</th><th>Nội dung</th></tr>
 <tr><td>9:15–11:00</td><td>Bravo: đăng nhập, tạo đơn, hoàn thành đơn, duyệt đơn</td></tr>
 <tr><td>11:00–12:00</td><td>Theo dõi đơn, nhận báo có, danh sách khách hàng</td></tr>
 <tr><td>13:00–13:30</td><td>Chăm sóc và giữ chân đại lý</td></tr>
 <tr><td>13:30–16:00</td><td>Thực chiến: gọi đại lý thật, người kèm duyệt đơn</td></tr>
 <tr><td>16:00–17:00</td><td>Kế hoạch 30 ngày, tiêu chí nhận việc</td></tr>
 <tr><td>17:00–18:00</td><td>Bài cuối khóa (1 lần duy nhất), công bố kết quả</td></tr></table></div>
 <h4>Tiêu chí nhận làm việc</h4>
 <p>Tổng điểm trên app được tính từ 4 bài: Ngày 1 (20%), Ngày 2 (20%), Ngày 3 (20%), Bài cuối khóa (40%). <b>Tổng điểm từ 80% trở lên: ĐẠT, được nhận làm việc.</b> Dưới 80%: không đạt.</p>
 <p class="note">Bài Ngày 1–3 được làm lại để luyện, tính điểm cao nhất. Bài cuối khóa chỉ làm 1 lần, mở khi đã làm đủ 3 bài ngày.</p>
 ${KEEP(['Đơn chỉ xong khi công ty thu đủ tiền.','Tổng điểm ≥ 80% = được nhận việc. Bài cuối khóa chỉ làm 1 lần.'])}`,
 check:[['Việc của NVBH hoàn thành khi nào?',['Khi khách đồng ý mua','Khi công ty thu đủ tiền hàng','Khi xe xuất kho'],1,'Câu khẩu hiệu của Phần II, KH01.']]
},
{
 t:'Bravo 1: Đăng nhập và làm quen màn hình', time:'9:15–9:45',
 goal:['Đăng nhập Bravo đúng cách','Biết các mục trong nhóm Xúc tiến bán hàng'],
 html:`
 ${IMG('kh01-10.jpg','KH01 – Đăng nhập Bravo')}
 <h4>Đăng nhập</h4>
 <ol><li>Mở ứng dụng Bravo 8 trên máy tính.</li>
 <li>Ô 1: tên đăng nhập. Ô 2: mật khẩu. <b>Ô thứ 3: điền B01.</b></li>
 <li>Bấm <b>Đăng nhập</b>.</li></ol>
 <p class="note">Tài khoản do quản lý cấp. Không cho người khác dùng tài khoản của mình, không lưu mật khẩu trên máy dùng chung.</p>
 <h4>Nhóm "Xúc tiến bán hàng" – nơi NVBH làm việc hằng ngày</h4>
 <div class="tbl"><table><tr><th>Mục</th><th>Dùng để</th></tr>
 <tr><td>Theo dõi đơn đặt hàng bán</td><td>Xem trạng thái các đơn mình đã lên</td></tr>
 <tr><td>Báo giá, chào hàng</td><td>Lập báo giá cho khách</td></tr>
 <tr><td><b>Đơn đặt hàng bán</b></td><td>Tạo đơn mới, duyệt đơn</td></tr>
 <tr><td><b>Lệnh xuất hàng kiêm vận chuyển</b></td><td>Xem xe nào giao, giờ xuất, giao cho đại lý nào</td></tr>
 <tr><td><b>Báo có ngân hàng</b></td><td>Nhận các khoản khách chuyển khoản</td></tr>
 <tr><td>Hóa đơn bán hàng</td><td>Xem hóa đơn đã xuất</td></tr>
 <tr><td>Hàng bán bị trả lại</td><td>Xem các đơn trả lại</td></tr>
 <tr><td>Kế hoạch doanh số</td><td>Chỉ tiêu và tiến độ doanh số</td></tr></table></div>
 <p>Bên phải mỗi mục có <b>Nhóm dữ liệu</b>: Chứng từ của tôi, Chứng từ trong năm, Tháng 1 → Tháng 12, Kết quả tìm kiếm – dùng để lọc nhanh chứng từ.</p>
 ${TASK('Mỗi học viên đăng nhập bằng tài khoản được cấp, mở lần lượt 4 mục in đậm, chọn "Chứng từ của tôi" và tháng hiện tại.')}
 ${KEEP(['Ô thứ 3 khi đăng nhập: B01.','4 mục dùng nhiều nhất: Đơn đặt hàng bán · Lệnh xuất hàng kiêm vận chuyển · Báo có ngân hàng · Theo dõi đơn đặt hàng bán.'])}`,
 check:[['Muốn xem xe nào giao đơn của mình, mở mục nào?',['Báo giá, chào hàng','Lệnh xuất hàng kiêm vận chuyển','Kế hoạch doanh số'],1,'Lệnh xuất hàng kiêm vận chuyển có lái xe, biển số, giờ xuất.']]
},
{
 t:'Bravo 2: Tạo đơn bán mới', time:'9:45–10:00',
 goal:['Mở đúng màn hình tạo đơn bán mới'],
 html:`
 ${IMG('kh01-11.jpg','KH01 – Tạo đơn bán hàng mới')}
 <ol><li>Từ màn hình Menu chính, chọn tab <b>Đơn đặt hàng bán</b> (số 1 trên ảnh).</li>
 <li>Bấm biểu tượng <b>thêm đơn hàng mới</b> trên thanh menu phía trên (số 2).</li>
 <li>Cửa sổ "Cập nhật đơn đặt hàng bán" mở ra để nhập đơn.</li></ol>
 <h4>Trước khi tạo đơn, phải có đủ</h4>
 <ul><li>Tin Zalo đại lý đã xác nhận "OK": mã, số lượng, giá, ngày giao, địa chỉ.</li>
 <li>Tên khách đúng như trên Bravo (xem Danh mục đối tượng nếu chưa chắc).</li>
 <li>Kho xuất hàng (ví dụ Kho hàng Bồ Đề) – hỏi thủ kho nếu mã đó nằm ở kho khác.</li></ul>
 ${KEEP(['Đơn đặt hàng bán → biểu tượng thêm mới.','Chưa có xác nhận của khách thì chưa lên đơn.'])}`,
 check:[['Điều gì cần có trước khi lên đơn?',['Tin Zalo khách đã xác nhận mã, số lượng, giá, ngày giao','Hóa đơn của kế toán','Biển số xe'],0,'Tránh lên đơn sai rồi phải hủy.']]
},
{
 t:'Bravo 3: Hoàn thành đơn hàng', time:'10:00–10:45',
 goal:['Nhập đúng khách, kho, mã, số lượng','Tính chiết khấu/khuyến mãi và lưu đơn'],
 html:`
 ${IMG('kh01-12.jpg','KH01 – Hoàn thành đơn hàng mới (6 điểm đánh số trên ảnh)')}
 <h4>6 bước theo số trên ảnh</h4>
 <div class="steps">
  <div><b>1 – Khách hàng</b><span>Gõ tên khách → bấm <b>phím cách (space)</b> → chọn đúng khách trong danh sách. Kiểm tra địa chỉ hiện ra có đúng không.</span></div>
  <div><b>2 – Kho hàng</b><span>Gõ tên kho → phím cách → chọn đúng kho (ví dụ 021: Kho hàng Bồ Đề). Vùng tiêu thụ tự hiện theo khách.</span></div>
  <div><b>3 – Mã hàng</b><span>Gõ mã ngắn gọn (ví dụ "FTKB25", "GR-RT236") → phím cách → chọn đúng mã đầy đủ.</span></div>
  <div><b>4 – Số lượng</b><span>Nhập số lượng ở cột Số lượng. Kiểm tra đơn giá niêm yết, đơn giá, thành tiền tự hiện.</span></div>
  <div><b>5 – Tính chiết khấu/KM</b><span>Bấm nút <b>[Tính chiết khấu/KM]</b> để hệ thống áp chiết khấu và khuyến mãi theo chính sách. Kiểm tra cột %CK, CK mặt hàng, Đơn giá cuối cùng.</span></div>
  <div><b>6 – Lưu</b><span>Bấm <b>[Lưu và thêm mới]</b>. (Các nút khác: Lưu và quay ra, Lưu tạm, Đóng.)</span></div>
 </div>
 <h4>Tự kiểm tra trước khi lưu</h4>
 <div class="tbl"><table><tr><th>Kiểm tra</th><th>Lỗi nếu bỏ qua</th></tr>
 <tr><td>Đúng khách (không trùng tên với khách khác)</td><td>Giao nhầm, công nợ ghi sai người</td></tr>
 <tr><td>Đúng kho</td><td>Thủ kho không có hàng, đơn bị trả lại</td></tr>
 <tr><td>Đúng mã đầy đủ (1 chiều/2 chiều, màu, dung tích)</td><td>Giao sai máy, phải đổi trả</td></tr>
 <tr><td>Đã bấm Tính chiết khấu/KM</td><td>Sai giá, sai khuyến mãi</td></tr>
 <tr><td>Tổng tiền khớp tin Zalo đã xác nhận</td><td>Tranh cãi giá với khách</td></tr></table></div>
 ${TASK('Mỗi học viên lên 3 đơn thử (người dạy chỉ định kho/khách thử): (1) 20 bộ Daikin FTKB25ZVMV; (2) 3 tủ lạnh Toshiba GR-RT236WE + 2 máy giặt AW-M1000FV; (3) 5 tủ đông Sanaky VH-4099W1. Người dạy kiểm tra từng đơn theo bảng trên.')}
 ${KEEP(['Gõ tên/mã → phím cách → chọn đúng.','Luôn bấm Tính chiết khấu/KM trước khi Lưu và thêm mới.','Đối chiếu tổng tiền với tin Zalo đã xác nhận.'])}`,
 check:[
  ['Sau khi gõ tên khách, phải bấm phím gì để hiện danh sách chọn?',['Enter','Phím cách (space)','F3'],1,'Tương tự với kho và mã hàng.'],
  ['Bước ngay trước "Lưu và thêm mới" là?',['Tính chiết khấu/KM','Duyệt','In đơn'],0,'Không bấm thì đơn sai giá, sai khuyến mãi.']
 ]
},
{
 t:'Bravo 4: Duyệt đơn để thực thi', time:'10:45–11:00',
 goal:['Duyệt đơn đúng cách để đơn được chuyển tới thủ kho'],
 html:`
 ${IMG('kh01-13.jpg','KH01 – Duyệt đơn để thực thi')}
 <ol><li>Sau khi bấm [Lưu và thêm mới], màn hình tự quay về danh sách đơn hàng. Đơn vừa tạo đã nằm trong danh sách.</li>
 <li>Kiểm tra lại thông tin đơn 1 lượt. Nếu chuẩn, chọn đơn vừa tạo (số 1), bấm <b>Duyệt</b> trên thanh menu (số 2).</li>
 <li>Màn hình duyệt mở ra: chọn <b>[Duyệt]</b> (số 3).</li>
 <li>Bấm <b>Bắt đầu thực hiện</b> (số 4).</li></ol>
 <p>Xong bước này, đơn được <b>đẩy tới khay của bộ phận thực hiện tiếp theo</b> (thủ kho xuất hàng, kế toán xuất hóa đơn, đội xe giao).</p>
 <p class="note">Lỗi hay gặp nhất của người mới: lưu đơn xong nhưng <b>quên duyệt</b> → đơn nằm im, khách chờ hàng không đến.</p>
 ${SAY('Báo khách sau khi duyệt','"Dạ đơn của anh em đã lên và duyệt rồi ạ, kho đang chuẩn bị hàng. Có giờ xe em báo anh ngay."')}
 ${KEEP(['Lưu → chọn đơn → Duyệt → [Duyệt] → Bắt đầu thực hiện.','Chưa duyệt = đơn chưa chạy.'])}`,
 check:[['Đơn đã lưu nhưng kho chưa nhận. Nguyên nhân thường gặp?',['Chưa Duyệt và Bắt đầu thực hiện','Khách chưa trả tiền','Chưa in hóa đơn'],0,'Duyệt xong đơn mới tới khay bộ phận tiếp theo.']]
},
{
 t:'Theo dõi đơn hàng và giao vận', time:'11:00–11:20',
 goal:['Biết đơn của mình đang ở đâu, xe nào giao, khi nào đến'],
 html:`
 ${IMG('kh01-14.jpg','KH01 – Quy trình theo dõi đơn hàng')}
 <p>Sau khi đơn được đẩy tới các bộ phận, NVBH tiếp tục <b>bám sát</b> bằng 2 công cụ:</p>
 <h4>1. Lệnh xuất hàng kiêm vận chuyển (trên Bravo)</h4>
 <p>Xúc tiến bán hàng → <b>Lệnh xuất hàng kiêm vận chuyển</b>. Xem: lái xe, phụ xe, biển số xe, giờ xuất hàng, xe giao những đại lý nào, bao nhiêu máy, bao nhiêu tiền.</p>
 <h4>2. GPS Bình Anh</h4>
 <p>Xem vị trí xe thời gian thực: biển số, tốc độ, địa chỉ hiện tại, thời gian cập nhật. Tài khoản được cấp riêng – <b>liên hệ đội xe để được cấp tài khoản</b>.</p>
 <h4>Khi nào chủ động báo khách</h4>
 <ul><li>Khi xe xuất kho: báo giờ dự kiến đến.</li>
 <li>Khi xe trễ so với hẹn: báo ngay, xin lỗi, báo giờ mới (hỏi đội xe).</li>
 <li>Khi đã giao: xác nhận khách nhận đủ hàng, đúng mã.</li></ul>
 ${DIALOG('Báo giờ xe',[['NV','Anh Hùng ơi, xe biển 29B-xxx đã xuất kho lúc 8 giờ 30, dự kiến đến cửa hàng anh khoảng 10 giờ 30 ạ. Anh sắp xếp người nhận hàng giúp em nhé.'],['KH','Ok em.']])}
 ${KEEP(['Lệnh xuất hàng kiêm vận chuyển: ai giao, giờ nào, giao cho ai, bao nhiêu.','GPS Bình Anh: xe đang ở đâu (xin tài khoản ở đội xe).','Chủ động báo khách trước khi khách phải hỏi.'])}`,
 check:[['Tài khoản GPS Bình Anh xin ở đâu?',['Kế toán','Đội xe','Thủ kho'],1,'Thông tin tài khoản được cấp riêng, liên hệ đội xe.']]
},
{
 t:'Nhận báo có ngân hàng', time:'11:20–11:45',
 goal:['Nhận đúng khoản chuyển khoản của khách mình'],
 html:`
 ${IMG('kh01-15.jpg','KH01 – Quy trình nhận báo có')}
 <p>Mọi khoản chuyển khoản chưa xác định được người gửi, kế toán đẩy vào <b>Báo có ngân hàng</b>. NVBH vào đây tìm khoản tiền của khách mình quản lý để nhận báo có.</p>
 <ol><li>Xúc tiến bán hàng → <b>Báo có ngân hàng</b> (số 1).</li>
 <li>Tìm khoản của khách mình theo diễn giải chuyển khoản, số tiền, ngày (số 2).</li>
 <li>Kích đúp vào dòng đó → cửa sổ mới mở → bấm phím <b>F3</b> để sửa → tìm dòng <b>[Người nộp]</b>, điền tên khách hàng (số 3).</li>
 <li>Bấm <b>[Lưu và quay ra]</b> (số 4).</li></ol>
 <h4>Mẹo để nhận báo có nhanh</h4>
 <ul><li>Khi chốt đơn, nhắc khách ghi nội dung chuyển khoản rõ: tên cửa hàng + số đơn hoặc ngày.</li>
 <li>Khách báo đã chuyển: xin ảnh chụp giao dịch, đối chiếu số tiền và thời gian.</li>
 <li>Nhận báo có trong ngày, không để dồn – công nợ của khách sẽ hiện sai.</li></ul>
 <p class="note">Chỉ nhận khoản chắc chắn là của khách mình. Không chắc thì hỏi kế toán, không đoán.</p>
 ${KEEP(['Báo có ngân hàng → kích đúp → F3 → Người nộp = tên khách → Lưu và quay ra.','Nhận trong ngày, không chắc thì hỏi kế toán.'])}`,
 check:[['Trong cửa sổ báo có, phím nào để sửa?',['F2','F3','Enter'],1,'F3 để sửa, rồi điền Người nộp.'],['Khoản tiền không rõ là của khách nào. NVBH làm gì?',['Nhận đại cho khách mình','Hỏi kế toán, không đoán','Bỏ qua'],1,'Nhận sai làm sai công nợ của 2 khách.']]
},
{
 t:'Danh sách khách hàng và phân hạng', time:'11:45–12:00',
 goal:['Xem danh sách khách được giao và phân hạng khách'],
 html:`
 ${IMG('kh01-16.jpg','KH01 – Quy trình xem danh sách khách hàng')}
 <ol><li>Từ màn hình chính, chọn <b>menu 4 ô vuông</b> ở góc trên cùng bên trái.</li>
 <li>Chọn <b>Danh mục → Danh mục đối tượng</b>.</li>
 <li>Màn hình tổng hợp danh sách khách hàng được giao hiện ra.</li>
 <li>Kéo sang cột <b>Phân hạng khách hàng</b> để xem đánh giá: Loại 2, Loại 3, Bán buôn, Ko mua…</li></ol>
 <h4>Dùng danh sách để làm gì</h4>
 <ul><li>Lập lịch gọi trong tuần: ai cần gọi trước mùa, ai lâu không mua.</li>
 <li>Đối chiếu với 4 nhóm khách đã học ở Ngày 2.</li>
 <li>Khách "Ko mua": gọi tìm lý do thật (Ngày 2, bài nghiên cứu thị trường).</li></ul>
 ${TASK('Mở danh sách khách được giao, chọn 10 khách để gọi trong buổi thực chiến chiều nay: 3 bán buôn, 4 lẻ, 3 thợ hoặc khách lâu không mua.')}
 ${KEEP(['Menu 4 ô vuông → Danh mục → Danh mục đối tượng → cột Phân hạng khách hàng.'])}`,
 check:[['Xem phân hạng khách hàng ở đâu?',['Cột Phân hạng khách hàng trong Danh mục đối tượng','Báo có ngân hàng','GPS Bình Anh'],0,'Kéo sang cột Phân hạng.']]
},
{
 t:'Chăm sóc và giữ chân đại lý', time:'13:00–13:30',
 goal:['Biết 5 hoạt động giữ khách','Xử lý sự cố đúng cách'],
 html:`
 ${IMG('kh01-23.jpg','KH01 – Chăm sóc và giữ chân khách hàng')}
 <p><b>Không chỉ là bán hàng – mà là kết nối và duy trì quan hệ dài hạn.</b></p>
 <div class="tbl"><table><tr><th>Hoạt động</th><th>Câu nói / việc làm mẫu</th></tr>
 <tr><td><b>Gọi điện định kỳ</b></td><td>"Anh ơi, mẫu hôm trước bán còn chạy tốt không?" · "Dạo này bên mình có khách hỏi tủ đông không?"</td></tr>
 <tr><td><b>Gửi báo giá sớm + quà nhỏ dịp lễ</b></td><td>Lịch, áo mưa, thẻ điện thoại… Giá trị không cần lớn, chủ yếu là tâm lý "mình được nhớ tới".</td></tr>
 <tr><td><b>Lên kế hoạch mua hàng cho khách</b></td><td>"Tháng sau em nghĩ bên mình sẽ bán tốt điều hòa Inverter 1HP – cần em giữ mã trước không?"</td></tr>
 <tr><td><b>Ghi nhớ thông tin cá nhân</b></td><td>Sinh nhật? Con cái? Cửa hàng mới? Gọi đúng lúc = ăn điểm gấp đôi.</td></tr>
 <tr><td><b>Phản ứng nhanh khi có sự cố</b></td><td>"Khách cần hỗ trợ" – xử lý nhanh gọn. "Hỏng sản phẩm" – bảo hành/đổi trả gọn gàng (quy trình 4 bước Ngày 1) → khách nhớ cả đời.</td></tr></table></div>
 <h4>Lịch chăm sóc gợi ý</h4>
 <div class="tbl"><table><tr><th>Nhóm</th><th>Tần suất gọi</th></tr>
 <tr><td>Bán buôn, điểm bán tốt</td><td>1–2 lần/tuần</td></tr>
 <tr><td>Lẻ lớn</td><td>1 lần/tuần</td></tr>
 <tr><td>Lẻ vừa</td><td>2 tuần/lần + nhắc mua theo chu kỳ</td></tr>
 <tr><td>Thợ</td><td>Khi có hàng mới, giá mới; luôn nghe máy khi thợ gọi</td></tr></table></div>
 <p><b>Theo dõi công nợ của khách mình</b>, đối chiếu với kế toán công nợ định kỳ. Nhắc thanh toán nhẹ nhàng, đúng hạn.</p>
 <div class="say" style="font-style:normal"><b>Khách hàng không trung thành với sản phẩm. Họ trung thành với người bán hàng khiến họ cảm thấy được tôn trọng và đồng hành.</b></div>
 ${KEEP(['Gọi định kỳ · quà nhỏ dịp lễ · lên kế hoạch mua cho khách · nhớ thông tin cá nhân · xử lý sự cố nhanh.','Theo dõi công nợ khách mình.'])}`,
 check:[['Gửi quà nhỏ dịp lễ nhằm mục đích gì?',['Thay cho chiết khấu','Để khách thấy "mình được nhớ tới"','Bắt khách phải mua'],1,'Giá trị không cần lớn.']]
},
{
 t:'Thực chiến: gọi đại lý thật', time:'13:30–16:00',
 goal:['Gọi ít nhất 10 đại lý thật','Lên đơn thật trên Bravo khi khách chốt, có người kèm duyệt'],
 html:`
 <h4>Quy tắc buổi thực chiến</h4>
 <ul><li>Người kèm ngồi cạnh, nghe loa ngoài hoặc tai nghe đôi.</li>
 <li>Mọi báo giá và đơn hàng phải được <b>người kèm duyệt trước</b> khi gửi khách hoặc duyệt trên Bravo.</li>
 <li>Không hứa công nợ, không giảm giá ngoài chính sách, không hứa giờ giao khi chưa hỏi đội xe.</li>
 <li>Sau mỗi cuộc gọi: ghi nhật ký ngay, người kèm góp ý 1 điểm.</li></ul>
 <h4>Chuẩn bị 5 phút trước mỗi cuộc gọi</h4>
 <ol><li>Xem khách thuộc nhóm nào, lần mua gần nhất.</li>
 <li>Chọn lý do gọi có giá trị (khuyến mãi, mùa vụ, hàng về).</li>
 <li>Chọn 1–2 mã định đề xuất, kiểm tra tồn kho.</li>
 <li>Mở sẵn bảng giá và catalogue để gửi Zalo.</li></ol>
 <h4>Nhật ký cuộc gọi (mẫu, ghi cho mỗi khách)</h4>
 <div class="tbl"><table><tr><th>Khách</th><th>Nhóm</th><th>Bán hãng nào tốt</th><th>Đang thiếu</th><th>Kết quả</th><th>Bước tiếp</th></tr>
 <tr><td>Điện máy Hùng – HD</td><td>Bán buôn</td><td>Daikin</td><td>ĐH 9.000</td><td>Chốt 20 bộ</td><td>Lên đơn, giao T5</td></tr>
 <tr><td>Anh Tâm – HY</td><td>Lẻ vừa</td><td>Sharp</td><td>Chưa rõ</td><td>Hẹn gọi lại</td><td>16h thứ Hai</td></tr></table></div>
 <p class="note">Ví dụ minh họa. Học viên ghi nhật ký thật trên giấy hoặc file của nhóm.</p>
 <h4>Người kèm chấm nhanh sau buổi</h4>
 <ul><li>Số cuộc gọi đã thực hiện (yêu cầu ≥ 10).</li><li>Số khách trả lời đủ 3 câu thị trường.</li><li>Số đơn chốt / số hẹn cụ thể.</li><li>Lỗi Bravo (nếu có).</li></ul>
 ${KEEP(['≥ 10 cuộc gọi thật.','Mọi báo giá, đơn hàng qua người kèm duyệt.','Ghi nhật ký ngay sau mỗi cuộc.'])}`,
 check:[['Trong buổi thực chiến, báo giá gửi khách cần gì?',['Gửi ngay cho nhanh','Người kèm duyệt trước','Kế toán duyệt'],1,'Người kèm duyệt mọi báo giá, đơn hàng.']]
},
{
 t:'Kế hoạch 30 ngày và tiêu chí nhận việc', time:'16:00–17:00',
 goal:['Biết mình sẽ làm gì trong 30 ngày đầu','Biết rõ cách tính tổng điểm và điều kiện nhận việc'],
 html:`
 <h4>Kế hoạch 30 ngày sau khi được nhận</h4>
 <div class="tbl"><table><tr><th>Giai đoạn</th><th>Nhân viên làm</th><th>Quản lý làm</th></tr>
 <tr><td>Tuần 1</td><td>Gọi hết danh sách được giao; mọi đơn và báo giá được duyệt trước</td><td>Nghe 3 cuộc gọi/ngày, góp ý cuối ngày 15 phút</td></tr>
 <tr><td>Tuần 2</td><td>Tự báo giá, tự lên đơn; phân loại xong 4 nhóm khách</td><td>Kiểm tra đơn Bravo, chấm 3 cuộc gọi/tuần</td></tr>
 <tr><td>Tuần 3–4</td><td>Làm độc lập; chọn 1–2 điểm bán tốt để đẩy hàng</td><td>Họp 1-1 cuối tuần: doanh số, công nợ</td></tr></table></div>
 <p>Chỉ tiêu tháng đầu (quản lý điều chỉnh theo thực tế): chốt đơn đầu tiên trong tuần 1; gọi ít nhất 30 đại lý/ngày; 100% khách có đủ 3 câu thị trường; không đơn nào nhầm khách, nhầm kho.</p>
 <h4>Cách tính tổng điểm đào tạo</h4>
 <div class="tbl"><table><tr><th>Bài</th><th>Trọng số</th><th>Cách lấy điểm</th></tr>
 <tr><td>Kiểm tra Ngày 1</td><td>20%</td><td>Điểm cao nhất (được làm lại)</td></tr>
 <tr><td>Kiểm tra Ngày 2</td><td>20%</td><td>Điểm cao nhất (được làm lại)</td></tr>
 <tr><td>Kiểm tra Ngày 3</td><td>20%</td><td>Điểm cao nhất (được làm lại)</td></tr>
 <tr><td><b>Bài cuối khóa</b></td><td><b>40%</b></td><td><b>Chỉ 1 lần duy nhất</b></td></tr></table></div>
 <p>Ví dụ: Ngày 1 = 93%, Ngày 2 = 87%, Ngày 3 = 80%, Cuối khóa = 76% → Tổng = 0,2×93 + 0,2×87 + 0,2×80 + 0,4×76 = 82,4% → <b>ĐẠT</b>.</p>
 <div class="verdict-demo"><div class="pill ok">Tổng ≥ 80%: ĐẠT – được nhận làm việc</div><div class="pill no">Tổng &lt; 80%: KHÔNG ĐẠT</div></div>
 ${KEEP(['Tổng = 20% N1 + 20% N2 + 20% N3 + 40% Cuối khóa.','Bài cuối khóa chỉ làm 1 lần – ôn kỹ trước khi bấm Bắt đầu.'])}`,
 check:[['Ngày 1 = 90%, Ngày 2 = 90%, Ngày 3 = 90%, Cuối khóa = 60%. Tổng bao nhiêu, kết quả?',['82% – Đạt','78% – Không đạt','85% – Đạt'],1,'0,2×90×3 = 54; 0,4×60 = 24; tổng 78% < 80% → Không đạt. Bài cuối khóa nặng 40% nên phải ôn kỹ.']]
},
{
 t:'Bài cuối khóa và kết quả', time:'17:00–18:00',
 goal:['Làm bài cuối khóa (1 lần)','Xem tổng điểm và kết luận'],
 html:`
 <h4>Trước khi làm bài</h4>
 <ul><li>Đã làm đủ 3 bài Ngày 1, 2, 3 (bài cuối khóa chỉ mở khi đủ 3 bài).</li>
 <li>Ôn lại phần "10 điều phải nhớ" của Ngày 1 và Ngày 2, và các bước Bravo.</li>
 <li>Bài gồm 25 câu lấy ngẫu nhiên từ cả 3 ngày. Làm trong yên tĩnh, không tra tài liệu.</li>
 <li><b>Chỉ được làm 1 lần.</b> Nộp xong, điểm được ghi lại và tính vào tổng.</li></ul>
 <h4>Sau khi nộp</h4>
 <p>Vào tab <b>Kết quả của tôi</b> để xem phiếu kết quả: điểm từng bài, tổng điểm, kết luận <b>ĐẠT</b> hoặc <b>KHÔNG ĐẠT</b>. Đưa phiếu cho quản lý xem.</p>
 <p><button class="btn" data-go-quiz="d3">Làm bài kiểm tra Ngày 3</button> <button class="btn ghost" data-go-tab="quiz">Đến tab Kiểm tra</button></p>`,
 check:[]
}
];
