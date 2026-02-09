import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-2 bg-black/80 backdrop-blur-sm rounded-full px-4 py-1.5 border border-brand-neon/50 shadow-[0_0_15px_rgba(76,213,122,0.15)]">
            <Globe className="w-4 h-4 text-brand-neon animate-pulse" />
            <button
                onClick={() => changeLanguage('en')}
                className={`text-xs font-bold tracking-wider transition-all duration-300 ${i18n.language === 'en' ? 'text-brand-neon underline decoration-2 underline-offset-4 scale-105' : 'text-white/90 hover:text-brand-neon'}`}
            >
                EN
            </button>
            <span className="text-white/20 text-xs">|</span>
            <button
                onClick={() => changeLanguage('hi')}
                className={`text-xs font-bold tracking-wider transition-all duration-300 ${i18n.language === 'hi' ? 'text-brand-neon underline decoration-2 underline-offset-4 scale-105' : 'text-white/90 hover:text-brand-neon'}`}
            >
                हिन्दी
            </button>
        </div>
    );
};

export default LanguageSwitcher;
