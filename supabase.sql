-- Chạy 1 lần trong Supabase → SQL Editor
create table if not exists public.chat (
  id   text primary key check (char_length(id) <= 40),
  name text not null check (char_length(name) between 1 and 40),
  cls  text check (char_length(cls) <= 24),
  text text not null check (char_length(text) between 1 and 200),
  t    bigint not null
);
create index if not exists chat_t_idx on public.chat (t desc);
alter table public.chat enable row level security;
drop policy if exists "moi nguoi doc chat" on public.chat;
create policy "moi nguoi doc chat" on public.chat for select to anon, authenticated using (true);
drop policy if exists "moi nguoi gui chat" on public.chat;
create policy "moi nguoi gui chat" on public.chat for insert to anon, authenticated with check (true);
-- Cho phép tin nhắn mới đẩy realtime tới mọi người
alter publication supabase_realtime add table public.chat;
