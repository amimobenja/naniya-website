# Naniya Website

Marketing site for **Naniya Technologies Limited**, the Kenyan company behind
[Chama Platform](https://chama.naniya.co.ke) and
[LipaClear](https://lipaclear.naniya.co.ke).

Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Scripts

| Command         | Purpose                                  |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the local dev server               |
| `npm run build` | Production build                         |
| `npm run start` | Serve the production build               |

## Project layout

```
src/
  app/                       Next.js App Router pages
    layout.tsx               Root layout, metadata, analytics
    page.tsx                 Homepage
    not-found.tsx            404 page
    products/
      chama-platform/        Chama Platform landing
      lipaclear/             LipaClear landing
    privacy/                 Privacy policy
    terms/                   Terms of service
  components/                Shared React components (icons, mockups, etc.)
  lib/
    contact.ts               Single source of truth for phone/email/address/URLs
public/                      Static assets, sitemap, robots, manifest
```

When updating the office address, phone number, or product URLs, edit
`src/lib/contact.ts` — every page reads from there.

## Analytics

Plausible Analytics is loaded in `src/app/layout.tsx` via `next/script` with
`strategy="afterInteractive"`. No cookie banner is needed because Plausible
doesn't use cookies or store personal data.

### Configuration

Two optional environment variables tune the script:

| Variable                         | Default                              | Use it to…                                     |
| -------------------------------- | ------------------------------------ | ---------------------------------------------- |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`   | `naniya.co.ke` (from `SITE_DOMAIN`)  | Point a preview deploy at a different site     |
| `NEXT_PUBLIC_PLAUSIBLE_SRC`      | `https://plausible.io/js/script.js`  | Switch to a self-hosted Plausible or a variant |

Create a `.env.local` (gitignored) if you need to override either:

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=staging.naniya.co.ke
NEXT_PUBLIC_PLAUSIBLE_SRC=https://plausible.io/js/script.outbound-links.js
```

The script tag is rendered in production builds regardless of env. To disable
Plausible on a fork without code changes, point `NEXT_PUBLIC_PLAUSIBLE_SRC` at
a 404 URL or comment out the `<Script>` in `layout.tsx`.

## Deployment

The site is deployed to its production target (`naniya.co.ke`) from the `main`
branch. See `DEPLOYMENT_GUIDE.md` for details.
