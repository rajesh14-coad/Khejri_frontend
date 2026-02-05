import React from 'react';
import { Link } from 'react-router-dom';
import { martyrsData } from '../data/martyrs';
import { Users, Clock, AlertTriangle, Scroll, ArrowLeft, Flame, ArrowRight, Shield, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const KhejarliMassacrePage = () => {
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';
    const getText = (obj) => isHindi && obj.hi ? obj.hi : obj.en;

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            {/* Hero */}
            <div className="bg-red-900 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
                    {isHindi ? 'खेजड़ली नरसंहार' : 'The Khejarli Massacre'}
                </h1>
                <p className="text-2xl opacity-80 decoration-nature-tan">
                    {isHindi ? 'मंगलवार, 11 सितंबर 1730' : 'Tuesday, 11th September 1730'}
                </p>
                <div className="mt-8 flex justify-center gap-8">
                    <Link to="/history/martyrs-directory" className="text-center group hover:scale-105 transition duration-300">
                        <span className="block text-4xl font-bold text-nature-tan group-hover:text-white transition">{martyrsData.stats.total}</span>
                        <span className="text-sm uppercase tracking-wide underline decoration-nature-tan/50 group-hover:decoration-white">
                            {isHindi ? 'शहिद' : 'Martyrs'}
                        </span>
                    </Link>
                    <Link to="/history/villages-directory" className="text-center border-l border-white/20 pl-8 group hover:scale-105 transition duration-300">
                        <span className="block text-4xl font-bold text-nature-tan group-hover:text-white transition">{martyrsData.stats.villages}</span>
                        <span className="text-sm uppercase tracking-wide underline decoration-nature-tan/50 group-hover:decoration-white">
                            {isHindi ? 'गाँव' : 'Villages'}
                        </span>
                    </Link>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
                <Link to="/history" className="inline-flex items-center text-gray-500 hover:text-nature-green mb-4 transition">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {isHindi ? 'इतिहास पृष्ठ पर वापस जाएं' : 'Back to History Hub'}
                </Link>

                {/* The Massacre Timeline */}
                <section>
                    <h2 className="text-3xl font-bold text-nature-dark mb-8 flex items-center">
                        <Clock className="w-8 h-8 mr-3" /> {isHindi ? 'आतंक की समयरेखा' : 'The Timeline of Terror'}
                    </h2>
                    <div className="space-y-8 relative border-l-2 border-gray-200 ml-4 pb-8">
                        {martyrsData.timeline.map((item, index) => (
                            <div key={index} className="pl-8 relative">
                                <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-red-600 border-2 border-white"></div>
                                <h4 className="text-xl font-bold text-gray-900">{getText(item.time)}</h4>
                                <p className="text-gray-600 mt-1">{getText(item.event)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Roll of Honor - Interactive Grid */}
                <section className="bg-nature-dark text-white p-8 md:p-12 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-8 text-center text-nature-tan flex items-center justify-center">
                        <Flame className="w-8 h-8 mr-3" /> {isHindi ? 'उल्लेखनीय शहीद' : 'Notable Martyrs'}
                    </h2>
                    <p className="text-center mb-12 opacity-80 max-w-2xl mx-auto">
                        {isHindi ? 'उनकी पूरी कहानी और विशिष्ट बलिदान को पढ़ने के लिए किसी भी नाम पर क्लिक करें।' : 'Click on any name to read their full story and specific sacrifice.'}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {martyrsData.individuals.map((person) => (
                            <Link to={`/history/martyr/${person.id}`} key={person.id} className="bg-white/10 hover:bg-white/20 transition p-4 rounded-xl flex items-center justify-between group">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-nature-tan rounded-full flex items-center justify-center text-nature-dark font-bold">
                                        {getText(person.name).charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{getText(person.name)}</h4>
                                        <p className="text-xs opacity-70 uppercase tracking-wider">{getText(person.role)}</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition -translate-x-2 group-hover:translate-x-0" />
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Clans (Gotras) Section */}
                <section>
                    <h2 className="text-3xl font-bold text-nature-dark mb-8 flex items-center">
                        <Shield className="w-8 h-8 mr-3" /> {isHindi ? 'प्रतिभागी कबीले (गोत्र)' : 'Participating Clans (Gotras)'}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {martyrsData.gotras.map((gotra) => (
                            <Link to={`/history/gotra/${gotra.id}`} key={gotra.id} className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md hover:border-nature-green transition text-center group">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-nature-green">{getText(gotra.name)}</h3>
                                <p className="text-sm text-gray-500 mt-2">{gotra.count} {isHindi ? 'शहीद' : 'Martyrs'}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Villages Section */}
                <section>
                    <h2 className="text-3xl font-bold text-nature-dark mb-8 flex items-center">
                        <MapPin className="w-8 h-8 mr-3" /> {isHindi ? '83 गांवों का गठबंधन' : 'The Alliance of 83 Villages'}
                    </h2>
                    <div className="bg-nature-light/50 p-8 rounded-3xl border border-nature-dark/10">
                        <p className="mb-6 text-gray-600">
                            {isHindi ? 'जबकि खेजड़ली केंद्र था, 83 विभिन्न गांवों से शहीद आए थे। उनके व्यक्तिगत इतिहास की खोज लामबंदी के पैमाने को उजागर करती है।' : 'While Khejarli was the epicenter, martyrs arrived from 83 different villages. Exploring their individual histories reveals the scale of the mobilization.'}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {martyrsData.villages && martyrsData.villages.map((village) => (
                                <Link to={`/history/village/${village.id}`} key={village.id} className="bg-white p-4 rounded-xl border border-gray-100 hover:border-nature-green hover:shadow-md transition flex flex-col items-center text-center group">
                                    <h4 className="font-bold text-gray-800 group-hover:text-nature-green mb-1">{getText(village.name)}</h4>
                                    <span className="text-xs text-nature-tan font-bold uppercase tracking-wider">{village.martyrCount} {isHindi ? 'शहीद' : 'Martyrs'}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link to="/history/villages-directory" className="inline-block bg-nature-tan/20 px-6 py-2 rounded-full text-sm text-nature-dark font-bold hover:bg-nature-tan hover:text-white transition">
                                {isHindi ? '83 गांवों की पूरी सूची देखें' : 'View Full List of 83 Villages'}
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default KhejarliMassacrePage;
