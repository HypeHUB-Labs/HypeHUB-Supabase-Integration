> **`HypeHUB-supabase-integration`**

This repo focuses on handling Supabase as the backend for authentication, user data, points system, and task tracking in the HypeHUB ecosystem.

---

````markdown
# 🔌 HypeHUB Supabase Integration

> Backend integration for HypeHUB using [Supabase](https://supabase.com/) — enabling Web3 + Web2 hybrid auth, user storage, points ledger, and task tracking in a fully serverless & scalable stack.

---

## 🌐 What is HypeHUB?

**HypeHUB** is a Web3 SocialFi platform that rewards users for engaging across major social networks.  
Follow, Like, Subscribe, or Join → Earn points → Spend points to grow your own audience.

Built on Ethereum and powered by the $HPE token.

This repo handles the backend infrastructure via Supabase.

---

## ⚙️ Features Supported via Supabase

### 🔐 Auth
- Email/password auth via Supabase
- OAuth integration (Twitter, Discord, etc.)
- Wallet address + session binding
- JWT + RLS for secure access

### 🧠 User Data
- Profiles with wallet/email binding
- Activity history logs
- KYC-ready structure (optional)

### 🎯 Task System
- Add/Edit/Delete social tasks
- Task types: Twitter, YouTube, Instagram, Discord, Telegram, Reddit
- Rewards per task (point value)
- Task engagement tracking (completed by X user)

### 🪙 Points Ledger
- Track earned/spent points
- Leaderboards / balances
- Token sync-ready (off-chain + on-chain hybrid)
- Internal security rules to prevent double-claims

---

## 🧱 Supabase Schema Overview

### Tables

- `users`  
  Stores basic user info, wallet, email, join date

- `tasks`  
  Contains task metadata: type, link, reward, owner_id

- `task_claims`  
  Tracks which user completed which task

- `points_ledger`  
  Tracks points earned/spent by each user

- `notifications`  
  Real-time updates for task events, balances

---

## 🔐 Supabase RLS (Row-Level Security)

Enabled for:
- `users`: users can only read/write their own row  
- `task_claims`: users cannot double-submit  
- `points_ledger`: protected insert triggers  

> All access is session-bound and scoped to the authenticated user.

---

## 📦 Tech Stack

- Supabase (Postgres, Auth, Realtime, Storage)
- Node.js (or Next.js) API routes for extended logic
- Wallet + Email hybrid auth (connected via app frontend)
- Ethereum smart contract interaction via ethers.js (optional sync)

---

## 🚀 Getting Started (Local)

```bash
git clone https://github.com/HypeHUB-Labs/HypeHUB-supabase-integration.git
cd HypeHUB-supabase-integration
````

1. Create a Supabase project
2. Add `.env.local` file:

```
SUPABASE_URL=https://<your-project>.supabase.co
SUPABASE_ANON_KEY=your_public_key
SUPABASE_SERVICE_ROLE=your_secret_key
```

3. Run local server (if using backend logic):

```bash
npm install
npm run dev
```

4. Import `schema.sql` from `/db` folder to create tables.

---

## 📄 License

MIT © 2025 HypeHUB Labs

---

## 🔗 Links

* 🌐 Website: [https://hypehub.social](https://hypehub.social)
* 🌐 Main App: [https://app.hypehub.social](https://app.hypehub.social)
* 📖 Docs: [https://hypehub-documentation.gitbook.io](https://hypehub-documentation.gitbook.io)
* 🔗 Supabase: [https://supabase.com](https://supabase.com)
* 🧠 HypeHUB Core Repo: [https://github.com/HypeHUB-Labs](https://github.com/HypeHUB-Labs)

