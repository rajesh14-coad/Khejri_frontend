import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { rulesData } from '../data/rulesData';
import { ChevronDown, ChevronUp, Droplet, Heart, Shield, Sun, Leaf, ArrowRight } from 'lucide-react';

const RulesPage = () => {
    const { t } = useLanguage();
    // Group rules by category
    const categories = {
        "Health & Hygiene": { icon: <Droplet className="w-6 h-6" />, color: "text-blue-600", bg: "bg-blue-50" },
        "Social Ethics": { icon: <Heart className="w-6 h-6" />, color: "text-purple-600", bg: "bg-purple-50" },
        "Environment": { icon: <Shield className="w-6 h-6" />, color: "text-nature-green", bg: "bg-green-50" },
        "Spirituality": { icon: <Sun className="w-6 h-6" />, color: "text-orange-500", bg: "bg-orange-50" },
        "Diet & Lifestyle": { icon: <Leaf className="w-6 h-6" />, color: "text-emerald-600", bg: "bg-emerald-50" }
    };

    const groupedRules = rulesData.reduce((acc, rule) => {
        if (!acc[rule.category]) acc[rule.category] = [];
        acc[rule.category].push(rule);
        return acc;
    }, {});

    return (
        <div className="space-y-12 bg-nature-light/30 min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-nature-dark text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">{t('rulesPage.title')}</h1>
                <p className="text-xl opacity-80 max-w-2xl mx-auto italic">
                    {t('rulesPage.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(groupedRules).map(([category, rules]) => (
                        <div key={category} className="space-y-4">
                            <div className={`flex items-center space-x-3 p-4 rounded-xl ${categories[category]?.bg || 'bg-gray-50'}`}>
                                <div className={`${categories[category]?.color || 'text-gray-600'}`}>
                                    {categories[category]?.icon}
                                </div>
                                <h2 className="text-xl font-bold text-gray-800">{t(`rulesPage.categories.${category}`)}</h2>
                            </div>

                            <div className="space-y-3">
                                {rules.map((rule) => (
                                    <Link to={`/rules/${rule.id}`} key={rule.id} className="block group h-full">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-nature-green transition overflow-hidden h-full flex flex-col">
                                            {/* Image Area */}
                                            <div className="h-40 overflow-hidden relative">
                                                <div className="absolute inset-0 bg-nature-dark/10 group-hover:bg-nature-dark/0 transition z-10"></div>
                                                <img
                                                    src={rule.image}
                                                    alt={t(`rulesData.${rule.id}.title`)}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                                />
                                                <div className="absolute top-2 right-2 z-20 bg-white/90 backdrop-blur text-nature-dark text-xs font-bold px-2 py-1 rounded-full">
                                                    #{rule.number}
                                                </div>
                                            </div>

                                            {/* Content Area */}
                                            <div className="p-5 flex-grow flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-bold text-gray-900 group-hover:text-nature-green transition text-lg mb-2">{t(`rulesData.${rule.id}.title`)}</h3>
                                                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{t(`rulesData.${rule.id}.shortDesc`)}</p>
                                                </div>
                                                <div className="flex items-center text-nature-green text-sm font-bold mt-2">
                                                    {t('common.readMore')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RulesPage;
