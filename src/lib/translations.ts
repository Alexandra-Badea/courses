export const translations = {
  en: {
    // Navigation
    home: 'Home',
    courses: 'Courses',
    about: 'About',
    contact: 'Contact',
    browseCourses: 'Browse Courses',
    
    // Hero
    newCoursesMonthly: 'New courses added monthly',
    heroTitle: 'Master Digital Skills with',
    heroTitleHighlight: 'Expert Training',
    heroDescription: 'Learn Microsoft Office, Canva, educational apps, and more through interactive online courses. Get certified and boost your career with hands-on training from industry experts.',
    browseAllCourses: 'Browse All Courses',
    learnMore: 'Learn More',
    
    // Stats
    studentsTrained: 'Students Trained',
    averageRating: 'Average Rating',
    getCertified: 'Get Certified',
    
    // Featured Courses
    featuredCourses: 'Featured Courses',
    featuredCoursesSubtitle: 'Start your learning journey with our most popular courses',
    intermediate: 'Intermediate',
    beginner: 'Beginner',
    microsoftOffice: 'Microsoft Office',
    designTools: 'Design Tools',
    educationalApps: 'Educational Apps',
    excelTitle: 'Microsoft Excel Mastery',
    excelDescription: 'Master Excel from basics to advanced formulas, pivot tables, and data analysis.',
    canvaTitle: 'Canva Design Fundamentals',
    canvaDescription: 'Create stunning graphics, presentations, and marketing materials with Canva.',
    gooseChaseTitle: 'GooseChase Activities',
    gooseChaseDescription: 'Create engaging scavenger hunts and educational activities using GooseChase.',
    viewAllCourses: 'View All Courses',
    
    // Features
    whyChoose: 'Why Choose Our Courses?',
    whyChooseSubtitle: 'We provide comprehensive training designed for real-world application',
    expertInstructors: 'Expert Instructors',
    expertInstructorsDesc: 'Learn from industry professionals with years of practical experience',
    handsOnLearning: 'Hands-on Learning',
    handsOnLearningDesc: 'Practice with real projects and get immediate feedback on your progress',
    getCertifiedTitle: 'Get Certified',
    getCertifiedDesc: 'Earn a participation certificate upon course completion to showcase your skills',
    flexibleSchedule: 'Flexible Schedule',
    flexibleScheduleDesc: 'Evening classes designed to fit around your work and personal commitments',
    smallClassSizes: 'Small Class Sizes',
    smallClassSizesDesc: 'Limited participants ensure personalized attention and quality interaction',
    onlineConvenience: 'Online Convenience',
    onlineConvenienceDesc: 'Learn from anywhere with Zoom and Google Meet integration',
    
    // Footer
    footerDescription: 'Empowering professionals with digital skills training and certification programs.',
    company: 'Company',
    aboutUs: 'About Us',
    allCourses: 'All Courses',
    contactTitle: 'Contact',
    email: 'Email',
    phone: 'Phone',
    support: 'Support: Monday - Friday',
    copyright: '© 2024 CourseBug. All rights reserved.',
  },
  ro: {
    // Navigation
    home: 'Acasă',
    courses: 'Cursuri',
    about: 'Despre',
    contact: 'Contact',
    browseCourses: 'Explorează Cursurile',
    
    // Hero
    newCoursesMonthly: 'Cursuri noi adăugate lunar',
    heroTitle: 'Stăpânește Abilitățile Digitale cu',
    heroTitleHighlight: 'Instruire de Expert',
    heroDescription: 'Învață Microsoft Office, Canva, aplicații educaționale și multe altele prin cursuri online interactive. Obține certificare și avansează în carieră cu instruire practică de la experți din industrie.',
    browseAllCourses: 'Vezi Toate Cursurile',
    learnMore: 'Află Mai Mult',
    
    // Stats
    studentsTrained: 'Studenți Instruiți',
    averageRating: 'Rating Mediu',
    getCertified: 'Obține Certificare',
    
    // Featured Courses
    featuredCourses: 'Cursuri Recomandate',
    featuredCoursesSubtitle: 'Începe călătoria ta de învățare cu cele mai populare cursuri',
    intermediate: 'Intermediar',
    beginner: 'Începător',
    microsoftOffice: 'Microsoft Office',
    designTools: 'Instrumente de Design',
    educationalApps: 'Aplicații Educaționale',
    excelTitle: 'Stăpânirea Microsoft Excel',
    excelDescription: 'Stăpânește Excel de la bază până la formule avansate, tabele pivot și analiză de date.',
    canvaTitle: 'Fundamentele Design-ului în Canva',
    canvaDescription: 'Creează grafice uimitoare, prezentări și materiale de marketing cu Canva.',
    gooseChaseTitle: 'Activități GooseChase',
    gooseChaseDescription: 'Creează vânători de comori captivante și activități educaționale folosind GooseChase.',
    viewAllCourses: 'Vezi Toate Cursurile',
    
    // Features
    whyChoose: 'De Ce Să Alegi Cursurile Noastre?',
    whyChooseSubtitle: 'Oferim instruire cuprinzătoare concepută pentru aplicare în lumea reală',
    expertInstructors: 'Instructori Experți',
    expertInstructorsDesc: 'Învață de la profesioniști din industrie cu ani de experiență practică',
    handsOnLearning: 'Învățare Practică',
    handsOnLearningDesc: 'Exersează cu proiecte reale și primește feedback imediat asupra progresului tău',
    getCertifiedTitle: 'Obține Certificare',
    getCertifiedDesc: 'Câștigă un certificat de participare la finalizarea cursului pentru a-ți prezenta abilitățile',
    flexibleSchedule: 'Program Flexibil',
    flexibleScheduleDesc: 'Cursuri serale concepute să se potrivească programului tău de lucru și angajamentelor personale',
    smallClassSizes: 'Grupe Mici',
    smallClassSizesDesc: 'Participanți limitați asigură atenție personalizată și interacțiune de calitate',
    onlineConvenience: 'Comoditate Online',
    onlineConvenienceDesc: 'Învață de oriunde cu integrare Zoom și Google Meet',
    
    // Footer
    footerDescription: 'Împuternicim profesioniștii cu instruire în abilități digitale și programe de certificare.',
    company: 'Companie',
    aboutUs: 'Despre Noi',
    allCourses: 'Toate Cursurile',
    contactTitle: 'Contact',
    email: 'Email',
    phone: 'Telefon',
    support: 'Suport: Luni - Vineri',
    copyright: '© 2024 CourseBug. Toate drepturile rezervate.',
  }
}

export type Language = 'en' | 'ro'
export type TranslationKey = keyof typeof translations.en
