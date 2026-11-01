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
export type NoteColour = 'yellow' | 'pink' | 'mint' | 'blue' | 'peach' | 'lilac'

/** Who a course is for; the course list on the home page can be filtered by these */
export const audiences = ['everyone', 'teachers', 'youth'] as const
export type Audience = (typeof audiences)[number]

export interface Course {
  slug: string
  sessions: number
  hoursPerSession: number
  hoursPractice: number
  nextGroup: NextGroup | null
  price: { amount: number; currency: string } | null
  paymentLink: string | null
  colour: NoteColour
  audiences: Audience[]
  title: Text
  /** What you can do afterwards, in one sentence */
  outcome: Text
  audience: Text
  /** Printed on the certificate */
  skills: List
  program: Session[]
  tools: Tool[]
  /** Replaces the usual "all of them have a free version" line, when that isn't true for every tool */
  toolsNote?: Text
  needs: List
  finalTask: Text
}

type CourseText = Omit<Course, 'slug' | 'sessions' | 'hoursPerSession' | 'hoursPractice' | 'nextGroup' | 'price' | 'paymentLink'>

/** The words of each course. Numbers, dates, prices and payment links live in catalog.json. */
const texts: Record<string, CourseText> = {
  'ai-everyday': {
    colour: 'blue',
    audiences: ['everyone'],
    title: {
      ro: 'AI de la zero: ChatGPT și Gemini în viața de zi cu zi',
      en: 'AI from scratch: ChatGPT and Gemini in everyday life',
    },
    outcome: {
      ro: 'Folosești AI cu încredere pentru mesaje, planuri, traduceri, documente și poze, și știi când să nu te bazezi pe el.',
      en: 'Use AI with confidence for messages, plans, translations, documents and photos, and know when not to rely on it.',
    },
    audience: { ro: 'Oricine vrea să înceapă cu AI', en: 'Anyone who wants to start with AI' },
    skills: {
      ro: [
        'Folosirea asistenților AI (ChatGPT, Gemini, Copilot) pe calculator și pe telefon, în scris și cu vocea',
        'Redactarea, rezumarea și traducerea textelor cu ajutorul AI',
        'Lucrul cu poze și documente în chat și în NotebookLM',
        'Verificarea răspunsurilor AI și recunoașterea informațiilor inventate',
        'Protejarea datelor personale și recunoașterea înșelătoriilor făcute cu AI',
      ],
      en: [
        'Using AI assistants (ChatGPT, Gemini, Copilot) on a computer and a phone, by typing and by voice',
        'Writing, summarising and translating texts with AI',
        'Working with photos and documents in the chat and in NotebookLM',
        'Checking AI answers and recognising made-up information',
        'Protecting personal data and recognising scams made with AI',
      ],
    },
    program: [
      {
        title: { ro: 'Ce este AI și primii pași', en: 'What AI is, and your first steps' },
        learn: {
          ro: [
            'Ce poate și ce nu poate face un chatbot AI, explicat fără termeni tehnici',
            'Contul în ChatGPT, Gemini sau Copilot, pe calculator și pe telefon',
            'Prima conversație: cum întrebi, cum ceri o variantă mai bună, cum continui',
            'Vorbești în loc să scrii: modul vocal și pozele trimise în chat',
            'Ce nu spui niciodată unui chatbot: parole, date bancare, CNP, lucruri despre alții',
          ],
          en: [
            "What an AI chatbot can and can't do, explained without technical words",
            'Your account in ChatGPT, Gemini or Copilot, on a computer and a phone',
            'Your first conversation: how to ask, how to ask for a better version, how to carry on',
            'Talking instead of typing: voice mode and photos sent in the chat',
            'What you never tell a chatbot: passwords, bank details, ID numbers, things about other people',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Microsoft Copilot'],
        make: { ro: 'Contul tău pregătit și primele 5 conversații utile.', en: 'Your account set up and your first 5 useful conversations.' },
      },
      {
        title: { ro: 'AI pentru treburile de zi cu zi', en: 'AI for everyday jobs' },
        learn: {
          ro: [
            'E-mailuri și mesaje: scrise de la zero, scurtate, mai politicoase sau mai ferme',
            'Un document lung, un contract sau o factură, rezumate pe înțelesul tău',
            'Planuri: meniul săptămânii, o excursie, un buget lunar',
            'Traduceri, inclusiv din poze, cu Google Lens',
            'Explicații pe nivelul tău pentru orice vrei să înveți',
          ],
          en: [
            'Emails and messages: written from scratch, shortened, made more polite or firmer',
            'A long document, a contract or a bill, summed up in plain words',
            "Plans: the week's meals, a trip, a monthly budget",
            'Translations, including from photos, with Google Lens',
            'Explanations at your level for anything you want to learn',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Google Lens'],
        make: { ro: 'O listă cu 10 cereri pe care le vei folosi în fiecare săptămână.', en: "A list of 10 requests you'll use every week." },
      },
      {
        title: { ro: 'Poze, voce și documente', en: 'Pictures, voice and documents' },
        learn: {
          ro: [
            'Imagini create cu AI: felicitări, invitații, ilustrații, și unde greșesc încă',
            'Întrebări despre o poză: o plantă, o etichetă, un panou într-o limbă străină',
            'Un PDF încărcat în chat: întrebări, rezumat, lista cu ce ai de făcut',
            'NotebookLM: un asistent care răspunde doar din documentele tale',
            'Notițe vocale transformate în text ordonat',
          ],
          en: [
            'Images made with AI: cards, invitations, illustrations, and where they still go wrong',
            'Questions about a photo: a plant, a label, a sign in another language',
            'A PDF uploaded to the chat: questions, a summary, a to-do list',
            'NotebookLM: an assistant that answers only from your own documents',
            'Voice notes turned into tidy text',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'NotebookLM'],
        make: { ro: 'O invitație făcută cu AI și rezumatul unui document al tău.', en: 'An invitation made with AI, and a summary of one of your documents.' },
      },
      {
        title: { ro: 'Cum verifici ce îți spune AI; prezentarea temei finale', en: 'Checking what AI tells you; final task presentations' },
        learn: {
          ro: [
            'De ce AI inventează uneori și cum verifici un răspuns în două minute',
            'Când nu te bazezi pe AI: sănătate, bani, acte oficiale',
            'Deepfake-uri și înșelătorii cu voci clonate: cum le recunoști',
            'Setările de confidențialitate: istoricul conversațiilor și folosirea datelor tale',
            'Feedback de la ceilalți participanți',
          ],
          en: [
            'Why AI sometimes makes things up, and how to check an answer in two minutes',
            "When not to rely on AI: health, money, official papers",
            'Deepfakes and cloned-voice scams: how to recognise them',
            'Privacy settings: your chat history and how your data is used',
            'Feedback from the other participants',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Google Lens'],
        make: { ro: 'Regulile tale pentru folosirea AI, pe o pagină.', en: 'Your own rules for using AI, on one page.' },
      },
    ],
    tools: [
      { name: 'ChatGPT', use: { ro: 'Cel mai folosit asistent AI: întrebări, texte, planuri, poze.', en: 'The most used AI assistant: questions, texts, plans, pictures.' } },
      { name: 'Gemini', use: { ro: 'Asistentul AI de la Google, cu contul tău Google.', en: "Google's AI assistant, with your Google account." } },
      { name: 'Microsoft Copilot', use: { ro: 'Asistentul AI de la Microsoft, cu un cont Microsoft.', en: "Microsoft's AI assistant, with a Microsoft account." } },
      { name: 'NotebookLM', use: { ro: 'Răspunde doar din documentele pe care i le dai.', en: 'Answers only from the documents you give it.' } },
      { name: 'Google Lens', use: { ro: 'Traduce și explică ce fotografiezi.', en: 'Translates and explains what you photograph.' } },
    ],
    needs: {
      ro: [
        'Un calculator sau un laptop; telefonul e bun pentru exersat',
        'Un cont Google sau Microsoft',
        'Să știi să folosești un browser și emailul; restul îl facem împreună',
        'Nu ai nevoie de experiență cu AI',
      ],
      en: [
        'A computer or laptop; a phone is good for practice',
        'A Google or Microsoft account',
        'To be able to use a web browser and email; we do the rest together',
        'No experience with AI needed',
      ],
    },
    finalTask: {
      ro: 'Zece situații din viața ta în care AI te ajută, cu cererile testate și răspunsurile verificate.',
      en: 'Ten situations from your own life where AI helps, with the requests tested and the answers checked.',
    },
  },

  prompting: {
    colour: 'peach',
    audiences: ['everyone'],
    title: {
      ro: 'Prompturi care funcționează: răspunsuri bune de la AI, din prima',
      en: 'Prompts that work: good answers from AI, first time',
    },
    outcome: {
      ro: 'Scrii cereri clare, dai AI-ului contextul și exemplele potrivite și îți faci un asistent propriu pentru treburile pe care le repeți.',
      en: 'Write clear requests, give AI the right context and examples, and set up your own assistant for the jobs you repeat.',
    },
    audience: { ro: 'Oricine folosește deja ChatGPT sau Gemini', en: 'Anyone who already uses ChatGPT or Gemini' },
    skills: {
      ro: [
        'Structurarea prompturilor (rol, sarcină, context, format, exemple) în ChatGPT, Gemini și Claude',
        'Îmbunătățirea răspunsurilor prin conversație: critică, variante, întrebări de clarificare',
        'Lucrul cu fișiere (PDF, tabele, imagini) în asistenții AI',
        'Crearea unui asistent AI propriu (Gem în Gemini), cu instrucțiuni și fișiere',
        'Verificarea surselor și a afirmațiilor din răspunsurile AI',
      ],
      en: [
        'Structuring prompts (role, task, context, format, examples) in ChatGPT, Gemini and Claude',
        'Improving answers through conversation: critique, variations, clarifying questions',
        'Working with files (PDFs, spreadsheets, images) in AI assistants',
        'Building your own AI assistant (a Gem in Gemini) with instructions and files',
        'Checking the sources and claims in AI answers',
      ],
    },
    program: [
      {
        title: { ro: 'Ce face un prompt bun', en: 'What makes a good prompt' },
        learn: {
          ro: [
            'Rolul, sarcina, contextul, formatul și limitele: ce schimbă fiecare în răspuns',
            'Exemple în prompt: unul, mai multe sau un model de urmat',
            'Sarcinile complicate, împărțite în pași',
            'Aceeași cerere în ChatGPT, Gemini și Claude: ce diferă',
            'Cum compari răspunsurile și îl alegi pe cel bun',
          ],
          en: [
            'Role, task, context, format and limits: what each one changes in the answer',
            'Examples in the prompt: one, several, or a model to follow',
            'Complicated tasks, broken into steps',
            'The same request in ChatGPT, Gemini and Claude: what differs',
            'How to compare answers and pick the good one',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Claude'],
        make: { ro: 'Un șablon de prompt pe care îl refolosești.', en: 'A prompt template you can reuse.' },
      },
      {
        title: { ro: 'Conversații, nu întrebări izolate', en: 'Conversations, not one-off questions' },
        learn: {
          ro: [
            'Cum îmbunătățești un răspuns: critică, variante, „pune-mi întâi întrebări”',
            'Ton și stil: textul să sune ca tine, nu ca un robot',
            'Formatul pe care îl vrei: tabel, listă, e-mail, scenariu',
            'Fișierele tale în chat: PDF-uri, tabele, poze',
            'Când începi o conversație nouă și de ce',
          ],
          en: [
            "How to improve an answer: critique, variations, 'ask me questions first'",
            'Tone and style: text that sounds like you, not like a robot',
            'The format you want: a table, a list, an email, a script',
            'Your own files in the chat: PDFs, spreadsheets, photos',
            'When to start a new conversation, and why',
          ],
        },
        tools: ['ChatGPT', 'Gemini', 'Claude'],
        make: { ro: 'Un text important al tău, rescris cu AI în trei variante.', en: 'An important text of yours, rewritten with AI in three versions.' },
      },
      {
        title: { ro: 'Asistentul tău propriu', en: 'Your own assistant' },
        learn: {
          ro: [
            'Instrucțiunile personalizate: AI-ul știe cine ești și cum vrei răspunsurile',
            'Un Gem în Gemini pentru o sarcină pe care o repeți: instrucțiuni, fișiere, teste',
            'GPT-urile din ChatGPT și Proiectele din Claude: ce sunt și când merită',
            'NotebookLM pentru răspunsuri doar din documentele tale',
            'Biblioteca ta de prompturi: unde le păstrezi și cum le refolosești',
          ],
          en: [
            'Custom instructions: AI knows who you are and how you want answers',
            'A Gem in Gemini for a job you repeat: instructions, files, testing',
            "ChatGPT's GPTs and Claude's Projects: what they are and when they're worth it",
            'NotebookLM for answers drawn only from your own documents',
            'Your prompt library: where to keep prompts and how to reuse them',
          ],
        },
        tools: ['Gemini', 'ChatGPT', 'NotebookLM'],
        make: { ro: 'Un asistent propriu (Gem) pentru o sarcină din munca sau viața ta.', en: 'Your own assistant (a Gem) for a job from your work or life.' },
      },
      {
        title: { ro: 'Surse, verificare și limite; prezentarea temei finale', en: 'Sources, checking and limits; final task presentations' },
        learn: {
          ro: [
            'Cum ceri surse și cum verifici dacă spun ce susține AI',
            'Căutarea cu AI, cu linkuri: Perplexity și căutarea din ChatGPT',
            'Răspunsuri părtinitoare sau prea sigure pe ele: cum le prinzi',
            'Ce date nu pui niciodată într-un prompt',
            'Feedback de la ceilalți participanți',
          ],
          en: [
            'How to ask for sources and check that they say what AI claims',
            'Searching with AI, with links: Perplexity and ChatGPT search',
            'Biased or overconfident answers: how to catch them',
            'What data you never put in a prompt',
            'Feedback from the other participants',
          ],
        },
        tools: ['Perplexity', 'ChatGPT', 'Gemini'],
        make: { ro: 'Biblioteca ta de prompturi testate, gata de folosit.', en: 'Your library of tested prompts, ready to use.' },
      },
    ],
    tools: [
      { name: 'ChatGPT', use: { ro: 'Asistentul AI pe care îl folosesc cei mai mulți.', en: 'The AI assistant most people use.' } },
      { name: 'Gemini', use: { ro: 'Asistentul Google; aici îți faci Gem-ul.', en: "Google's assistant; where you build your Gem." } },
      { name: 'Claude', use: { ro: 'Al treilea asistent, bun pentru texte lungi și documente.', en: 'A third assistant, good with long texts and documents.' } },
      { name: 'NotebookLM', use: { ro: 'Răspunde doar din documentele pe care i le dai.', en: 'Answers only from the documents you give it.' } },
      { name: 'Perplexity', use: { ro: 'Căutare cu AI, cu sursele afișate.', en: 'AI search that shows its sources.' } },
    ],
    needs: {
      ro: [
        'Un calculator sau un laptop',
        'Un cont Google (pentru Gemini și NotebookLM)',
        'Să fi folosit măcar de câteva ori ChatGPT sau Gemini',
        'Câteva sarcini din munca sau viața ta pe care vrei să le faci mai repede',
      ],
      en: [
        'A computer or laptop',
        'A Google account (for Gemini and NotebookLM)',
        'To have used ChatGPT or Gemini at least a few times',
        'A few jobs from your work or life you want to do faster',
      ],
    },
    finalTask: {
      ro: 'O bibliotecă de 15 prompturi testate pentru munca sau viața ta și un asistent propriu care face una dintre sarcini.',
      en: 'A library of 15 tested prompts for your work or life, and your own assistant that does one of the jobs.',
    },
  },

  'ai-at-work': {
    colour: 'lilac',
    audiences: ['everyone'],
    title: {
      ro: 'AI la birou: e-mailuri, tabele, prezentări și ședințe, mai repede',
      en: 'AI at work: emails, spreadsheets, slides and meetings, faster',
    },
    outcome: {
      ro: 'Folosești Copilot, Gemini și ChatGPT în munca de zi cu zi și automatizezi o sarcină repetitivă, fără să pui în pericol datele firmei.',
      en: 'Use Copilot, Gemini and ChatGPT in your daily work and automate a repetitive task, without putting company data at risk.',
    },
    audience: { ro: 'Angajați, antreprenori și liber-profesioniști', en: 'Employees, business owners and freelancers' },
    skills: {
      ro: [
        'Redactarea și rezumarea e-mailurilor și documentelor de lucru cu Copilot, Gemini și ChatGPT',
        'Scrierea de formule, curățarea și analiza datelor în Excel și Google Sheets cu ajutorul AI',
        'Realizarea de prezentări și rezumate de ședință cu AI',
        'Automatizarea unei sarcini repetitive fără programare (Zapier sau Make)',
        'Folosirea responsabilă a AI cu datele firmei (GDPR, AI Act)',
      ],
      en: [
        'Writing and summarising work emails and documents with Copilot, Gemini and ChatGPT',
        'Writing formulas, cleaning and analysing data in Excel and Google Sheets with AI',
        'Making presentations and meeting summaries with AI',
        'Automating a repetitive task without coding (Zapier or Make)',
        'Using AI responsibly with company data (GDPR, AI Act)',
      ],
    },
    program: [
      {
        title: { ro: 'E-mailuri, documente și rapoarte', en: 'Emails, documents and reports' },
        learn: {
          ro: [
            'Răspunsuri la e-mailuri, oferte și mesaje dificile, în tonul firmei',
            'Rapoarte și documente pornind de la notițele tale',
            'Copilot în Word și Outlook, Gemini în Gmail și Docs: ce face fiecare',
            'Rezumatul unui document lung și compararea a două versiuni',
            'Șabloane pentru textele pe care le scrii des',
          ],
          en: [
            "Replies to emails, quotes and difficult messages, in your company's tone",
            'Reports and documents built from your notes',
            'Copilot in Word and Outlook, Gemini in Gmail and Docs: what each one does',
            'Summing up a long document and comparing two versions',
            'Templates for the texts you write often',
          ],
        },
        tools: ['Microsoft Copilot', 'Gemini', 'ChatGPT'],
        make: { ro: 'Șabloane AI pentru e-mailurile și rapoartele pe care le scrii des.', en: 'AI templates for the emails and reports you write often.' },
      },
      {
        title: { ro: 'Tabele și date', en: 'Spreadsheets and data' },
        learn: {
          ro: [
            'Formule scrise și explicate de AI, în Excel și Google Sheets',
            'Date curățate: dubluri, formate diferite, coloane de împărțit',
            'Analiză rapidă: tabele pivot, grafice și ce se vede din ele',
            'Un tabel încărcat în ChatGPT pentru analiză, și cum verifici rezultatul',
            'Ce date nu încarci niciodată',
          ],
          en: [
            'Formulas written and explained by AI, in Excel and Google Sheets',
            'Cleaned-up data: duplicates, mixed formats, columns to split',
            'Quick analysis: pivot tables, charts and what they show',
            'A spreadsheet uploaded to ChatGPT for analysis, and how to check the result',
            'What data you never upload',
          ],
        },
        tools: ['Excel', 'Google Sheets', 'ChatGPT'],
        make: { ro: 'Un tabel din munca ta, curățat și analizat, cu un grafic.', en: 'A spreadsheet from your work, cleaned and analysed, with a chart.' },
      },
      {
        title: { ro: 'Prezentări, ședințe și imagini', en: 'Slides, meetings and images' },
        learn: {
          ro: [
            'O prezentare pornind de la un document, în Canva sau PowerPoint',
            'Notițe de ședință: din transcriere într-un rezumat cu sarcini și termene',
            'NotebookLM pentru documentele unui proiect: întrebări, rezumate, ghid',
            'Imagini și grafice pentru postări și materiale',
            'Cum păstrezi identitatea vizuală a firmei',
          ],
          en: [
            'A presentation built from a document, in Canva or PowerPoint',
            'Meeting notes: from a transcript to a summary with tasks and deadlines',
            "NotebookLM for a project's documents: questions, summaries, a briefing",
            'Images and charts for posts and materials',
            "How to keep the company's visual identity",
          ],
        },
        tools: ['Canva', 'PowerPoint', 'NotebookLM'],
        make: { ro: 'O prezentare de 10 slide-uri pornind de la un document al tău.', en: 'A 10-slide presentation built from one of your documents.' },
      },
      {
        title: { ro: 'Automatizări, agenți și regulile firmei; prezentarea temei finale', en: 'Automation, agents and company rules; final task presentations' },
        learn: {
          ro: [
            'Ce sunt agenții AI și ce pot face azi, realist',
            'O sarcină repetitivă automatizată fără programare, cu Zapier sau Make',
            'Datele firmei: ce ai voie să pui într-un AI și ce variante există pentru firme',
            'GDPR și AI Act, pe scurt: ce contează pentru cine folosește AI la muncă',
            'Feedback de la ceilalți participanți',
          ],
          en: [
            'What AI agents are and what they can really do today',
            'A repetitive task automated without coding, with Zapier or Make',
            'Company data: what you may put into an AI, and the business versions',
            'GDPR and the AI Act, briefly: what matters if you use AI at work',
            'Feedback from the other participants',
          ],
        },
        tools: ['Zapier', 'Make', 'Microsoft Copilot'],
        make: { ro: 'O automatizare care face în locul tău o sarcină repetitivă.', en: 'An automation that does a repetitive task for you.' },
      },
    ],
    tools: [
      { name: 'Microsoft Copilot', use: { ro: 'Asistentul AI de la Microsoft, și în Word, Excel, PowerPoint și Outlook.', en: "Microsoft's AI assistant, also inside Word, Excel, PowerPoint and Outlook." } },
      { name: 'Gemini', use: { ro: 'Asistentul AI de la Google, și în Gmail, Docs și Sheets.', en: "Google's AI assistant, also inside Gmail, Docs and Sheets." } },
      { name: 'ChatGPT', use: { ro: 'Texte, analiză de tabele, idei.', en: 'Texts, spreadsheet analysis, ideas.' } },
      { name: 'Excel', use: { ro: 'Tabele și formule, cu ajutorul AI.', en: 'Spreadsheets and formulas, with help from AI.' } },
      { name: 'Google Sheets', use: { ro: 'Același lucru, în varianta Google.', en: 'The same, the Google way.' } },
      { name: 'PowerPoint', use: { ro: 'Prezentări pornind de la documente.', en: 'Presentations built from documents.' } },
      { name: 'Canva', use: { ro: 'Prezentări și imagini, cu variantă gratuită.', en: 'Presentations and images, with a free version.' } },
      { name: 'NotebookLM', use: { ro: 'Răspunde doar din documentele proiectului.', en: "Answers only from the project's documents." } },
      { name: 'Zapier', use: { ro: 'Automatizări între aplicații, fără cod.', en: 'Automations between apps, without code.' } },
      { name: 'Make', use: { ro: 'Automatizări vizuale, pas cu pas.', en: 'Visual automations, step by step.' } },
    ],
    toolsNote: {
      ro: 'ChatGPT, Gemini, Copilot, NotebookLM, Canva, Zapier și Make au variante gratuite. AI-ul din Word, Excel, PowerPoint, Outlook, Gmail și Docs vine cu unele abonamente Microsoft 365 și Google Workspace; îți arăt ce poți face cu ele și fără ele.',
      en: 'ChatGPT, Gemini, Copilot, NotebookLM, Canva, Zapier and Make have free versions. The AI inside Word, Excel, PowerPoint, Outlook, Gmail and Docs comes with some Microsoft 365 and Google Workspace plans; I show you what you can do with and without them.',
    },
    needs: {
      ro: [
        'Un laptop sau un calculator',
        'Contul de la serviciu (Microsoft 365 sau Google Workspace), dacă îl ai, sau unul personal',
        'Câteva documente și tabele de lucru, fără date confidențiale',
        'Nu ai nevoie de cunoștințe tehnice',
      ],
      en: [
        'A laptop or computer',
        'Your work account (Microsoft 365 or Google Workspace) if you have one, or a personal one',
        'A few work documents and spreadsheets, without confidential data',
        'No technical knowledge needed',
      ],
    },
    finalTask: {
      ro: 'Trei sarcini din munca ta făcute cu AI (un e-mail-tip, un tabel analizat și o automatizare), cu timpul economisit la fiecare.',
      en: 'Three tasks from your own work done with AI (a template email, an analysed spreadsheet and an automation), with the time each one saves.',
    },
  },

  'ai-teaching': {
    colour: 'yellow',
    audiences: ['teachers'],
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
    audiences: ['teachers', 'youth'],
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
    audiences: ['youth', 'teachers'],
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
