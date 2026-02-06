import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Users, Shield, Clock, BookOpen, Award, Scroll } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { historyData } from '../data/historyData';

const HistoryPage = () => {
    const { currentLanguage, t } = useLanguage();
    const isHindi = currentLanguage === 'hi';

    // Helper to get text based on language
    const getText = (obj) => {
        return isHindi ? obj.hi : obj.en;
    };

    return (
        <div className="space-y-16 pb-12">
            <SEO
                title={getText(historyData.hero.title)}
                description="Explore the 550+ year legacy of the Bishnoi community, the 29 principles of Guru Jambheshwar, and the supreme sacrifice of 1730 AD."
                keywords={["Bishnoi History", "Khejarli Massacre", "Guru Jambheshwar", "29 Rules", "Amrita Devi"]}
            />
            {/* Hero Section */}
            <section className="relative text-white py-24 px-4 overflow-hidden rounded-b-3xl">
                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-10">
                    <span className="text-brand-neon font-bold tracking-widest uppercase text-sm border border-brand-neon px-4 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                        {getText(historyData.hero.tagline)}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight drop-shadow-lg">
                        {getText(historyData.hero.title)}
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto italic drop-shadow-md">
                        {getText(historyData.hero.quote)}
                    </p>
                    <p className="text-sm opacity-80 text-gray-300">
                        {getText(historyData.hero.quoteMeaning)}
                    </p>
                </div>
            </section>

            {/* The Origins */}
            <section className="max-w-5xl mx-auto px-4 mt-12">
                <div className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">
                            {getText(historyData.origins.title)}
                        </h2>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            {getText(historyData.origins.p1)}
                        </p>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            {getText(historyData.origins.p2)}
                        </p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl relative border border-white/10">
                        <Shield className="w-12 h-12 text-white/20 absolute top-4 left-4" />
                        <h3 className="text-xl font-bold text-white mb-4 pl-2">
                            {getText(historyData.origins.sidebarTitle)}
                        </h3>
                        <ul className="space-y-4 text-gray-200">
                            {historyData.origins.rulesList.map((rule, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="font-bold text-brand-neon mr-2">{index + 1}.</span>
                                    {getText(rule)}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <Link to="/rules" className="inline-flex items-center text-brand-neon font-bold hover:text-white transition">
                                <BookOpen className="w-4 h-4 mr-2" />
                                {getText(historyData.origins.linkText)}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline of Sacrifice */}
            <section className="max-w-5xl mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white drop-shadow-md">
                        {getText(historyData.timeline.title)}
                    </h2>
                    <p className="text-gray-200 mt-4 opacity-90">
                        {getText(historyData.timeline.subtitle)}
                    </p>
                </div>

                <div className="relative border-l-4 border-white/20 ml-6 md:ml-1/2 space-y-16">
                    {historyData.timeline.events.map((event, index) => {
                        // Alternate alignment style logic (basic zigzag for large screens)
                        // If it's a highlight event (like Khejarli), we give it prominent styling
                        if (event.highlight) {
                            return (
                                <div key={index} className="relative pl-12 md:pl-0">
                                    <div className="absolute -left-4 md:left-1/2 md:-ml-4 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white z-10 animate-pulse">!</div>
                                    <div className="md:grid md:grid-cols-2 gap-12 items-center">
                                        <div className="md:text-right pr-12 hidden md:block">
                                            <span className="text-5xl font-bold text-white drop-shadow-md">{event.year} AD</span>
                                            <p className="text-brand-neon font-bold text-lg uppercase tracking-wide">
                                                {getText(event.title)}
                                            </p>
                                        </div>
                                        <div className="bg-black/60 backdrop-blur-xl text-white p-8 rounded-2xl shadow-xl border border-red-500/30 relative">
                                            <h3 className="text-3xl font-bold mb-4 md:hidden text-white">{event.year}: {getText(event.title)}</h3>
                                            <h3 className="text-3xl font-bold mb-4 hidden md:block text-white">{getText(event.title)}</h3>

                                            <div className="space-y-4 opacity-90">
                                                {Array.isArray(getText(event.description)) ? (
                                                    getText(event.description).map((para, i) => <p key={i} className="text-gray-200">{para}</p>)
                                                ) : (
                                                    <p className="text-gray-200">{getText(event.description)}</p>
                                                )}

                                                <div className="pt-6 flex flex-wrap gap-4">
                                                    {event.links && event.links.map((link, i) => (
                                                        <Link key={i} to={link.to} className={`px-5 py-2 rounded-full font-bold text-sm transition ${i === 0 ? 'bg-brand-olive text-brand-neon border border-brand-neon hover:bg-brand-olive/80' : 'border border-white/30 text-white hover:bg-white/10'}`}>
                                                            {getText(link.label)}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        // Standard event logic
                        return (
                            <div key={index} className="relative pl-12 md:pl-0">
                                <div className="absolute -left-4 md:left-1/2 md:-ml-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/50 shadow-lg flex items-center justify-center text-white text-xs font-bold">{index + 1}</div>
                                <div className="md:grid md:grid-cols-2 gap-12 items-start">
                                    {/* Alternate Logic */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="hidden md:block text-right space-y-2 pr-12">
                                                <span className="text-4xl font-bold text-white/40">{event.year} AD</span>
                                                <h3 className="text-2xl font-bold text-white">{getText(event.title)}</h3>
                                            </div>
                                            <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/10 pl-12 md:pl-6 relative hover:bg-black/50 transition-colors">
                                                <div className="md:hidden absolute top-4 right-4 text-2xl font-bold text-white/20">{event.year} AD</div>
                                                <h3 className="text-xl font-bold text-white mb-2 md:hidden">{getText(event.title)}</h3>
                                                <p className="text-gray-300">{getText(event.description)}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="md:order-2 space-y-2 pl-0 md:pl-12">
                                                <span className="text-4xl font-bold text-white/40 block md:hidden mb-2">{event.year} AD</span>
                                                <div className="bg-black/40 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/10 relative hover:bg-black/50 transition-colors">
                                                    <span className="text-4xl font-bold text-white/40 hidden md:block absolute -top-10 left-0">{event.year} AD</span>
                                                    <h3 className="text-xl font-bold text-white mb-2">{getText(event.title)}</h3>
                                                    <p className="text-gray-300">{getText(event.description)}</p>
                                                </div>
                                            </div>
                                            <div className="hidden md:block text-right md:order-1"></div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* The Aftermath Grid */}
            <section className="py-20 border-y border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        {getText(historyData.impact.title)}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {historyData.impact.cards.map((card, index) => {
                            const Icon = { Users, Scroll, Clock }[card.icon];
                            const Content = (
                                <>
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner group-hover:scale-110 transition border border-white/20">
                                        <Icon className="w-8 h-8 text-brand-neon" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-brand-neon transition-colors">{getText(card.title)}</h4>
                                    <p className="text-gray-300">{getText(card.desc)}</p>
                                </>
                            );

                            if (card.link) {
                                return <Link key={index} to={card.link} className="p-8 bg-black/40 backdrop-blur-xl rounded-[2rem] text-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition hover:-translate-y-1 border border-white/10 group">{Content}</Link>;
                            }
                            return <div key={index} className="p-8 bg-black/40 backdrop-blur-xl rounded-[2rem] text-center border border-white/10">{Content}</div>;
                        })}
                    </div>
                </div>
            </section>

            {/* Modern Legacy */}
            <section className="max-w-5xl mx-auto px-4 space-y-8 pb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">{getText(historyData.modernLegacy.title)}</h2>

                <div className="bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-xl text-white p-8 rounded-[2rem] relative overflow-hidden border border-white/10 shadow-2xl">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="bg-white/10 p-4 rounded-full border border-white/20">
                            <Award className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{getText(historyData.modernLegacy.award.title)}</h3>
                            <p className="opacity-90 text-gray-200 text-lg">
                                {getText(historyData.modernLegacy.award.desc)}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-black/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white">{getText(historyData.modernLegacy.science.title)}</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {getText(historyData.modernLegacy.science.desc)}
                        </p>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white">{getText(historyData.modernLegacy.fair.title)}</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {getText(historyData.modernLegacy.fair.desc)}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HistoryPage;
