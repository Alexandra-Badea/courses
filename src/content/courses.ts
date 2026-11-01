import catalog from './catalog.json'
import type { Locale } from '@/lib/i18n'

type Text = Record<Locale, string>
type List = Record<Locale, string[]>

export interface NextGroup {
  start: string
  end: string
  schedule: Text
}

/** One live session: what is taught, with which tools, and what each participant has at the end of it */
export interface Session {
  title: Text
  learn: List
  tools: string[]
  make: Text
}

export interface Tool {
  name: string
  /** What the tool is used for in this course */
  use: Text
}

/** Each course has its own sticky-note colour on the site */
export type NoteColour = 'yellow' | 'pink' | 'mint'

export interface Course {
  slug: string
  sessions: number
  hoursPerSession: number
  hoursPractice: number
  nextGroup: NextGroup | null
  price: { amount: number; currency: string } | null
  paymentLink: string | null
  colour: NoteColour
  title: Text
  /** What you can do afterwards, in one sentence */
  outcome: Text
  audience: Text
  /** Printed on the certificate */
  skills: List
  program: Session[]
  tools: Tool[]
  needs: List
  finalTask: Text
}

type CourseText = Omit<Course, 'slug' | 'sessions' | 'hoursPerSession' | 'hoursPractice' | 'nextGroup' | 'price' | 'paymentLink'>

