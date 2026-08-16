---
title: Calendar PWA
summary: A local-first calendar PWA in React and TypeScript with custom client routing, timezone-aware date logic, and in-browser SQLite database via WASM and OPFS.
role: Full Stack & Web Engineering
date: 2025-05-01
tags: [React, TypeScript, SQLite WASM, OPFS, PWA, Local-first]
url: https://calendar-ruddy-pi.vercel.app/
repo: https://github.com/yanshuy/calendar
featured: true
draft: false
---

A high-performance, privacy-respecting local-first calendar application built with React and TypeScript. All user data stays on device, persisted inside an embedded SQLite database running directly in the browser.

### Key Highlights

- **In-Browser SQLite via WASM + OPFS**: Integrated official SQLite WebAssembly builds paired with the Origin Private File System (OPFS) for persistent, high-throughput database storage directly in the client sandbox.
- **Local-First CRUD & Offline Availability**: Zero latency event updates and queries executed locally through SQL transactions with offline support via service workers and Progressive Web App (PWA) manifest standards.
- **Custom Client-Side Router**: Built lightweight custom routing tailored to calendar navigation across monthly, weekly, and daily timeline views without heavy third-party routing overhead.
- **Timezone-Aware Date Math**: Engineered timezone conversion logic and recurrence rule computations utilizing `date-fns` for accurate schedule rendering across global time offsets.
- **ICS Calendar Import & Export**: Implemented parsing and serialization for iCalendar (`.ics`) format specifications to allow seamless data portability across Apple Calendar, Google Calendar, and Outlook.
