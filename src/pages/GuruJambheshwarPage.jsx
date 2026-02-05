import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, User, Star, ArrowDown, BookOpen, Crown, Leaf, ArrowRight } from 'lucide-react';
import { dhamsData } from '../data/dhams';

const GuruJambheshwarPage = () => {
    const { t } = useTranslation();
    return (
        <div className="space-y-16 pb-12">
            {/* Hero Section - Preserved UI */}
            <section className="bg-nature-tan/30 py-20 px-4 rounded-3xl text-center space-y-6">
                <div className="w-40 h-40 mx-auto bg-nature-green rounded-full flex items-center justify-center shadow-xl mb-6 ring-4 ring-nature-tan ring-offset-4">
                    <User className="w-20 h-20 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-nature-dark">{t('guru.title')}</h1>
                <p className="text-2xl text-nature-green font-light italic">{t('guru.subtitle')}</p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-600 shadow-sm">{t('guru.tags.founder')}</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-600 shadow-sm">{t('guru.tags.pioneer')}</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-600 shadow-sm">{t('guru.tags.yogishwar')}</span>
                </div>
            </section>

            {/* Introduction Detail */}
            <section className="max-w-4xl mx-auto px-4 leading-relaxed space-y-8 text-gray-800 text-lg">
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-nature-green">
                    <h2 className="text-3xl font-bold text-nature-dark mb-4">{t('guru.birth.title')}</h2>
                    <p className="mb-4">
                        <Trans i18nKey="guru.birth.p1" components={[<strong />, <strong />]} />
                    </p>
                    <p>
                        <Trans i18nKey="guru.birth.p2" components={[<strong />, <strong />]} />
                    </p>
                </div>

                {/* The Silent Years & Miracles */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3 text-nature-green">
                        <BookOpen className="w-8 h-8" />
                        <h3 className="text-2xl font-bold">{t('guru.childhood.title')}</h3>
                    </div>
                    <p>
                        <Trans i18nKey="guru.childhood.p1" components={[<strong />]} />
                    </p>

                    {/* Miracle of the Lamp inserted here matching UI style */}
                    <div className="bg-nature-light/50 p-6 rounded-xl border border-nature-tan/30">
                        <h4 className="font-bold text-nature-dark mb-2">{t('guru.miracle.title')}</h4>
                        <p className="italic text-gray-700">
                            {t('guru.miracle.desc')}
                        </p>
                    </div>

                    <p>
                        <Trans i18nKey="guru.childhood.p2" components={[<em />]} />
                    </p>
                </div>

                {/* The Great Famine */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-nature-green">
                        <Leaf className="w-8 h-8" />
                        <h3 className="text-2xl font-bold">{t('guru.famine.title')}</h3>
                    </div>
                    <p>
                        <Trans i18nKey="guru.famine.p1" components={[<strong />]} />
                    </p>
                    <p>
                        <Trans i18nKey="guru.famine.p2" components={[<strong />]} />
                    </p>
                </div>
            </section>

            {/* The Founding */}
            <section className="bg-nature-dark text-nature-light py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">{t('guru.rules.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-lg">
                            <p>
                                <Trans i18nKey="guru.rules.p1" components={[<strong />, <strong />]} />
                            </p>
                            <p>
                                <Trans i18nKey="guru.rules.p2" components={[<strong />]} />
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-nature-tan">
                                <li><Trans i18nKey="guru.rules.list.jeevDaya" components={[<strong />]} /></li>
                                <li><Trans i18nKey="guru.rules.list.trees" components={[<strong />]} /></li>
                                <li><Trans i18nKey="guru.rules.list.purity" components={[<strong />]} /></li>
                            </ul>
                        </div>
                        <div className="bg-white/10 p-8 rounded-xl border border-nature-tan/30">
                            <h3 className="text-2xl font-bold text-nature-tanyellow-400 mb-4">{t('guru.science.title')}</h3>
                            <p className="mb-4">
                                {t('guru.science.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Royal Encounters & Dhams */}
            <section className="max-w-6xl mx-auto px-4 space-y-12 text-gray-800 text-lg">

                {/* Dhams Section - UPGRADED UI */}
                <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
                    <div className="flex items-center space-x-3 text-nature-dark mb-8">
                        <MapPin className="w-8 h-8 text-nature-green" />
                        <h2 className="text-3xl font-bold">{t('guru.dhams.title')}</h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-2xl">
                        {t('guru.dhams.desc')}
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {Object.values(dhamsData).map((dham) => (
                            <Link
                                to={`/dham/${dham.id}`}
                                key={dham.id}
                                className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-nature-green transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="h-32 overflow-hidden bg-gray-100 relative">
                                    <div className="absolute inset-0 bg-nature-green/10 group-hover:bg-nature-green/0 transition"></div>
                                    <img src={dham.image} alt={dham.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                </div>
                                <div className="p-5 flex-grow flex flex-col">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-nature-green transition mb-2">{dham.name}</h4>
                                    <p className="text-xs text-nature-tan font-bold uppercase tracking-wide mb-2">{dham.location}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow">{dham.shortDesc}</p>

                                    <div className="flex items-center text-sm font-bold text-nature-green mt-auto">
                                        {t('guru.dhams.readMore')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Kings */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-center text-nature-dark pt-8">{t('guru.kings.title')}</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-nature-green transition">
                            <div className="flex items-center mb-3 text-yellow-600">
                                <Crown className="w-6 h-6 mr-3" />
                                <h3 className="text-xl font-bold">{t('guru.kings.lodi.title')}</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                {t('guru.kings.lodi.desc')}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-nature-green transition">
                            <div className="flex items-center mb-3 text-yellow-600">
                                <Crown className="w-6 h-6 mr-3" />
                                <h3 className="text-xl font-bold">{t('guru.kings.jodha.title')}</h3>
                            </div>
                            <p className="text-base text-gray-600">
                                {t('guru.kings.jodha.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nirvana Section */}
            <section className="max-w-4xl mx-auto px-4 space-y-6 text-gray-800 text-lg mb-12">
                <h2 className="text-3xl font-bold text-nature-dark flex items-center"><ArrowDown className="w-8 h-8 mr-2" /> {t('guru.nirvana.title')}</h2>
                <p>
                    <Trans i18nKey="guru.nirvana.p1" components={[<strong />, <strong />]} />
                </p>
                <p>
                    <Trans i18nKey="guru.nirvana.p2" components={[<strong />]} />
                </p>
            </section>
        </div>
    );
};

export default GuruJambheshwarPage;