/** The words of each course. Numbers, dates, prices and payment links live in catalog.json. */
const texts: Record<string, CourseText> = {
  'ai-teaching': {
    colour: 'yellow',
    title: {
      ro: 'AI la clasă: lecții, fișe și teste pregătite mai repede',
      en: 'AI in the classroom: lessons, worksheets and tests, faster',
    },
    outcome: {
      ro: 'Pregătești cu AI o lecție completă pe tema ta (plan, fișă pe trei niveluri, test cu barem) și știi să verifici tot ce ți-a dat.',
      en: 'Prepare a complete lesson on your own topic with AI (plan, worksheet at three levels, test with a marking scheme) and know how to check everything it gives you.',
    },
    audience: { ro: 'Profesori și formatori', en: 'Teachers and trainers' },
    skills: {
      ro: [
        'Formularea de prompturi structurate (rol, sarcină, context, format) în ChatGPT, Gemini și Copilot',
        'Pregătirea cu AI a planurilor de lecție și a fișelor de lucru pe trei niveluri de dificultate',
        'Crearea de teste cu barem și rubrică în Google Forms și Wayground',
        'Verificarea rezultatelor AI: informații inventate, erori, părtinire',
        'Stabilirea regulilor de folosire a AI la clasă și protejarea datelor elevilor (GDPR)',
      ],
      en: [
        'Writing structured prompts (role, task, context, format) in ChatGPT, Gemini and Copilot',
        'Preparing lesson plans and worksheets at three levels of difficulty with AI',
        'Building tests with marking schemes and rubrics in Google Forms and Wayground',
        'Checking AI output for made-up facts, errors and bias',
        "Setting class rules for AI use and protecting students' data (GDPR)",
      ],
    },
    program: [
      {
        title: { ro: 'Cum ceri ce vrei de la AI și unde inventează', en: 'How to ask AI for what you want, and where it makes things up' },
        learn: {
          ro: [
            'Ce este un model de limbaj, pe scurt, și de ce sună sigur pe el chiar și când greșește',
            'Părțile unui prompt bun: rol, sarcină, context, format și un exemplu',
            'Aceeași cerere în ChatGPT, Gemini și Copilot: ce diferă și pe care îl alegi',
            'Cum prinzi informațiile inventate: verifici cifrele, citatele și sursele',
            'Ce nu scrii niciodată într-un chat AI: nume, note, orice despre elevi',
          ],
          en: [
            'What a language model is, briefly, and why it sounds sure of itself even when it is wrong',
            'The parts of a good prompt: role, task, context, format and an example',
            'The same request in ChatGPT, Gemini and Copilot: what differs and which one to pick',
            'How to catch made-up facts: check the figures, quotes and sources',
            'What you never type into an AI chat: names, marks, anything about your students',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Microsoft Copilot'],
        make: { ro: 'O fișă cu 10 prompturi testate, pentru materia ta.', en: 'A sheet of 10 tested prompts for your subject.' },
      },
      {
        title: { ro: 'Plan de lecție și fișă de lucru pe trei niveluri', en: 'A lesson plan and a worksheet at three levels' },
        learn: {
          ro: [
            'Un plan de lecție care pornește de la obiectivele tale, nu de la ce propune AI',
            'Aceeași fișă în trei variante: cu sprijin, de nivel mediu și de provocare',
            'Texte adaptate vârstei: simplificare, glosar, întrebări de înțelegere',
            'Activități scurte de început și de final de oră',
            'Fișa în Canva: așezare în pagină, printare și variantă digitală',
          ],
          en: [
            'A lesson plan that starts from your objectives, not from what AI suggests',
            'The same worksheet in three versions: with support, core and challenge',
            'Texts adapted to age: simplifying, a glossary, comprehension questions',
            'Short activities to open and close the lesson',
            'The worksheet in Canva: layout, printing and a digital version',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Canva'],
        make: { ro: 'Planul lecției tale și fișa de lucru pe trei niveluri.', en: 'Your lesson plan and the worksheet at three levels.' },
      },
      {
        title: { ro: 'Teste, bareme și feedback', en: 'Tests, marking schemes and feedback' },
        learn: {
          ro: [
            'Itemi de mai multe tipuri: alegere multiplă, răspuns scurt, eseu',
            'Variante greșite plauzibile, care îți arată ce n-a înțeles elevul',
            'Barem de corectare și rubrică pentru răspunsurile deschise',
            'Testul în Google Forms, cu punctaj și corectare automată',
            'Un quiz generat din materialul tău în Wayground, pe care îl verifici înainte de oră',
            'Feedback personalizat pornind de la rubrică, fără date despre elevi',
          ],
          en: [
            'Different item types: multiple choice, short answer, essay',
            'Plausible wrong options that show you what a student has not understood',
            'A marking scheme and a rubric for open answers',
            'The test in Google Forms, with points and automatic marking',
            'A quiz generated from your own material in Wayground, which you check before class',
            'Personal feedback built from the rubric, with no student data',
          ],
        },
        tools: ['Google Forms', 'Wayground', 'ChatGPT'],
        make: { ro: 'Un test în Google Forms, cu barem și rubrică.', en: 'A Google Forms test with a marking scheme and a rubric.' },
      },
      {
        title: { ro: 'AI în mâinile elevilor; prezentarea temei finale', en: "AI in students' hands; final task presentations" },
        learn: {
          ro: [
            'Reguli clare pentru clasă: când e voie, cum se menționează, ce nu se acceptă',
            'Teme pe care AI nu le poate face în locul elevului: proces, prezentare orală, experiență proprie',
            'De ce detectoarele de AI nu sunt de încredere și ce faci în schimb',
            'Datele elevilor și GDPR: ce conturi folosesc și ce setări verifici',
            'Feedback de la ceilalți participanți pe lecția ta',
          ],
          en: [
            "Clear class rules: when it's allowed, how it's credited, what isn't accepted",
            "Homework AI can't do for the student: showing the process, speaking, their own experience",
            "Why AI detectors can't be trusted, and what to do instead",
            "Students' data and GDPR: which accounts they use and which settings to check",
            'Feedback from the other participants on your lesson',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Microsoft Copilot'],
        make: { ro: 'Regulile AI pentru clasa ta, pe o pagină, și lecția ta prezentată.', en: 'One-page AI rules for your class, and your lesson presented.' },
      },
    ],
    tools: [
      { name: 'ChatGPT', use: { ro: 'Asistentul AI cu care lucrăm cel mai mult: texte, planuri, întrebări.', en: 'The AI assistant we use most: texts, plans, questions.' } },
      { name: 'Gemini', use: { ro: 'Asistentul AI de la Google; inclus gratuit în Google Workspace for Education.', en: "Google's AI assistant; included free in Google Workspace for Education." } },
      { name: 'Microsoft Copilot', use: { ro: 'Asistentul AI de la Microsoft, cu un cont Microsoft.', en: "Microsoft's AI assistant, with a Microsoft account." } },
      { name: 'Canva', use: { ro: 'Fișe care arată bine și se printează corect.', en: 'Worksheets that look good and print properly.' } },
      { name: 'Google Forms', use: { ro: 'Teste online cu corectare automată.', en: 'Online tests with automatic marking.' } },
      { name: 'Wayground', use: { ro: 'Fostul Quizizz: quizuri generate din materialul tău.', en: 'Formerly Quizizz: quizzes generated from your material.' } },
    ],
    needs: {
      ro: [
        'Un laptop sau un calculator; pe telefon e greu de lucrat',
        'Un cont Google sau Microsoft (merge și cel de la școală)',
        'O temă din programă pe care o predai în săptămânile următoare',
        'Nu ai nevoie de experiență cu AI',
      ],
      en: [
        'A laptop or computer; a phone is hard to work on',
        'A Google or Microsoft account (your school one is fine)',
        'A topic you will teach in the next few weeks',
        'No experience with AI needed',
      ],
    },
    finalTask: {
      ro: 'O lecție completă pe tema ta (plan, fișă și test), pregătită cu AI și verificată.',
      en: 'A complete lesson on your own topic (plan, worksheet and test), prepared with AI and checked.',
    },
  },

  'interactive-lessons': {
    colour: 'pink',
    title: {
      ro: 'Lecții interactive cu Canva, Padlet, quizuri și jocuri',
      en: 'Interactive lessons with Canva, Padlet, quizzes and games',
    },
    outcome: {
      ro: 'Construiești o lecție la care participă toată clasa (prezentare, panou comun, quiz, joc și misiuni), cu instrumente gratuite.',
      en: 'Build a lesson the whole class takes part in (slides, a shared board, a quiz, a game and missions), with free tools.',
    },
    audience: { ro: 'Profesori, formatori și lucrători de tineret', en: 'Teachers, trainers and youth workers' },
    skills: {
      ro: [
        'Realizarea de prezentări și fișe de lucru în Canva for Education',
        'Organizarea de activități colaborative în Padlet și Mentimeter',
        'Crearea de quizuri și jocuri de recapitulare în Kahoot!, Wayground și Wordwall',
        'Folosirea rapoartelor din quizuri pentru a relua ce n-a fost înțeles',
        'Organizarea unei vânători de comori digitale în GooseChase, cu debriefing',
      ],
      en: [
        'Making slides and worksheets in Canva for Education',
        'Running collaborative activities in Padlet and Mentimeter',
        'Building quizzes and review games in Kahoot!, Wayground and Wordwall',
        'Using quiz reports to go back over what was not understood',
        'Running a digital scavenger hunt in GooseChase, with a debrief',
      ],
    },
    program: [
      {
        title: { ro: 'Materiale vizuale în Canva', en: 'Visual materials in Canva' },
        learn: {
          ro: [
            'Contul Canva for Education și clasele din Canva: cum le dai elevilor un design de lucrat',
            'O prezentare clară: titlu, imagine și un singur mesaj pe fiecare slide',
            'O fișă de lucru și un poster care se printează corect',
            'Șabloane, fonturi și culori care se citesc din ultima bancă',
            'Linkuri și video în prezentare',
          ],
          en: [
            'Canva for Education and Canva classes: how to give students a design to work on',
            'Clear slides: a heading, a picture and one message per slide',
            'A worksheet and a poster that print properly',
            'Templates, fonts and colours that can be read from the back row',
            'Links and video in your slides',
          ],
        },
        tools: ['Canva for Education'],
        make: { ro: 'Prezentarea lecției tale și o fișă de lucru.', en: 'Slides for your lesson and a worksheet.' },
      },
      {
        title: { ro: 'Lucru în echipă cu Padlet și Mentimeter', en: 'Teamwork with Padlet and Mentimeter' },
        learn: {
          ro: [
            'Formatul potrivit de panou: perete, coloane, cronologie, hartă',
            'Activități de grup pe un panou: brainstorming, galerie, dezbatere',
            'Moderare, comentarii și setări de confidențialitate pentru elevi',
            'Sondaj și nor de cuvinte în Mentimeter, la începutul și la finalul orei',
            'Biletul de ieșire: ce le-a rămas elevilor din lecție',
          ],
          en: [
            'The right board format: wall, columns, timeline, map',
            'Group activities on a board: brainstorming, a gallery walk, a debate',
            'Moderation, comments and privacy settings for students',
            'A poll and a word cloud in Mentimeter, at the start and end of a lesson',
            'The exit ticket: what students took away from the lesson',
          ],
        },
        tools: ['Padlet', 'Mentimeter'],
        make: { ro: 'Un panou Padlet pentru o activitate de grup și un bilet de ieșire.', en: 'A Padlet board for a group activity, and an exit ticket.' },
      },
      {
        title: { ro: 'Quizuri și jocuri care verifică înțelegerea', en: 'Quizzes and games that check understanding' },
        learn: {
          ro: [
            'Quiz live în Kahoot! și quiz în ritmul fiecăruia în Wayground: când îl folosești pe fiecare',
            'Întrebări care verifică înțelegerea, nu doar memoria',
            'Jocuri Wordwall din aceeași listă de cuvinte: potriviri, roata, anagrame',
            'Rapoartele: vezi la ce întrebări au greșit cei mai mulți și reiei doar acolo',
            'Quizul ca temă pentru acasă',
          ],
          en: [
            'A live quiz in Kahoot! and a self-paced quiz in Wayground: when to use each',
            'Questions that check understanding, not just memory',
            'Wordwall games from one word list: match-up, the wheel, anagrams',
            'Reports: see which questions most students got wrong and go back over just those',
            'Quizzes as homework',
          ],
        },
        tools: ['Kahoot!', 'Wayground', 'Wordwall'],
        make: { ro: 'Un quiz și un joc Wordwall pentru lecția ta.', en: 'A quiz and a Wordwall game for your lesson.' },
      },
      {
        title: { ro: 'Misiuni GooseChase și activități non-formale; prezentarea temei finale', en: 'GooseChase missions and non-formal activities; final task presentations' },
        learn: {
          ro: [
            'O vânătoare de comori cu misiuni foto, video, text și GPS',
            'Echipe, punctaj și reguli de siguranță, în școală sau afară',
            'Debriefing: cum transformi jocul în învățare (Ce s-a întâmplat? Ce înseamnă? Ce facem acum?)',
            'Cum alegi instrumentul potrivit pentru fiecare moment al lecției',
            'Feedback de la ceilalți participanți pe activitatea ta',
          ],
          en: [
            'A scavenger hunt with photo, video, text and GPS missions',
            'Teams, points and safety rules, indoors or outside',
            'Debriefing: turning the game into learning (What happened? So what? Now what?)',
            'Choosing the right tool for each moment of a lesson',
            'Feedback from the other participants on your activity',
          ],
        },
        tools: ['GooseChase'],
        make: { ro: 'O vânătoare de comori de 30 de minute, gata de jucat.', en: 'A 30-minute scavenger hunt, ready to play.' },
      },
    ],
    tools: [
      { name: 'Canva for Education', use: { ro: 'Prezentări, fișe și postere; gratuit pentru profesori.', en: 'Slides, worksheets and posters; free for teachers.' } },
      { name: 'Padlet', use: { ro: 'Panouri pe care lucrează toată clasa deodată.', en: 'Boards the whole class works on at once.' } },
      { name: 'Mentimeter', use: { ro: 'Sondaje și nori de cuvinte în timpul orei.', en: 'Polls and word clouds during the lesson.' } },
      { name: 'Kahoot!', use: { ro: 'Quiz live, de pe telefon.', en: 'Live quizzes, played on phones.' } },
      { name: 'Wayground', use: { ro: 'Fostul Quizizz: quizuri în ritmul fiecăruia, și ca temă.', en: 'Formerly Quizizz: self-paced quizzes, also as homework.' } },
      { name: 'Wordwall', use: { ro: 'Jocuri din vocabularul și noțiunile lecției.', en: 'Games from the words and ideas in your lesson.' } },
      { name: 'GooseChase', use: { ro: 'Misiuni în echipe, cu poze și video.', en: 'Team missions with photos and video.' } },
    ],
    needs: {
      ro: [
        'Un laptop sau un calculator; un telefon în plus te ajută să vezi ce văd elevii',
        'Un cont Google sau Microsoft, pentru autentificare',
        'O lecție sau o activitate pe care vrei s-o faci interactivă',
        'Nu ai nevoie de cunoștințe de design',
      ],
      en: [
        'A laptop or computer; a phone as well helps you see what students see',
        'A Google or Microsoft account, to sign in',
        'A lesson or activity you want to make interactive',
        'No design skills needed',
      ],
    },
    finalTask: {
      ro: 'O lecție sau o activitate interactivă, gata de folosit, cu cel puțin două instrumente din curs.',
      en: 'An interactive lesson or activity, ready to use, with at least two tools from the course.',
    },
  },

  'online-safety': {
    colour: 'mint',
    title: {
      ro: 'Siguranță online și AI în lucrul cu tinerii',
      en: 'Online safety and AI in youth work',
    },
    outcome: {
      ro: 'Ții cu tinerii ateliere despre algoritmi, știri false, deepfake-uri, date personale și hărțuire online, cu exerciții și instrumente gratuite.',
      en: 'Run workshops with young people on algorithms, fake news, deepfakes, personal data and online bullying, with exercises and free tools.',
    },
    audience: { ro: 'Lucrători de tineret, diriginți și ONG-uri', en: 'Youth workers, form tutors and NGOs' },
    skills: {
      ro: [
        'Explicarea modului în care algoritmii și chatboturile AI influențează ce văd tinerii',
        'Verificarea surselor, imaginilor și videoclipurilor, inclusiv a celor generate cu AI',
        'Activități despre confidențialitate, parole, autentificare în doi pași și înșelătorii online',
        'Recunoașterea, documentarea și raportarea hărțuirii online',
        'Proiectarea unui atelier non-formal de 90 de minute pentru tineri',
      ],
      en: [
        'Explaining how algorithms and AI chatbots shape what young people see',
        'Checking sources, images and videos, including AI-generated ones',
        'Activities on privacy, passwords, two-step verification and online scams',
        'Recognising, documenting and reporting online bullying',
        'Designing a 90-minute non-formal workshop for young people',
      ],
    },
    program: [
      {
        title: { ro: 'Ce văd tinerii online și de ce', en: 'What young people see online, and why' },
        learn: {
          ro: [
            'Cum aleg algoritmii TikTok, Instagram și YouTube ce apare în feed',
            'Bula de filtrare și camera de ecou, explicate printr-un exercițiu',
            'Chatboturile AI pe care le folosesc tinerii: la ce sunt bune, unde greșesc, ce date cer',
            'Influenceri, reclame ascunse și conținut sponsorizat',
            'Cum vorbești cu tinerii despre toate acestea fără să le interzici aplicațiile',
          ],
          en: [
            'How the TikTok, Instagram and YouTube algorithms choose what appears in the feed',
            'Filter bubbles and echo chambers, explained through an exercise',
            'The AI chatbots young people use: what they are good for, where they go wrong, what data they ask for',
            'Influencers, hidden ads and sponsored content',
            'How to talk to young people about all this without banning their apps',
          ],
        },
        tools: ['TikTok', 'Instagram', 'YouTube', 'ChatGPT'],
        make: { ro: 'Un exercițiu de 20 de minute despre feed, de făcut cu grupul tău.', en: 'A 20-minute exercise about the feed, to run with your group.' },
      },
      {
        title: { ro: 'Știri false, deepfake-uri și verificarea surselor', en: 'Fake news, deepfakes and checking sources' },
        learn: {
          ro: [
            'Lectura laterală: verifici o sursă deschizând alte pagini, nu citind mai atent aceeași pagină',
            'Căutarea inversă a imaginilor cu Google Lens și TinEye',
            'Verificarea unui video cu extensia InVID-WeVerify: cadre cheie și metadate',
            'Indicii pentru imagini și voci generate cu AI și de ce detectoarele automate nu ajung',
            'Content Credentials: informațiile care arată cum a fost creată o imagine',
            'Jocul Bad News, cu debriefing pentru grup',
          ],
          en: [
            'Lateral reading: checking a source by opening other pages, not by reading the same page more closely',
            'Reverse image search with Google Lens and TinEye',
            'Checking a video with the InVID-WeVerify extension: keyframes and metadata',
            "Clues to AI-generated images and voices, and why automatic detectors aren't enough",
            'Content Credentials: the information that shows how an image was made',
            'The Bad News game, with a group debrief',
          ],
        },
        tools: ['Google Lens', 'TinEye', 'InVID-WeVerify', 'Content Credentials', 'Bad News'],
        make: { ro: 'O fișă de verificare în 5 pași, pentru tineri.', en: 'A 5-step checking sheet for young people.' },
      },
      {
        title: { ro: 'Date personale, înșelătorii și hărțuire online', en: 'Personal data, scams and online bullying' },
        learn: {
          ro: [
            'Setările de confidențialitate din Instagram, TikTok și WhatsApp, pas cu pas',
            'Parole bune, un manager de parole și autentificarea în doi pași',
            'Cum verifici dacă o adresă de e-mail a apărut într-o scurgere de date',
            'Înșelătoriile frecvente: phishing, conturi false, premii false, șantaj online',
            'Hărțuirea online: cum o recunoști, cum o documentezi, unde o raportezi (inclusiv la Ora de Net)',
          ],
          en: [
            'Privacy settings in Instagram, TikTok and WhatsApp, step by step',
            'Good passwords, a password manager and two-step verification',
            'How to check whether an email address has appeared in a data breach',
            'Common scams: phishing, fake accounts, fake prizes, online blackmail',
            'Online bullying: how to recognise it, document it and report it (including to Ora de Net)',
          ],
        },
        tools: ['Bitwarden', 'Have I Been Pwned', 'Ora de Net'],
        make: { ro: 'Un ghid de siguranță pe o pagină, pentru grupul tău.', en: 'A one-page safety guide for your group.' },
      },
      {
        title: { ro: 'Atelierul tău non-formal; prezentarea temei finale', en: 'Your non-formal workshop; final task presentations' },
        learn: {
          ro: [
            'Structura unui atelier de 90 de minute: spărgător de gheață, activitate, debriefing, evaluare',
            'Metode non-formale: joc de rol, dezbatere, studiu de caz, stații de lucru',
            'Be Internet Awesome și jocul Interland, pentru grupurile mai mici',
            'Cum adaptezi atelierul la vârstă și cum gestionezi subiectele sensibile',
            'Feedback de la ceilalți participanți pe planul tău',
          ],
          en: [
            'The shape of a 90-minute workshop: icebreaker, activity, debrief, evaluation',
            'Non-formal methods: role play, debate, case study, work stations',
            'Be Internet Awesome and the Interland game, for younger groups',
            'How to adapt the workshop to age and handle sensitive topics',
            'Feedback from the other participants on your plan',
          ],
        },
        tools: ['Be Internet Awesome', 'Mentimeter'],
        make: { ro: 'Planul complet al atelierului tău.', en: 'The full plan for your workshop.' },
      },
    ],
    tools: [
      { name: 'Google Lens', use: { ro: 'De unde vine o poză: căutare inversă.', en: 'Where a picture comes from: reverse search.' } },
      { name: 'TinEye', use: { ro: 'A doua căutare inversă, care arată și cea mai veche apariție.', en: 'A second reverse search that also shows the oldest copy.' } },
      { name: 'InVID-WeVerify', use: { ro: 'Extensie de browser pentru verificarea video și a imaginilor.', en: 'A browser extension for checking videos and images.' } },
      { name: 'Content Credentials', use: { ro: 'Arată, când există, cum a fost creată o imagine.', en: 'Shows, when present, how an image was made.' } },
      { name: 'Bad News', use: { ro: 'Joc în care tinerii devin, pentru 15 minute, autori de știri false.', en: 'A game where young people spend 15 minutes making fake news.' } },
      { name: 'Have I Been Pwned', use: { ro: 'Verifici dacă o adresă a apărut într-o scurgere de date.', en: 'Checks whether an address appeared in a data breach.' } },
      { name: 'Bitwarden', use: { ro: 'Manager de parole gratuit.', en: 'A free password manager.' } },
      { name: 'Be Internet Awesome', use: { ro: 'Programul Google despre siguranță online, cu jocul Interland.', en: "Google's online safety programme, with the Interland game." } },
      { name: 'Ora de Net', use: { ro: 'Programul Salvați Copiii: resurse, consiliere și raportare.', en: 'The Save the Children Romania programme: resources, counselling and reporting.' } },
    ],
    needs: {
      ro: [
        'Un laptop sau un calculator cu Chrome sau Edge (pentru extensia de verificare)',
        'Un telefon cu aplicațiile folosite de tinerii tăi, dacă le ai',
        'Un grup de tineri cu care lucrezi sau vei lucra',
        'Nu ai nevoie de cunoștințe tehnice',
      ],
      en: [
        'A laptop or computer with Chrome or Edge (for the checking extension)',
        'A phone with the apps your young people use, if you have them',
        'A group of young people you work with, or will',
        'No technical knowledge needed',
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
  if (text.program.length !== c.sessions) {
    throw new Error(`"${c.slug}" has ${c.sessions} sessions in catalog.json, but ${text.program.length} in courses.ts`)
  }
  return { ...(c as Omit<Course, keyof CourseText>), ...text }
})

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export const hoursLive = (c: Pick<Course, 'sessions' | 'hoursPerSession'>) => c.sessions * c.hoursPerSession
