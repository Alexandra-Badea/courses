#!/usr/bin/env node
/**
 * Issues a certificate of participation: writes public/certificates/<CODE>.json and prints the
 * links to send to the participant. Commit and push the new file; once the site redeploys,
 * the certificate can be checked and printed.
 *
 *   npm run certificate -- --name "Maria Popescu" --course ai-teaching --start 2026-12-01 --end 2026-12-10
 *
 * Optional: --issued 2026-12-11 (default: today), --url https://your-domain (for the printed links)
 * Courses: see src/content/catalog.json (ai-teaching, interactive-lessons, online-safety)
 */
import { randomInt } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const catalog = JSON.parse(readFileSync(join(root, 'src/content/catalog.json'), 'utf8'))

function arg(name) {
  const i = process.argv.indexOf(`--${name}`)
  return i > -1 ? process.argv[i + 1] : undefined
}

function fail(message) {
  console.error(`\n  ${message}\n\n  Example: npm run certificate -- --name "Maria Popescu" --course ai-teaching --start 2026-12-01 --end 2026-12-10\n`)
  process.exit(1)
}

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s ?? '') && !Number.isNaN(Date.parse(s))
const today = new Date().toISOString().slice(0, 10)

const name = arg('name')?.trim()
const slug = arg('course')
const start = arg('start')
const end = arg('end')
const issued = arg('issued') ?? today
const url = (arg('url') ?? 'https://YOUR-SITE').replace(/\/+$/, '')

if (!name) fail('Missing --name (the participant’s full name).')
const course = catalog.courses.find((c) => c.slug === slug)
if (!course) fail(`Unknown --course "${slug ?? ''}". Use one of: ${catalog.courses.map((c) => c.slug).join(', ')}`)
if (!isDate(start) || !isDate(end)) fail('Use --start and --end as YYYY-MM-DD.')
if (end < start) fail('--end is before --start.')
if (!isDate(issued)) fail('Use --issued as YYYY-MM-DD.')

// Codes like CB-7K3M-9QX2: no 0/O or 1/I/L, so they're easy to read and type
const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
const block = () => Array.from({ length: 4 }, () => alphabet[randomInt(alphabet.length)]).join('')
const dir = join(root, 'public/certificates')
mkdirSync(dir, { recursive: true })
let code
do code = `CB-${block()}-${block()}`
while (existsSync(join(dir, `${code}.json`)))

const record = {
  code,
  name,
  course: course.slug,
  start,
  end,
  issued,
  hoursLive: course.sessions * course.hoursPerSession,
  hoursPractice: course.hoursPractice,
}
writeFileSync(join(dir, `${code}.json`), JSON.stringify(record, null, 2) + '\n')

console.log(`
  Certificate ${code} for ${name} (${course.slug}, ${record.hoursLive + record.hoursPractice} hours)
  Saved to public/certificates/${code}.json

  Next: commit and push this file. After the site redeploys, send the participant:
    Certificate (print or save as PDF):  ${url}/ro/certificate/?code=${code}   (English: ${url}/en/certificate/?code=${code})
    Check it online:                      ${url}/ro/verify/?code=${code}
`)
