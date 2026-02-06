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
        <React.Fragment>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: "url('/images/gurujambhaswer.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1
                }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 overflow-y-auto">

                {/* GLASS CARD */}
                <div
                    className="w-full max-w-4xl rounded-[2rem] p-6 md:p-10 text-white shadow-2xl"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >

                    {/* Back Button */}
                    <div className="mb-6">
                        <Link to="/rules" className="inline-flex items-center text-white/70 hover:text-brand-neon transition px-3 py-1 rounded-full border border-white/10 bg-white/5">
                            <ArrowLeft className="w-4 h-4 mr-2" /> {t('rulesPage.labels.back')}
                        </Link>
                    </div>

                    {/* Header Section inside Glass */}
                    <div className="flex flex-col md:flex-row gap-6 items-start border-b border-white/10 pb-8 mb-8">
                        {/* Icon */}
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-brand-neon shrink-0 shadow-[0_0_20px_rgba(76,213,122,0.1)]">
                            {getIcon(rule.category)}
                        </div>

                        {/* Title & Number */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase">
                                <span className="text-brand-neon">Rule {rule.number}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                <span className="text-gray-400">{t(`rulesPage.categories.${rule.category}`)}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                {t(`rulesData.${rule.id}.title`)}
                            </h1>
                            <p className="text-xl text-gray-300 italic font-light">
                                "{t(`rulesData.${rule.id}.shortDesc`)}"
                            </p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:bg-white/10 transition">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{t('rulesPage.labels.traditional')}</h3>
                            <p className="text-lg font-bold text-white font-serif">{t(`rulesData.${rule.id}.traditional`)}</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:bg-white/10 transition">
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{t('rulesPage.labels.modern')}</h3>
                            <p className="text-lg font-bold text-brand-neon">{t(`rulesData.${rule.id}.modernView`)}</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-6 h-1 bg-brand-neon rounded-full mr-3 shadow-[0_0_8px_#4cd57a]"></span>
                                {t('rulesPage.labels.description', 'The Mandate')}
                            </h2>
                            <p className="text-lg text-gray-200 leading-relaxed font-serif pl-9">
                                {t(`rulesData.${rule.id}.description`)}
                            </p>
                        </div>

                        {/* Scientific - Glass Style */}
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 ml-0 md:ml-9">
                            <h3 className="text-lg font-bold text-brand-neon mb-2 flex items-center">
                                <Shield className="w-5 h-5 mr-2" />
                                {t('rulesPage.labels.scientific', 'Scientific Rationale')}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {t(`rulesData.${rule.id}.scientificBacking`)}
                            </p>
                        </div>

                        {/* Deep Analysis */}
                        <div className="pt-8 border-t border-white/10">
                            <div className="flex items-center justify-center mb-6">
                                <BookOpen className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t('rulesPage.labels.analysis')}</span>
                            </div>

                            <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:font-serif prose-a:text-brand-neon">
                                <ReactMarkdown>{t(`rulesData.${rule.id}.deepAnalysis`)}</ReactMarkdown>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="flex justify-between items-center pt-8 mt-12 border-t border-white/10">
                        {prevRule ? (
                            <Link to={`/rules/${prevRule.id}`} className="group flex items-center text-gray-400 hover:text-white transition">
                                <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition" />
                                <div className="text-left hidden md:block">
                                    <span className="block text-xs uppercase tracking-wide opacity-50">Prev</span>
                                    <span className="font-bold">{prevRule.title}</span>
                                </div>
                            </Link>
                        ) : <div></div>}

                        {nextRule && (
                            <Link to={`/rules/${nextRule.id}`} className="group flex items-center text-gray-400 hover:text-white transition text-right">
                                <div className="text-right hidden md:block">
                                    <span className="block text-xs uppercase tracking-wide opacity-50">Next</span>
                                    <span className="font-bold">{nextRule.title}</span>
                                </div>
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition" />
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default RuleDetailPage;
