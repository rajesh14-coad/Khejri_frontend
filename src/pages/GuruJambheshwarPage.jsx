import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User, Star, ArrowDown, BookOpen, Crown, Leaf, ArrowRight, Quote } from 'lucide-react';
import { dhamsData } from '../data/dhams';
import { useLanguage } from '../context/LanguageContext';

const GuruJambheshwarPage = () => {
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';
    const getText = (obj) => isHindi && obj.hi ? obj.hi : obj.en;

    return (
        <div className="min-h-screen pb-32">

            {/* HERO SECTION - SACRED CARD DESIGN */}
            <div className="max-w-6xl mx-auto pt-8 px-4 sm:px-6">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl text-white min-h-[600px] flex flex-col md:flex-row">

                    {/* Background Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0"></div>

                    {/* Image Half */}
                    <div className="w-full md:w-1/2 relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-black/80 via-black/40 z-10 opacity-60 md:opacity-100"></div>
                        <img
                            src="/images/guru_sermon.jpg"
                            alt="Guru Jambheshwar Sermon"
                            className="absolute inset-0 w-full h-full object-cover object-center md:object-[20%_center]"
                        />
                        {/* Decorative Frame Border */}
                        <div className="absolute inset-4 border border-white/20 rounded-[2rem] z-20 pointer-events-none"></div>
                    </div>

                    {/* Content Half */}
                    <div className="w-full md:w-1/2 relative z-20 flex flex-col justify-center p-8 md:p-16 text-center md:text-left">
                        <div className="animate-fade-in-up space-y-6">
                            <span className="inline-block py-1 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[#C2B280] text-xs font-bold tracking-[0.3em] uppercase">
                                The Founder
                            </span>

                            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
                                Guru <span className="text-[#C2B280]">Jambheshwar</span>
                            </h1>

                            <div className="w-24 h-1 bg-brand-neon md:mx-0 mx-auto rounded-full"></div>

                            <p className="text-xl md:text-2xl text-gray-300 font-light font-serif italic leading-relaxed">
                                "{t('guru.subtitle')}"
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                                <span className="px-4 py-2 border border-[#C2B280]/30 rounded-full text-sm text-[#C2B280] font-bold tracking-wider hover:bg-[#C2B280] hover:text-black transition-colors cursor-default">
                                    {t('guru.tags.founder')}
                                </span>
                                <span className="px-4 py-2 border border-[#C2B280]/30 rounded-full text-sm text-[#C2B280] font-bold tracking-wider hover:bg-[#C2B280] hover:text-black transition-colors cursor-default">
                                    {t('guru.tags.pioneer')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* QUOTE SECTION */}
            <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                <Quote className="w-12 h-12 text-brand-neon mx-auto mb-6 opacity-80" />
                <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-4 drop-shadow-md">
                    "जीव दया पालणी, रूंख लीलो न घावे"
                </h3>
                <p className="text-xl md:text-2xl text-brand-neon font-serif italic mb-6">
                    (Jeev Daya Palani, Runkh Lilo Nahi Ghave)
                </p>
                <div className="bg-black/40 backdrop-blur-xl inline-block px-8 py-4 rounded-xl shadow-lg border border-white/10">
                    <p className="text-gray-200 font-medium">
                        Meaning: "Be compassionate to all living beings, and never cut a green tree."
                    </p>
                </div>
                <p className="text-sm text-gray-400 mt-8 uppercase tracking-widest font-bold">The First Commandment</p>
            </div>

            {/* BIOGRAPHY CONTENT */}
            <div className="max-w-5xl mx-auto px-4 space-y-12">

                {/* 1. Birth & Early Life */}
                <section className="bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3 flex flex-col items-center text-center">
                        <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group border-4 border-white/10">
                            <img src="/images/hero_desert.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" alt="Pipasar" />
                            <div className="absolute inset-0 bg-black/20"></div>
                            <span className="relative font-serif text-4xl font-bold text-white z-10 drop-shadow-lg">1451</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Born in Pipasar</h3>
                        <p className="text-sm text-gray-400">Nagaur, Rajasthan</p>
                    </div>

                    <div className="md:w-2/3 space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-white">{t('guru.birth.title')}</h2>
                        <div className="prose prose-lg text-gray-200 leading-relaxed">
                            <p>
                                <Trans i18nKey="guru.birth.p1" components={[<strong className="text-brand-neon" />, <strong className="text-white" />]} />
                            </p>
                            <p>
                                <Trans i18nKey="guru.birth.p2" components={[<strong className="text-brand-neon" />, <strong className="text-white" />]} />
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. The Great Famine & Enlightenment */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-brand-olive/80 backdrop-blur-md text-white p-10 rounded-[2rem] relative overflow-hidden group border border-brand-olive">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Leaf className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-6 flex items-center">
                            <Leaf className="w-6 h-6 mr-3 text-brand-neon" />
                            {t('guru.famine.title')}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            <Trans i18nKey="guru.famine.p1" components={[<strong className="text-white" />]} />
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            <Trans i18nKey="guru.famine.p2" components={[<strong className="text-white" />]} />
                        </p>
                    </div>

                    <div className="bg-black/40 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center">
                            <Star className="w-6 h-6 mr-3 text-[#C2B280]" />
                            {t('guru.miracle.title')}
                        </h3>
                        <div className="bg-white/5 p-6 rounded-xl shadow-inner border border-white/5 italic text-gray-200 text-lg leading-relaxed mb-6">
                            "{t('guru.miracle.desc')}"
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            <Trans i18nKey="guru.childhood.p2" components={[<em className="font-semibold text-white" />]} />
                        </p>
                    </div>
                </section>

                {/* 3. The 29 Rules Foundation */}
                <section className="bg-black/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-xl text-center py-16 px-4 md:px-20 border border-white/10 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C2B280] to-transparent opacity-50"></div>
                    <Crown className="w-16 h-16 text-[#C2B280] mx-auto mb-6 drop-shadow-lg animate-pulse" />
                    <h2 className="text-4xl font-serif font-bold text-white mb-4">29 नियम (The 29 Rules)</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                        <Trans i18nKey="guru.rules.p1" components={[<strong className="text-white" />, <strong className="text-brand-neon" />]} />
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { icon: <Leaf className="w-8 h-8" />, title: "पर्यावरण व वृक्ष रक्षा", desc: "हरा वृक्ष न काटना (Never cut a green tree)." },
                            { icon: <User className="w-8 h-8" />, title: "जीव दया", desc: "अहिंसा परम धर्म (Compassion for all living beings)." },
                            { icon: <Star className="w-8 h-8" />, title: "शुद्धि व सदाचार", desc: "प्रातः स्नान, शील और संतोष (Purity, Character, Contentment)." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors border border-white/10">
                                <div className="text-brand-neon mb-4 flex justify-center md:justify-start">{item.icon}</div>
                                <h4 className="font-bold text-xl text-white mb-2 text-center md:text-left">{item.title}</h4>
                                <p className="text-gray-400 font-medium text-center md:text-left">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link to="/rules" className="inline-block px-8 py-3 bg-brand-olive text-brand-neon rounded-full font-bold hover:bg-brand-olive/80 border border-brand-neon transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(76,213,122,0.6)]">
                            सभी 29 नियम देखें (View All Rules)
                        </Link>
                    </div>
                </section>
            </div>

            {/* ROYAL INFLUENCE & DHAMS */}
            <div className="max-w-6xl mx-auto px-4 mt-20">
                <div className="text-center mb-12">
                    <span className="text-brand-neon font-bold tracking-widest uppercase text-sm border border-brand-neon/30 px-3 py-1 rounded-full bg-black/30">{t('guru.dhams.title')}</span>
                    <h2 className="text-4xl font-serif font-bold text-white mt-4 drop-shadow-md">Sacred Pilgrimage Sites</h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {Object.values(dhamsData).map((dham) => (
                        <Link
                            to={`/dham/${dham.id}`}
                            key={dham.id}
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                            <img src={dham.image} alt={getText(dham.name)} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white bg-gradient-to-t from-black/80 to-transparent">
                                <h4 className="text-xl font-bold mb-1">{getText(dham.name)}</h4>
                                <p className="text-xs font-bold uppercase tracking-wider text-[#C2B280] flex items-center">
                                    <MapPin className="w-3 h-3 mr-1" /> {getText(dham.location)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default GuruJambheshwarPage;
