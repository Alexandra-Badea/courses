import catalog from './catalog.json'
import type { Locale } from '@/lib/i18n'

type Text = Record<Locale, string>
type List = Record<Locale, string[]>

export interface NextGroup {
  start: string
  end: string
  schedule: Text
}

export interface Course {
  slug: string
  sessions: number
  hoursPerSession: number
  hoursPractice: number
  nextGroup: NextGroup | null
  price: { amount: number; currency: string } | null
  paymentLink: string | null
  title: Text
  /** What you can do afterwards, in one sentence */
  outcome: Text
  audience: Text
  /** Printed on the certificate */
  skills: List
  sessionTopics: List
  finalTask: Text
}

/** The words of each course. Numbers, dates, prices and payment links live in catalog.json. */
const texts: Record<string, Omit<Course, 'slug' | 'sessions' | 'hoursPerSession' | 'hoursPractice' | 'nextGroup' | 'price' | 'paymentLink'>> = {
  'ai-teaching': {
    title: {
      ro: 'AI la clasă: lecții, fișe și teste pregătite mai repede',
      en: 'AI in the classroom: lessons, worksheets and tests, faster',
    },
    outcome: {
      ro: 'Folosești instrumente AI ca să pregătești materiale pentru elevii tăi și înveți să prinzi ce greșesc.',
      en: 'Use AI tools to prepare materials for your students, and learn to catch what they get wrong.',
    },
    audience: { ro: 'Profesori și formatori', en: 'Teachers and trainers' },
    skills: {
      ro: [
        'Formularea de cereri (prompturi) clare pentru instrumentele AI',
        'Pregătirea planurilor de lecție și a fișelor de lucru cu ajutorul AI, adaptate nivelului clasei',
        'Crearea de teste, bareme și feedback pentru elevi',
        'Verificarea rezultatelor AI: erori, informații inventate, părtinire',
        'Stabilirea regulilor de folosire a AI de către elevi și protejarea datelor lor',
      ],
      en: [
        'Writing clear prompts for AI tools',
        'Preparing lesson plans and worksheets with AI, adapted to the class level',
        'Creating tests, marking schemes and feedback for students',
        'Checking AI output for errors, made-up facts and bias',
        "Setting rules for students' use of AI and protecting their data",
      ],
    },
    sessionTopics: {
      ro: [
        'Cum funcționează instrumentele AI și unde greșesc',
        'Plan de lecție și fișe de lucru pe tema ta',
        'Teste, bareme și feedback',
        'AI în mâinile elevilor: reguli, integritate, date personale; prezentarea temei finale',
      ],
      en: [
        'How AI tools work and where they go wrong',
        'A lesson plan and worksheets on your own topic',
        'Tests, marking schemes and feedback',
        "AI in students' hands: rules, honesty and personal data; final task presentations",
      ],
    },
    finalTask: {
      ro: 'O lecție completă pe tema ta (plan, fișă și test), pregătită cu AI și verificată.',
      en: 'A complete lesson on your own topic (plan, worksheet and test), prepared with AI and checked.',
    },
  },
  'interactive-lessons': {
    title: {
      ro: 'Lecții interactive cu Canva, Padlet, quizuri și jocuri',
      en: 'Interactive lessons with Canva, Padlet, quizzes and games',
    },
    outcome: {
      ro: 'Transformi o lecție obișnuită într-una la care elevii participă, cu instrumente gratuite.',
      en: 'Turn an ordinary lesson into one students take part in, with free tools.',
    },
    audience: { ro: 'Profesori, formatori și lucrători de tineret', en: 'Teachers, trainers and youth workers' },
    skills: {
      ro: [
        'Realizarea de materiale vizuale în Canva',
        'Organizarea de activități colaborative cu Padlet',
        'Crearea de quizuri și jocuri care verifică înțelegerea',
        'Organizarea unei vânători de comori digitale (GooseChase)',
        'Alegerea instrumentului potrivit pentru fiecare activitate',
      ],
      en: [
        'Making visual materials in Canva',
        'Running collaborative activities with Padlet',
        'Building quizzes and games that check understanding',
        'Organising a digital scavenger hunt (GooseChase)',
        'Choosing the right tool for each activity',
      ],
    },
    sessionTopics: {
      ro: [
        'Materiale vizuale în Canva',
        'Lucru în echipă cu Padlet',
        'Quizuri și jocuri care verifică înțelegerea',
        'Vânătoare de comori digitală și activități non-formale; prezentarea temei finale',
      ],
      en: [
        'Visual materials in Canva',
        'Teamwork with Padlet',
        'Quizzes and games that check understanding',
        'A digital scavenger hunt and non-formal activities; final task presentations',
      ],
    },
    finalTask: {
      ro: 'O lecție sau o activitate interactivă, gata de folosit, cu cel puțin două instrumente din curs.',
      en: 'An interactive lesson or activity, ready to use, with at least two tools from the course.',
    },
  },
  'online-safety': {
    title: {
      ro: 'Siguranță online și AI în lucrul cu tinerii',
      en: 'Online safety and AI in youth work',
    },
    outcome: {
      ro: 'Ții cu tinerii activități despre știri false, deepfake-uri, date personale și hărțuire online.',
      en: 'Run activities with young people on fake news, deepfakes, personal data and online bullying.',
    },
    audience: { ro: 'Lucrători de tineret, diriginți și ONG-uri', en: 'Youth workers, form tutors and NGOs' },
    skills: {
      ro: [
        'Explicarea modului în care algoritmii și AI influențează ce văd tinerii online',
        'Recunoașterea știrilor false și a conținutului generat cu AI (deepfake)',
        'Activități despre date personale, parole și înșelătorii online',
        'Reacția la hărțuirea online (cyberbullying)',
        'Pregătirea unui atelier non-formal pentru un grup de tineri',
      ],
      en: [
        'Explaining how algorithms and AI shape what young people see online',
        'Spotting fake news and AI-generated content (deepfakes)',
        'Activities on personal data, passwords and online scams',
        'Responding to online bullying',
        'Preparing a non-formal workshop for a group of young people',
      ],
    },
    sessionTopics: {
      ro: [
        'Ce văd tinerii online și de ce',
        'Știri false, deepfake-uri și verificarea surselor',
        'Date personale, înșelătorii și hărțuire online',
        'Activități non-formale gata de folosit; prezentarea temei finale',
      ],
      en: [
        'What young people see online, and why',
        'Fake news, deepfakes and checking sources',
        'Personal data, scams and online bullying',
        'Ready-to-use non-formal activities; final task presentations',
      ],
    },
    finalTask: {
      ro: 'Planul unui atelier de 90 de minute pentru tineri, pe una dintre temele cursului.',
      en: 'The plan for a 90-minute workshop for young people on one of the course topics.',
    },
  },
}

export const courses: Course[] = catalog.courses.map((c) => {
  const text = texts[c.slug]
  if (!text) throw new Error(`catalog.json lists "${c.slug}", but courses.ts has no text for it`)
  return { ...(c as Omit<Course, keyof typeof text>), ...text }
})

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export const hoursLive = (c: Pick<Course, 'sessions' | 'hoursPerSession'>) => c.sessions * c.hoursPerSession
