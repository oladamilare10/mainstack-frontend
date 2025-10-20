# Mainstack Frontend Take-Home Assessment

A modern revenue dashboard built with Next.js, TypeScript, and Chakra UI.

## 🌐 Live Demo

**Production URL:** https://mainstack-oey2ep02j-oladamilare10s-projects.vercel.app

**GitHub Repository:** https://github.com/oladamilare10/mainstack-frontend

## 📋 Project Overview

This project is a full-featured revenue dashboard application that displays:
- Available balance with withdraw functionality
- Revenue chart with visual data representation
- Transaction list with filtering capabilities
- User profile and statistics
- Responsive design for mobile, tablet, and desktop

## 🚀 Tech Stack

- **Framework:** Next.js 13.4.19 (Pages Router)
- **Language:** TypeScript 5.0.4
- **UI Library:** Chakra UI 2.8.1
- **Data Fetching:** SWR 2.2.4
- **Icons:** react-icons 5.5.0
- **Testing:** Jest 29.5.0 + React Testing Library 14.0.0
- **Code Quality:** ESLint + Prettier
- **CI/CD:** GitHub Actions

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/oladamilare10/mainstack-frontend.git
cd mainstack-frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run typecheck` - Run TypeScript type checking

## ✨ Features

### Core Functionality
- ✅ Real-time data fetching from Mainstack API
- ✅ Interactive revenue chart visualization
- ✅ Transaction list with status indicators
- ✅ Advanced filtering (date range, transaction type, status)
- ✅ User profile with dropdown menu
- ✅ Apps navigation menu
- ✅ Responsive design (mobile-first)

### UI/UX
- ✅ Pixel-perfect implementation matching Figma design
- ✅ Smooth animations and transitions
- ✅ Loading states and error handling
- ✅ Accessible components (ARIA labels)
- ✅ Mobile-optimized navigation

### Code Quality
- ✅ TypeScript strict mode
- ✅ Component unit tests
- ✅ ESLint + Prettier configuration
- ✅ Continuous Integration (GitHub Actions)

## 🏗️ Project Structure

```
mainstack/
├── src/
│   ├── components/          # React components
│   │   ├── layout/         # Layout components (AppShell)
│   │   ├── WalletCard.tsx  # Balance display
│   │   ├── RevenueChart.tsx# Chart visualization
│   │   ├── TransactionsList.tsx
│   │   ├── FilterPanel.tsx # Transaction filters
│   │   ├── UserMenu.tsx    # User dropdown
│   │   └── AppsMenu.tsx    # Apps dropdown
│   ├── hooks/              # Custom React hooks
│   │   ├── useUser.ts
│   │   ├── useWallet.ts
│   │   └── useTransactions.ts
│   ├── lib/                # Utilities
│   │   └── api.ts          # API client
│   ├── pages/              # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx       # Main dashboard
│   ├── styles/             # Styling
│   │   ├── globals.css
│   │   ├── theme.ts        # Chakra theme
│   │   └── tokens.ts       # Design tokens
│   └── tests/              # Unit tests
├── public/                 # Static assets
├── jest.config.js
├── tsconfig.json
└── package.json
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🎨 Design System

The application uses a custom design system with:
- **Colors:** `#131316` (dark), `#56616B` (gray), `#FF5403` (accent)
- **Typography:** Inter font family
- **Border Radius:** 20px for cards, full for pills
- **Responsive Breakpoints:** 
  - Mobile: 0px+
  - Tablet: 768px+
  - Desktop: 992px+

## 📱 Responsive Design

The application is fully responsive with three breakpoints:
- **Mobile (base):** Single column layout
- **Tablet (md: 768px):** Adjusted spacing and font sizes
- **Desktop (lg: 992px):** Two-column grid layout

## 🔗 API Integration

The app fetches data from:
- `GET /user` - User profile information
- `GET /wallet` - Wallet balance data
- `GET /transactions` - Transaction history

Base URL: `https://fe-task-api.mainstack.io`

## 📝 License

This project is part of a take-home assessment for Mainstack.

---

Built with ❤️ by Oladamilare
