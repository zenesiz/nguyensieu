// Cấu hình Supabase (khóa publishable được phép để công khai trên web).
window.NS_CONFIG = {
  supabaseUrl: "https://conuowirffpxtbthcvpl.supabase.co",
  supabaseAnonKey: "sb_publishable_zomLzMGVHNHqfl-fNbNAoA_s8CSuY2w",

  // Nhạc nền: phát lần lượt và lặp lại. Mỗi bài là một trong hai dạng:
  //   - video YouTube: { yt: "mã video", title: "Tên bài" }   (mã là phần sau youtu.be/ hoặc watch?v=)
  //   - file mp3 trong thư mục music/: { src: "music/ten-bai.mp3", title: "Tên bài" }
  music: [
    { src: "music/bai-ca-truong-nguyen-sieu.mp3", title: "Bài ca Trường Nguyễn Siêu" },
  ]
};
