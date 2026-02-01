import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🐞</span>
            <span className="text-xl font-bold">CourseBug</span>
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

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              🎉 New courses added monthly
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Master Digital Skills with
            <span className="text-blue-600"> Expert Training</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto">
            Learn Microsoft Office, Canva, educational apps, and more through interactive online courses. 
            Get certified and boost your career with hands-on training from industry experts.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
            <Link href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 inline-flex items-center justify-center">
              Browse All Courses →
            </Link>
            <Link href="/about" className="border border-gray-300 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-50 inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-gray-600">Get Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your learning journey with our most popular courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Course 1 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-4xl">📊</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Intermediate</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">Microsoft Office</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Microsoft Excel Mastery</h3>
                <p className="text-gray-600 mb-4">Master Excel from basics to advanced formulas, pivot tables, and data analysis.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$199</span>
                  <Link href="/courses/excel" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">🎨</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Beginner</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">Design Tools</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Canva Design Fundamentals</h3>
                <p className="text-gray-600 mb-4">Create stunning graphics, presentations, and marketing materials with Canva.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$149</span>
                  <Link href="/courses/canva" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-4xl">🎮</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Beginner</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">Educational Apps</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">GooseChase Activities</h3>
                <p className="text-gray-600 mb-4">Create engaging scavenger hunts and educational activities using GooseChase.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$99</span>
                  <Link href="/courses/goosechase" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 inline-flex items-center">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Courses?</h2>
            <p className="text-lg text-gray-600">We provide comprehensive training designed for real-world application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of practical experience</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">Practice with real projects and get immediate feedback on your progress</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
              <p className="text-gray-600">Earn a participation certificate upon course completion to showcase your skills</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Evening classes designed to fit around your work and personal commitments</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Limited participants ensure personalized attention and quality interaction</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Convenience</h3>
              <p className="text-gray-600">Learn from anywhere with Zoom and Google Meet integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CourseBug</h3>
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
                <li>Email: info@coursebug.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Support: Monday - Friday</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 CourseBug. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
