# SaaS Marketplace MVP for Teachers

A marketplace for teachers to sell lesson plans and resources. Built with Next.js, MUI, Prisma, and NextAuth.js.

## Features
- Teacher: register/login, upload lesson plans, manage sales
- Buyer: search/filter, view details, purchase & download
- Admin: approve/reject listings, manage users, track 10% commission

## Tech Stack
- Next.js (App Router, TypeScript)
- MUI (Material UI)
- Prisma ORM + SQLite
- NextAuth.js (Credentials)

## Setup
```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

## Pages
- Homepage
- Login/Register
- Teacher Dashboard
- Lesson Details
- Checkout
- Admin Dashboard

## Design
- Responsive, Poppins font
- Colors: #6D9773 (primary), #FFBA00 (accent)
