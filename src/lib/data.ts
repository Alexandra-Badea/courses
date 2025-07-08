import { Course } from '@/types/course'

export const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Microsoft Excel Mastery',
    description: 'Master Excel from basics to advanced formulas, pivot tables, and data analysis.',
    longDescription: 'This comprehensive Excel course covers everything from basic spreadsheet navigation to advanced data analysis techniques. Learn formulas, functions, pivot tables, charts, and data visualization. Perfect for professionals looking to boost their productivity.',
    instructor: 'Sarah Johnson',
    duration: '6 weeks',
    price: 199,
    level: 'Intermediate',
    category: 'Microsoft Office',
    image: '/images/excel-course.jpg',
    tags: ['Excel', 'Data Analysis', 'Spreadsheets', 'Business'],
    schedule: {
      startDate: '2024-02-15',
      endDate: '2024-03-29',
      sessions: [
        { id: '1', date: '2024-02-15', time: '7:00 PM', duration: '2 hours', topic: 'Excel Basics & Navigation' },
        { id: '2', date: '2024-02-22', time: '7:00 PM', duration: '2 hours', topic: 'Formulas & Functions' },
        { id: '3', date: '2024-03-01', time: '7:00 PM', duration: '2 hours', topic: 'Advanced Functions & Data Analysis' },
        { id: '4', date: '2024-03-08', time: '7:00 PM', duration: '2 hours', topic: 'Pivot Tables & Charts' },
        { id: '5', date: '2024-03-15', time: '7:00 PM', duration: '2 hours', topic: 'Data Visualization & Dashboards' },
        { id: '6', date: '2024-03-22', time: '7:00 PM', duration: '2 hours', topic: 'Advanced Tips & Automation' }
      ]
    },
    maxParticipants: 25,
    currentParticipants: 18,
    certificateIncluded: true,
    platform: 'Zoom'
  },
  {
    id: '2',
    title: 'Canva Design Fundamentals',
    description: 'Create stunning graphics, presentations, and marketing materials with Canva.',
    longDescription: 'Learn to create professional-looking designs using Canva. This course covers design principles, branding, social media graphics, presentations, and marketing materials. No prior design experience required.',
    instructor: 'Michael Chen',
    duration: '4 weeks',
    price: 149,
    level: 'Beginner',
    category: 'Design Tools',
    image: '/images/canva-course.jpg',
    tags: ['Canva', 'Design', 'Graphics', 'Marketing'],
    schedule: {
      startDate: '2024-02-20',
      endDate: '2024-03-13',
      sessions: [
        { id: '1', date: '2024-02-20', time: '6:30 PM', duration: '1.5 hours', topic: 'Canva Basics & Interface' },
        { id: '2', date: '2024-02-27', time: '6:30 PM', duration: '1.5 hours', topic: 'Design Principles & Branding' },
        { id: '3', date: '2024-03-06', time: '6:30 PM', duration: '1.5 hours', topic: 'Social Media Graphics & Templates' },
        { id: '4', date: '2024-03-13', time: '6:30 PM', duration: '1.5 hours', topic: 'Presentations & Marketing Materials' }
      ]
    },
    maxParticipants: 30,
    currentParticipants: 22,
    certificateIncluded: true,
    platform: 'Google Meet'
  },
  {
    id: '3',
    title: 'GooseChase Educational Activities',
    description: 'Create engaging scavenger hunts and educational activities using GooseChase.',
    longDescription: 'Discover how to use GooseChase to create interactive learning experiences. Perfect for educators looking to gamify their teaching and create engaging activities for students of all ages.',
    instructor: 'Lisa Rodriguez',
    duration: '3 weeks',
    price: 99,
    level: 'Beginner',
    category: 'Educational Apps',
    image: '/images/goosechase-course.jpg',
    tags: ['GooseChase', 'Education', 'Gamification', 'Interactive Learning'],
    schedule: {
      startDate: '2024-03-01',
      endDate: '2024-03-15',
      sessions: [
        { id: '1', date: '2024-03-01', time: '7:30 PM', duration: '1.5 hours', topic: 'GooseChase Introduction & Setup' },
        { id: '2', date: '2024-03-08', time: '7:30 PM', duration: '1.5 hours', topic: 'Creating Engaging Missions' },
        { id: '3', date: '2024-03-15', time: '7:30 PM', duration: '1.5 hours', topic: 'Advanced Features & Best Practices' }
      ]
    },
    maxParticipants: 20,
    currentParticipants: 12,
    certificateIncluded: true,
    platform: 'Zoom'
  },
  {
    id: '4',
    title: 'PowerPoint Presentation Mastery',
    description: 'Create compelling presentations with advanced PowerPoint techniques.',
    longDescription: 'Transform your presentation skills with this comprehensive PowerPoint course. Learn design principles, animation techniques, interactive elements, and how to deliver impactful presentations that engage your audience.',
    instructor: 'David Kim',
    duration: '5 weeks',
    price: 179,
    level: 'Intermediate',
    category: 'Microsoft Office',
    image: '/images/powerpoint-course.jpg',
    tags: ['PowerPoint', 'Presentations', 'Public Speaking', 'Design'],
    schedule: {
      startDate: '2024-02-10',
      endDate: '2024-03-16',
      sessions: [
        { id: '1', date: '2024-02-10', time: '6:00 PM', duration: '2 hours', topic: 'PowerPoint Fundamentals' },
        { id: '2', date: '2024-02-17', time: '6:00 PM', duration: '2 hours', topic: 'Design Principles & Templates' },
        { id: '3', date: '2024-02-24', time: '6:00 PM', duration: '2 hours', topic: 'Animations & Transitions' },
        { id: '4', date: '2024-03-02', time: '6:00 PM', duration: '2 hours', topic: 'Interactive Elements & Multimedia' },
        { id: '5', date: '2024-03-09', time: '6:00 PM', duration: '2 hours', topic: 'Presentation Delivery & Tips' }
      ]
    },
    maxParticipants: 25,
    currentParticipants: 15,
    certificateIncluded: true,
    platform: 'Zoom'
  },
  {
    id: '5',
    title: 'Padlet for Collaborative Learning',
    description: 'Use Padlet to create interactive walls and collaborative learning experiences.',
    longDescription: 'Learn how to leverage Padlet for education and collaboration. This course covers creating interactive walls, organizing content, facilitating discussions, and integrating Padlet into your teaching or business workflow.',
    instructor: 'Emily Foster',
    duration: '2 weeks',
    price: 79,
    level: 'Beginner',
    category: 'Educational Apps',
    image: '/images/padlet-course.jpg',
    tags: ['Padlet', 'Collaboration', 'Education', 'Digital Tools'],
    schedule: {
      startDate: '2024-03-05',
      endDate: '2024-03-12',
      sessions: [
        { id: '1', date: '2024-03-05', time: '7:00 PM', duration: '1.5 hours', topic: 'Padlet Basics & Wall Creation' },
        { id: '2', date: '2024-03-12', time: '7:00 PM', duration: '1.5 hours', topic: 'Advanced Features & Integration' }
      ]
    },
    maxParticipants: 15,
    currentParticipants: 8,
    certificateIncluded: true,
    platform: 'Google Meet'
  },
  {
    id: '6',
    title: 'Microsoft Word Professional Documents',
    description: 'Create professional documents, reports, and publications using advanced Word features.',
    longDescription: 'Master Microsoft Word beyond basic typing. Learn to create professional documents with advanced formatting, styles, mail merge, forms, and collaboration features. Perfect for administrative professionals and content creators.',
    instructor: 'Robert Taylor',
    duration: '4 weeks',
    price: 159,
    level: 'Intermediate',
    category: 'Microsoft Office',
    image: '/images/word-course.jpg',
    tags: ['Microsoft Word', 'Document Design', 'Professional Writing', 'Templates'],
    schedule: {
      startDate: '2024-02-25',
      endDate: '2024-03-18',
      sessions: [
        { id: '1', date: '2024-02-25', time: '6:30 PM', duration: '2 hours', topic: 'Advanced Formatting & Styles' },
        { id: '2', date: '2024-03-04', time: '6:30 PM', duration: '2 hours', topic: 'Tables, Charts & Graphics' },
        { id: '3', date: '2024-03-11', time: '6:30 PM', duration: '2 hours', topic: 'Mail Merge & Forms' },
        { id: '4', date: '2024-03-18', time: '6:30 PM', duration: '2 hours', topic: 'Collaboration & Document Management' }
      ]
    },
    maxParticipants: 20,
    currentParticipants: 14,
    certificateIncluded: true,
    platform: 'Zoom'
  }
] 