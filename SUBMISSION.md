# Mainstack Frontend Take-Home Assessment Submission

## Project Links

- **GitHub Repository:** https://github.com/oladamilare10/mainstack-frontend
- **Deployed URL:** https://mainstack-oey2ep02j-oladamilare10s-projects.vercel.app

## Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Run tests:
   ```bash
   npm test
   ```

4. Run lint & type check:
   ```bash
   npm run lint
   npm run typecheck
   ```

## Implementation Notes

### Design Fidelity

- **Fonts:** Using Inter via Google Fonts with weights 400, 500, 600, 700
- **Colors:** Exact match from Figma tokens:
  - Primary: `#131316` (dark text/buttons)
  - Secondary: `#56616B` (gray text)
  - Accent: `#FF5403` (orange/primary actions)
  - Background: `#EFF1F6` (light gray)
  - Success: `#E3FCF2`, Pending: `#FEF5E6`, Failed: `#FFE5E5`
- **Spacing:** Consistent 20px border radius for cards, full radius for pills
- **Components:** Chakra UI base with extensive custom styling to match Figma precisely
- **Responsive:** Three breakpoints - mobile (base), tablet (768px+), desktop (992px+)

### Architecture

- **Framework:** Next.js 13 Pages Router for optimal performance and SEO
- **State Management:** SWR for data fetching with automatic caching and revalidation
- **Type Safety:** TypeScript strict mode throughout
- **Styling:** Chakra UI with custom theme extending design tokens
- **Code Quality:** ESLint + Prettier with pre-commit hooks via Husky

### Features Implemented

✅ **Dashboard Layout**
- Responsive grid: Balance card and chart on left, stats card on right (desktop)
- Single column stack on mobile
- Sticky header with navigation

✅ **Components**
- WalletCard: Available balance display with withdraw button
- RevenueChart: Custom SVG chart with smooth curve and gradient
- TransactionsList: Paginated list with status indicators
- FilterPanel: Sliding panel with date pickers and multi-select dropdowns
- AppsMenu: Dropdown with 5 app options (Link in Bio, Store, Media Kit, etc.)
- UserMenu: User profile dropdown with 7 menu items

✅ **Interactive Features**
- Date range filtering with custom calendar component
- Transaction type multi-select (Store Purchase, Get Tipped, Withdrawals, etc.)
- Status filtering (Successful, Pending, Failed)
- Export functionality button
- Responsive navigation

✅ **Data Fetching**
- Real-time data from Mainstack API endpoints
- Loading states with skeleton components
- Error handling and fallbacks
- Client-side sorting and pagination

### Testing

- **Unit Tests:**
  - API fetcher error handling (`api.test.ts`)
  - UserCard component rendering with user data (`UserCard.test.tsx`)
  - TransactionsList sorting and pagination (`TransactionsList.test.tsx`)
- **CI/CD:** GitHub Actions workflow runs tests, linting, and type checking on every push
- **Coverage:** Core functionality and critical paths tested

### Technical Decisions

1. **Pages Router over App Router:** Chosen for stability and proven production reliability with Next.js 13
2. **SWR over React Query:** Lightweight, built-in caching, and perfect for this use case
3. **Client-side Filtering:** Given API returns all transactions, client-side filtering provides instant feedback
4. **Chakra UI:** Accessible components out of the box, excellent TypeScript support, easy theming
5. **Custom Icons via react-icons:** Flexible icon library matching Figma designs exactly
6. **TypeScript Strict Mode:** Catch errors early, better IDE support, self-documenting code

### Performance Optimizations

- Code splitting with Next.js automatic optimization
- SWR caching reduces redundant API calls
- Responsive images with next/image (logo)
- CSS-in-JS with Chakra for optimal bundle size

### Deviations from Design

No significant deviations. The implementation follows the Figma design pixel-perfectly:
- Exact spacing and padding measurements
- Precise color values
- Matching typography hierarchy
- Consistent border radius and shadows
- Accurate icon sizes and positioning

Minor adjustments made for:
- Enhanced accessibility (ARIA labels, keyboard navigation)
- Loading states (not shown in design)
- Error handling UI (graceful degradation)

### Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Future Enhancements

If given more time, I would add:
- Server-side rendering for transaction data
- Real-time updates via WebSocket
- Advanced analytics and insights
- Export to CSV/PDF functionality
- Dark mode toggle
- Internationalization (i18n)
- More comprehensive E2E tests with Playwright

---

**Submission Date:** October 19, 2025  
**Developer:** Oladamilare  
**Contact:** oladamilare10@github.com
