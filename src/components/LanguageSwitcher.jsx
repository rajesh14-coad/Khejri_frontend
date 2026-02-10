import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        // Changes made: Reduced px-4 to px-3, py-1.5 to py-1, and space-x-2 to space-x-1.5 for compactness
        <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md rounded-full px-2.5 py-0.5 border border-brand-neon/30 shadow-[0_0_10px_rgba(76,213,122,0.1)] hover:border-brand-neon/50 transition-all">
            {/* Reduced icon size from w-4 to w-3.5 */}
            <Globe className="w-3.5 h-3.5 text-brand-neon" />
            
            <button
                onClick={() => changeLanguage('en')}
                // Removed large underlines, used color change for active state instead to save space
                className={`text-[11px] font-bold tracking-wide transition-all ${i18n.language === 'en' ? 'text-brand-neon' : 'text-white/70 hover:text-white'}`}
            >
                EN
            </button>
            
            <span className="text-white/20 text-[10px]">|</span>
            
            <button
                onClick={() => changeLanguage('hi')}
                className={`text-[11px] font-bold tracking-wide transition-all ${i18n.language === 'hi' ? 'text-brand-neon' : 'text-white/70 hover:text-white'}`}
            >
                हिन्दी
            </button>
        </div>
    );
};

export default LanguageSwitcher;