import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { rulesData } from '../data/rulesData';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, BookOpen, Scroll, ArrowRight, Shield, Droplet, Heart, Sun, Leaf } from 'lucide-react';

const RuleDetailPage = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const rule = rulesData.find(r => r.id === id);

    // Navigation logic (Next/Prev Rule)
    const currentIndex = rulesData.findIndex(r => r.id === id);
    const prevRule = currentIndex > 0 ? rulesData[currentIndex - 1] : null;
    const nextRule = currentIndex < rulesData.length - 1 ? rulesData[currentIndex + 1] : null;

    if (!rule) {
        return <div className="text-center py-20">Rule Not Found</div>;
    }

    const getIcon = (cat) => {
        switch (cat) {
            case "Health & Hygiene": return <Droplet className="w-8 h-8" />;
            case "Social Ethics": return <Heart className="w-8 h-8" />;
            case "Environment": return <Shield className="w-8 h-8" />;
            case "Spirituality": return <Sun className="w-8 h-8" />;
            default: return <Leaf className="w-8 h-8" />;
        }
    }

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            {/* Hero Header with Image Background */}
            <div className="relative h-[70vh] bg-nature-dark overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-1000 transform group-hover:scale-105">
                    <img
                        src={rule.image}
                        alt={rule.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-dark via-nature-dark/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-nature-dark/80 to-transparent"></div>
                </div>

                {/* Navbar Placeholder / Back Button */}
                <div className="absolute top-0 left-0 w-full p-6 z-20">
                    <div className="max-w-6xl mx-auto">
                        <Link to="/rules" className="inline-flex items-center text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition backdrop-blur-md border border-white/10">
                            <ArrowLeft className="w-4 h-4 mr-2" /> {t('rulesPage.labels.back')}
                        </Link>
                    </div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-4">
                    <div className="max-w-5xl mx-auto w-full">
                        <div className="flex flex-col md:flex-row gap-8 items-end">
                            {/* Icon Box */}
                            <div className="p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-nature-tan shadow-2xl shrink-0">
                                {getIcon(rule.category)}
                            </div>

                            {/* Text Content */}
                            <div className="space-y-4 max-w-3xl">
                                <div className="flex items-center space-x-3">
                                    <span className="bg-nature-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        {t('rulesPage.labels.ruleNum')}{rule.number}
                                    </span>
                                    <span className="text-white/80 text-sm font-bold uppercase tracking-wider border-l border-white/30 pl-3">
                                        {t(`rulesPage.categories.${rule.category}`)}
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight drop-shadow-lg">
                                    {t(`rulesData.${rule.id}.title`)}
                                </h1>

                                <div className="border-l-4 border-nature-tan pl-6">
                                    <p className="text-2xl md:text-3xl text-nature-tan italic font-light">
                                        "{t(`rulesData.${rule.id}.shortDesc`)}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-30">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Quick Stats Grid */}
                    <div className="grid md:grid-cols-2 bg-gray-50 border-b border-gray-100">
                        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">{t('rulesPage.labels.traditional')}</h3>
                            <p className="text-lg font-bold text-nature-dark">{t(`rulesData.${rule.id}.traditional`)}</p>
                            <p className="text-sm text-gray-500 mt-1">{t(`rulesData.${rule.id}.significance`)}</p>
                        </div>
                        <div className="p-8">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">{t('rulesPage.labels.modern')}</h3>
                            <p className="text-lg font-bold text-nature-green">{t(`rulesData.${rule.id}.modernView`)}</p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        {/* Core Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-nature-dark mb-4">{t('rulesPage.labels.description', 'The Mandate')}</h2>
                            <p className="text-xl text-gray-700 leading-relaxed font-serif">
                                {t(`rulesData.${rule.id}.description`)}
                            </p>
                        </div>

                        {/* Scientific/Rational Context */}
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">{t('rulesPage.labels.scientific', 'Why this rule exists?')}</h3>
                            <p className="text-blue-800 leading-relaxed">
                                {t(`rulesData.${rule.id}.scientificBacking`)}
                            </p>
                        </div>

                        {/* Deep Analysis (Premium UI) */}
                        <div className="mt-12 pt-12 border-t-2 border-dashed border-nature-tan/30 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-nature-tan">
                                <Scroll className="w-8 h-8" />
                            </div>

                            <div className="bg-[#fcfbf7] rounded-3xl p-8 md:p-12 border border-nature-tan/20 shadow-inner relative overflow-hidden">
                                {/* Decorative corners */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-nature-tan/20 rounded-tl-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-nature-tan/20 rounded-br-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-8 border-b border-nature-tan/10 pb-4">
                                        <BookOpen className="w-6 h-6 text-nature-green mr-3" />
                                        <h2 className="text-3xl font-bold text-nature-dark font-serif tracking-wide">{t('rulesPage.labels.analysis')}</h2>
                                    </div>

                                    <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-nature-dark prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-nature-green">
                                        <ReactMarkdown>{t(`rulesData.${rule.id}.deepAnalysis`)}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="bg-gray-50 border-t border-gray-100 p-4 md:p-8 flex justify-between items-center">
                        {prevRule ? (
                            <Link to={`/rules/${prevRule.id}`} className="flex items-center text-gray-600 hover:text-nature-dark transition group">
                                <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition" />
                                <div className="text-left hidden md:block">
                                    <span className="block text-xs uppercase tracking-wide opacity-50">Previous Rule</span>
                                    <span className="font-bold">{prevRule.number}. {prevRule.title}</span>
                                </div>
                            </Link>
                        ) : <div></div>}

                        {nextRule && (
                            <Link to={`/rules/${nextRule.id}`} className="flex items-center text-gray-600 hover:text-nature-dark transition group text-right">
                                <div className="text-right hidden md:block">
                                    <span className="block text-xs uppercase tracking-wide opacity-50">Next Rule</span>
                                    <span className="font-bold">{nextRule.number}. {nextRule.title}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RuleDetailPage;
