import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-2 bg-nature-light/50 rounded-full px-3 py-1 border border-brand-neon">
            <Globe className="w-4 h-4 text-nature-dark" />
            <button
                onClick={() => changeLanguage('en')}
                className={`text-xs font-bold transition ${i18n.language === 'en' ? 'text-nature-green underline' : 'text-gray-500 hover:text-nature-dark'}`}
            >
                EN
            </button>
            <span className="text-gray-300 text-xs">|</span>
            <button
                onClick={() => changeLanguage('hi')}
                className={`text-xs font-bold transition ${i18n.language === 'hi' ? 'text-nature-green underline' : 'text-gray-500 hover:text-nature-dark'}`}
            >
                हिन्दी
            </button>
        </div>
    );
};

export default LanguageSwitcher;
