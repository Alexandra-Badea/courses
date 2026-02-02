'use client'

import { useLanguage } from '@/contexts/language-context'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm text-gray-600">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 transition-all cursor-pointer ${
          language === 'en'
            ? 'text-blue-600 font-medium'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => setLanguage('ro')}
        className={`px-2 py-1 transition-all cursor-pointer ${
          language === 'ro'
            ? 'text-blue-600 font-medium'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        RO
      </button>
    </div>
  )
}
