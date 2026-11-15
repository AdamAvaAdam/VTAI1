/* Ngày 1 – nội dung chi tiết. Mỗi bài: mục tiêu, nội dung, ghi nhớ, nói với đại lý, tự kiểm tra. */
const IMG = (src, cap) => `<figure class="fig"><a href="img/${src}" target="_blank" rel="noopener"><img src="img/${src}" alt="${cap}" loading="lazy"></a><figcaption>${cap} · bấm để xem ảnh lớn</figcaption></figure>`;
const KEEP = (items) => `<div class="keep"><div class="keep-h">Ghi nhớ</div><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
const SAY = (who, text) => `<div class="say"><span class="say-who">${who}</span>${text}</div>`;
const TASK = (text) => `<div class="task"><div class="keep-h">Bài tập trên lớp</div>${text}</div>`;

const DAY1 = [
{
 t:'Chào mừng và cách học trong 3 ngày', time:'9:00–9:30',
 goal:['Biết mình sẽ học gì trong 3 ngày và cuối khóa phải làm được gì','Hiểu cách học trên app: đọc bài, tự kiểm tra, làm bài cuối ngày'],
 html:`
 ${IMG('kh01-1.jpg','Tài liệu đào tạo nhân viên bán hàng – Công ty TNHH TM Việt Tuấn')}
 <p>Chào mừng bạn đến với đội ngũ kinh doanh của <b>Công ty TNHH Thương mại Việt Tuấn – Nhà phân phối Hương Anh</b>. Bạn sẽ làm <b>nhân viên bán buôn</b>: khách hàng của bạn không phải người tiêu dùng cuối, mà là <b>đại lý điện máy, cửa hàng bán lẻ, thợ điện lạnh và nhà thầu dự án</b>. Họ mua để bán lại hoặc lắp cho công trình, nên họ cần ở mình ba thứ: <b>giá đúng chính sách, hàng có sẵn, giao nhanh</b>.</p>
 <h4>Lịch 3 ngày</h4>
 <div class="tbl"><table><tr><th>Ngày</th><th>Nội dung</th><th>Cuối ngày phải làm được</th></tr>
 <tr><td><b>Ngày 1</b></td><td>Công ty, 9 hãng, toàn bộ dải sản phẩm, chính sách bán buôn, quy trình nội bộ</td><td>Giới thiệu công ty trong 60 giây; chọn đúng mã máy theo nhu cầu; nói đúng chính sách; bài kiểm tra Ngày 1 ≥ 80%</td></tr>
 <tr><td><b>Ngày 2</b></td><td>4 nhóm khách hàng, nghiên cứu thị trường, 4 Xin – 4 Luôn, kịch bản gọi đại lý, xử lý từ chối, chốt đơn</td><td>Gọi trọn 1 cuộc nhập vai đạt ≥ 70/100</td></tr>
 <tr><td><b>Ngày 3</b></td><td>Bravo: lên đơn, duyệt đơn, theo dõi đơn, báo có; chăm sóc đại lý; gọi khách thật</td><td>Lên đơn đúng trên Bravo; gọi ít nhất 10 đại lý thật; bài cuối khóa ≥ 80%</td></tr></table></div>
 <h4>Giờ học</h4>
 <p>9:00–18:00, nghỉ trưa 12:00–13:00. Cuối mỗi ngày (17:00–18:00) làm bài kiểm tra trên tab <b>Kiểm tra</b>, quản lý thấy điểm ngay.</p>
 <h4>Cách học một bài trên app</h4>
 <ol><li>Đọc phần <b>Mục tiêu</b> để biết học xong phải làm được gì.</li>
 <li>Đọc nội dung, bấm vào ảnh catalogue để xem to, đối chiếu với hàng thật nếu có.</li>
 <li>Đọc to phần <b>Nói với đại lý</b> – đây là câu bạn sẽ dùng khi gọi điện.</li>
 <li>Làm <b>Tự kiểm tra</b> cuối bài. Sai thì đọc lại đoạn liên quan.</li>
 <li>Bấm <b>Đánh dấu đã học</b> để quản lý theo dõi tiến độ.</li></ol>
 ${KEEP(['Khách của bạn là đại lý, cửa hàng, thợ, nhà thầu – họ mua để bán lại.','Họ cần: giá đúng chính sách, hàng sẵn, giao nhanh, công nợ rõ ràng.','Ra nghề: cuối khóa ≥ 80%, gọi nhập vai ≥ 70/100, gọi ≥ 10 đại lý thật.'])}`,
 check:[
  ['Khách hàng chính của nhân viên bán buôn Việt Tuấn là ai?',['Người tiêu dùng mua 1 chiếc dùng tại nhà','Đại lý, cửa hàng, thợ, nhà thầu mua để bán lại hoặc lắp công trình','Chỉ các siêu thị điện máy lớn'],1,'Bán buôn = bán cho người mua để bán lại hoặc lắp cho công trình.'],
  ['Bài kiểm tra cuối ngày làm lúc nào?',['17:00–18:00 trên app','Sáng hôm sau','Chỉ làm 1 lần cuối khóa'],0,'Mỗi ngày đều có bài kiểm tra 17:00–18:00.']
 ]
},
{
 t:'Việt Tuấn – Hương Anh là ai', time:'9:30–10:30',
 goal:['Nói đúng tên, lịch sử, quy mô công ty','Hiểu vì sao đại lý chọn nhập hàng của mình','Giới thiệu công ty trong 60 giây'],
 html:`
 ${IMG('kh01-2.jpg','Thông tin công ty và đội ngũ')}
 <h4>Thông tin pháp lý – phải nói đúng</h4>
 <div class="tbl"><table>
 <tr><th>Tên đầy đủ</th><td>Công ty Trách nhiệm hữu hạn Thương mại Việt Tuấn</td></tr>
 <tr><th>Tên tiếng Anh</th><td>Viet Tuan Trading Company Limited (VIET TUAN CO., LTD)</td></tr>
 <tr><th>Thương hiệu</th><td>Nhà phân phối Hương Anh – thuộc Hương Anh Group</td></tr>
 <tr><th>Mã số thuế</th><td>0101423629</td></tr>
 <tr><th>Trụ sở</th><td>Số 3–5 Chùa Vua, Phường Hai Bà Trưng, Hà Nội</td></tr>
 <tr><th>Tổng kho</th><td>Số 140 Phường Bồ Đề (Long Biên) · Kho Phúc Lợi: 145–191 đường Phúc Lợi, Phường Phúc Lợi</td></tr>
 <tr><th>Hotline điện máy</th><td>0243.8727213</td></tr>
 <tr><th>Website</th><td>huonganhdienmay.vn · huonganh.vn</td></tr></table></div>
 <h4>Hành trình hơn 30 năm</h4>
 <div class="timeline">
  <div><b>1993</b><span>Khởi nguồn từ một hộ kinh doanh điện máy.</span></div>
  <div><b>1995</b><span>Trở thành đối tác phân phối của <b>Panasonic</b>.</span></div>
  <div><b>2001</b><span>Đối tác chiến lược <b>Toshiba</b>, nhiều lần được vinh danh Đại lý xuất sắc, Bán chạy nhất.</span></div>
  <div><b>2002</b><span>Phân phối cấp 1 <b>Sharp</b>; đón tiếp Chủ tịch Tập đoàn Sharp.</span></div>
  <div><b>2003</b><span>Kênh phân phối trọng điểm điều hòa <b>Daikin</b>. Thành lập công ty TNHH (ĐKKD ngày 06/11/2003).</span></div>
  <div><b>2005</b><span><b>Hitachi</b> – đại lý đạt doanh số cao nhất.</span></div>
  <div><b>2009–2012</b><span>Mở rộng hệ sinh thái: Hương Anh Du lịch & Lữ hành (2009), Hương Anh Fitness & Yoga (2012).</span></div>
  <div><b>2017</b><span><b>Electrolux</b> vinh danh Đối tác cống hiến xuất sắc.</span></div>
  <div><b>2025</b><span>Kiện toàn Vận tải & Logistics, định vị <b>Tổng thầu phân phối</b> hàng đầu miền Bắc.</span></div>
 </div>
 <h4>Quy mô – con số phải thuộc</h4>
 <div class="stats">
  <div><b>30+</b><span>năm trong ngành</span></div>
  <div><b>3.500+</b><span>đại lý, cửa hàng</span></div>
  <div><b>28</b><span>tỉnh thành phía Bắc</span></div>
  <div><b>18.000+ m²</b><span>tổng kho</span></div>
  <div><b>80+</b><span>xe tải giao hàng</span></div>
  <div><b>200+</b><span>cán bộ nhân viên</span></div>
 </div>
 <h4>Lãnh đạo</h4>
 <ul><li>Nhà sáng lập Hương Anh Group: <b>Bà Phạm Thị Bích Hương</b>.</li>
 <li>Giám đốc, đại diện pháp luật: <b>Ông Nguyễn Ngọc Anh</b> (người phê duyệt tài liệu đào tạo).</li>
 <li>Mảng Điện máy: <b>Bà Nguyễn Thị Minh Hải</b> – Giám đốc Điện máy; <b>Ông Nguyễn Minh Nhật</b> – Trưởng phòng Kinh doanh Điện máy.</li></ul>
 <h4>Tầm nhìn và giá trị cốt lõi</h4>
 ${IMG('kh01-3.jpg','Tầm nhìn và giá trị cốt lõi')}
 <p><b>Tầm nhìn:</b> trở thành doanh nghiệp phân phối – dịch vụ đa ngành hàng đầu miền Bắc, lấy uy tín và đổi mới công nghệ làm nền tảng.</p>
 <p><b>Giá trị cốt lõi:</b> Chính trực – Minh bạch · Chất lượng – Bền vững · Đồng hành – Hợp tác lâu dài · Thích ứng – Đổi mới · Phát triển con người – Đào tạo liên tục.</p>
 <h4>4 lợi thế cốt lõi – lý do đại lý nhập hàng của mình</h4>
 ${IMG('cat-03.jpg','Hồ sơ hợp tác – 4 lợi thế cốt lõi')}
 <ol><li><b>30 năm uy tín dẫn đầu</b> – tiên phong ngành điện máy miền Bắc, mạng lưới đối tác toàn cầu.</li>
 <li><b>Vận hành tốc độ – chuẩn JIT</b> – kho vệ tinh + đội xe riêng, giao thần tốc, đại lý không phải ôm vốn tồn kho.</li>
 <li><b>Hệ sinh thái sản phẩm đa dạng</b> – Panasonic, Toshiba, Sharp, Hitachi, Daikin, Electrolux, Aufit… đủ mọi phân khúc.</li>
 <li><b>Hỗ trợ đối tác toàn diện</b> – hạn mức công nợ linh hoạt, đào tạo kỹ thuật, đồng hành marketing và trang trí điểm bán.</li></ol>
 ${SAY('Mẫu giới thiệu 60 giây','"Dạ em là Lan bên Nhà phân phối Hương Anh – Công ty Việt Tuấn ạ. Bên em làm điện máy từ năm 1993, hiện đang cung cấp hàng cho hơn 3.500 đại lý, cửa hàng ở 28 tỉnh phía Bắc. Bên em phân phối chính thức Panasonic, Toshiba, Sharp, Daikin, Hitachi, Electrolux, độc quyền miền Bắc Toshiba và điều hòa Aufit. Tổng kho hơn 18.000 m², hơn 80 xe tải nên nội thành giao trong 24 giờ, ngoại tỉnh 48 giờ, anh không cần ôm nhiều hàng. Em xin phép gửi anh hồ sơ hợp tác qua Zalo để anh tham khảo ạ."')}
 ${TASK('Mỗi người đứng lên giới thiệu công ty trong 60 giây, không nhìn giấy. Cả lớp chấm: có đủ năm thành lập, số đại lý, các hãng, tốc độ giao hàng không?')}
 ${KEEP(['Từ 1993, hơn 30 năm; MST 0101423629.','3.500+ đại lý, 28 tỉnh, kho 18.000+ m², 80+ xe.','4 lợi thế: uy tín · JIT giao nhanh · nhiều hãng · hỗ trợ công nợ, marketing.'])}`,
 check:[
  ['Việt Tuấn khởi nguồn kinh doanh điện máy từ năm nào?',['1993','2003','2010'],0,'Năm 1993 là hộ kinh doanh; năm 2003 đăng ký công ty TNHH.'],
  ['Lợi thế "JIT" giúp gì cho đại lý?',['Được giá rẻ nhất thị trường','Hàng đến đúng lúc, không phải ôm vốn tồn kho','Không cần thanh toán'],1,'Just-In-Time: hàng đến đúng lúc, kinh doanh không gián đoạn.'],
  ['Hãng nào mà Việt Tuấn phân phối từ sớm nhất (1995)?',['Daikin','Panasonic','Electrolux'],1,'1995 Panasonic, 2001 Toshiba, 2002 Sharp, 2003 Daikin, 2005 Hitachi, 2017 Electrolux.']
 ]
},
{
 t:'9 hãng và vị thế phân phối', time:'10:30–11:00',
 goal:['Biết mỗi hãng mạnh nhóm hàng nào','Biết vị thế của Việt Tuấn với từng hãng để tự tin khi nói chuyện'],
 html:`
 ${IMG('kh01-5.jpg','Hệ thống sản phẩm và hãng chủ lực')}
 <p>Ngành hàng cốt lõi của Việt Tuấn là <b>điện lạnh gia dụng</b>: thiết bị thiết yếu trong mỗi gia đình, nhà hàng, khách sạn, cửa hàng kinh doanh.</p>
 <div class="tbl"><table><tr><th>Hãng</th><th>Nhóm hàng chính</th><th>Vị thế của Việt Tuấn</th><th>Khi nói với đại lý</th></tr>
 <tr><td><b>Panasonic</b></td><td>Tủ lạnh, máy giặt, điều hòa, lọc khí, lọc nước</td><td>1 trong 2 nhà phân phối chính thức tại miền Bắc</td><td>Hàng Nhật, công nghệ Nanoe™ X, Econavi – dễ bán cho khách chuộng chất lượng</td></tr>
 <tr><td><b>Toshiba</b></td><td>Tủ lạnh, máy giặt, tủ đông, gia dụng</td><td><b>Nhà phân phối độc quyền tại miền Bắc</b></td><td>Lấy Toshiba ở miền Bắc là lấy từ nguồn độc quyền – giá và hàng ổn định</td></tr>
 <tr><td><b>Sharp</b></td><td>Tủ lạnh, máy giặt</td><td>NPP có doanh số cao nhất khu vực</td><td>Giá dễ chịu, phù hợp đại lý vừa và nhỏ</td></tr>
 <tr><td><b>Hitachi</b></td><td>Tủ lạnh cao cấp</td><td>Phân phối mạnh</td><td>Side by side, 6 cửa nhập Nhật – cho khách cao cấp</td></tr>
 <tr><td><b>Electrolux</b></td><td>Máy giặt cửa ngang, máy sấy</td><td>Tập trung máy giặt cửa ngang</td><td>Chuẩn Thụy Điển, máy sấy bơm nhiệt tiết kiệm điện</td></tr>
 <tr><td><b>Daikin</b></td><td>Điều hòa dân dụng, thương mại, VRV</td><td>Doanh số lớn nhất tại miền Bắc</td><td>Điều hòa số 1 Nhật – mạnh cả dự án</td></tr>
 <tr><td><b>Aufit</b></td><td>Điều hòa Inverter (công nghệ Thái Lan)</td><td><b>NPP độc quyền miền Bắc</b></td><td>Giá cạnh tranh, Wi-Fi, bảo hành máy nén 5 năm (dòng 2HP)</td></tr>
 <tr><td><b>Sanaky</b></td><td>Tủ đông, tủ mát</td><td>Giá tốt, phổ biến ở đại lý</td><td>Bán chạy cho hộ kinh doanh, quán</td></tr>
 <tr><td><b>Pinimax</b></td><td>Tủ đông, tủ mát</td><td>Dòng công nghiệp, hàng sẵn kho</td><td>Dàn đồng 100%, bền cho kinh doanh</td></tr></table></div>
 <h4>4 nhóm sản phẩm chủ lực</h4>
 <div class="grid4">
  <div><b>Tủ lạnh</b><span>Dung tích đa dạng, công nghệ tiết kiệm điện, làm lạnh nhanh.</span></div>
  <div><b>Máy giặt</b><span>Cửa trên (lồng đứng) và cửa ngang, nhiều thương hiệu.</span></div>
  <div><b>Điều hòa</b><span>Treo tường cho nhà ở; âm trần, tủ đứng, VRV cho công trình.</span></div>
  <div><b>Tủ đông – tủ mát</b><span>Dòng dân dụng giá tốt, bền, nhiều dung tích.</span></div>
 </div>
 ${KEEP(['Độc quyền miền Bắc: <b>Toshiba</b> và <b>Aufit</b>.','Daikin: doanh số lớn nhất miền Bắc. Sharp: doanh số cao nhất khu vực.','Panasonic: 1 trong 2 NPP chính thức miền Bắc.'])}`,
 check:[
  ['Việt Tuấn là nhà phân phối độc quyền miền Bắc của những hãng nào?',['Toshiba và Aufit','Panasonic và Sharp','Daikin và Hitachi'],0,'Toshiba (tủ lạnh, máy giặt) và Aufit (điều hòa).'],
  ['Đại lý cần tủ đông giá tốt để bán cho quán ăn. Gợi ý hãng nào trước?',['Hitachi','Sanaky hoặc Pinimax','Electrolux'],1,'Sanaky giá tốt, phổ biến; Pinimax dòng công nghiệp dàn đồng.']
 ]
},
{
 t:'Sản phẩm 1: Điều hòa', time:'11:00–12:00',
 goal:['Chọn đúng công suất theo diện tích','Đọc được mã máy Daikin, Panasonic, Aufit','Phân biệt điều hòa dân dụng và thương mại'],
 html:`
 <p>Điều hòa là nhóm hàng có doanh số lớn nhất theo mùa. Sai công suất là lỗi nặng nhất: máy yếu thì khách kêu không mát, máy thừa thì tốn tiền. Luôn hỏi <b>diện tích phòng</b> và <b>1 chiều hay 2 chiều</b> trước khi báo mã.</p>
 <h4>Bảng chọn công suất</h4>
 <div class="tbl"><table><tr><th>Công suất</th><th>BTU</th><th>Diện tích phòng</th><th>Thường dùng</th></tr>
 <tr><td>1 HP</td><td>9.000</td><td>dưới 15 m²</td><td>Phòng ngủ nhỏ</td></tr>
 <tr><td>1,5 HP</td><td>12.000</td><td>15–20 m²</td><td>Phòng ngủ lớn</td></tr>
 <tr><td>2 HP</td><td>18.000</td><td>20–30 m²</td><td>Phòng khách</td></tr>
 <tr><td>2,5 HP</td><td>22.000–24.000</td><td>30–40 m²</td><td>Phòng khách lớn</td></tr></table></div>
 <p class="note">1 chiều = chỉ làm lạnh. 2 chiều = làm lạnh mùa hè, sưởi ấm mùa đông – miền Bắc nhiều khách hỏi 2 chiều.</p>

 <h4>Aufit – độc quyền miền Bắc, giá cạnh tranh</h4>
 ${IMG('cat-04.jpg','Catalogue – Điều hòa Aufit Inverter')}
 <div class="tbl"><table><tr><th>Mã</th><th>Công suất</th><th>Điểm bán</th></tr>
 <tr><td>AFW09FHA4DI-3VN</td><td>1 HP – 9.000 BTU, &lt;15 m²</td><td>Inverter 3 sao, lọc bụi PM2.5, êm</td></tr>
 <tr><td>AFW12FHA4DI-3VN</td><td>1,5 HP – 12.000 BTU, 15–20 m²</td><td>Wi-Fi điều khiển qua điện thoại, tự làm sạch Auto-Clean, luồng khí 3D</td></tr>
 <tr><td>AFW18FHA4DI-5VN</td><td>2 HP – 18.000 BTU, 20–30 m²</td><td>Nhãn năng lượng 5 sao, Ion Plasma, <b>bảo hành máy nén 5 năm</b></td></tr>
 <tr><td>AFW24FHA4DI-3VN</td><td>2,5 HP – 22.000 BTU, 30–40 m²</td><td>AI Eco, lưới lọc Ag+ diệt khuẩn</td></tr></table></div>
 <p class="note">Mẹo đọc mã Aufit: số sau "AFW" là công suất (09 = 9.000, 12 = 12.000, 18 = 18.000, 24 = 22.000–24.000 BTU).</p>

 <h4>Daikin – điều hòa dân dụng</h4>
 ${IMG('cat-05.jpg','Catalogue – Điều hòa Daikin dân dụng')}
 <div class="tbl"><table><tr><th>Mã</th><th>Loại</th><th>Điểm bán</th></tr>
 <tr><td>FTKB25ZVMV / RKB25ZVMV</td><td>1 chiều, 9.000 BTU</td><td>Phin lọc Enzyme Blue + PM2.5, chống nấm mốc dàn lạnh</td></tr>
 <tr><td>FTHF25XVMV / RHF25XVMV</td><td>2 chiều, 9.000 BTU</td><td>Làm lạnh mùa hè, sưởi mùa đông, Inverter êm</td></tr>
 <tr><td>FTHF35XVMV / RHF35XVMV</td><td>2 chiều, 12.000 BTU</td><td>Luồng gió Coanda không thổi thẳng vào người, gas R32</td></tr>
 <tr><td>FTHF50VAVMV / RHF50VAVMV</td><td>2 chiều, 18.000 BTU</td><td>Làm lạnh nhanh Powerful, cánh tản nhiệt chống ăn mòn, chạy ổn định khi điện áp thấp</td></tr></table></div>
 <p class="note">Mẹo đọc mã Daikin: <b>FTKB</b> = 1 chiều, <b>FTHF</b> = 2 chiều. Số <b>25</b> ≈ 9.000 BTU, <b>35</b> ≈ 12.000 BTU, <b>50</b> ≈ 18.000 BTU. Mã đầu là dàn lạnh (F…), mã sau là dàn nóng (R…).</p>

 <h4>Daikin – thương mại và dự án</h4>
 ${IMG('cat-06.jpg','Catalogue – Daikin âm trần, nối ống gió, tủ đứng, VRV')}
 <ul><li><b>FCFC50DVM / RZFC50DVM</b> – âm trần cassette 4 hướng thổi 18.000 BTU: văn phòng, cửa hàng.</li>
 <li><b>FBFC71DVM9 / RZFC71DVM</b> – nối ống gió 24.000 BTU: giấu máy trong trần, thẩm mỹ cho kiến trúc, trần hẹp vẫn lắp được.</li>
 <li><b>FVA71AMVM / RZF71CV2V</b> – tủ đứng SkyAir 24.000 BTU: sảnh lớn, showroom.</li>
 <li><b>RXQ10AYM</b> – dàn nóng VRV 3 pha: điều hòa trung tâm cho công trình lớn, biệt thự, nối nhiều dàn lạnh.</li></ul>

 <h4>Panasonic – điều hòa</h4>
 ${IMG('cat-07.jpg','Catalogue – Điều hòa Panasonic dân dụng')}
 <div class="tbl"><table><tr><th>Mã</th><th>Loại</th><th>Điểm bán</th></tr>
 <tr><td>CU/CS-XPU9XKH-8</td><td>1 chiều 1 HP – 9.000 BTU</td><td>Nanoe-X & Eco AI bảo vệ sức khỏe 24h, cánh Aerowings</td></tr>
 <tr><td>CU/CS-XPU12XKH-8</td><td>1 chiều 1,5 HP – 12.500 BTU</td><td>Inverter tiết kiệm điện tối đa</td></tr>
 <tr><td>CU/CS-YZ18XKH-8</td><td>2 chiều 2 HP – 18.000 BTU</td><td>Sưởi mùa đông, Nanoe-G lọc bụi PM2.5</td></tr>
 <tr><td>CU/CS-YZ24XKH-8</td><td>2 chiều 2,5 HP – 24.000 BTU</td><td>Phòng khách lớn, chế độ Eco tích hợp AI</td></tr></table></div>
 <p class="note">Mẹo đọc mã Panasonic: <b>XPU</b> = 1 chiều, <b>YZ</b> = 2 chiều; số 9/12/18/24 là nghìn BTU.</p>
 ${IMG('cat-08.jpg','Catalogue – Panasonic cassette, nối ống gió, tủ đứng, VRF')}
 <ul><li><b>S-2430PU3H / U-24PR1H5</b> – cassette 24.200 BTU thổi 360°, Nanoe-X: văn phòng, phòng họp.</li>
 <li><b>S-2430PF3HB / U-24PZ3H5</b> – nối ống gió 2 chiều Inverter, siêu êm.</li>
 <li><b>S-36PB3H5 / U-36PSB3H5</b> – tủ đứng 36.000 BTU: sảnh, nhà hàng, hội trường.</li>
 <li><b>VRF FSV-EX</b> – điều hòa trung tâm 8–64 HP cho tòa nhà.</li></ul>
 ${SAY('Khi đại lý hỏi','"Khách của anh cần cho phòng khoảng bao nhiêu mét vuông, 1 chiều hay 2 chiều ạ? Phòng 18 m² 2 chiều thì em gợi ý Daikin FTHF35 hoặc nếu khách cần giá mềm thì Aufit 12.000 BTU có Wi-Fi ạ."')}
 ${TASK('Người dạy đọc nhu cầu, học viên tìm mã trong 30 giây: (1) phòng 12 m², 1 chiều, khách muốn hàng Nhật; (2) phòng khách 28 m², 2 chiều; (3) showroom 60 m² trần thạch cao; (4) thợ cần 3 bộ 9.000 BTU giá mềm nhất.')}
 ${KEEP(['9.000 &lt;15 m² · 12.000 15–20 m² · 18.000 20–30 m² · 24.000 30–40 m².','Daikin FTKB 1 chiều / FTHF 2 chiều. Panasonic XPU 1 chiều / YZ 2 chiều.','Âm trần, nối ống, tủ đứng, VRV/VRF = khách dự án, chuyển trưởng nhóm khi đơn lớn.'])}`,
 check:[
  ['Phòng 25 m² cần công suất nào?',['9.000 BTU','12.000 BTU','18.000 BTU'],2,'18.000 BTU (2 HP) cho 20–30 m².'],
  ['Mã Panasonic CU/CS-YZ18XKH-8 là loại gì?',['1 chiều 18.000 BTU','2 chiều 18.000 BTU','Âm trần 18.000 BTU'],1,'YZ = 2 chiều; 18 = 18.000 BTU.'],
  ['Showroom cần máy giấu trong trần cho đẹp. Gợi ý loại nào?',['Treo tường','Nối ống gió (Daikin FBFC71…)','Tủ đông'],1,'Nối ống gió giấu máy trong trần, tối ưu thẩm mỹ.']
 ]
},
{
 t:'Sản phẩm 2: Tủ lạnh, tủ đông, tủ mát', time:'13:00–14:00',
 goal:['Chọn dung tích theo số người trong gia đình','Nắm điểm bán của từng hãng','Biết tủ đông, tủ mát cho kinh doanh'],
 html:`
 <h4>Chọn dung tích theo số người</h4>
 <div class="tbl"><table><tr><th>Dung tích</th><th>Số người</th><th>Ví dụ mã</th></tr>
 <tr><td>180–200 lít</td><td>2–3 người</td><td>Toshiba GR-RT236WE (182 L), Sharp SJ-X215V (197 L)</td></tr>
 <tr><td>~250 lít</td><td>3–4 người</td><td>Sharp SJ-X270V (247 L)</td></tr>
 <tr><td>350–420 lít</td><td>3–5 người</td><td>Sharp SJ-FX420V (362 L), Toshiba GR-RT535WEA (409 L), Panasonic NR-BX471GPKV (417 L)</td></tr>
 <tr><td>500–670 lít</td><td>5–6 người trở lên</td><td>Panasonic 495–550 L, Sharp SJ-FX610V (525 L), Hitachi 525–670 L</td></tr></table></div>

 <h4>Panasonic</h4>
 ${IMG('cat-09.jpg','Catalogue – Tủ lạnh Panasonic')}
 <ul><li><b>NR-BX471GPKV (417 L)</b> – ngăn đá dưới, không phải cúi; ngăn đông mềm Prime Fresh không cần rã đông; kháng khuẩn Ag Clean.</li>
 <li><b>NR-CW530XMMV (495 L)</b> – 3 cửa; Prime Fresh+ -3°C giữ thịt cá tươi 7 ngày; Prime Freeze cấp đông nhanh gấp 5 lần.</li>
 <li><b>NR-YW590XJKV (545 L)</b> – Multi Door 3 ngăn độc lập, cửa kính đen, ngăn chuyển đổi linh hoạt.</li>
 <li><b>NR-DZ601VGKV (550 L)</b> – Multi Door, ngăn lạnh 394 L, diệt khuẩn Blue Ag+, Econavi tự điều chỉnh theo thói quen.</li></ul>
 <p class="note">Từ khóa Panasonic: <b>Prime Fresh</b> (đông mềm -3°C, nấu ngay không rã đông), <b>Econavi</b> (cảm biến tiết kiệm), <b>Nanoe™ X / Ag+</b> (diệt khuẩn).</p>

 <h4>Toshiba – độc quyền miền Bắc</h4>
 ${IMG('cat-13.jpg','Catalogue – Tủ lạnh, tủ đông Toshiba')}
 <ul><li><b>GR-RC185CM-PMV(01)</b> – tủ đông 143 L, dàn đồng, <b>giữ đông đến 100 giờ khi mất điện</b>; hợp kinh doanh và gia đình.</li>
 <li><b>GR-RT236WE-PMV(68)</b> – 182 L, ngăn Cooling Zone -1°C, khử mùi PureBIO GO.</li>
 <li><b>GR-RT535WEA-PMV(06)-MG</b> – 409 L, làm đá tự động, lấy nước ngoài, mặt gương đen.</li>
 <li><b>GR-RF677WI-PGV(22)-XK</b> – 515 L nhiều cửa, lọc PureAIR, ngăn lạnh ở trên không cần cúi.</li></ul>

 <h4>Sharp – giá dễ bán</h4>
 ${IMG('cat-16.jpg','Catalogue – Tủ lạnh Sharp')}
 <ul><li><b>SJ-X215V-DG (197 L)</b> và <b>SJ-X270V-DG (247 L)</b> – 2 cửa ngăn đá trên, Inverter êm, làm lạnh đa luồng.</li>
 <li><b>SJ-FX420V-SL (362 L)</b> – 4 cửa ngăn đá dưới, cấp đông nhanh Express Freezing, cảm ứng ngoài cửa.</li>
 <li><b>SJ-FX610V-SL (525 L)</b> – 4 cửa, J-Tech Inverter, Hybrid Cooling.</li></ul>

 <h4>Hitachi – cao cấp</h4>
 ${IMG('cat-20.jpg','Catalogue – Tủ lạnh Hitachi')}
 <ul><li><b>HRSN9552DGBVN</b> – Side by Side 525 L (lạnh 333 L, đông 192 L), cảm biến Eco từng ngăn.</li>
 <li><b>R-WB640PGV1 GMG</b> – 569 L 4 cửa, ngăn đông mềm -3°C, làm đá tự động, lọc Triple Power khử 7 nhóm mùi.</li>
 <li><b>R-MX800GVGV0 GBK</b> – Side by Side 569 L 3 cửa, ngăn chân không hút bớt oxy, lấy nước và đá ngoài cửa.</li>
 <li><b>R-GW670TV XK</b> – 670 L 6 cửa, <b>nhập khẩu Nhật Bản</b>, ngăn chân không, ngăn rau Aero-care.</li></ul>

 <h4>Tủ đông, tủ mát cho kinh doanh: Pinimax, Sanaky</h4>
 ${IMG('cat-21.jpg','Catalogue – Tủ đông, tủ mát Pinimax và Sanaky')}
 <ul><li><b>Pinimax PNM29WF3 (290 L)</b> – 2 ngăn đông + mát, dàn đồng 100%, làm lạnh ≤ -18°C.</li>
 <li><b>Sanaky VH-4099W1 (280 L)</b> – đông 110 L + mát 170 L, mát chỉnh 0–10°C, có khóa.</li>
 <li><b>Sanaky VH 408KL (340 L)</b> – tủ mát kính Low-E chống đọng sương, trưng bày đồ uống bắt mắt.</li>
 <li><b>Sanaky VH3699W2KD (360 L)</b> – tủ đông mặt kính cường lực, 2 ngăn 2 cánh.</li></ul>
 ${SAY('Gợi ý bán thêm','"Dạ quán của khách anh bán đồ uống thì anh lấy thêm tủ mát Sanaky 340 lít kính Low-E, trưng bày đẹp mà không đọng sương ạ."')}
 ${KEEP(['Hỏi số người trong gia đình → chọn dung tích.','Toshiba tủ đông giữ lạnh 100 giờ khi mất điện – điểm bán mạnh vùng hay mất điện.','Kinh doanh, quán: Sanaky, Pinimax (dàn đồng).'])}`,
 check:[
  ['Gia đình 5–6 người nên tư vấn dung tích nào?',['~200 lít','~250 lít','500 lít trở lên'],2,'Ví dụ Sharp SJ-FX610V 525 L cho 5–6 người.'],
  ['Điểm bán nổi bật của tủ đông Toshiba GR-RC185CM?',['Giữ đông đến 100 giờ khi mất điện','Có màn hình cảm ứng','Nhập khẩu Nhật Bản'],0,'Dàn đồng, giữ đông 100 giờ sau khi mất điện.'],
  ['Quán cà phê cần tủ trưng bày đồ uống không đọng sương?',['Sanaky VH 408KL kính Low-E','Hitachi Side by Side','Toshiba 182 L'],0,'Kính Low-E phản xạ nhiệt, chống đọng sương, sưởi kính.']
 ]
},
{
 t:'Sản phẩm 3: Máy giặt, máy sấy', time:'14:00–14:45',
 goal:['Phân biệt lồng đứng và cửa ngang','Chọn khối lượng giặt theo số người','Biết máy sấy bơm nhiệt và thông hơi'],
 html:`
 <div class="tbl"><table><tr><th></th><th>Lồng đứng (cửa trên)</th><th>Cửa ngang (cửa trước)</th></tr>
 <tr><th>Giá</th><td>Rẻ hơn</td><td>Cao hơn</td></tr>
 <tr><th>Ưu điểm</th><td>Giặt nhanh, dễ dùng, dễ bảo trì</td><td>Giặt sạch, ít hại vải, tiết kiệm nước, có giặt hơi nước diệt khuẩn</td></tr>
 <tr><th>Hãng mạnh</th><td>Panasonic, Toshiba, Sharp</td><td>Electrolux, Toshiba, Sharp</td></tr></table></div>
 <p><b>Chọn khối lượng giặt:</b> 8–9 kg cho 3–4 người · 10–11 kg cho 4–5 người · 12–14,5 kg cho gia đình đông người, giặt chăn.</p>

 <h4>Panasonic</h4>
 ${IMG('cat-10.jpg','Catalogue – Máy giặt Panasonic')}
 <ul><li><b>NA-F90S10BRV (9 kg)</b> – gia đình 3–5 người, ActiveFoam tạo bọt mịn, Econavi tối ưu nước.</li>
 <li><b>NA-F10S10BRV (10 kg)</b> – nắp kính chịu lực, mâm 6 cánh, sản xuất tại Việt Nam.</li>
 <li><b>NA-FD115W3BV (11,5 kg)</b> – động cơ TD Inverter, AutoDose tự phân bổ nước giặt, Water Bazooka.</li>
 <li><b>NA-FD145V3BV (14,5 kg)</b> – gia đình đông người, Blue Ag+ & ActiveFoam.</li></ul>

 <h4>Toshiba</h4>
 ${IMG('cat-14.jpg','Catalogue – Máy giặt Toshiba')}
 <ul><li><b>AW-M905BV(MK) 8 kg</b>, <b>AW-M1000FV(MK) 9 kg</b> – lồng đứng, siêu sóng GreatWaves, sản xuất tại Việt Nam.</li>
 <li><b>TW-BL115A2V(SS) 10,5 kg</b> – cửa trước Inverter, bọt khí Nano UFB, giặt hơi nước Great Steam diệt khuẩn 99,99%.</li>
 <li><b>TW-T21B120UWV(MG) 11 kg</b> – chạy tốt cả khi nước yếu 0,01 MPa, Aroma+ lưu hương gấp 2 lần.</li></ul>

 <h4>Sharp</h4>
 ${IMG('cat-17.jpg','Catalogue – Máy giặt Sharp')}
 <ul><li><b>ES-FM90CB-DG (9 kg)</b> và <b>ES-FM110CB-SB (11 kg)</b> – cửa trước Inverter, giặt hơi nước, tự vệ sinh lồng.</li>
 <li><b>ES-Y100HV-S (10 kg)</b> – lồng giặt không lỗ kháng khuẩn, tiết kiệm nước, chống chuột.</li>
 <li><b>ES-TM125CN-BK (12,5 kg)</b> – Fuzzy Logic, mâm giặt Dolphin.</li></ul>

 <h4>Electrolux – chuyên cửa ngang và máy sấy</h4>
 ${IMG('cat-18.jpg','Catalogue – Máy giặt Electrolux')}
 <ul><li><b>EWF9023P5SC (9 kg)</b> – UltraMix hòa tan nước giặt trước, FullWash 45 phút.</li>
 <li><b>EWF1024D3EC (10 kg)</b> – 15 chương trình, vắt 1.200 vòng/phút, Vapour Refresh giảm nhăn.</li>
 <li><b>EWF1142R9SC (11 kg)</b> – Sensor Wash tự nhận mức bẩn, EcoInverter.</li>
 <li><b>EWF1343P5WC (13 kg)</b> – giặt được chăn lớn.</li></ul>
 ${IMG('cat-19.jpg','Catalogue – Máy giặt sấy và máy sấy Electrolux')}
 <ul><li><b>EWW1023P5SC</b> – giặt 10 kg + sấy 7 kg trong 1 máy, tiết kiệm diện tích; Sanitise diệt 99,99% vi khuẩn.</li>
 <li><b>EDH803J5SC (8 kg)</b>, <b>EDH902R9SC (9 kg)</b> – máy sấy <b>bơm nhiệt</b>, giảm tới 60% điện năng; SensiCare/3DSense đo độ ẩm, không sấy quá khô.</li>
 <li><b>EDV904N3SC (9 kg)</b> – máy sấy <b>thông hơi</b>, 2.250 W, sấy đảo chiều giảm xoắn rối.</li></ul>
 <p class="note">Bơm nhiệt = đắt hơn nhưng tiết kiệm điện, êm vải. Thông hơi = rẻ hơn, cần chỗ thoát hơi.</p>
 ${SAY('Mùa nồm','"Anh ơi sắp vào nồm, khách hỏi máy sấy nhiều lắm. Bên em có Electrolux sấy bơm nhiệt tiết kiệm tới 60% điện, anh lấy 2–3 cái trưng bày trước mùa không ạ?"')}
 ${KEEP(['Lồng đứng rẻ, dễ dùng · Cửa ngang sạch, êm vải, có hơi nước.','9 kg ~ 3–4 người; 12 kg trở lên cho gia đình đông người.','Máy sấy bơm nhiệt tiết kiệm điện tới 60%.'])}`,
 check:[
  ['Khách muốn vừa giặt vừa sấy nhưng nhà chật. Gợi ý?',['Electrolux EWW1023P5SC giặt 10 kg sấy 7 kg','2 máy riêng','Máy giặt lồng đứng 8 kg'],0,'Máy giặt sấy 2 trong 1 tiết kiệm diện tích.'],
  ['Máy sấy bơm nhiệt khác máy sấy thông hơi ở điểm nào?',['Rẻ hơn','Tiết kiệm điện hơn (tới 60%)','Không cần điện'],1,'Bơm nhiệt giảm tới 60% điện năng.']
 ]
},
{
 t:'Sản phẩm 4: Gia dụng, sức khỏe, thiết bị điện', time:'14:45–15:15',
 goal:['Biết các sản phẩm bán kèm để tăng giá trị đơn','Gợi ý bán thêm đúng lúc'],
 html:`
 ${IMG('cat-11.jpg','Catalogue – Gia dụng sức khỏe Panasonic')}
 <ul><li><b>Máy ép trái cây MJ-CB800SRA</b> – ép nguyên quả, êm, dễ vệ sinh.</li>
 <li><b>Máy rửa bát NP-TH1WEVN</b> – diệt khuẩn 99,9%, rửa nước nóng 80°C, tiết kiệm điện nước.</li>
 <li><b>Máy tạo nước kiềm TK-AS700-WVN</b> – điện phân đa tầng, nước giàu Hydro.</li>
 <li><b>Hệ thống lọc RO TK-CA811K-VN</b> – màng RO loại bỏ kim loại nặng, vi khuẩn; công suất lớn.</li></ul>
 ${IMG('cat-12.jpg','Catalogue – Lọc khí, hút ẩm, sấy tay, cảm biến Panasonic')}
 <ul><li><b>Máy lọc không khí F-VXV70A</b> – Nanoe™ X, HEPA lọc PM2.5, tạo ẩm, 52 m², cảm biến 5 lớp.</li>
 <li><b>Máy hút ẩm F-YCT17V</b> – 17 lít/ngày, tới 42 m², <b>giải pháp mùa nồm</b>.</li>
 <li><b>Máy sấy tay FJ-T10T1</b> – khô tay 5–9 giây; cho văn phòng, TTTM, showroom.</li>
 <li><b>Cảm biến hồng ngoại WTKG2311</b> – phát hiện chuyển động 8 m, tự bật tắt đèn; dùng cho chiếu sáng thông minh.</li></ul>
 ${IMG('cat-15.jpg','Catalogue – Quạt, máy xay, cây nước, máy hút bụi')}
 <ul><li><b>Quạt đứng DC F-DSC80XVN(W)</b> – động cơ DC 25 W siêu êm, Ion âm, đảo gió 3D.</li>
 <li><b>Máy xay BL-70GR2UV</b> – 600 W, 3 cối, cối thủy tinh 1,5 L, tự ngắt khi quá tải.</li>
 <li><b>Cây nước nóng lạnh Toshiba RWF-W1669BV</b> – hút bình dưới, làm lạnh Block, bình Inox 304.</li>
 <li><b>Máy hút bụi Toshiba VC-BL160F(K)</b> – 1.600 W, HEPA, hộp bụi 1,8 L.</li></ul>
 <h4>Gợi ý bán thêm (tăng giá trị đơn)</h4>
 <div class="tbl"><table><tr><th>Khi đại lý lấy</th><th>Gợi ý thêm</th></tr>
 <tr><td>Điều hòa đầu hè</td><td>Quạt DC, máy lọc không khí</td></tr>
 <tr><td>Tủ lạnh, máy giặt cho nhà mới</td><td>Máy lọc nước RO, máy rửa bát, cây nước</td></tr>
 <tr><td>Hàng mùa nồm</td><td>Máy hút ẩm, máy sấy quần áo</td></tr>
 <tr><td>Đơn cho showroom, văn phòng</td><td>Máy sấy tay, cảm biến hồng ngoại</td></tr></table></div>
 ${KEEP(['Mùa nồm: hút ẩm F-YCT17V 17 L/ngày, máy sấy.','Nhà mới: lọc nước RO, rửa bát.','Mỗi cuộc gọi gợi ý 1 sản phẩm đi kèm, không ép.'])}`,
 check:[
  ['Tháng 2–3 miền Bắc vào nồm. Sản phẩm nên gợi ý đại lý nhập?',['Máy hút ẩm, máy sấy quần áo','Quạt DC','Tủ đông'],0,'Hút ẩm F-YCT17V và máy sấy là hàng mùa nồm.']
 ]
},
{
 t:'Mùa vụ bán hàng trong năm', time:'15:15–15:30',
 goal:['Biết tháng nào bán gì để gọi đại lý nhập trước mùa'],
 html:`
 <p>Đại lý cần có hàng <b>trước</b> khi khách hỏi. Nhân viên giỏi gọi gợi ý nhập trước mùa 1–2 tháng, không đợi đại lý gọi.</p>
 <div class="tbl"><table><tr><th>Thời điểm</th><th>Hàng bán mạnh</th><th>Gọi đại lý từ</th></tr>
 <tr><td>Tháng 2–4 (mùa nồm)</td><td>Máy hút ẩm, máy sấy quần áo, máy giặt sấy</td><td>Tháng 1</td></tr>
 <tr><td>Tháng 4–8 (mùa nóng)</td><td>Điều hòa, quạt, tủ mát, tủ đông</td><td>Tháng 2–3</td></tr>
 <tr><td>Tháng 9–11</td><td>Điều hòa 2 chiều, máy lọc không khí (bụi mịn)</td><td>Tháng 8–9</td></tr>
 <tr><td>Tháng 11–Tết</td><td>Tủ lạnh, tủ đông, máy giặt, gia dụng làm quà</td><td>Tháng 10</td></tr></table></div>
 ${SAY('Gọi trước mùa','"Anh ơi còn khoảng 6 tuần nữa vào nóng, năm ngoái tầm này bên anh lấy điều hòa 9.000 nhiều. Anh có muốn em giữ trước một lô để kịp hàng không ạ?"')}
 ${KEEP(['Gọi đại lý nhập trước mùa 1–2 tháng.','Dùng lịch sử mua năm ngoái của đại lý để gợi ý.'])}`,
 check:[
  ['Nên gọi đại lý nhập điều hòa từ khi nào?',['Tháng 2–3, trước mùa nóng','Tháng 7 khi đang nóng nhất','Tháng 12'],0,'Gợi ý nhập trước mùa 1–2 tháng.']
 ]
},
{
 t:'Chính sách bán buôn và quy trình JIT', time:'15:30–16:15',
 goal:['Nói chính xác chính sách giá buôn, chiết khấu, thanh toán, giao hàng','Biết điều được và không được hứa với đại lý'],
 html:`
 ${IMG('cat-23.jpg','Hồ sơ hợp tác – Chính sách hợp tác chiến lược')}
 <h4>I. Chính sách bán buôn và dự án</h4>
 <ul><li><b>Đối tượng:</b> đại lý điện máy, nhà thầu dự án, cửa hàng bán lẻ, doanh nghiệp.</li>
 <li><b>Ưu đãi giá:</b> bảng giá buôn đặc quyền cho đơn từ <b>20 triệu đồng</b> hoặc từ <b>03 sản phẩm cùng loại</b>.</li>
 <li><b>Chiết khấu:</b> lũy tiến theo doanh số tháng / quý / năm – đại lý lấy càng đều càng được lợi.</li>
 <li><b>Thanh toán:</b> chuyển khoản hoặc tiền mặt; <b>hạn mức tín dụng</b> cho đối tác chiến lược (công ty xét, nhân viên không tự hứa).</li></ul>
 <h4>II. Cam kết giá và minh bạch</h4>
 <ul><li><b>Bảo vệ giá:</b> tuân thủ chính sách giá của hãng, <b>tuyệt đối không bán phá giá</b>.</li>
 <li>Giá và khuyến mãi cập nhật định kỳ qua Email/Zalo.</li>
 <li>Đối tác dự án hưởng đầy đủ quà tặng và bảo hành mở rộng của nhà sản xuất.</li></ul>
 <h4>III. Giao nhận và trách nhiệm</h4>
 <ul><li><b>Giao hàng:</b> nội thành 24 giờ, ngoại tỉnh 48 giờ, đến tận chân công trình.</li>
 <li><b>Trách nhiệm:</b> Hương Anh chịu trách nhiệm hoàn toàn về chất lượng hàng trong lưu kho và vận chuyển đến khi bàn giao.</li>
 <li><b>Hậu mãi:</b> hỗ trợ xử lý khiếu nại kho bãi và kỹ thuật lắp đặt.</li></ul>
 ${IMG('cat-22.jpg','Hồ sơ hợp tác – Quy trình vận hành chuẩn JIT')}
 <h4>Quy trình JIT – 4 bước</h4>
 <ol><li><b>Kết nối tức thì:</b> hotline 0243.8727213, chuyên viên trực 8:00–21:00 hằng ngày, kể cả Thứ 7, Chủ nhật.</li>
 <li><b>Xử lý siêu tốc:</b> phản hồi báo giá trong 24 giờ; hàng chính hãng 100%, đủ chứng từ.</li>
 <li><b>Vận chuyển thần tốc:</b> giao 24–48 giờ tùy khu vực; dự án khẩn cấp đến nơi trong 24 giờ từ khi xác nhận đơn.</li>
 <li><b>Giám sát thông minh:</b> theo dõi đơn thời gian thực qua <b>APP HƯƠNG ANH</b>, từ lên đơn, xuất kho đến bàn giao và hóa đơn điện tử.</li></ol>
 <h4>Được nói / Không được nói</h4>
 <div class="tbl"><table><tr><th>Được nói</th><th>Không được nói</th></tr>
 <tr><td>"Đơn từ 20 triệu hoặc 3 sản phẩm cùng loại anh được giá buôn."</td><td>"Em giảm thêm cho anh ngoài bảng giá."</td></tr>
 <tr><td>"Em báo trưởng phòng xét hạn mức công nợ cho anh."</td><td>"Anh cứ lấy, nợ bao lâu cũng được."</td></tr>
 <tr><td>"Nội thành 24 giờ, ngoại tỉnh 48 giờ."</td><td>"Chiều nay có hàng ngay" (khi chưa hỏi kho, đội xe).</td></tr></table></div>
 ${KEEP(['Giá buôn: ≥ 20 triệu hoặc ≥ 3 sản phẩm cùng loại.','Chiết khấu lũy tiến tháng/quý/năm. Công nợ do công ty xét.','Không bán phá giá. Giao 24h nội thành / 48h ngoại tỉnh. Báo giá trong 24h.'])}`,
 check:[
  ['Đơn 15 triệu gồm 3 máy giặt cùng mã có được giá buôn không?',['Không, vì dưới 20 triệu','Có, vì đủ 3 sản phẩm cùng loại','Chỉ khi là đại lý cấp 1'],1,'Điều kiện là 20 triệu HOẶC 3 sản phẩm cùng loại.'],
  ['Đại lý xin công nợ 60 ngày. NVBH trả lời?',['"Dạ được anh"','"Em báo trưởng phòng xét hạn mức và gọi lại anh trong hôm nay ạ"','"Bên em không có công nợ"'],1,'Hạn mức tín dụng cho đối tác chiến lược, do công ty xét.'],
  ['Công ty phản hồi báo giá trong bao lâu?',['24 giờ','3 ngày','1 tuần'],0,'Quy trình JIT bước 2.']
 ]
},
{
 t:'Quy trình nội bộ: đơn hàng, giao hàng, bảo hành', time:'16:15–16:45',
 goal:['Biết đơn hàng đi qua những bộ phận nào','Xử lý đúng khi đại lý báo hàng lỗi'],
 html:`
 ${IMG('kh01-6.jpg','Quy trình vận hành đơn hàng')}
 <h4>1. Quy trình bán hàng</h4>
 <div class="flow"><span>Tư vấn sản phẩm<small>NVBH</small></span><span>Lên đơn<small>NVBH</small></span><span>Xuất hàng<small>Thủ kho</small></span><span>Xuất hóa đơn<small>Kế toán</small></span><span>Giao hàng<small>Đội xe</small></span></div>
 <p>Mỗi bước có <b>xác nhận điện tử</b> và người chịu trách nhiệm. Đơn của bạn chỉ chạy khi bạn đã lên đơn đúng và duyệt trên Bravo (học ở Ngày 3).</p>
 <h4>2. Quy trình giao hàng</h4>
 <p>Điều phối giao hàng qua hệ thống → Giao hàng → Lái xe thu tiền (tiền mặt hoặc chuyển khoản), hoặc xác nhận chuyển khoản sau với bán hàng.</p>
 <h4>3. Quy trình bảo hành – đổi trả</h4>
 ${IMG('kh01-7.jpg','Quy trình bảo hành – đổi trả')}
 <ol><li><b>Tiếp nhận thông tin</b> qua điện thoại, Zalo, email. Cần đủ: mã/loại sản phẩm, mô tả lỗi, thời gian mua hàng, ảnh/video lỗi.</li>
 <li><b>Kiểm tra sơ bộ:</b> lỗi có thuộc phạm vi bảo hành không; mức độ (nhẹ, nặng, cần kỹ thuật kiểm tra trực tiếp); còn hạn bảo hành không (tính từ ngày xuất kho hoặc ngày khách nhận hàng).</li>
 <li><b>Gửi thông tin tới hãng:</b> báo cáo ngắn gọn gửi bộ phận bảo hành của hãng (cổng điện tử, email hoặc gọi trực tiếp), đính kèm ảnh/video, hóa đơn, biên bản nếu có.</li>
 <li><b>Hãng triển khai:</b> sửa tại nhà, sửa tại trung tâm bảo hành, hoặc đổi mới nếu lỗi do nhà sản xuất.</li></ol>
 <p class="note">Tại bước 4, NVBH bám sát và báo lại khách ngay khi có phát sinh. Xử lý bảo hành gọn gàng là cách giữ đại lý tốt nhất.</p>
 ${SAY('Khi đại lý báo lỗi','"Dạ em xin lỗi anh vì sự bất tiện ạ. Anh gửi em mã máy, ảnh hoặc video lỗi và ngày khách nhận hàng, em chuyển bảo hành hãng ngay và báo lại anh trong hôm nay ạ."')}
 ${KEEP(['Tư vấn → Lên đơn → Thủ kho → Kế toán → Giao hàng.','Bảo hành: Tiếp nhận → Kiểm tra → Gửi hãng → Hãng xử lý. NVBH bám sát đến cuối.'])}`,
 check:[
  ['Sau khi NVBH lên đơn, bộ phận nào làm tiếp?',['Kế toán xuất hóa đơn','Thủ kho xuất hàng','Đội xe giao hàng'],1,'Thứ tự: Lên đơn → Thủ kho xuất hàng → Xuất hóa đơn → Giao hàng.'],
  ['Hạn bảo hành thường tính từ khi nào?',['Ngày sản xuất','Ngày xuất kho hoặc ngày khách nhận hàng','Ngày khách báo lỗi'],1,'Theo quy trình bảo hành – bước 2.']
 ]
},
{
 t:'Các bộ phận và người cần liên hệ', time:'16:45–17:00',
 goal:['Biết việc gì hỏi ai để xử lý nhanh cho khách'],
 html:`
 ${IMG('kh01-8.jpg','Chức năng và liên hệ của các bộ phận (số điện thoại xem trên ảnh)')}
 <div class="tbl"><table><tr><th>Bộ phận</th><th>Phụ trách</th><th>Hỏi khi</th></tr>
 <tr><td><b>Ban Giám đốc</b></td><td>Điều hành toàn bộ, định hướng chiến lược, quyết định vấn đề bất thường</td><td>Đơn đặc biệt, giá ngoài chính sách, sự cố lớn</td></tr>
 <tr><td><b>Phòng Kế toán</b></td><td>Kế toán trưởng, kế toán công nợ, kế toán nhập hàng</td><td>Hóa đơn, công nợ khách, đối chiếu báo có</td></tr>
 <tr><td><b>Đội xe</b></td><td>Tiến độ giao hàng, sự cố khi giao, lập kế hoạch và điều phối, chi phí vận chuyển</td><td>Khách hỏi xe đến chưa, giao gấp, đổi giờ giao</td></tr>
 <tr><td><b>Thủ kho</b></td><td>Nhập – xuất – tồn từng kho (Bồ Đề, các kho tỉnh), kiểm kê, phối hợp kế toán</td><td>Kiểm tra tồn kho trước khi hứa giữ hàng</td></tr></table></div>
 <p class="note">Nhân viên bán hàng không điều xe trực tiếp – mọi yêu cầu giao gấp đi qua đội xe.</p>
 ${KEEP(['Hỏi tồn → Thủ kho. Hỏi xe → Đội xe. Hỏi công nợ, báo có → Kế toán.','Không hứa giữ hàng trước khi hỏi kho.'])}`,
 check:[
  ['Đại lý hỏi "Xe giao hàng cho anh đến đâu rồi?" Hỏi ai?',['Thủ kho','Đội xe','Kế toán'],1,'Đội xe theo dõi tiến độ giao hàng.'],
  ['Trước khi nói "em giữ cho anh 10 bộ", cần hỏi ai?',['Thủ kho','Ban Giám đốc','Không cần hỏi'],0,'Thủ kho quản lý nhập – xuất – tồn.']
 ]
},
{
 t:'Ôn tập và kiểm tra Ngày 1', time:'17:00–18:00',
 goal:['Ôn lại toàn bộ Ngày 1','Làm bài kiểm tra Ngày 1 đạt từ 80%'],
 html:`
 <h4>10 điều phải nhớ sau Ngày 1</h4>
 <ol><li>Việt Tuấn – Hương Anh: từ 1993, hơn 30 năm, MST 0101423629.</li>
 <li>3.500+ đại lý, 28 tỉnh phía Bắc, kho 18.000+ m², 80+ xe tải.</li>
 <li>Độc quyền miền Bắc: Toshiba, Aufit. Daikin doanh số lớn nhất miền Bắc.</li>
 <li>Công suất điều hòa: 9.000 / 12.000 / 18.000 / 24.000 BTU ↔ &lt;15 / 15–20 / 20–30 / 30–40 m².</li>
 <li>Daikin FTKB 1 chiều, FTHF 2 chiều; Panasonic XPU 1 chiều, YZ 2 chiều.</li>
 <li>Tủ lạnh chọn theo số người; tủ đông Toshiba giữ lạnh 100 giờ khi mất điện.</li>
 <li>Gọi đại lý nhập trước mùa 1–2 tháng.</li>
 <li>Giá buôn: ≥ 20 triệu hoặc ≥ 3 sản phẩm cùng loại; chiết khấu lũy tiến; không bán phá giá.</li>
 <li>Giao 24h nội thành / 48h ngoại tỉnh; báo giá trong 24h; trực 8:00–21:00 cả tuần.</li>
 <li>Tư vấn → Lên đơn → Thủ kho → Kế toán → Giao hàng; bảo hành 4 bước.</li></ol>
 <p><b>Bài tập về nhà:</b> đọc lại catalogue <i>Hồ sơ hợp tác</i>, chọn 5 mã mình thích nhất và tập nói điểm bán của từng mã trong 20 giây.</p>
 <p><button class="btn" data-go-quiz="d1">Làm bài kiểm tra Ngày 1</button></p>`,
 check:[]
}
];
