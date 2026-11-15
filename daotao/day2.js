/* Ngày 2 – Khách hàng bán buôn và kỹ năng gọi điện. Dùng lại IMG, KEEP, SAY, TASK từ day1.js */
const DIALOG = (title, lines) => `<div class="dialog"><div class="keep-h">${title}</div>${lines.map(([who,t])=>`<p class="dl ${who==='NV'?'nv':'kh'}"><b>${who==='NV'?'NVBH':'Đại lý'}:</b> ${t}</p>`).join('')}</div>`;

const DAY2 = [
{
 t:'Ôn Ngày 1 và mục tiêu Ngày 2', time:'9:00–9:30',
 goal:['Nhắc lại nhanh kiến thức Ngày 1','Biết hôm nay phải làm được gì: gọi trọn một cuộc cho đại lý'],
 html:`
 <p>Hôm qua bạn đã biết <b>mình bán gì</b>. Hôm nay học <b>bán cho ai</b> và <b>bán thế nào</b>. Cuối ngày, mỗi người phải gọi trọn một cuộc nhập vai với "đại lý" (người dạy đóng vai) và đạt từ 70/100 điểm theo phiếu chấm.</p>
 <h4>Ôn nhanh 5 phút (người dạy gọi tên ngẫu nhiên)</h4>
 <ol><li>Giới thiệu công ty trong 30 giây.</li>
 <li>Hai hãng mà Việt Tuấn độc quyền miền Bắc?</li>
 <li>Phòng 22 m², 2 chiều, khách muốn Daikin – mã nào?</li>
 <li>Điều kiện để được giá buôn?</li>
 <li>Đại lý hỏi xe giao đến đâu rồi – hỏi bộ phận nào?</li></ol>
 <p class="note">Đáp án: (2) Toshiba, Aufit · (3) FTHF50VAVMV 18.000 BTU · (4) đơn từ 20 triệu hoặc 3 sản phẩm cùng loại · (5) Đội xe.</p>
 <h4>Lịch Ngày 2</h4>
 <div class="tbl"><table><tr><th>Giờ</th><th>Nội dung</th></tr>
 <tr><td>9:30–11:00</td><td>4 nhóm khách hàng và cách bán cho từng nhóm</td></tr>
 <tr><td>11:00–12:00</td><td>Nghiên cứu thị trường, chiến lược điểm mạnh lan tỏa</td></tr>
 <tr><td>13:00–14:15</td><td>4 Xin – 4 Luôn: giao tiếp qua điện thoại</td></tr>
 <tr><td>14:15–16:15</td><td>Kịch bản cuộc gọi 6 bước, xử lý từ chối, chốt đơn</td></tr>
 <tr><td>16:15–17:30</td><td>Nhập vai, chấm điểm</td></tr>
 <tr><td>17:30–18:00</td><td>Ôn tập, kiểm tra Ngày 2</td></tr></table></div>
 ${KEEP(['Nguyên tắc vàng của hôm nay: <b>không bán giống nhau cho mọi loại khách</b>.','Mỗi cuộc gọi phải có lý do có giá trị và kết thúc bằng một bước tiếp theo cụ thể.'])}`,
 check:[['Cuối Ngày 2 học viên phải đạt điều gì?',['Thuộc hết catalogue','Gọi nhập vai trọn một cuộc đạt từ 70/100','Lên đơn trên Bravo'],1,'Lên đơn Bravo học ở Ngày 3.']]
},
{
 t:'Phân loại và hiểu 4 nhóm khách hàng', time:'9:30–10:15',
 goal:['Nhận diện đúng nhóm của từng đại lý','Nắm quy mô nhập, mối quan tâm, cách ra quyết định của mỗi nhóm'],
 html:`
 ${IMG('kh01-18.jpg','KH01 – Phân loại và hiểu khách hàng: so sánh nhanh và công thức riêng')}
 <p>Khách của Việt Tuấn chia 2 khối: <b>bán buôn</b> và <b>bán lẻ</b>. Khối bán lẻ chia tiếp thành đại lý lớn, đại lý vừa, đại lý thợ. Mỗi nhóm mua khác nhau, quyết định khác nhau, nên cách bán phải khác nhau.</p>
 <h4>So sánh nhanh</h4>
 <div class="tbl"><table><tr><th>Nhóm khách</th><th>Nhập hàng</th><th>Quan tâm chính</th><th>Hành vi quyết định</th></tr>
 <tr><td><b>Bán buôn</b></td><td>Rất lớn</td><td>Giá, chiết khấu, công nợ</td><td>Nhanh, có sẵn kế hoạch</td></tr>
 <tr><td><b>Lẻ lớn</b></td><td>Trung bình</td><td>Thương hiệu, chính sách</td><td>Cân nhắc kỹ, cần chăm sóc</td></tr>
 <tr><td><b>Lẻ vừa</b></td><td>Nhỏ</td><td>Giá cả, hàng dễ bán</td><td>Nhạy cảm, cần quan tâm</td></tr>
 <tr><td><b>Thợ</b></td><td>Rất nhỏ</td><td>Giá tốt, giao nhanh</td><td>Quyết định ngay, lập tức khi cần hàng</td></tr></table></div>
 <h4>Công thức riêng cho từng nhóm</h4>
 <div class="tbl"><table><tr><th>Nhóm</th><th>Giao hàng</th><th>Chăm sóc</th><th>Đặc biệt</th></tr>
 <tr><td>Bán buôn</td><td>Theo lô</td><td>Theo kế hoạch</td><td>Phải giữ uy tín tuyệt đối</td></tr>
 <tr><td>Lẻ lớn</td><td>Chính xác</td><td>Trưng bày – quảng bá</td><td>Giúp họ nổi bật hơn đối thủ</td></tr>
 <tr><td>Lẻ vừa</td><td>Đúng giờ</td><td>Nhắc mua – chia nhỏ đơn</td><td>Tập cho họ bán đều tay</td></tr>
 <tr><td>Thợ</td><td>Rất nhanh</td><td>Cá nhân hóa</td><td>Có mặt khi họ cần</td></tr></table></div>
 ${IMG('kh01-19.jpg','KH01 – Đặc điểm 4 nhóm đại lý')}
 <h4>Đặc điểm chi tiết</h4>
 <div class="grid4">
  <div><b>1. Đại lý bán buôn</b><span>Nhập hàng theo lô lớn, có thể vài trăm triệu một lần. Có hệ thống đại lý hoặc khách bán lại bên dưới. Quan tâm: giá cả, chiết khấu, chính sách thanh toán, thời gian giao hàng.</span></div>
  <div><b>2. Đại lý bán lẻ lớn</b><span>Cửa hàng lớn, mặt tiền đẹp, có đội ngũ bán hàng. Bán đa thương hiệu, có ảnh hưởng ở khu vực. Quan tâm: thương hiệu, chính sách bảo hành, hỗ trợ trưng bày.</span></div>
  <div><b>3. Đại lý bán lẻ vừa</b><span>Cửa hàng gia đình, bán lẻ dòng phổ thông. Không có nhiều vốn xoay vòng, nhạy cảm về giá. Quan tâm: giá, hàng phổ thông dễ bán, chăm sóc thường xuyên.</span></div>
  <div><b>4. Đại lý thợ</b><span>Cá nhân: thợ điện lạnh, lắp điều hòa, sửa chữa kiêm bán hàng. Mua ít nhưng xoay vòng nhanh, phản ứng cực nhanh với giá. Quan tâm: giá tốt, giao linh hoạt, nhanh chóng.</span></div>
 </div>
 <h4>Dấu hiệu nhận biết khi gọi lần đầu</h4>
 <ul><li>Hỏi ngay "chiết khấu bao nhiêu, công nợ thế nào, lấy 50 bộ giá sao" → <b>bán buôn</b>.</li>
 <li>Hỏi "có hỗ trợ biển, kệ, poster không, bảo hành ở đâu" → <b>lẻ lớn</b>.</li>
 <li>Hỏi "mẫu nào dễ bán, lấy 2–3 cái được không" → <b>lẻ vừa</b>.</li>
 <li>Hỏi "có sẵn mã này không, chiều nay giao được không" → <b>thợ</b>.</li></ul>
 <p class="note">Nhà thầu dự án (âm trần, VRV cho công trình) là nhóm riêng: quan tâm tiến độ giao đến chân công trình, chứng từ, bảo hành mở rộng. Đơn dự án lớn chuyển trưởng nhóm cùng xử lý.</p>
 ${TASK('Mở Danh mục đối tượng trên Bravo (hoặc danh sách được phát), xếp 20 đại lý vào 4 nhóm. Với mỗi đại lý ghi 1 dòng lý do. Người dạy kiểm tra 5 đại lý bất kỳ.')}
 ${KEEP(['Bán buôn: lô lớn, giá – chiết khấu – công nợ, quyết nhanh.','Lẻ lớn: thương hiệu, trưng bày. Lẻ vừa: giá, dễ bán, cần nhắc. Thợ: nhanh, gọn.'])}`,
 check:[
  ['Đại lý hỏi ngay "Có hỗ trợ poster, kệ trưng bày không em?" Họ nhiều khả năng thuộc nhóm nào?',['Thợ','Lẻ lớn','Bán buôn'],1,'Lẻ lớn quan tâm thương hiệu, trưng bày.'],
  ['Nhóm nào "quyết định ngay, lập tức khi cần hàng"?',['Thợ','Lẻ lớn','Lẻ vừa'],0,'Thợ mua theo công trình, cần hàng là mua ngay.']
 ]
},
{
 t:'Kỹ năng bán theo từng nhóm khách', time:'10:15–11:00',
 goal:['Biết phải làm gì, tránh gì với từng nhóm','Dùng đúng câu nói cho từng nhóm'],
 html:`
 ${IMG('kh01-21.jpg','KH01 – Kỹ năng bán hàng theo nhóm khách hàng')}
 <p><b>Nguyên tắc vàng: không bán giống nhau cho mọi loại khách.</b></p>

 <h4>1. Đại lý bán buôn</h4>
 <div class="tbl"><table><tr><th>Phải làm</th><th>Tránh</th></tr>
 <tr><td><ul><li>Báo giá tốt các mặt hàng cần đẩy sớm.</li><li>Chủ động gợi ý lô hàng lớn mỗi lần có khuyến mãi.</li><li>Gửi thông tin nhanh về các dòng sắp tăng giá, cắt mã.</li><li>Cùng đại lý xây dựng kế hoạch tháng.</li></ul></td>
 <td><ul><li>Đưa quá nhiều lựa chọn nhỏ – họ chỉ quan tâm gói lớn, ra hàng số lượng.</li><li>Hứa có hàng rồi không có, hẹn giao rồi không giao – mất niềm tin ngay.</li></ul></td></tr></table></div>
 <p><b>Mục tiêu:</b> biến họ thành "đầu mối xả hàng tồn" – mỗi tháng nhập đều, giao lại cho các cửa hàng nhỏ hơn.</p>
 ${SAY('Với bán buôn','"Anh ơi tháng này Toshiba có chương trình cho lô từ 30 bộ máy giặt, em tính giúp anh rồi, lấy 30 bộ AW-M1000FV thì giá về tốt hơn tháng trước. Mã này đầu tháng sau hãng có thể điều chỉnh giá, anh có muốn chốt trước không ạ?"')}

 <h4>2. Đại lý bán lẻ lớn</h4>
 <div class="tbl"><table><tr><th>Phải làm</th><th>Tránh</th></tr>
 <tr><td><ul><li>Thường xuyên cập nhật POSM: poster, biển hiệu, băng rôn (xin hãng hỗ trợ).</li><li>Hỗ trợ các gói trưng bày sản phẩm mới.</li><li>Lịch giao hàng đều đặn; model họ hay bán sắp hết hàng thì phải báo trước.</li><li>Hỏi kỹ họ bán hãng nào tốt nhất → đẩy thêm hàng cùng thương hiệu.</li></ul></td>
 <td><ul><li>Thiếu thông tin sản phẩm.</li><li>Chậm giao – ảnh hưởng uy tín của họ với khách.</li></ul></td></tr></table></div>
 <p><b>Mục tiêu:</b> biến họ thành "gương mặt đại diện thương hiệu tại khu vực".</p>
 ${SAY('Với lẻ lớn','"Chị Mai ơi, bên chị bán Panasonic tốt nhất khu này, em đang xin hãng bộ poster và kệ trưng bày tủ lạnh Multi Door. Chị lấy 3 mẫu NR-YW590 làm góc trưng bày thì em đề xuất hỗ trợ cho chị luôn ạ."')}

 <h4>3. Đại lý bán lẻ vừa</h4>
 <div class="tbl"><table><tr><th>Phải làm</th><th>Tránh</th></tr>
 <tr><td><ul><li>Báo giá gọn gàng, dễ hiểu – càng đơn giản càng tốt.</li><li>Chạy chương trình combo, giảm giá nhỏ – dễ chốt.</li><li>Đặt lịch nhắc mua định kỳ, không để họ quên.</li><li>Hỗ trợ giao tận nơi, tránh để họ tự thuê xe.</li></ul></td>
 <td><ul><li>Gọi dồn dập.</li><li>Giao chậm hoặc giao thiếu phụ kiện.</li></ul></td></tr></table></div>
 <p><b>Mục tiêu:</b> biến họ thành khách đều tay – ít nhưng thường xuyên, không đứt mạch.</p>
 ${SAY('Với lẻ vừa','"Anh Tâm ơi, em gửi anh 1 dòng thôi: combo 2 điều hòa Aufit 9.000 + 1 quạt DC, xe bên em giao tận cửa hàng anh thứ Năm. Anh lấy để kịp đầu mùa không ạ?"')}

 <h4>4. Đại lý thợ</h4>
 <div class="tbl"><table><tr><th>Phải làm</th><th>Tránh</th></tr>
 <tr><td><ul><li>Giao cực nhanh – thậm chí buổi tối, cuối tuần (qua đội xe).</li><li>Báo giá ngắn gọn – đúng mã, đúng thông số.</li><li>Có thể ưu tiên một số quyền lợi (bonus nhỏ, hỗ trợ kỹ thuật ngay) theo chính sách.</li><li>Nhớ kỹ tên, phong cách làm việc; đôi khi "chém gió" một chút là điểm cộng.</li></ul></td>
 <td><ul><li>Trả lời chậm khi họ cần báo giá → họ đi chỗ khác ngay.</li><li>Nói vòng vo – thợ cần "rõ ràng, lẹ, dứt điểm".</li></ul></td></tr></table></div>
 <p><b>Mục tiêu:</b> giữ được niềm tin của thợ = giữ luôn khách cuối cùng của họ.</p>
 ${DIALOG('Mẫu trả lời thợ',[['KH','Em ơi có 2 bộ Daikin 2 chiều 12 nghìn không, mai anh lắp.'],['NV','Có anh ạ, mã FTHF35XVMV. Em báo giá anh ngay trong 5 phút, em xếp xe giao sáng mai trước 10 giờ được không anh?'],['KH','Ừ, giao vào công trình ở Gia Lâm nhé.'],['NV','Dạ, anh nhắn em địa chỉ và số người nhận, em lên đơn luôn ạ.']])}
 ${TASK('Chia 4 nhóm, mỗi nhóm nhận 1 loại đại lý, viết 3 câu mở đầu cuộc gọi phù hợp. Đọc to, cả lớp góp ý: câu nào đúng "gu" nhóm khách, câu nào chưa.')}
 ${KEEP(['Bán buôn: gói lớn, giữ chữ tín. Lẻ lớn: POSM, trưng bày. Lẻ vừa: gọn, combo, nhắc định kỳ. Thợ: nhanh, rõ, dứt điểm.','Không bao giờ hứa hàng, hứa giờ giao khi chưa kiểm tra kho và đội xe.'])}`,
 check:[
  ['Với đại lý bán buôn, điều cần TRÁNH là gì?',['Gợi ý lô lớn khi có khuyến mãi','Đưa quá nhiều lựa chọn nhỏ lẻ','Báo trước mã sắp tăng giá'],1,'Bán buôn chỉ quan tâm gói lớn, ra hàng số lượng.'],
  ['Mục tiêu với đại lý bán lẻ vừa là?',['Đầu mối xả hàng tồn','Khách đều tay – ít nhưng thường xuyên','Gương mặt thương hiệu'],1,'Đặt lịch nhắc mua định kỳ, không để họ quên.']
 ]
},
{
 t:'Nghiên cứu và hiểu thị trường', time:'11:00–11:30',
 goal:['Biết 5 cách lấy thông tin thị trường','Trả lời được 3 câu hỏi về mỗi đại lý mình phụ trách'],
 html:`
 ${IMG('kh01-20.jpg','KH01 – Nghiên cứu và hiểu thị trường')}
 <p>Bán buôn giỏi là biết trước khách cần gì. Phải nắm:</p>
 <ul><li>Khách muốn gì – đang thiếu gì – đang chán gì.</li>
 <li>Đối thủ đang bán gì, giá bao nhiêu, khuyến mãi ra sao.</li>
 <li>Mùa vụ nào bán gì mạnh (hè điều hòa, Tết tủ lạnh, nồm máy sấy, hút ẩm).</li></ul>
 <h4>5 phương pháp nghiên cứu thị trường</h4>
 <ol><li><b>Hỏi khách trực tiếp</b> – hỏi khéo: "Khách hay hỏi máy nào dạo này anh/chị bán nhiều?"; gợi mở: "Bên em đang có mẫu X giảm giá sâu, anh chị đẩy cùng em nhé."</li>
 <li><b>Gọi thăm dò đại lý cùng khu vực</b> – hỏi đại lý A nhưng cố tình nhắc tên đại lý B để khơi mở thông tin; xem khách khu đó đang "nghiêng" về thương hiệu nào.</li>
 <li><b>Đi thị trường – khảo sát trực tiếp</b> – ghi chú hàng trưng bày tại cửa hàng đối thủ; đánh giá tiềm lực, sức bán.</li>
 <li><b>Theo dõi mạng xã hội, Zalo nhóm đại lý</b> – xem đại lý đăng bán sản phẩm gì, ai đang ra hàng tốt, ai đang chạy chương trình.</li>
 <li><b>Phân tích lịch sử mua hàng</b> – "Khách A tháng này không lấy điều hòa – tại sao?"; "Khách B năm ngoái bán cực mạnh tủ đông – sắp tới có lặp lại không?"</li></ol>
 <h4>3 câu hỏi bắt buộc cho mỗi đại lý</h4>
 <div class="tbl"><table><tr><th>Câu hỏi</th><th>Cách hỏi khéo</th></tr>
 <tr><td>1. Họ đang bán thương hiệu nào tốt nhất?</td><td>"Dạo này bên mình hãng nào chạy nhất anh?"</td></tr>
 <tr><td>2. Họ đang thiếu mặt hàng nào?</td><td>"Mã nào trong kho anh sắp hết rồi ạ?"</td></tr>
 <tr><td>3. Nếu giảm giá hoặc hỗ trợ, họ nhập ngay bao nhiêu?</td><td>"Nếu em xin được giá tốt hơn cho lô này, anh lấy được khoảng bao nhiêu bộ?"</td></tr></table></div>
 <p><b>Không trả lời được 1 trong 3 câu → bạn đang thiếu dữ liệu.</b> Ghi câu trả lời vào sổ khách hàng (hoặc ghi chú khách trên Bravo/Zalo) sau mỗi cuộc gọi.</p>
 ${TASK('Mỗi học viên chọn 3 đại lý trong danh sách được giao. Gọi thử (nhập vai với bạn cùng lớp) và điền đủ 3 câu cho mỗi đại lý vào bảng.')}
 ${KEEP(['3 câu: bán hãng nào tốt nhất · thiếu gì · hỗ trợ thì nhập bao nhiêu.','Nguồn tin: hỏi khách, hỏi đại lý cùng khu, đi thị trường, Zalo nhóm, lịch sử mua.'])}`,
 check:[
  ['Không trả lời được 1 trong 3 câu hỏi về đại lý nghĩa là gì?',['Đại lý không quan trọng','Mình đang thiếu dữ liệu','Nên bỏ đại lý đó'],1,'Phải gọi lại hoặc tìm hiểu thêm.'],
  ['"Khách B năm ngoái bán mạnh tủ đông" là thông tin từ phương pháp nào?',['Đi thị trường','Phân tích lịch sử mua hàng','Theo dõi Zalo'],1,'Lịch sử mua giúp đoán trước nhu cầu.']
 ]
},
{
 t:'Chiến lược điểm mạnh lan tỏa', time:'11:30–12:00',
 goal:['Biết chọn "điểm bán tốt" trong khu vực','Dùng kết quả của điểm tốt để thuyết phục đại lý xung quanh'],
 html:`
 ${IMG('kh01-22.jpg','KH01 – Chiến lược tiếp cận: lấy điểm mạnh làm trung tâm, lan tỏa ra ngoài')}
 <p><b>Nguyên tắc:</b> "Bán cho người dễ bán trước – dùng người đó làm 'quảng cáo sống' cho những người khó bán."</p>
 <ul><li>80% doanh số đến từ 20% khách → tập trung đánh mạnh điểm đó trước.</li>
 <li>Mỗi khu vực phải có ít nhất 1–2 "điểm bán tốt" – đó là cột mốc lan tỏa.</li>
 <li>Sản phẩm mới, hàng lạ, mẫu cao cấp → luôn thử trước ở nhóm khách đã bán giỏi.</li></ul>
 <h4>4 bước cụ thể</h4>
 <div class="steps">
  <div><b>Bước 1 – Xác định "điểm bán tốt"</b><span>Tiêu chí: bán đều, xoay vòng hàng nhanh; tin tưởng thương hiệu Việt Tuấn; sẵn sàng thử mẫu mới nếu được hỗ trợ đúng lúc.</span></div>
  <div><b>Bước 2 – Đẩy hàng, chăm sóc mạnh tại điểm chính</b><span>Cho ưu đãi hoặc quyền lợi tốt hơn (ví dụ: treo biển độc quyền 2 tuần, POSM trước). Theo sát kết quả bán: phản hồi, giá bán ra, lý do khách thích. Tăng tần suất gọi: "Bên mình bán mẫu mới này sao rồi?"</span></div>
  <div><b>Bước 3 – Lan ra điểm lân cận</b><span>"Mẫu này Minh Trí (cách bên mình 3 km) vừa bán 5 cái trong tuần đầu – khách rất chuộng mẫu này đấy anh." · "Cửa hàng A ở phố bên kia đang chạy chương trình này – bên mình muốn thử theo không? Bên em sẽ hỗ trợ luôn." Xin ảnh trưng bày từ điểm chính để gửi cho điểm khác tham khảo.</span></div>
  <div><b>Bước 4 – Tạo "cụm khách bán đồng đều"</b><span>Khi 3–4 đại lý quanh vùng cùng nhập một mặt hàng: khách cuối hỏi "sao ai cũng bán dòng này?"; đại lý ngại bị bỏ lại → tự động nhập.</span></div>
 </div>
 <p class="note">Chỉ dùng số liệu thật của điểm bán tốt. Không bịa "bên kia bán 5 cái" khi không có – đại lý cùng khu biết nhau, nói sai là mất uy tín cả khu.</p>
 ${TASK('Trên danh sách đại lý của mình, khoanh 1–2 "điểm bán tốt" mỗi khu vực, viết kế hoạch 2 tuần: đẩy mã nào, hỗ trợ gì, sau đó gọi những đại lý nào lân cận.')}
 ${KEEP(['Điểm bán tốt: bán đều, tin Việt Tuấn, sẵn sàng thử mẫu mới.','Điểm chính → lan sang lân cận → tạo cụm 3–4 đại lý cùng bán.'])}`,
 check:[
  ['Sản phẩm mới, mẫu cao cấp nên thử trước ở đâu?',['Đại lý khó tính nhất','Nhóm khách đã bán giỏi','Đại lý mới mở'],1,'Dùng điểm bán tốt làm "quảng cáo sống".'],
  ['Bước 4 "cụm khách bán đồng đều" tạo hiệu ứng gì?',['Đại lý ngại bị bỏ lại nên tự nhập','Giá giảm mạnh','Đại lý cạnh tranh phá giá'],0,'Khách cuối thấy ai cũng bán dòng đó.']
 ]
},
{
 t:'4 Xin – chìa khóa mở đầu cuộc gọi', time:'13:00–13:45',
 goal:['Thực hiện thành thạo Xin chào, Xin phép, Xin cảm ơn, Xin lỗi','Tạo thiện cảm trong 10 giây đầu'],
 html:`
 ${IMG('kh02-1.jpg','KH02 – 4 Xin 4 Luôn: nền tảng giao tiếp đỉnh cao cho bán hàng qua điện thoại')}
 <p>Phần lớn việc bán buôn diễn ra qua <b>điện thoại và Zalo</b>. Đại lý không nhìn thấy bạn – họ chỉ nghe giọng. Khách quyết định nghe tiếp hay không trong <b>10 giây đầu</b>.</p>
 <h4>1. Xin chào – khởi đầu mọi kết nối</h4>
 ${IMG('kh02-3.jpg','KH02 – Xin chào')}
 <ul><li><b>Cách làm:</b> cười nhẹ khi cầm máy (giọng tự nhiên, thân thiện hơn); giới thiệu rõ tên mình, công ty, mục đích cuộc gọi; giọng rõ ràng, âm lượng vừa phải, nhấn nhẹ tên khách.</li>
 <li><b>Thực hành:</b> hít thở sâu, giữ tâm thế tự tin trước khi bấm máy; nói đều, không vội vã, không nói đều đều.</li></ul>
 ${SAY('Mẫu','"Em chào anh Hùng ạ, em là Lan gọi từ Nhà phân phối Hương Anh – Công ty Việt Tuấn."')}
 <h4>2. Xin phép – trao quyền cho khách</h4>
 ${IMG('kh02-4.jpg','KH02 – Xin phép')}
 <ul><li><b>Cách làm:</b> sau lời chào luôn hỏi "Anh/chị có tiện nghe em tư vấn 1–2 phút không ạ?"; giọng nhẹ nhàng.</li>
 <li><b>Thực hành:</b> đặt câu hỏi xác nhận thay vì vào thẳng nội dung bán hàng. Khách bận → chủ động xin gọi lại vào giờ cụ thể.</li></ul>
 ${DIALOG('Khi khách bận',[['NV','Anh có tiện nghe em 2 phút không ạ?'],['KH','Anh đang bận lắm.'],['NV','Dạ em xin lỗi đã làm phiền anh. Em xin phép gọi lại lúc 4 giờ chiều nay được không ạ?'],['KH','Ừ, 4 giờ nhé.'],['NV','Dạ em cảm ơn anh, 4 giờ em gọi ạ.']])}
 <h4>3. Xin cảm ơn – dù kết quả ra sao</h4>
 ${IMG('kh02-5.jpg','KH02 – Xin cảm ơn')}
 <ul><li><b>Cách làm:</b> luôn cảm ơn khi khách nghe máy, trả lời, hoặc từ chối.</li>
 <li><b>Thực hành:</b> nói cảm ơn rõ ràng, chân thành, không rập khuôn máy móc.</li></ul>
 ${SAY('Mẫu','"Em cảm ơn anh đã dành thời gian nghe em ạ. Có gì mới em báo anh sớm nhất."')}
 <h4>4. Xin lỗi – giải tỏa căng thẳng, giữ uy tín</h4>
 ${IMG('kh02-6.jpg','KH02 – Xin lỗi')}
 <ul><li><b>Cách làm:</b> chủ động xin lỗi khi gọi nhầm lúc khách bận, nói nhầm, hoặc khi khách chưa hài lòng. Luôn gắn xin lỗi với cam kết khắc phục: "Em xin lỗi nếu làm phiền anh/chị. Em xin phép liên hệ lại vào lúc thuận tiện hơn ạ."</li>
 <li><b>Thực hành:</b> hạ giọng nhẹ khi xin lỗi, thành khẩn, <b>không đổ lỗi</b> (kể cả khi lỗi do bộ phận khác); giọng ấm áp, không vội vàng, lắng nghe cảm xúc khách.</li></ul>
 ${DIALOG('Giao chậm',[['KH','Hôm trước hẹn giao sáng mà chiều mới tới, khách anh bỏ về rồi!'],['NV','Dạ em thành thật xin lỗi anh, để anh mất khách là lỗi bên em. Từ đơn này em sẽ theo dõi lệnh xuất hàng và báo anh giờ xe chính xác trước khi xe chạy ạ.']])}
 <h4>Tổng kết 4 Xin</h4>
 <div class="grid4">
  <div><b>Xin chào</b><span>Tạo thiện cảm đầu tiên</span></div>
  <div><b>Xin phép</b><span>Trao quyền lựa chọn, tăng hợp tác</span></div>
  <div><b>Xin cảm ơn</b><span>Ghi nhận, để lại dấu ấn tốt đẹp</span></div>
  <div><b>Xin lỗi</b><span>Hóa giải tình huống, giữ khách hàng</span></div>
 </div>
 ${TASK('Luyện theo cặp: mỗi người gọi 3 lần, mỗi lần một tình huống – khách rảnh, khách bận, khách đang bực. Bạn cùng cặp chấm: có đủ 4 Xin không, giọng có cười không.')}
 ${KEEP(['10 giây đầu quyết định cuộc gọi.','Chào – Xin phép 1–2 phút – Cảm ơn – Xin lỗi kèm cam kết khắc phục, không đổ lỗi.'])}`,
 check:[
  ['Khách nói đang bận. Câu nào đúng?',['"Em nói nhanh thôi anh"','"Dạ em xin lỗi, em xin phép gọi lại lúc 4 giờ chiều được không ạ?"','Cúp máy luôn'],1,'Xin lỗi + xin phép gọi lại vào giờ cụ thể.'],
  ['Khi xin lỗi vì giao chậm, điều KHÔNG nên làm?',['Hạ giọng, thành khẩn','Đổ lỗi cho đội xe','Cam kết khắc phục'],1,'Xin lỗi không đổ lỗi, kể cả khi lỗi ở bộ phận khác.']
 ]
},
{
 t:'4 Luôn – thái độ chuyên nghiệp', time:'13:45–14:15',
 goal:['Giữ giọng tích cực, kiểm soát cảm xúc','Lắng nghe chủ động và chủ động giúp đỡ'],
 html:`
 <h4>1. Luôn tươi cười – đưa năng lượng tích cực vào giọng nói</h4>
 ${IMG('kh02-9.jpg','KH02 – 4 Luôn: tươi cười, nhẹ nhàng')}
 <ul><li>Dù khách không nhìn thấy mặt, họ cảm nhận được nụ cười qua âm sắc giọng nói.</li>
 <li>Mỉm cười thật khi nói chuyện, cả khi gọi điện; giữ tâm trạng lạc quan ngay từ câu đầu.</li>
 <li>Thực hành: luyện cười trước gương khi nói điện thoại; lên giọng nhẹ ở cuối câu để nghe thân thiện.</li></ul>
 <h4>2. Luôn nhẹ nhàng – kiểm soát cảm xúc</h4>
 ${IMG('kh02-10.jpg','KH02 – Luôn nhẹ nhàng')}
 <ul><li>Giữ giọng từ tốn, không tranh luận hoặc chen ngang khi khách nói; lắng nghe hết ý rồi mới trả lời.</li>
 <li>Khi khách bức xúc: hạ thấp âm lượng, nói chậm lại.</li></ul>
 ${SAY('Khi khách bức xúc','"Dạ em rất hiểu những điều anh/chị chia sẻ, em sẽ hỗ trợ hết mình ạ."')}
 <h4>3. Luôn thấu hiểu – lắng nghe chủ động, tư vấn đúng nhu cầu</h4>
 ${IMG('kh02-11.jpg','KH02 – Luôn thấu hiểu')}
 <ul><li>Đặt câu hỏi mở, xác nhận lại mong muốn: "Anh/chị mong muốn điều gì nhất ở lô hàng này ạ?"</li>
 <li>Chủ động lắng nghe, không ngắt lời, <b>ghi chú</b> điểm quan trọng.</li>
 <li>Sau khi khách chia sẻ, nhắc lại ý chính; thường xuyên hỏi "Em đã hiểu đúng ý anh/chị chưa ạ?"</li></ul>
 ${DIALOG('Nhắc lại ý chính',[['KH','Anh cần điều hòa cho dãy phòng trọ, rẻ thôi nhưng đừng hay hỏng, tháng sau lắp.'],['NV','Dạ em nhắc lại xem đúng ý anh chưa nhé: anh cần điều hòa cho phòng trọ, ưu tiên giá mềm nhưng bền, lắp tháng sau. Phòng khoảng bao nhiêu mét và mấy phòng ạ?']])}
 <h4>4. Luôn giúp đỡ – chủ động hỗ trợ, vượt mong đợi</h4>
 ${IMG('kh02-12.jpg','KH02 – Luôn giúp đỡ')}
 <ul><li>Chủ động hướng dẫn, gửi thêm thông tin, giải đáp thắc mắc kể cả ngoài phạm vi sản phẩm.</li>
 <li>Luôn hỏi: "Anh/chị còn cần em hỗ trợ gì thêm không ạ?"</li>
 <li>Sau cuộc gọi chủ động gửi Zalo: catalogue, ảnh sản phẩm, thông số, chương trình khuyến mãi.</li></ul>
 <h4>Vì sao 4 Xin – 4 Luôn quan trọng trong bán buôn</h4>
 ${IMG('kh02-13.jpg','KH02 – Hiệu quả và cam kết hành động')}
 <ol><li><b>Tạo khác biệt trong cạnh tranh</b> – giá và sản phẩm có thể giống đối thủ, nhưng thái độ khiến khách nhớ và ưu tiên bạn khi cần hợp tác lớn, đơn gấp, đàm phán lại điều khoản.</li>
 <li><b>Tăng tin tưởng khi có vấn đề</b> – chậm hàng, nhầm lẫn, khiếu nại chiết khấu… được xử lý trơn tru hơn.</li>
 <li><b>Mở rộng mạng lưới</b> – đối tác bán buôn thường giới thiệu cho nhau.</li>
 <li><b>Giảm rủi ro mất khách</b> – chỉ một lần giao tiếp kém, khách có lý do thử nhà cung cấp khác.</li>
 <li><b>Thương lượng hiệu quả hơn</b> – tôn trọng, thấu hiểu thì hai bên dễ nhượng bộ về giá, điều kiện giao.</li>
 <li><b>Giữ hình ảnh cá nhân và công ty</b> – mọi lời nói đều ảnh hưởng uy tín Việt Tuấn.</li></ol>
 <p><b>"4 Xin – 4 Luôn" không chỉ là phép lịch sự mà là "bảo hiểm" giữ khách trung thành.</b></p>
 ${TASK('Ghi âm 1 cuộc gọi nhập vai trên điện thoại, nghe lại và tự chấm: có cười không, có chen ngang không, có nhắc lại ý khách không, có hỏi "còn cần em hỗ trợ gì" không.')}
 ${KEEP(['Tươi cười · Nhẹ nhàng · Thấu hiểu · Giúp đỡ.','Khách bức xúc: hạ giọng, nói chậm, không tranh luận.','Kết thúc: "Anh/chị còn cần em hỗ trợ gì thêm không ạ?" + gửi Zalo tài liệu.'])}`,
 check:[
  ['Khi khách đang nói dài, NVBH nên?',['Chen ngang để tiết kiệm thời gian','Lắng nghe hết, ghi chú, rồi nhắc lại ý chính','Im lặng không phản hồi'],1,'Luôn thấu hiểu: không ngắt lời, nhắc lại ý chính.'],
  ['Câu hỏi kết thúc cuộc gọi theo "Luôn giúp đỡ"?',['"Anh/chị còn cần em hỗ trợ gì thêm không ạ?"','"Thế thôi anh nhé"','"Anh mua đi"'],0,'Sau đó gửi Zalo tài liệu hỗ trợ.']
 ]
},
{
 t:'Kịch bản cuộc gọi bán buôn 6 bước', time:'14:15–15:00',
 goal:['Gọi đại lý theo đúng 6 bước','Mỗi cuộc gọi kết thúc bằng đơn hàng hoặc hẹn cụ thể'],
 html:`
 <div class="steps">
  <div><b>Bước 1 – Chào, xin phép</b><span>Tên, công ty, xin 1–2 phút. (4 Xin)</span></div>
  <div><b>Bước 2 – Lý do gọi có giá trị</b><span>Khuyến mãi mới của hãng, mã sắp tăng giá/cắt mã, hàng mới về kho, chuẩn bị mùa, kết quả của điểm bán tốt lân cận. Không gọi chỉ để hỏi "anh có lấy gì không".</span></div>
  <div><b>Bước 3 – Hỏi tình hình</b><span>3 câu hỏi thị trường: bán hãng nào tốt, đang thiếu gì, hỗ trợ thì nhập bao nhiêu. Thêm: tồn kho mã nào, khách hay hỏi gì.</span></div>
  <div><b>Bước 4 – Đề xuất theo lô</b><span>1–2 mã đúng nhóm khách, số lượng cụ thể, nhắc ngưỡng giá buôn (20 triệu hoặc 3 sản phẩm cùng loại), thời gian giao 24–48 giờ.</span></div>
  <div><b>Bước 5 – Báo giá</b><span>Theo bảng giá và quy định báo giá của công ty, kèm khuyến mãi, điều kiện thanh toán. Không tự giảm ngoài chính sách.</span></div>
  <div><b>Bước 6 – Chốt hoặc hẹn</b><span>Chốt số lượng, ngày giao, địa chỉ. Chưa chốt: hẹn giờ gọi lại cụ thể, gửi Zalo tài liệu. Kết thúc bằng cảm ơn.</span></div>
 </div>
 <h4>Cuộc gọi mẫu hoàn chỉnh (đại lý bán buôn, đầu tháng 3)</h4>
 ${DIALOG('Bước 1–2',[['NV','Em chào anh Hùng ạ, em là Lan bên Nhà phân phối Hương Anh – Việt Tuấn. Anh có tiện nghe em 2 phút không ạ?'],['KH','Ừ, nói đi em.'],['NV','Dạ em cảm ơn anh. Còn khoảng 6 tuần nữa vào mùa nóng, bên em vừa về lô điều hòa Aufit và Daikin, hãng cũng đang có chương trình cho đại lý nhập trước mùa nên em báo anh sớm ạ.']])}
 ${DIALOG('Bước 3',[['NV','Năm ngoái tầm này bên anh lấy điều hòa 9 nghìn nhiều nhất. Năm nay khách bên anh hỏi hãng nào nhiều ạ?'],['KH','Daikin vẫn dễ bán, nhưng khách phòng trọ hỏi loại rẻ.'],['NV','Dạ, trong kho anh hiện còn bao nhiêu bộ 9 nghìn ạ?'],['KH','Còn tầm 5 bộ.']])}
 ${DIALOG('Bước 4–5',[['NV','Vậy em đề xuất anh 2 dòng: 20 bộ Daikin FTKB25 cho khách gia đình, và 20 bộ Aufit AFW09 cho khách phòng trọ – Aufit bên em độc quyền miền Bắc nên giá rất cạnh tranh. Lô này đủ điều kiện giá buôn, em gửi anh báo giá chi tiết theo bảng giá tháng này và chương trình của hãng ạ.']])}
 ${DIALOG('Bước 6',[['KH','Để anh xem đã.'],['NV','Dạ vâng. Anh đang cân nhắc ở điểm nào để em gửi thêm thông tin cho anh dễ quyết ạ?'],['KH','Aufit anh chưa bán bao giờ, sợ khách không biết.'],['NV','Dạ em hiểu. Tuần trước bên Minh Trí cách anh 3 km lấy 15 bộ Aufit, đã bán được 6 bộ. Em xin ảnh trưng bày bên đó gửi anh tham khảo. Hay anh thử 10 bộ Aufit trước, Daikin 20 bộ, em xếp xe giao thứ Năm này được không ạ?'],['KH','Ừ, vậy lấy thế đi.'],['NV','Dạ em cảm ơn anh. Em lên đơn 20 Daikin FTKB25, 10 Aufit AFW09, giao thứ Năm. Em gửi Zalo xác nhận đơn cho anh ngay ạ. Anh còn cần em hỗ trợ gì thêm không ạ?']])}
 <p class="note">Ví dụ "Minh Trí bán được 6 bộ" chỉ là minh họa – khi gọi thật chỉ dùng số liệu có thật.</p>
 <h4>Sau cuộc gọi (bắt buộc)</h4>
 <ul><li>Gửi Zalo xác nhận: mã, số lượng, giá, ngày giao, địa chỉ.</li>
 <li>Lên đơn trên Bravo (học ở Ngày 3).</li>
 <li>Ghi chú khách: 3 câu thị trường, hẹn gì, lần gọi tiếp theo.</li></ul>
 ${TASK('Theo cặp, gọi trọn 6 bước với tình huống người dạy phát. Đổi vai 3 lần. Mỗi cuộc không quá 5 phút.')}
 ${KEEP(['Chào → Lý do có giá trị → Hỏi tình hình → Đề xuất lô → Báo giá → Chốt/hẹn.','Sau cuộc gọi: Zalo xác nhận, lên đơn, ghi chú khách.'])}`,
 check:[
  ['Lý do gọi nào KHÔNG đạt yêu cầu bước 2?',['"Mã này sắp tăng giá"','"Anh có lấy gì không ạ?"','"Hàng mới về kho"'],1,'Gọi phải mang thông tin có lợi cho đại lý.'],
  ['Khách nói "để anh xem đã". Bước tiếp theo đúng?',['Cúp máy và chờ','Hỏi khách đang băn khoăn điểm nào','Giảm giá ngay'],1,'Tìm lý do thật rồi xử lý.']
 ]
},
{
 t:'Xử lý từ chối', time:'15:00–15:45',
 goal:['Dùng công thức L-C-H-T','Trả lời được 8 lời từ chối hay gặp của đại lý'],
 html:`
 <h4>Công thức L-C-H-T</h4>
 <div class="steps">
  <div><b>L – Lắng nghe hết</b><span>Không ngắt lời, không vội cãi.</span></div>
  <div><b>C – Chia sẻ</b><span>"Dạ em hiểu ạ" – ghi nhận cảm xúc của khách.</span></div>
  <div><b>H – Hỏi lại lý do thật</b><span>"Anh đang băn khoăn nhất ở điểm nào ạ?" Lời từ chối đầu tiên thường không phải lý do thật.</span></div>
  <div><b>T – Trả lời</b><span>Bằng lợi ích hoặc bằng chứng: chính sách, số liệu thật, ảnh trưng bày, đại lý lân cận.</span></div>
 </div>
 <h4>8 lời từ chối hay gặp</h4>
 <div class="tbl"><table><tr><th>Đại lý nói</th><th>Lý do thật thường là</th><th>Cách trả lời</th></tr>
 <tr><td>"Bên kia báo rẻ hơn"</td><td>Đang so giá, có khi so khác mã, khác điều kiện</td><td>"Anh cho em xin mã và điều kiện bên đó ạ." So cùng mã, cùng hàng chính hãng, giao 24–48 giờ, công nợ, bảo hành. Nhắc giá buôn và chiết khấu lũy tiến. <b>Không chê đối thủ, không tự hạ giá.</b></td></tr>
 <tr><td>"Kho còn hàng, chưa cần nhập"</td><td>Lo đọng vốn</td><td>Hỏi mã nào đang tồn, mã nào sắp hết. Gợi ý lấy ít mã đang thiếu; nhắc giao thần tốc nên không cần ôm hàng; hẹn gọi trước mùa.</td></tr>
 <tr><td>"Cho anh công nợ thì anh lấy"</td><td>Thiếu vốn xoay vòng</td><td>Không hứa. "Em báo trưởng phòng xét hạn mức cho anh và gọi lại trong hôm nay ạ."</td></tr>
 <tr><td>"Lần trước giao chậm"</td><td>Mất niềm tin</td><td>Xin lỗi thật lòng, không đổ lỗi. Cam kết theo dõi lệnh xuất hàng, báo giờ xe chính xác.</td></tr>
 <tr><td>"Hãng khác khuyến mãi mạnh hơn"</td><td>So sánh lợi nhuận</td><td>Hỏi mặt hàng cụ thể, đề xuất mã tương đương trong 9 hãng (Aufit giá cạnh tranh), gửi chương trình hiện hành qua Zalo.</td></tr>
 <tr><td>"Anh bận, gửi Zalo đi"</td><td>Chưa thấy lý do để nghe</td><td>"Dạ em gửi ngay. Em xin phép gọi lại lúc 4 giờ chiều 2 phút được không ạ?" Gửi đúng, gọi đúng giờ.</td></tr>
 <tr><td>"Hãng này khách không biết"</td><td>Sợ khó bán</td><td>Đưa bằng chứng: điểm bán tốt lân cận, ảnh trưng bày, đề xuất lấy thử số lượng nhỏ.</td></tr>
 <tr><td>"Để anh hỏi vợ/chồng/sếp"</td><td>Người quyết định là người khác</td><td>"Dạ đúng rồi ạ. Em gửi anh báo giá và ảnh để anh chị cùng xem, tối mai em gọi lại được không ạ?"</td></tr></table></div>
 ${DIALOG('Ví dụ L-C-H-T',[['KH','Bên kia báo rẻ hơn em 150 nghìn một bộ.'],['NV','Dạ em hiểu ạ, giá chênh thế thì anh cân nhắc là đúng rồi. Anh cho em xin mã và điều kiện bên đó để em so cho anh chính xác ạ?'],['KH','Cũng Daikin 9 nghìn thôi, nhưng họ thu tiền ngay.'],['NV','Dạ, bên em lô này anh vẫn được giá buôn, xe giao tận cửa hàng anh trong 24 giờ và bảo hành chính hãng đầy đủ chứng từ. Em gửi anh báo giá chi tiết, anh so cả điều kiện thanh toán và giao hàng giúp em nhé.']])}
 ${TASK('"Bắn từ chối": người dạy đọc liên tục 8 lời từ chối theo thứ tự ngẫu nhiên, học viên trả lời trong 10 giây theo L-C-H-T. Cả lớp chấm đạt/chưa đạt.')}
 ${KEEP(['Lắng nghe → "Dạ em hiểu" → Hỏi lý do thật → Trả lời bằng lợi ích/bằng chứng.','Không chê đối thủ, không tự hạ giá, không hứa công nợ.'])}`,
 check:[
  ['Chữ "H" trong L-C-H-T là gì?',['Hứa giảm giá','Hỏi lại lý do thật','Hẹn gọi lại'],1,'Lời từ chối đầu tiên thường không phải lý do thật.'],
  ['Đại lý: "Hãng Aufit khách không biết". Trả lời tốt nhất?',['"Hãng này tốt lắm anh tin em"','Đưa bằng chứng từ điểm bán lân cận, gợi ý lấy thử số lượng nhỏ','"Vậy anh lấy Daikin"'],1,'Trả lời bằng bằng chứng thật.']
 ]
},
{
 t:'Chốt đơn theo lô và bán thêm', time:'15:45–16:15',
 goal:['Nhận ra dấu hiệu đại lý sắp nhập','Dùng 4 cách chốt và gợi ý bán thêm đúng lúc'],
 html:`
 <h4>Dấu hiệu đại lý sắp nhập</h4>
 <ul><li>Hỏi khi nào giao, giao vào đâu.</li><li>Hỏi công nợ, hình thức thanh toán.</li><li>Hỏi chiết khấu khi lấy thêm số lượng.</li><li>Hỏi kho còn bao nhiêu, có đủ màu/mã không.</li></ul>
 <p><b>Gặp dấu hiệu là chốt ngay</b> – đừng tiếp tục giới thiệu thêm sản phẩm.</p>
 <h4>4 cách chốt</h4>
 <div class="tbl"><table><tr><th>Cách</th><th>Câu mẫu</th><th>Dùng khi</th></tr>
 <tr><td><b>Chốt lựa chọn</b></td><td>"Anh lấy 10 hay 20 bộ để được giá tốt hơn ạ?"</td><td>Khách đã muốn mua, đang lưỡng lự số lượng</td></tr>
 <tr><td><b>Chốt giả định</b></td><td>"Em lên đơn và xếp xe sáng thứ Năm cho anh nhé?"</td><td>Khách đã đồng ý về mã và giá</td></tr>
 <tr><td><b>Chốt thời hạn</b></td><td>"Chương trình của hãng áp dụng đến hết tháng ạ."</td><td>Có khuyến mãi thật, có hạn thật</td></tr>
 <tr><td><b>Chốt giữ hàng</b></td><td>"Mã này kho còn ít, em giữ cho anh 5 bộ nhé?"</td><td>Đã kiểm tra tồn kho với thủ kho</td></tr></table></div>
 <p class="note">Chỉ nói "sắp hết hàng", "sắp hết khuyến mãi" khi đúng sự thật. Đại lý bán buôn sẽ kiểm chứng.</p>
 <h4>Bán thêm (sau khi đã chốt)</h4>
 <ul><li>Lấy điều hòa → gợi ý quạt DC, máy lọc không khí.</li>
 <li>Lấy tủ lạnh, máy giặt → gợi ý lọc nước RO, cây nước, máy rửa bát.</li>
 <li>Mùa nồm → máy hút ẩm, máy sấy.</li>
 <li>Quán, cửa hàng → tủ mát Sanaky kính Low-E, tủ đông.</li></ul>
 ${SAY('Bán thêm nhẹ nhàng','"Dạ đơn điều hòa em lên rồi ạ. Tiện xe giao, anh có muốn lấy thêm 5 quạt DC Panasonic không ạ, đầu hè khách hay mua kèm lắm."')}
 <h4>Xác nhận đơn qua Zalo (mẫu)</h4>
 <div class="say" style="font-style:normal">Dạ em xác nhận đơn của anh Hùng:<br>– 20 bộ Daikin FTKB25ZVMV<br>– 10 bộ Aufit AFW09FHA4DI-3VN<br>Giá: theo báo giá em gửi lúc 14:30 · Giao: thứ Năm, tại cửa hàng anh · Thanh toán: chuyển khoản<br>Anh kiểm tra giúp em, đúng thì anh trả lời "OK" để em lên đơn ạ. Em cảm ơn anh!</div>
 ${KEEP(['Dấu hiệu mua → chốt ngay.','Lựa chọn · Giả định · Thời hạn (thật) · Giữ hàng (đã hỏi kho).','Chốt xong mới gợi ý bán thêm 1 sản phẩm, không ép. Luôn xác nhận đơn qua Zalo.'])}`,
 check:[
  ['Đại lý hỏi "Thế lấy 20 bộ thì chiết khấu thế nào?". Đây là?',['Dấu hiệu sắp nhập – nên chốt','Đại lý chưa quan tâm','Nên giới thiệu thêm hãng khác'],0,'Hỏi chiết khấu khi lấy thêm là dấu hiệu mua.'],
  ['Trước khi nói "em giữ cho anh 5 bộ" cần làm gì?',['Không cần gì','Kiểm tra tồn kho với thủ kho','Hỏi kế toán'],1,'Không hứa giữ hàng khi chưa kiểm tra kho.']
 ]
},
{
 t:'Nhập vai và chấm điểm', time:'16:15–17:30',
 goal:['Gọi trọn một cuộc nhập vai đạt từ 70/100','Nhận góp ý và gọi lại phần yếu'],
 html:`
 <h4>4 tình huống (bốc thăm)</h4>
 <ol><li><b>Đại lý bán buôn – anh Hùng, Hải Dương:</b> đầu tháng 3, kho còn ít điều hòa, nói bên khác báo rẻ hơn 100.000 đồng/bộ. Mục tiêu: chốt lô điều hòa trước mùa.</li>
 <li><b>Đại lý bán lẻ lớn – chị Mai, Bắc Ninh:</b> muốn làm góc trưng bày tủ lạnh Multi Door nhưng lo hàng mẫu không bán được. Mục tiêu: đề xuất trưng bày + POSM, chốt 3 mẫu.</li>
 <li><b>Đại lý bán lẻ vừa – anh Tâm, Hưng Yên:</b> 2 tháng không lấy hàng, nói "kho còn hàng". Mục tiêu: tìm lý do thật, chốt combo nhỏ.</li>
 <li><b>Thợ – anh Tùng, thợ điện lạnh:</b> cần gấp 2 bộ điều hòa 2 chiều 12.000 BTU cho công trình ngày mai, hỏi giá liên tục. Mục tiêu: báo đúng mã, xếp giao nhanh.</li></ol>
 <p>Người dạy đóng vai đại lý, đưa ra ít nhất 2 lời từ chối mỗi tình huống. Mỗi cuộc tối đa 6 phút.</p>
 <h4>Phiếu chấm cuộc gọi (100 điểm)</h4>
 <div class="tbl"><table><tr><th>Tiêu chí</th><th>Điểm</th></tr>
 <tr><td>4 Xin: chào, xin phép, cảm ơn, xin lỗi khi cần</td><td>15</td></tr>
 <tr><td>Lý do gọi có giá trị với đại lý</td><td>10</td></tr>
 <tr><td>Hỏi tình hình: bán chạy, tồn kho, đang thiếu</td><td>20</td></tr>
 <tr><td>Đề xuất đúng nhóm khách, đúng mã, số lượng cụ thể</td><td>15</td></tr>
 <tr><td>Báo giá đúng chính sách, nêu khuyến mãi và giao hàng</td><td>10</td></tr>
 <tr><td>Xử lý từ chối theo L-C-H-T</td><td>15</td></tr>
 <tr><td>Chốt đơn hoặc hẹn bước tiếp theo cụ thể</td><td>10</td></tr>
 <tr><td>4 Luôn: giọng tươi, nhẹ nhàng, không chen ngang</td><td>5</td></tr>
 <tr><th>Tổng</th><th>100</th></tr></table></div>
 <p><b>Đạt ≥ 70.</b> Dưới 70: người dạy chỉ ra phần yếu nhất, học viên gọi lại phần đó đến khi đạt.</p>
 <h4>Cách góp ý (cho người dạy)</h4>
 <ul><li>Khen 1 điểm làm tốt trước.</li><li>Chỉ ra 1 điểm cần sửa nhất, kèm câu nói cụ thể nên dùng.</li><li>Cho gọi lại ngay đoạn đó.</li></ul>
 ${KEEP(['Đạt từ 70/100 mới qua Ngày 2.','Phần nặng điểm nhất: hỏi tình hình (20), 4 Xin (15), đề xuất đúng (15), xử lý từ chối (15).'])}`,
 check:[['Tiêu chí nào chiếm nhiều điểm nhất trong phiếu chấm?',['Báo giá','Hỏi tình hình: bán chạy, tồn kho, đang thiếu','Giọng nói'],1,'20 điểm – hiểu đại lý trước rồi mới bán.']]
},
{
 t:'Ôn tập và kiểm tra Ngày 2', time:'17:30–18:00',
 goal:['Ôn toàn bộ Ngày 2','Làm bài kiểm tra Ngày 2 đạt từ 80%'],
 html:`
 <h4>10 điều phải nhớ sau Ngày 2</h4>
 <ol><li>Không bán giống nhau cho mọi loại khách.</li>
 <li>Bán buôn: lô lớn, giá – chiết khấu – công nợ; mục tiêu đầu mối xả hàng tồn.</li>
 <li>Lẻ lớn: POSM, trưng bày; gương mặt thương hiệu khu vực.</li>
 <li>Lẻ vừa: báo giá gọn, combo, nhắc định kỳ; khách đều tay.</li>
 <li>Thợ: nhanh, rõ, dứt điểm; giữ thợ = giữ khách cuối.</li>
 <li>3 câu thị trường: bán hãng nào tốt · đang thiếu gì · hỗ trợ thì nhập bao nhiêu.</li>
 <li>Điểm mạnh lan tỏa: điểm bán tốt → lân cận → cụm 3–4 đại lý.</li>
 <li>4 Xin: chào, xin phép, cảm ơn, xin lỗi. 4 Luôn: tươi cười, nhẹ nhàng, thấu hiểu, giúp đỡ.</li>
 <li>Gọi 6 bước: chào → lý do có giá trị → hỏi tình hình → đề xuất lô → báo giá → chốt/hẹn.</li>
 <li>Từ chối: L-C-H-T. Không chê đối thủ, không tự hạ giá, không hứa công nợ.</li></ol>
 <p><b>Bài tập về nhà:</b> viết kịch bản gọi cho 3 đại lý thật trong danh sách được giao (1 bán buôn, 1 lẻ, 1 thợ). Ngày mai sẽ gọi thật.</p>
 <p><button class="btn" data-go-quiz="d2">Làm bài kiểm tra Ngày 2</button></p>`,
 check:[]
}
];
