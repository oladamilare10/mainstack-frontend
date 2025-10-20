# Mainstack Frontend Take-Home Assessment Submission

## Project Links

- GitHub Repository: [repo-url-here]
- Deployed URL: [vercel-url-here]

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

- Fonts: Using Inter via Google Fonts
- Colors: Matched from Figma tokens
- Spacing: 4px/8px grid system
- Components: Chakra UI base with custom styling
- Responsive: Desktop and mobile layouts

### Testing

- Unit tests for:
  - API fetcher error handling
  - UserCard component rendering
  - TransactionsList sorting and pagination
- CI via GitHub Actions

### Technical Decisions

- Next.js + TypeScript for type safety and build optimizations
- SWR for data fetching with built-in caching
- Client-side sorting and pagination for transactions list
- Chakra UI for accessible component primitives

### Deviations from Design (if any)

- [List any intentional deviations from the Figma design and why]
