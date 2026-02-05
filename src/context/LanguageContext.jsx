
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  // Sync local state with i18n
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLanguage(lng);
      // Optional: Persist to localStorage if not handled by language detector
      localStorage.setItem('i18nextLng', lng);
      // Force document direction/lang updates if needed
      document.documentElement.lang = lng;
    };

    i18n.on('languageChanged', handleLanguageChanged);

    // Initial setup
    handleLanguageChanged(i18n.language);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  /**
   * Helper to get localized content from a dynamic object (API response).
   * Strategy: Look for `field_en` or `field_hi` based on current language.
   * Fallback to `field` if localized version missing.
   * 
   * Expected DB Schema Pattern (Option A):
   * {
   *   title: "English Title",
   *   title_hi: "Hindi Title",
   *   description: "...",
   *   description_hi: "..."
   * }
   * OR Nested Pattern:
   * {
   *   title: { en: "English", hi: "Hindi" }
   * }
   * 
   * @param {Object} data - The data object (e.g., article)
   * @param {String} field - The field key (e.g., 'title')
   * @returns {String} - The localized string
   */
  const getLocalizedContent = (data, field) => {
    if (!data) return '';

    // Pattern 1: Suffix (e.g., title_hi)
    const suffix = currentLanguage === 'hi' ? '_hi' : '';
    if (currentLanguage === 'hi') {
      if (data[`${field}_hi`]) return data[`${field}_hi`];
      // Fallback to English/Default if Hindi missing
      if (data[field]) return data[field];
    }

    // Pattern 2: Nested Object (e.g., title.en)
    if (typeof data[field] === 'object' && data[field] !== null) {
      if (data[field][currentLanguage]) return data[field][currentLanguage];
      if (data[field]['en']) return data[field]['en'];
    }

    // Default
    return data[field];
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t, // Expose existing t function
    getLocalizedContent
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
