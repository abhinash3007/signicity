# SigniCity Website

Marketing website for SigniCity, built with Next.js 15 (App Router), Tailwind CSS v4 and TypeScript.

## Run locally

```bash
# Use Node from C:\node-latest (or run use-node-latest(25).bat first)
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Pages

| Route | File |
|---|---|
| `/` Home | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/[slug]` (6 service pages) | `src/app/services/[slug]/page.tsx` |
| `/work` (filterable portfolio) | `src/app/work/page.tsx` + `src/components/WorkGrid.tsx` |
| `/contact` (enquiry form + FAQ) | `src/app/contact/page.tsx` + `src/components/ContactForm.tsx` |

## Editing content

Almost all text lives in **`src/lib/site.ts`**: contact details, services, projects, process, client names, FAQs.

- **Phone / WhatsApp / address / socials**: fill in `site` in `site.ts`. Empty values stay hidden.
- **Images**: currently placeholder Unsplash photos. To use real photos, drop them in `public/` (e.g. `public/work/krone-stall.jpg`) and replace `img("...")` with `"/work/krone-stall.jpg"`.
- **Logo**: `src/components/Logo.tsx` is a text placeholder; swap in an `<Image src="/logo.svg" />`. The favicon is `src/app/icon.svg`.
- **Colours / font**: `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx`.

## Contact form

There is no backend yet: the form opens the visitor's email app with the enquiry pre-filled to `business@signicity.com`. To receive submissions directly, connect it to Formspree/Web3Forms or add an API route using Resend.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repo. The framework is detected automatically, so no settings are needed.
3. Add the custom domain `signicity.com` under **Project → Settings → Domains**.

Or from the CLI: `npx vercel` (preview) and `npx vercel --prod`.
