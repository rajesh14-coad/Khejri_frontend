import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sabadsData } from '../data/sabadsData';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const SabadDetailPage = () => {
    // --- LANGUAGE LOGIC ---
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';

    const { id } = useParams();
    // Convert id to number for safe comparison if your IDs are numbers in data
    const sabad = sabadsData.find(s => s.id == id);

    // Navigation logic
    const currentIndex = sabadsData.findIndex(s => s.id == id);
    const prevSabad = currentIndex > 0 ? sabadsData[currentIndex - 1] : null;
    const nextSabad = currentIndex < sabadsData.length - 1 ? sabadsData[currentIndex + 1] : null;

    if (!sabad) return <div className="text-center py-20">{isHindi ? "शब्द नहीं मिला" : "Sabad Not Found"}</div>;

    // Helper to get correct content based on language
    const displayMeaning = isHindi ? sabad.meaning_hi : sabad.meaning_en;

    // Agar future mein analysis add karein (Optional)
    const displayAnalysis = isHindi ? sabad.analysis_hi : sabad.analysis_en;

    return (
        <div className="bg-[#fcfbf7] min-h-screen pb-16">
            {/* Text-Only Hero */}
            <div className="bg-nature-dark text-nature-tan relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#pattern)" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
                    <Link to="/sabadwani" className="inline-flex items-center text-white/50 hover:text-white mb-10 transition">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {isHindi ? "वापस सूची पर जाएं" : "Back to List"}
                    </Link>

                    <div className="text-center">
                        <span className="inline-block py-1 px-4 border border-nature-tan/30 rounded-full text-sm font-bold tracking-[0.2em] mb-6 text-nature-tan uppercase">
                            {isHindi ? "शब्द" : "Sabad"} #{sabad.number}
                        </span>
                        {/* Title agar alag se nahi hai to Number hi dikhayenge, ya data me title add karein */}
                        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6">
                            {sabad.original.split(' ').slice(0, 3).join(' ')}...
                        </h1>
                        <div className="h-1 w-24 bg-nature-tan mx-auto opacity-50"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 -mt-10 relative z-20">
                {/* Main Content Card */}
                <div className="bg-white rounded-t-3xl shadow-xl overflow-hidden border border-nature-tan/10">

                    {/* The Original Verse */}
                    <div className="p-8 md:p-12 bg-nature-light/30 text-center border-b border-nature-tan/10">
                        <Quote className="w-8 h-8 text-nature-green/30 mx-auto mb-6" />
                        <h2 className="text-2xl md:text-4xl font-serif text-nature-dark leading-relaxed italic">
                            "{sabad.original}"
                        </h2>
                    </div>

                    {/* Translation & Meaning */}
                    <div className="p-8 md:p-12 space-y-12">
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
                                {isHindi ? "भावार्थ (सरल भाषा में)" : "Simple Meaning & Translation"}
                            </h3>
                            <p className="text-xl text-gray-800 leading-relaxed font-serif border-l-4 border-nature-green pl-6">
                                {displayMeaning}
                            </p>
                        </div>

                        {/* Analysis Section - Only renders if analysis data exists */}
                        {displayAnalysis && (
                            <div className="mt-8 bg-nature-tan/5 rounded-2xl p-8 border border-nature-tan/20">
                                <div className="flex items-center mb-6">
                                    <Sparkles className="w-5 h-5 text-nature-dark mr-3" />
                                    <h3 className="text-xl font-bold font-serif text-nature-dark">
                                        {isHindi ? "आध्यात्मिक विश्लेषण" : "Spiritual Analysis"}
                                    </h3>
                                </div>
                                <div className="prose prose-stone max-w-none prose-p:text-gray-700 prose-headings:font-serif">
                                    <ReactMarkdown>{displayAnalysis}</ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Footer */}
                    <div className="bg-gray-50 border-t border-gray-100 p-6 flex justify-between items-center">
                        {prevSabad ? (
                            <Link to={`/sabadwani/${prevSabad.id}`} className="flex items-center text-gray-500 hover:text-nature-dark transition group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition" />
                                <div className="text-left">
                                    <span className="block text-xs uppercase tracking-wide opacity-50">
                                        {isHindi ? "पिछला" : "Previous"}
                                    </span>
                                    <span className="font-bold text-sm md:text-base">
                                        {isHindi ? "शब्द" : "Sabad"} {prevSabad.number}
                                    </span>
                                </div>
                            </Link>
                        ) : <div></div>}

                        {nextSabad ? (
                            <Link to={`/sabadwani/${nextSabad.id}`} className="flex items-center text-gray-500 hover:text-nature-dark transition group text-right">
                                <div className="text-right">
                                    <span className="block text-xs uppercase tracking-wide opacity-50">
                                        {isHindi ? "अगला" : "Next"}
                                    </span>
                                    <span className="font-bold text-sm md:text-base">
                                        {isHindi ? "शब्द" : "Sabad"} {nextSabad.number}
                                    </span>
                                </div>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                            </Link>
                        ) : <div></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SabadDetailPage;