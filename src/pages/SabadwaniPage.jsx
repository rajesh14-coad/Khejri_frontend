import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sabadsData } from '../data/sabadsData';
import { BookOpen, Search, Feather, ArrowRight } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';

const SabadwaniPage = () => {
    // --- LANGUAGE LOGIC ---
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';

    const [searchTerm, setSearchTerm] = useState("");

    // Helper to safely extract meaning text, handling both Strings and Arrays of Objects
    const getMeaningText = (content) => {
        if (!content) return "";
        if (typeof content === 'string') return content;
        if (Array.isArray(content)) {
            // Join all 'meaning' fields from the array objects
            return content.map(item => item.meaning || "").join(" ");
        }
        return "";
    };

    // Updated Search: Uses the helper to search effectively in both string and array formats
    const filteredSabads = sabadsData.filter(sabad => {
        const lowerTerm = searchTerm.toLowerCase();
        const meaningHi = getMeaningText(sabad.meaning_hi).toLowerCase();
        const meaningEn = getMeaningText(sabad.meaning_en).toLowerCase();

        return (
            sabad.number.toString().includes(lowerTerm) ||
            sabad.original.toLowerCase().includes(lowerTerm) ||
            meaningHi.includes(lowerTerm) ||
            meaningEn.includes(lowerTerm)
        );
    });

    return (
        <div className="min-h-screen pb-20">
            {/* Typographic Hero */}
            <div className="text-white py-24 px-4 relative overflow-hidden">
                {/* Removed absolute background shapes to let global desert background show clearly */}
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
                        <BookOpen className="w-6 h-6 mr-2" />
                        <span className="uppercase tracking-widest text-xs font-bold">
                            {isHindi ? "पवित्र ग्रंथ" : "The Holy Scripture"}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">
                        {isHindi ? "श्री शब्दवाणी" : "Shri Sabadwani"}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 opacity-90 max-w-2xl mx-auto font-serif italic drop-shadow-sm">
                        {isHindi
                            ? '"गुरु जाम्भोजी द्वारा उच्चारित 120 शब्द"'
                            : '"120 Hymns of Divine Wisdom spoken by Guru Jambheshwar"'}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
                {/* Search Bar */}
                <div className="max-w-md mx-auto bg-black/30 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/20 flex items-center mb-16">
                    <div className="pl-4 text-gray-300">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder={isHindi ? "शब्द संख्या या पाठ खोजें..." : "Search by number or text..."}
                        className="w-full p-3 outline-none bg-transparent text-white rounded-r-full placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSabads.map((sabad) => (
                        <Link to={`/sabadwani/${sabad.id}`} key={sabad.id} className="group">
                            <div className="bg-black/40 backdrop-blur-xl h-full p-8 rounded-[2rem] border border-white/10 hover:bg-black/50 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col relative overflow-hidden hover:-translate-y-1">
                                {/* Decorative Number Background */}
                                <span className="absolute -right-4 -top-6 text-9xl font-serif font-bold text-white opacity-5 group-hover:opacity-10 transition-opacity select-none">
                                    {sabad.number}
                                </span>

                                <div className="mb-6 flex justify-between items-start">
                                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/10">
                                        {isHindi ? "शब्द" : "Sabad"} {sabad.number}
                                    </span>
                                    <Feather className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12" />
                                </div>

                                {/* ORIGINAL TEXT (Always Visible) */}
                                <h3 className="text-2xl font-serif font-bold text-white mb-3 tracking-wide line-clamp-2 drop-shadow-sm">
                                    {sabad.original}
                                </h3>

                                {/* TRANSLATED PREVIEW */}
                                <div className="border-t border-white/10 pt-4 mt-auto">
                                    <p className="text-sm text-gray-300 line-clamp-3 mb-3 font-light">
                                        {getMeaningText(isHindi ? sabad.meaning_hi : sabad.meaning_en)}
                                    </p>
                                    <div className="flex items-center text-white/80 font-bold text-sm group-hover:translate-x-1 transition-transform group-hover:text-white">
                                        {isHindi ? "पूर्ण अर्थ पढ़ें" : "Read Full Analysis"}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredSabads.length === 0 && (
                    <div className="text-center py-20 opacity-70 text-white">
                        <p className="text-xl font-serif">
                            {isHindi ? "कोई शब्द नहीं मिला।" : "No Sabads found matching your search."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SabadwaniPage;