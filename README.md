This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Overview

This project is a messaging interface built with React and Next.js 14 (App Router). It demonstrates handling dynamic message histories between users and an AI, including real-time message addition, skeleton loading, and date-based grouping.

## Features

User and AI messages with visual distinction.

Input field allowing users to send new messages.

Skeleton loading for smooth UX while fetching messages.

Grouped messages by date (Today, Yesterday, This Week, and earlier dates).

Responsive design for mobile, tablet, and desktop.

Keyboard support: send message by pressing Enter.

TypeScript for type safety and maintainable code.

## Tech Stack

Frontend: React, Next.js 14 (App Router), TypeScript, Tailwind CSS

API: Next.js API route acting as a proxy for fetching messages

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
