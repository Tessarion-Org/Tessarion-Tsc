![Tessarion-Tsc Banner](./assets/tessarion-tsc-banner.png)

# Tessarion-Tsc

**Secure. Scalable. Intelligent Investments.**  
A modern investment platform built with **Next.js**, **TailwindCSS**, and **NextAuth**, featuring:

- Dark mode interface with smooth transitions
- Authentication via **Google**, **GitHub**, and trial credentials
- Glowing UI elements in dark mode for a high-tech feel
- Secure dashboard with charts, portfolio tracking, and transactions view
- Role-based access (Admin / User)
- API endpoints for positions and transactions
- Ready for database integration (PostgreSQL + Prisma or Supabase)

---

## 🚀 Features
- **Dark Mode**: Automatically adapts with smooth theme transitions.
- **Authentication**: Social logins (Google, GitHub) + trial credentials for demo.
- **Role-Based Access**: Admin and user routes protected via middleware.
- **Dashboard**: Portfolio charts, transaction history, and quick stats.
- **API-Ready**: Positions and transactions endpoints ready for live data.
- **Responsive UI**: Works on desktop, tablet, and mobile.

---

## 🛠 Tech Stack
- [Next.js](https://nextjs.org/) – React framework
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [NextAuth](https://next-auth.js.org/) – Authentication
- [Recharts](https://recharts.org/) – Charting library
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/Tessarion-Tsc.git

# 2. Enter the project folder
cd Tessarion-Tsc

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env.local
# Fill in values for Google & GitHub auth keys in .env.local

# 5. Run the development server
npm run dev
