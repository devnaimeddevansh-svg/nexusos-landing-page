# NexusOS Pre-Registration Landing Page

A vibrant anime-style pre-registration / waitlist landing page for **NexusOS** — the AI Operating System.

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Supabase.

## Features

- Bold anime aesthetic with neon gradients and dynamic animations
- Animated in-browser product demo (no video files)
- Real-time registration and visit counters powered by Supabase
- Founding member offer tracking (first 500 get Pro free for 1 month)
- Email validation with duplicate signup handling
- Fully responsive design

## Getting Started

```bash
npm install
cp .env.example .env.local
# Fill in your Supabase credentials in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See `.env.example` for required variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Database Setup

Run the SQL in `supabase/schema.sql` in your Supabase SQL Editor.

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in Vercel
3. Add the environment variables
4. Deploy

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
