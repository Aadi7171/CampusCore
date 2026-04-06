# CampusCore

> A full-stack campus management platform built with Next.js — centralising student records, timetables, announcements, and faculty workflows into a single, fast web app.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## What it does

CampusCore replaces fragmented college admin tools with a unified dashboard. Key modules:

- **Student portal** — view timetable, attendance, results, and announcements
- **Faculty panel** — mark attendance, upload grades, post notices
- **Admin dashboard** — manage users, departments, and semester data
- **Real-time notices** — push announcements to specific classes or the entire campus

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, React, Tailwind CSS |
| Backend | Next.js API Routes |
| Styling | CSS Modules + Tailwind |
| Tooling | ESLint, Prettier |

---

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/Aadi7171/CampusCore.git
cd CampusCore

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project structure

```
CampusCore/
├── app/               # Next.js App Router pages
├── src/app/           # Shared app logic
├── lib/               # Utility functions & helpers
├── public/            # Static assets
└── README.md
```

---

## Roadmap

- [ ] Authentication (NextAuth.js)
- [ ] Database integration (PostgreSQL / Supabase)
- [ ] Mobile-responsive redesign
- [ ] Push notifications for announcements

---

## License

MIT — see [LICENSE](LICENSE)


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
