import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Heart, Shield, Droplet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { historyData } from '../data/historyData';

const AmritaDeviPage = () => {
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';
    const getText = (obj) => isHindi ? obj.hi : obj.en;
    const data = historyData.amrita;

    return (
        <React.Fragment>
            {/* Main Page Container (Standard Global Desert Background) */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: "url('/images/desert-bg.jpg')", // Used global desert bg as requested
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1
                }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Scrollable Content Area */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8 py-20 overflow-y-auto">

                {/* PREMIUM GLASS CARD (Content goes here) */}
                <div className="w-full max-w-4xl bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10 text-white">

                    {/* --- NEW IMAGE PLACEMENT --- */}
                    <div className="w-full overflow-hidden rounded-xl mb-8 border border-white/10 shadow-lg">
                        <img
                            src="/images/amrita devi.png"
                            alt="Mata Amrita Devi"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 max-h-[500px]"
                        />
                    </div>
                    {/* --------------------------- */}

                    {/* Header */}
                    <div className="text-center mb-10">
                        <span className="bg-nature-green text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                            {getText(data.hero.badge)}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-[#4cd57a] drop-shadow-lg mb-2 text-center font-serif">
                            {getText(data.hero.title)}
                        </h1>
                        <p className="text-xl text-gray-200 italic font-light">
                            "{getText(data.hero.subtitle)}"
                        </p>
                    </div>

                    {/* Scrollable Text Area if content is long */}
                    <div className="space-y-8">
                        {/* Introduction */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-neon pl-4">{getText(data.intro.title)}</h2>
                            <p className="text-lg text-gray-200 leading-relaxed mb-4">
                                {getText(data.intro.p1)}
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                {getText(data.intro.p2)}
                            </p>
                        </div>

                        {/* Morning of Sacrifice */}
                        <div className="bg-black/30 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                                <Droplet className="w-5 h-5 mr-2 text-red-500" /> {getText(data.morning.title)}
                            </h3>
                            <p className="text-sm text-gray-400 italic mb-4">{getText(data.morning.date)}</p>
                            <p className="text-gray-200 mb-4">{getText(data.morning.p1)}</p>
                            <div className="border-l-2 border-brand-neon/50 pl-4 py-2 my-4 bg-white/5 rounded-r-lg">
                                <p className="text-brand-neon font-bold text-lg italic">"{getText(data.morning.dialogue.quote)}"</p>
                                <p className="text-sm text-gray-400 mt-1">{getText(data.morning.dialogue.quoteTrans)}</p>
                            </div>
                        </div>

                        {/* Legacy */}
                        <div className="flex items-start p-6 bg-brand-neon/10 rounded-xl border border-brand-neon/20">
                            <Heart className="w-8 h-8 text-brand-neon mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">{getText(data.sacrifice.legacyTitle)}</h4>
                                <p className="text-gray-300 text-sm">{getText(data.sacrifice.legacyDesc)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-10 pt-6 border-t border-white/10 flex justify-center">
                        <Link
                            to="/history"
                            className="px-8 py-3 bg-black/50 backdrop-blur-md border border-[#4cd57a] text-[#4cd57a] rounded-full hover:bg-[#4cd57a] hover:text-black transition-all duration-300 font-bold flex items-center group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> {getText(data.backLink)}
                        </Link>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
};

export default AmritaDeviPage;
