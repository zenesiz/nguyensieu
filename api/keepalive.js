// Vercel Cron gọi hằng ngày để Supabase (gói miễn phí) không tự tạm dừng sau 7 ngày không hoạt động.
const URL = 'https://conuowirffpxtbthcvpl.supabase.co/rest/v1/chat?select=id&limit=1';
const KEY = 'sb_publishable_zomLzMGVHNHqfl-fNbNAoA_s8CSuY2w'; // khóa công khai, giống trong config.js
export default async function handler(req, res) {
  try {
    const r = await fetch(URL, { headers: { apikey: KEY, Authorization: 'Bearer ' + KEY } });
    res.status(200).json({ ok: r.ok, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
