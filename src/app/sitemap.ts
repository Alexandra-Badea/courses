import type { MetadataRoute } from 'next'
import { courses } from '@/content/courses'
import { locales } from '@/lib/i18n'

// sitemap.xml for Google: the home page and every course page, each in Romanian and English,
// marked as translations of each other. Certificates and the verify page are left out on purpose.
export const dynamic = 'force-static'

const SITE = 'https://coursebug.com'

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE}/${l}${path}`]))
  return {
    url: `${SITE}/ro${path}`,
    changeFrequency: 'monthly',
    priority,
    alternates: { languages: { ...languages, 'x-default': `${SITE}/ro${path}` } },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [entry('/', 1), ...courses.map((c) => entry(`/courses/${c.slug}/`, 0.8))]
  // One entry per language, each listing both versions
  return pages.flatMap((page) =>
    locales.map((l) => ({ ...page, url: page.url.replace(`${SITE}/ro/`, `${SITE}/${l}/`) })),
  )
}
