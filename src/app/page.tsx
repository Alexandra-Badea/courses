'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function Home() {
  const { t } = useLanguage()

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
            <Link href="/" className="text-sm font-medium hover:text-blue-600">{t('home')}</Link>
            <Link href="/courses" className="text-sm font-medium hover:text-blue-600">{t('courses')}</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">{t('about')}</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600">{t('contact')}</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/courses" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hidden sm:inline-flex">
              {t('browseCourses')}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
              🎉 {t('newCoursesMonthly')}
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            {t('heroTitle')}
            <span className="text-blue-600"> {t('heroTitleHighlight')}</span>
          </h1>
          
          <p className="mb-8 text-lg text-gray-600 sm:text-xl max-w-3xl mx-auto">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
            <Link href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 inline-flex items-center justify-center">
              {t('browseAllCourses')} →
            </Link>
            <Link href="/about" className="border border-gray-300 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-50 inline-flex items-center justify-center">
              {t('learnMore')}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-gray-600">{t('studentsTrained')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-gray-600">{t('averageRating')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-gray-600">{t('getCertified')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('featuredCourses')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('featuredCoursesSubtitle')}
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
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{t('intermediate')}</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{t('microsoftOffice')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('excelTitle')}</h3>
                <p className="text-gray-600 mb-4">{t('excelDescription')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$199</span>
                  <Link href="/courses/excel" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    {t('learnMore')}
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
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{t('beginner')}</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{t('designTools')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('canvaTitle')}</h3>
                <p className="text-gray-600 mb-4">{t('canvaDescription')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$149</span>
                  <Link href="/courses/canva" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    {t('learnMore')}
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
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">{t('beginner')}</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{t('educationalApps')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('gooseChaseTitle')}</h3>
                <p className="text-gray-600 mb-4">{t('gooseChaseDescription')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$99</span>
                  <Link href="/courses/goosechase" className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    {t('learnMore')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-700 inline-flex items-center">
              {t('viewAllCourses')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('whyChoose')}</h2>
            <p className="text-lg text-gray-600">{t('whyChooseSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('expertInstructors')}</h3>
              <p className="text-gray-600">{t('expertInstructorsDesc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('handsOnLearning')}</h3>
              <p className="text-gray-600">{t('handsOnLearningDesc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('getCertifiedTitle')}</h3>
              <p className="text-gray-600">{t('getCertifiedDesc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('flexibleSchedule')}</h3>
              <p className="text-gray-600">{t('flexibleScheduleDesc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('smallClassSizes')}</h3>
              <p className="text-gray-600">{t('smallClassSizesDesc')}</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('onlineConvenience')}</h3>
              <p className="text-gray-600">{t('onlineConvenienceDesc')}</p>
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
              <p className="text-gray-300">{t('footerDescription')}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('courses')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/courses" className="hover:text-white">{t('microsoftOffice')}</Link></li>
                <li><Link href="/courses" className="hover:text-white">{t('designTools')}</Link></li>
                <li><Link href="/courses" className="hover:text-white">{t('educationalApps')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('company')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white">{t('aboutUs')}</Link></li>
                <li><Link href="/contact" className="hover:text-white">{t('contact')}</Link></li>
                <li><Link href="/courses" className="hover:text-white">{t('allCourses')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('contactTitle')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t('email')}: info@coursebug.com</li>
                <li>{t('phone')}: (555) 123-4567</li>
                <li>{t('support')}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
