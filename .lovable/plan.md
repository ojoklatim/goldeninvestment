## Golden Investment Association — Website Plan

A premium, institutional-feel website targeting high-net-worth and institutional investors. Editorial typography, deep green palette with refined gold accents, and trust-forward composition.

### Design system

- **Palette** (oklch in `src/styles.css`):
  - Background: deep forest green `#0a2818` → secondary green `#0d5c2f`
  - Foreground: white / warm off-white
  - Accent (gold): `#c9a84c` with a brighter highlight `#e0c267`
  - Subtle gradients (green → near-black) for hero sections and dividers
- **Typography**: Cormorant Garamond (display serif) for headings + Inter (body) — classic institutional pairing
- **Treatments**: thin gold hairline dividers, generous whitespace, restrained motion (subtle fade/rise on scroll), gold underline link hover

### Routes (TanStack file-based, separate route per section for SEO)

```
src/routes/
  __root.tsx          — shared header (logo + nav), footer, providers
  index.tsx           — Home: hero, value pillars, featured insights, CTA
  about.tsx           — Mission, history, principles
  services.tsx        — Advisory offerings overview
  investments.tsx     — Investment strategies / portfolios
  team.tsx            — Leadership profiles
  insights.tsx        — Articles / market commentary list
  contact.tsx         — Contact form + office details
  login.tsx           — Member sign-in
  signup.tsx          — Member sign-up
  _authenticated.tsx  — Auth guard layout
  _authenticated/
    members.tsx       — Member dashboard (welcome, gated content placeholder)
```

Each route gets its own `head()` with unique title / description / og tags.

### Backend (Lovable Cloud)

Enables auth + database + storage automatically.

- **Auth**: Email/password + Google sign-in (via Lovable broker). Member login + signup pages, `_authenticated` route guard, sign-out in header when logged in.
- **Tables**:
  - `profiles` (id → auth.users, full_name, created_at) with RLS (user reads/updates own row) + trigger on signup
  - `contact_submissions` (id, name, email, phone, message, created_at) — insert allowed to anon, select restricted
  - `newsletter_subscribers` (id, email unique, created_at) — insert allowed to anon, select restricted
- **Forms**: Client-side Zod validation, server function inserts via Supabase. Toast confirmations.

### Components

- `Header` (sticky, transparent over hero, solid on scroll) with nav links + Member login/account button
- `Footer` (multi-column: nav, contact, newsletter signup, legal)
- `Hero`, `SectionHeading`, `StatCard`, `PillarCard`, `TeamCard`, `InsightCard`
- shadcn `Button` extended with a `gold` variant; `Input`, `Textarea`, `Form`, `Sonner` for toasts

### Out of scope (this plan)

- Real article CMS (insights cards will be static placeholders linking to an article detail route stub)
- Payments, KYC, real portfolio data
- Multi-language

### Technical notes

- Lovable Cloud will be enabled at the start of implementation
- Server functions in `src/lib/*.functions.ts` for form submissions
- All colors via semantic tokens in `src/styles.css` (no hard-coded hex in components)
- Hero/team imagery generated via image tool, stored in `src/assets/`
