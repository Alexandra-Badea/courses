'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/contexts/language-context'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {t('about')}
            <span className="text-blue-600"> CourseBug</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto">
            {t('footerDescription')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At CourseHub, we believe that everyone deserves access to high-quality digital skills training. 
                Our mission is to bridge the gap between traditional education and the rapidly evolving digital workplace.
              </p>
              <p className="text-gray-700 mb-4">
                We specialize in practical, hands-on training for Microsoft Office applications, creative design tools, 
                and educational technology platforms. Our courses are designed by industry experts and delivered 
                through interactive online sessions that fit your schedule.
              </p>
              <p className="text-gray-700">
                Whether you're a professional looking to advance your career, an educator seeking to enhance 
                your teaching toolkit, or someone wanting to stay current with technology, we're here to guide 
                your learning journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-semibold">Expert Instructors</h4>
                    <p className="text-blue-100">Certified professionals with real-world experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-semibold">Proven Results</h4>
                    <p className="text-blue-100">500+ successful graduates with measurable skill improvements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="font-semibold">Flexible Learning</h4>
                    <p className="text-blue-100">Evening sessions designed for working professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Making a difference in professional development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Course Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Instructors</h2>
            <p className="text-lg text-gray-600">Expert practitioners dedicated to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Excel & Data Analysis Expert',
                credentials: 'Microsoft Certified Expert',
                experience: '10+ years',
                specialties: ['Advanced Excel', 'Data Analysis', 'Financial Modeling']
              },
              {
                name: 'Michael Chen',
                role: 'Design & Creative Tools Specialist',
                credentials: 'Adobe Certified Expert',
                experience: '8+ years',
                specialties: ['Canva Design', 'Visual Communication', 'Brand Development']
              },
              {
                name: 'Lisa Rodriguez',
                role: 'Educational Technology Specialist',
                credentials: 'Google for Education Certified',
                experience: '12+ years',
                specialties: ['GooseChase', 'Padlet', 'Interactive Learning']
              },
              {
                name: 'David Kim',
                role: 'Presentation & Communication Expert',
                credentials: 'Microsoft Office Specialist',
                experience: '9+ years',
                specialties: ['PowerPoint', 'Public Speaking', 'Visual Storytelling']
              },
              {
                name: 'Emily Foster',
                role: 'Collaborative Learning Specialist',
                credentials: 'Educational Technology Certified',
                experience: '7+ years',
                specialties: ['Digital Collaboration', 'Online Facilitation', 'Engagement Strategies']
              },
              {
                name: 'Robert Taylor',
                role: 'Document Design & Writing Expert',
                credentials: 'Microsoft Word Specialist',
                experience: '11+ years',
                specialties: ['Professional Writing', 'Document Design', 'Template Creation']
              }
            ].map((instructor, index) => (
              <div key={index} className="bg-white rounded-lg shadow border p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                <p className="text-gray-600 mb-2">{instructor.role}</p>
                <p className="text-sm text-blue-600 mb-2">{instructor.credentials}</p>
                <p className="text-sm text-gray-500 mb-3">{instructor.experience}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {instructor.specialties.map((specialty, specialtyIndex) => (
                    <span key={specialtyIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
              <p className="text-gray-600">
                We maintain the highest standards in curriculum design and instruction delivery
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Success</h3>
              <p className="text-gray-600">
                Your success is our success. We provide ongoing support throughout your learning journey
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously update our courses to reflect the latest industry trends and technologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Learning should be accessible to everyone, regardless of their schedule or location
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
              <p className="text-gray-600">
                All our courses emphasize real-world application and immediate workplace value
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from course content to student support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have advanced their careers with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-100 inline-flex items-center justify-center">
              Browse Our Courses
            </Link>
            <Link href="/contact" className="border border-white text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 