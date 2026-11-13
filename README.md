# Về thăm trường Nguyễn Siêu – Đê La Thành 1999–2002

Trang tĩnh (HTML + Three.js), không cần build. Phần chơi nhiều người dùng Supabase (miễn phí).

Các file trong thư mục:
- `index.html`: toàn bộ game
- `img/`: ảnh kỷ niệm
- `config.js`: nơi dán địa chỉ và khóa Supabase
- `supabase.sql`: lệnh tạo bảng chat
- `vercel.json`: cấu hình nhỏ cho Vercel

## PHẦN A. SUPABASE (làm trước, khoảng 10 phút)

1. Vào https://supabase.com, bấm **Start your project**, đăng nhập bằng GitHub hoặc email.
2. Bấm **New project**:
   - Organization: chọn tổ chức mặc định (tạo mới nếu được hỏi, chọn gói Free).
   - Project name: `nguyen-sieu`
   - Database password: bấm Generate rồi lưu lại ở đâu đó (game không dùng đến, nhưng nên giữ).
   - Region: **Southeast Asia (Singapore)**, gần Việt Nam nhất.
   - Bấm **Create new project** và đợi 1–2 phút cho dự án khởi tạo xong.
3. Tạo bảng chat:
   - Menu trái chọn **SQL Editor**, bấm **New query**.
   - Mở file `supabase.sql`, copy toàn bộ nội dung, dán vào ô soạn thảo.
   - Bấm **Run** (hoặc Ctrl+Enter). Thấy "Success. No rows returned" là được.
   - Kiểm tra: menu **Table Editor** phải có bảng `chat`.
4. Lấy địa chỉ và khóa:
   - Bấm nút **Connect** ở đầu trang dự án, hoặc vào **Project Settings → API Keys** (trước đây là "API").
   - Copy **Project URL**, có dạng `https://xxxxxxxx.supabase.co` (nằm ở Project Settings → Data API nếu không thấy ngay).
   - Copy **Publishable key** (`sb_publishable_...`) hoặc khóa **anon public** (`eyJ...`), loại nào cũng dùng được.
   - KHÔNG dùng khóa **secret** hay **service_role**, vì khóa đó sẽ lộ ra web.
5. Mở file `config.js` bằng Notepad, dán vào giữa hai dấu ngoặc kép:
   ```js
   window.NS_CONFIG = {
     supabaseUrl: "https://xxxxxxxx.supabase.co",
     supabaseAnonKey: "sb_publishable_xxxxxxxx"
   };
   ```
   Lưu file lại.
6. Nếu sau khi đăng web mà mọi người không thấy nhau: vào **Realtime → Settings**, tắt tùy chọn **Private channels only** (nếu có), rồi bấm Save.

## PHẦN B. ĐƯA CODE LÊN GITHUB (không cần dùng dòng lệnh)

1. Vào https://github.com, đăng nhập hoặc tạo tài khoản.
2. Bấm dấu **+** góc trên phải, chọn **New repository**:
   - Repository name: `nguyen-sieu`
   - Chọn Public hoặc Private đều được.
   - Bấm **Create repository**.
3. Trong trang repo vừa tạo, bấm link **uploading an existing file**.
4. Giải nén file zip trên máy. Kéo TẤT CẢ file và thư mục bên trong (index.html, config.js, img, ...) thả vào trang GitHub.
   - Lưu ý: kéo các file BÊN TRONG, không kéo cả thư mục cha. `index.html` phải nằm ngay ở gốc repo.
5. Bấm **Commit changes**.

## PHẦN C. VERCEL

1. Vào https://vercel.com, bấm **Sign Up** và chọn **Continue with GitHub** (gói Hobby miễn phí).
2. Bấm **Add New… → Project**.
3. Ở mục Import Git Repository, tìm repo `nguyen-sieu` và bấm **Import**.
   - Nếu không thấy repo: bấm **Adjust GitHub App Permissions** rồi cấp quyền cho repo đó.
4. Màn hình cấu hình:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command và Output Directory: để trống.
5. Bấm **Deploy**, đợi khoảng 30 giây. Vercel sẽ cho bạn link dạng `https://nguyen-sieu.vercel.app`.
6. (Tùy chọn) Đổi tên miền: vào Project → **Settings → Domains**, gõ tên khác, ví dụ `nguyensieu-9902.vercel.app`, hoặc gắn tên miền riêng của bạn.

## Cập nhật sau này
- Sửa file trực tiếp trên GitHub (bấm vào file, chọn biểu tượng bút chì, rồi Commit), hoặc upload đè file mới.
- Vercel tự đăng lại sau mỗi lần commit, khoảng 30 giây.
- Thêm ảnh trường: upload vào thư mục `img/`.

## Kiểm tra nhanh
- Mở link trên máy tính và điện thoại cùng lúc. Ô "ĐANG Ở SÂN" phải hiện số 2, và đi tới nhau thì thấy nhân vật.
- Gửi chat từ một máy: máy kia thấy ngay. Bảng `chat` trong Supabase có thêm dòng mới.

## Xử lý sự cố
- **Chỉ đi một mình, ô "ĐANG Ở SÂN" luôn là 1:** kiểm tra `config.js` đã điền đúng và đã commit chưa. Bấm F12, mở tab Console xem có lỗi màu đỏ không. Xem lại bước A6.
- **Chat gửi được nhưng không lưu:** chạy lại `supabase.sql`.
- **Bị spam:** vào Table Editor → `chat`, chọn các dòng rồi Delete.
- **Dự án Supabase gói Free bị tạm dừng** sau 7 ngày không có ai dùng: vào dashboard bấm **Restore**.
