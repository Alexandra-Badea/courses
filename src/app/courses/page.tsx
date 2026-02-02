'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/contexts/language-context'

const courses = [
  {
    id: 'excel',
    title: 'Microsoft Excel Mastery',
    description: 'Master Excel from basics to advanced formulas, pivot tables, and data analysis.',
    price: 199,
    duration: '6 weeks',
    level: 'Intermediate',
    category: 'Microsoft Office',
    icon: '📊',
    color: 'from-green-400 to-green-600',
    instructor: 'Sarah Johnson',
    schedule: 'Thursdays 7:00 PM',
    participants: '18/25',
    platform: 'Zoom',
    features: ['Advanced Formulas', 'Pivot Tables', 'Data Analysis', 'Charts & Graphs', 'Automation'],
    startDate: 'February 15, 2024'
  },
  {
    id: 'canva',
    title: 'Canva Design Fundamentals',
    description: 'Create stunning graphics, presentations, and marketing materials with Canva.',
    price: 149,
    duration: '4 weeks',
    level: 'Beginner',
    category: 'Design Tools',
    icon: '🎨',
    color: 'from-purple-400 to-purple-600',
    instructor: 'Michael Chen',
    schedule: 'Tuesdays 6:30 PM',
    participants: '22/30',
    platform: 'Google Meet',
    features: ['Design Principles', 'Brand Templates', 'Social Media Graphics', 'Presentations'],
    startDate: 'February 20, 2024'
  },
  {
    id: 'goosechase',
    title: 'GooseChase Educational Activities',
    description: 'Create engaging scavenger hunts and educational activities using GooseChase.',
    price: 99,
    duration: '3 weeks',
    level: 'Beginner',
    category: 'Educational Apps',
    icon: '🎮',
    color: 'from-orange-400 to-orange-600',
    instructor: 'Lisa Rodriguez',
    schedule: 'Fridays 7:30 PM',
    participants: '12/20',
    platform: 'Zoom',
    features: ['Interactive Missions', 'Gamification', 'Student Engagement', 'Assessment Tools'],
    startDate: 'March 1, 2024'
  },
  {
    id: 'powerpoint',
    title: 'PowerPoint Presentation Mastery',
    description: 'Create compelling presentations with advanced PowerPoint techniques.',
    price: 179,
    duration: '5 weeks',
    level: 'Intermediate',
    category: 'Microsoft Office',
    icon: '📽️',
    color: 'from-red-400 to-red-600',
    instructor: 'David Kim',
    schedule: 'Saturdays 6:00 PM',
    participants: '15/25',
    platform: 'Zoom',
    features: ['Design Principles', 'Animations', 'Interactive Elements', 'Presentation Skills'],
    startDate: 'February 10, 2024'
  },
  {
    id: 'padlet',
    title: 'Padlet for Collaborative Learning',
    description: 'Use Padlet to create interactive walls and collaborative learning experiences.',
    price: 79,
    duration: '2 weeks',
    level: 'Beginner',
    category: 'Educational Apps',
    icon: '📋',
    color: 'from-teal-400 to-teal-600',
    instructor: 'Emily Foster',
    schedule: 'Tuesdays 7:00 PM',
    participants: '8/15',
    platform: 'Google Meet',
    features: ['Collaborative Walls', 'Content Organization', 'Discussion Facilitation', 'Integration'],
    startDate: 'March 5, 2024'
  },
  {
    id: 'word',
    title: 'Microsoft Word Professional Documents',
    description: 'Create professional documents, reports, and publications using advanced Word features.',
    price: 159,
    duration: '4 weeks',
    level: 'Intermediate',
    category: 'Microsoft Office',
    icon: '📝',
    color: 'from-blue-400 to-blue-600',
    instructor: 'Robert Taylor',
    schedule: 'Sundays 6:30 PM',
    participants: '14/20',
    platform: 'Zoom',
    features: ['Advanced Formatting', 'Mail Merge', 'Forms', 'Collaboration Tools'],
    startDate: 'February 25, 2024'
  }
]

export default function CoursesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {t('courses')}
            <span className="text-blue-600"> CourseBug</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto">
            Enhance your skills with our comprehensive online courses. From Microsoft Office to creative tools,
            we have everything you need to advance your career.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
              <span className="text-sm font-medium text-gray-600">All Categories</span>
            </div>
            <div className="bg-blue-100 text-blue-800 rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Microsoft Office</span>
            </div>
            <div className="bg-purple-100 text-purple-800 rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Design Tools</span>
            </div>
            <div className="bg-orange-100 text-orange-800 rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Educational Apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Course Header */}
                <div className={`h-48 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                  <span className="text-white text-5xl">{course.icon}</span>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                      course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                  
                  {/* Course Details */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">👨‍🏫</span>
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">📅</span>
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">⏱️</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">👥</span>
                      <span>{course.participants} enrolled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">💻</span>
                      <span>Online via {course.platform}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                      {course.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          +{course.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                      <div className="text-xs text-gray-500">Starts {course.startDate}</div>
                    </div>
                    <Link 
                      href={`/courses/${course.id}`}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have advanced their careers with our expert-led courses.
            Get certified and boost your skills today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 inline-flex items-center justify-center">
              Contact Us
            </Link>
            <Link href="/about" className="border border-gray-300 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-gray-800 inline-flex items-center justify-center">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 