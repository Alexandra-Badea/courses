'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
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
  )
}
