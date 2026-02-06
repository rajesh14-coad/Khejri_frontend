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

    if (!sabad) return <div className="text-center py-20 bg-black text-white">{isHindi ? "शब्द नहीं मिला" : "Sabad Not Found"}</div>;

    // Helper to get correct content based on language
    const displayMeaning = isHindi ? sabad.meaning_hi : sabad.meaning_en;
    const displayAnalysis = isHindi ? sabad.analysis_hi : sabad.analysis_en;

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
                    className="w-[95%] md:w-full max-w-4xl rounded-[2rem] p-4 md:p-10 text-white shadow-2xl"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >

                    {/* Back Button */}
                    <div className="mb-4 md:mb-6">
                        <Link to="/sabadwani" className="inline-flex items-center text-white/70 hover:text-brand-neon transition px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            {isHindi ? "वापस सूची पर जाएं" : "Back to List"}
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-6 md:mb-10">
                        <span className="inline-block py-1 px-4 border border-brand-neon/30 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] mb-3 md:mb-4 text-brand-neon uppercase bg-brand-neon/5">
                            {isHindi ? "शब्द" : "Sabad"} #{sabad.number}
                        </span>
                    </div>

                    {/* The Original Verse */}
                    <div className="p-6 md:p-10 bg-white/5 rounded-2xl text-center border border-white/10 relative overflow-hidden mb-8 md:mb-12">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent"></div>
                        <Quote className="w-6 h-6 md:w-8 md:h-8 text-brand-neon/50 mx-auto mb-4 md:mb-6" />
                        <h2 className="text-xl md:text-3xl font-serif text-white leading-relaxed italic">
                            "{sabad.original}"
                        </h2>
                    </div>

                    {/* Translation & Meaning */}
                    <div className="space-y-8 md:space-y-10">
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-3 md:mb-4 border-l-2 border-brand-neon pl-3">
                                {isHindi ? "भावार्थ" : "Meaning"}
                            </h3>
                            <p className="text-base md:text-xl text-gray-200 leading-loose font-serif">
                                {displayMeaning}
                            </p>
                        </div>

                        {/* Analysis Section */}
                        {displayAnalysis && (
                            <div className="mt-6 md:mt-8 bg-brand-neon/5 rounded-2xl p-6 md:p-8 border border-brand-neon/10">
                                <div className="flex items-center mb-3 md:mb-4">
                                    <Sparkles className="w-5 h-5 text-brand-neon mr-3" />
                                    <h3 className="text-base md:text-lg font-bold font-serif text-white">
                                        {isHindi ? "आध्यात्मिक विश्लेषण" : "Spiritual Analysis"}
                                    </h3>
                                </div>
                                <div className="prose prose-invert prose-stone max-w-none prose-p:text-gray-300 prose-headings:font-serif text-sm md:text-base">
                                    <ReactMarkdown>{displayAnalysis}</ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Footer */}
                    <div className="flex justify-between items-center pt-8 mt-8 md:mt-12 border-t border-white/10">
                        {prevSabad ? (
                            <Link to={`/sabadwani/${prevSabad.id}`} className="group flex items-center text-gray-400 hover:text-brand-neon transition">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition" />
                                <div className="text-left">
                                    <span className="block text-[10px] md:text-xs uppercase tracking-wide opacity-50">
                                        {isHindi ? "पिछला" : "Previous"}
                                    </span>
                                    <span className="font-bold text-sm md:text-base text-gray-200 group-hover:text-white">
                                        #{prevSabad.number}
                                    </span>
                                </div>
                            </Link>
                        ) : <div></div>}

                        {nextSabad ? (
                            <Link to={`/sabadwani/${nextSabad.id}`} className="group flex items-center text-gray-400 hover:text-brand-neon transition text-right">
                                <div className="text-right">
                                    <span className="block text-[10px] md:text-xs uppercase tracking-wide opacity-50">
                                        {isHindi ? "अगला" : "Next"}
                                    </span>
                                    <span className="font-bold text-sm md:text-base text-gray-200 group-hover:text-white">
                                        #{nextSabad.number}
                                    </span>
                                </div>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                            </Link>
                        ) : <div></div>}
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default SabadDetailPage;