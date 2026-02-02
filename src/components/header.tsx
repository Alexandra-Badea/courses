'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'

export function Header() {
  const { t } = useLanguage()

  return (
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
  )
} 