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
        <div className="bg-nature-light/50 min-h-screen pb-16">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-nature-dark overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1610360636838-8959eb482613?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-4">
                        {getText(data.hero.title)}
                    </h1>
                    <p className="text-2xl text-nature-tan font-light italic">
                        {getText(data.hero.subtitle)}
                    </p>
                    <div className="mt-8">
                        <span className="bg-nature-green/80 text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest backdrop-blur-sm">
                            {getText(data.hero.badge)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12">
                    <Link to="/history" className="inline-flex items-center text-gray-500 hover:text-nature-green mb-4 transition">
                        <ArrowLeft className="w-4 h-4 mr-2" /> {getText(data.backLink)}
                    </Link>

                    {/* Introduction */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-nature-dark border-l-4 border-nature-green pl-4">
                            {getText(data.intro.title)}
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {getText(data.intro.p1)}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {getText(data.intro.p2)}
                        </p>
                    </div>

                    {/* The Morning of Sacrifice */}
                    <div className="bg-nature-tan/10 p-8 rounded-2xl border border-nature-tan/30">
                        <h3 className="text-2xl font-bold text-nature-dark mb-4 flex items-center">
                            <Droplet className="w-6 h-6 mr-3 text-red-500" /> {getText(data.morning.title)}
                        </h3>
                        <p className="text-lg text-gray-800 italic mb-4">
                            {getText(data.morning.date)}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            {getText(data.morning.p1)}
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            {getText(data.morning.dialogue.confrontation)}
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            {getText(data.morning.dialogue.bribe)}
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            {isHindi ? 'अमृता देवी ने अमर पंक्तियों के साथ उत्तर दिया:' : 'Amrita Devi replied with the immortal lines:'} <br />
                            <strong>{getText(data.morning.dialogue.quote)}</strong> <br />
                            {getText(data.morning.dialogue.quoteTrans)}
                        </p>
                    </div>

                    {/* The Act */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-nature-dark">{getText(data.sacrifice.title)}</h3>
                            <p className="text-gray-700">
                                {getText(data.sacrifice.p1)}
                            </p>
                            <p className="text-gray-700">
                                {getText(data.sacrifice.p2)}
                            </p>
                        </div>
                        <div className="bg-nature-dark text-white p-8 rounded-2xl shadow-lg">
                            <Heart className="w-12 h-12 text-nature-tan mb-4" />
                            <h4 className="text-xl font-bold mb-2">{getText(data.sacrifice.legacyTitle)}</h4>
                            <p className="opacity-90">
                                {getText(data.sacrifice.legacyDesc)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmritaDeviPage;
