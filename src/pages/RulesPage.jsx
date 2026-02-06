import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { rulesData } from '../data/rulesData';
import { ChevronDown, ChevronUp, Droplet, Heart, Shield, Sun, Leaf, ArrowRight } from 'lucide-react';

const RulesPage = () => {
    const { t } = useLanguage();
    // Group rules by category
    const categories = {
        "Health & Hygiene": { icon: <Droplet className="w-6 h-6" />, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
        "Social Ethics": { icon: <Heart className="w-6 h-6" />, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
        "Environment": { icon: <Shield className="w-6 h-6" />, color: "text-brand-neon", bg: "bg-brand-neon/10 border-brand-neon/20" },
        "Spirituality": { icon: <Sun className="w-6 h-6" />, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
        "Diet & Lifestyle": { icon: <Leaf className="w-6 h-6" />, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" }
    };

    const groupedRules = rulesData.reduce((acc, rule) => {
        if (!acc[rule.category]) acc[rule.category] = [];
        acc[rule.category].push(rule);
        return acc;
    }, {});

    return (
        <div className="space-y-12 min-h-screen pb-20">
            {/* Hero */}
            <div className="text-white py-20 px-4 text-center relative">
                <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                    <Shield className="w-12 h-12 text-brand-neon mx-auto opacity-80" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 drop-shadow-lg">{t('rulesPage.title')}</h1>
                <p className="text-xl text-gray-200 opacity-90 max-w-2xl mx-auto italic drop-shadow-sm">
                    {t('rulesPage.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(groupedRules).map(([category, rules]) => (
                        <div key={category} className="space-y-4">
                            <div className={`flex items-center space-x-3 p-4 rounded-xl backdrop-blur-md border ${categories[category]?.bg || 'bg-white/5 border-white/10'}`}>
                                <div className={`${categories[category]?.color || 'text-gray-300'}`}>
                                    {categories[category]?.icon}
                                </div>
                                <h2 className="text-xl font-bold text-white">{t(`rulesPage.categories.${category}`)}</h2>
                            </div>

                            <div className="space-y-3">
                                {rules.map((rule) => (
                                    <Link to={`/rules/${rule.id}`} key={rule.id} className="block group h-full">
                                        <div className="bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/30 transition-all duration-300 overflow-hidden h-full flex flex-col hover:-translate-y-1">
                                            {/* Image Area */}


                                            {/* Content Area */}
                                            <div className="p-6 flex-grow flex flex-col justify-between">
                                                <div>
                                                    <div className="flex justify-between items-center mb-3">
                                                        <span className="bg-brand-neon/20 text-brand-neon text-xs font-bold px-3 py-1 rounded-full border border-brand-neon/30">
                                                            Rule #{rule.number}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-bold text-white group-hover:text-brand-neon transition text-lg mb-2">{t(`rulesData.${rule.id}.title`)}</h3>
                                                    <p className="text-sm text-gray-300 line-clamp-2 mb-3 leading-relaxed">{t(`rulesData.${rule.id}.shortDesc`)}</p>
                                                </div>
                                                <div className="flex items-center text-brand-neon text-sm font-bold mt-2">
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
