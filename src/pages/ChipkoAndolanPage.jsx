import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mountain, Leaf, Users, BookOpen, Scroll } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../context/LanguageContext';
import { historyData } from '../data/historyData';

const ChipkoAndolanPage = () => {
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';
    const getText = (obj) => isHindi ? obj.hi : obj.en;
    const data = historyData.chipko;

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            {/* Hero Section */}
            <div className="relative h-[60vh] bg-stone-900 overflow-hidden">
                {/* Abstract Forest Overlay */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <span className="text-nature-tan font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base animate-fade-in-up">
                        {getText(data.hero.tagline)}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold font-serif text-white mb-6 animate-fade-in-up delay-100">
                        {getText(data.hero.title)}
                    </h1>
                    <div className="flex items-center space-x-4 text-white/80 text-lg md:text-xl font-light italic animate-fade-in-up delay-200">
                        <span>{getText(data.hero.location)}</span>
                        <span className="w-2 h-2 rounded-full bg-nature-green"></span>
                        <span>{getText(data.hero.echo)}</span>
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

                    {/* Key Figures Grid */}
                    <div>
                        <h3 className="text-2xl font-bold text-nature-dark mb-6 flex items-center">
                            <Users className="w-6 h-6 mr-3 text-nature-tan" /> {getText(data.architects.title)}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {data.architects.people.map((person, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition">
                                    <h4 className="font-bold text-lg text-nature-dark mb-2">{getText(person.name)}</h4>
                                    <p className="text-sm text-gray-600">{getText(person.role)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-nature-light p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-nature-dark mb-6 flex items-center">
                            <Mountain className="w-6 h-6 mr-3 text-nature-green" /> {getText(data.timeline.title)}
                        </h3>
                        <div className="space-y-6">
                            {data.timeline.events.map((event, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="font-bold text-nature-tan w-24">{event.year}</div>
                                    <div className="text-gray-700">
                                        {/* If desc is object with en/hi, use getText, otherwise render directly if already string (unlikely given new structure) */}
                                        <ReactMarkdown components={{ p: React.Fragment }}>{getText(event.desc)}</ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deep Analysis with Premium UI */}
                    <div className="mt-12 pt-12 border-t-2 border-dashed border-nature-tan/30 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-nature-tan">
                            <Scroll className="w-8 h-8" />
                        </div>

                        <div className="bg-[#fcfbf7] rounded-3xl p-8 md:p-12 border border-nature-tan/20 shadow-inner relative overflow-hidden">
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-nature-tan/20 rounded-tl-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-nature-tan/20 rounded-br-3xl"></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center mb-8">
                                    <BookOpen className="w-6 h-6 text-nature-green mr-3" />
                                    <h2 className="text-3xl font-bold text-nature-dark font-serif tracking-wide">
                                        {getText(data.analysis.title)}
                                    </h2>
                                </div>

                                <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-nature-dark prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-nature-green">
                                    <ReactMarkdown>{getText(data.analysis.content)}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChipkoAndolanPage;
