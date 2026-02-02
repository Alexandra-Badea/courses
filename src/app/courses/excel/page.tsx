import Link from 'next/link'

export default function ExcelCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold">CourseHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600">Home</Link>
            <Link href="/courses" className="text-sm font-medium hover:text-blue-600">Courses</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600">Contact</Link>
          </nav>
          
          <Link href="/courses" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            Browse Courses
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-blue-600">Courses</Link>
            <span>/</span>
            <span className="text-gray-900">Microsoft Excel Mastery</span>
          </div>
        </div>
      </div>

      {/* Course Hero */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-3xl">📊</span>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Microsoft Excel Mastery</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Intermediate</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Microsoft Office</span>
                    <span>⭐ 4.9 (127 reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Transform your Excel skills from basic to advanced with this comprehensive 6-week course. 
                Master formulas, pivot tables, data analysis, and automation techniques that will make you 
                indispensable in any workplace.
              </p>

              {/* What You'll Learn */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">What You&apos;ll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Advanced Excel formulas and functions',
                    'Creating dynamic pivot tables and charts',
                    'Data analysis and visualization techniques',
                    'Conditional formatting and data validation',
                    'Automating tasks with macros and VBA basics',
                    'Professional dashboard creation',
                    'Financial modeling and forecasting',
                    'Data import/export and external connections'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                <div className="space-y-4">
                  {[
                    {
                      week: 'Week 1',
                      title: 'Excel Basics & Navigation',
                      topics: ['Interface overview', 'Basic formulas', 'Cell references', 'Formatting']
                    },
                    {
                      week: 'Week 2',
                      title: 'Formulas & Functions',
                      topics: ['VLOOKUP & HLOOKUP', 'IF statements', 'TEXT functions', 'Date & Time functions']
                    },
                    {
                      week: 'Week 3',
                      title: 'Advanced Functions & Data Analysis',
                      topics: ['INDEX & MATCH', 'Array formulas', 'Statistical functions', 'Data validation']
                    },
                    {
                      week: 'Week 4',
                      title: 'Pivot Tables & Charts',
                      topics: ['Creating pivot tables', 'Pivot chart creation', 'Slicers & filters', 'Data modeling']
                    },
                    {
                      week: 'Week 5',
                      title: 'Data Visualization & Dashboards',
                      topics: ['Advanced charts', 'Conditional formatting', 'Dashboard design', 'Interactive elements']
                    },
                    {
                      week: 'Week 6',
                      title: 'Advanced Tips & Automation',
                      topics: ['Macro recording', 'VBA basics', 'Data connections', 'Best practices']
                    }
                  ].map((week, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{week.week}: {week.title}</h3>
                        <span className="text-sm text-gray-500">2 hours</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {week.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Instructor</h2>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">SJ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                    <p className="text-gray-600">Excel Certified Expert & Data Analyst</p>
                    <p className="text-sm text-gray-600 mt-1">
                      10+ years of experience in data analysis and Excel training. 
                      Certified Microsoft Excel Expert with over 2,000 students trained.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sticky top-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$199</div>
                  <div className="text-sm text-gray-500">One-time payment</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-blue-600">📅</span>
                    <span>Starts February 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-blue-600">⏱️</span>
                    <span>6 weeks • 2 hours per session</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-blue-600">📍</span>
                    <span>Online via Zoom</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-blue-600">👥</span>
                    <span>18/25 enrolled • 7 spots left</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-blue-600">🏆</span>
                    <span>Certificate included</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-blue-600">💰</span>
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                  Enroll Now
                </button>

                <div className="text-center text-sm text-gray-600 mb-4">
                  Secure payment with 256-bit SSL encryption
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">This course includes:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>12 hours of live instruction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Practice exercises and assignments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Course materials and templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Lifetime access to recordings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'PowerPoint Presentation Mastery',
                price: '$179',
                icon: '📽️',
                color: 'from-red-400 to-red-600'
              },
              {
                title: 'Microsoft Word Professional Documents',
                price: '$159',
                icon: '📝',
                color: 'from-blue-400 to-blue-600'
              },
              {
                title: 'Canva Design Fundamentals',
                price: '$149',
                icon: '🎨',
                color: 'from-purple-400 to-purple-600'
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow border overflow-hidden hover:shadow-md transition-shadow">
                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <span className="text-white text-3xl">{course.icon}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{course.price}</span>
                    <Link href="/courses" className="text-blue-600 text-sm hover:underline">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CourseHub</h3>
              <p className="text-gray-300">Empowering professionals with digital skills training and certification programs.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/courses" className="hover:text-white">Microsoft Office</Link></li>
                <li><Link href="/courses" className="hover:text-white">Design Tools</Link></li>
                <li><Link href="/courses" className="hover:text-white">Educational Apps</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/courses" className="hover:text-white">All Courses</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@coursehub.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Support: Monday - Friday</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 CourseHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 