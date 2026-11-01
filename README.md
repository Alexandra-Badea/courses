# CourseBug

Live online courses in digital skills for teachers and youth workers, by Alexandra Badea. The site is in Romanian (`/ro/`) and English (`/en/`); the bare address sends visitors to the language of their browser.

Three courses, each with 4 live two-hour sessions, practice between sessions and a final task. At the end, participants get a **certificate of participation** that anyone can check on the site with its code or QR code. It is not an accredited certificate and doesn't award professional credits; the site says so plainly.

## Opening a group

Everything about dates and money is in `src/content/catalog.json`. For each course, fill in:

- `nextGroup`: start and end dates (`YYYY-MM-DD`) and the schedule in both languages
- `price`: amount and currency, e.g. `{ "amount": 250, "currency": "RON" }`
- `paymentLink`: a Stripe Payment Link, if you take card payments

Leave them `null` until you know them: the page then says the dates and price are coming soon, and the enrol button opens an email to you with a ready-made message. The bottom of the file has an example.

Your name, email, platform and maximum group size are in `src/content/site.json`. The course texts are in `src/content/courses.ts`: titles, the skills printed on the certificate, and for each session what participants learn, the tools used and what they leave with, plus the course's tool list and what participants need, and every other text on the site is in `src/content/dictionary.ts`, Romanian first, English second.

## Issuing a certificate

```bash
npm run certificate -- --name "Maria Popescu" --course ai-teaching --start 2026-12-01 --end 2026-12-10 --url https://your-site
```

This creates `public/certificates/CB-XXXX-XXXX.json` and prints the links to send. Commit and push the file; after the site redeploys, the participant can open the certificate, print it or save it as a PDF (one A4 page), and anyone can check the code at `/ro/verify/`. Courses: `ai-teaching`, `interactive-lessons`, `online-safety`. Options: `--issued YYYY-MM-DD` (default today).

A certificate can only be opened with its code, and certificates aren't listed for search engines. `CB-EXEMPLU` is a sample, marked as such everywhere.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
npm run lint && npm run typecheck
```

It's a static site (`output: "export"` in `next.config.ts`): no server or database. Vercel builds it with the default Next.js settings. `wrangler.toml` lets Cloudflare Workers serve the same `out` folder, if you host it there instead.
