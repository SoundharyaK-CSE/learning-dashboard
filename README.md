md# 🚀 Next-Gen Learning Dashboard

A futuristic student learning dashboard built with Next.js, Supabase, Framer Motion, and Tailwind CSS.

## 🔗 Live Demo
[View Live on Vercel](https://learning-dashboard-eosin-ten.vercel.app)
## 🛠️ Tech Stack
- **Next.js 14** (App Router)
- **Supabase** (PostgreSQL database)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **TypeScript** (type safety)

## 🏗️ Architectural Choices

### Server vs Client Components
- `app/page.tsx` — Server Component, fetches courses from Supabase
- `BentoGrid.tsx` — Client Component, handles stagger animations
- `Sidebar.tsx` — Client Component, handles navigation state
- `CourseTile.tsx` — Client Component, handles hover animations
- `HeroTile.tsx` — Client Component, handles entrance animations
- `ActivityTile.tsx` — Client Component, renders activity graph

### Why Server Components for Data Fetching?
Fetching data in Server Components means the database query runs on the server before the page is sent to the browser. This is faster and more secure since API keys never reach the client.

### Suspense & Loading States
Used React `<Suspense>` with skeleton loaders while Supabase data is being fetched. Skeleton cards pulse using Tailwind's `animate-pulse`.

## 📁 Project Structure
app/

├── components/

│   ├── sidebar/

│   │   └── Sidebar.tsx

│   ├── tiles/

│   │   ├── HeroTile.tsx

│   │   ├── CourseTile.tsx

│   │   └── ActivityTile.tsx

│   ├── ui/

│   │   ├── ProgressBar.tsx

│   │   └── SkeletonCard.tsx

│   └── BentoGrid.tsx

├── lib/

│   └── supabase.ts

├── types/

│   └── index.ts

├── layout.tsx

└── page.tsx

## ✨ Animations
- **Staggered entrance** — tiles appear one by one on page load
- **Spring physics hover** — cards scale up with natural spring feel
- **Progress bar animation** — animates from 0% to actual value on load
- **Sidebar layoutId** — active indicator slides smoothly between items

## 📱 Responsive Design
- **Desktop** — Full sidebar + 2 column bento grid
- **Tablet** — Icons only sidebar + 2 column grid
- **Mobile** — Bottom navigation + single column stack

## 🗄️ Database Setup
Run this SQL in Supabase SQL Editor:
```sql
create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null default 0,
  icon_name text not null,
  created_at timestamp with time zone default now()
);

insert into courses (title, progress, icon_name) values
  ('Advanced React Patterns', 75, 'Layers'),
  ('TypeScript Mastery', 45, 'Code2'),
  ('Next.js App Router', 90, 'Zap'),
  ('Tailwind CSS Pro', 60, 'Paintbrush');
```

## 🔐 Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 💡 Challenges Faced
- **Tailwind CSS v4** required `@tailwindcss/postcss` instead of the standard PostCSS plugin
- **Hydration mismatch** with `Math.random()` in ActivityTile — fixed by using static data
- **Server/Client split** — carefully separating data fetching (server) from animations (client)