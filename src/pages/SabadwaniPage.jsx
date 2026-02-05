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

    // Updated Search: Ab ye Hindi aur English dono meanings mein search karega
    const filteredSabads = sabadsData.filter(sabad =>
        sabad.number.toString().includes(searchTerm) ||
        sabad.original.includes(searchTerm) ||
        (sabad.meaning_hi && sabad.meaning_hi.includes(searchTerm)) ||
        (sabad.meaning_en && sabad.meaning_en.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-[#fcfbf7] min-h-screen pb-20">
            {/* Typographic Hero */}
            <div className="bg-nature-dark text-nature-tan py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-[20px] border-nature-tan/20"></div>
                    <div className="absolute top-40 left-10 w-40 h-40 rounded-full border-[10px] border-nature-tan/10"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
                        <BookOpen className="w-6 h-6 mr-2" />
                        <span className="uppercase tracking-widest text-xs font-bold">
                            {isHindi ? "पवित्र ग्रंथ" : "The Holy Scripture"}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">
                        {isHindi ? "श्री शब्दवाणी" : "Shri Sabadwani"}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto font-serif italic">
                        {isHindi
                            ? '"गुरु जाम्भोजी द्वारा उच्चारित 120 शब्द"'
                            : '"120 Hymns of Divine Wisdom spoken by Guru Jambheshwar"'}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
                {/* Search Bar */}
                <div className="max-w-md mx-auto bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center mb-16">
                    <div className="pl-4 text-gray-400">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder={isHindi ? "शब्द संख्या या पाठ खोजें..." : "Search by number or text..."}
                        className="w-full p-3 outline-none text-gray-700 rounded-r-full placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSabads.map((sabad) => (
                        <Link to={`/sabadwani/${sabad.id}`} key={sabad.id} className="group">
                            <div className="bg-white hover:bg-nature-tan/10 h-full p-8 rounded-xl border border-nature-tan/20 hover:border-nature-tan transition-all duration-300 shadow-sm hover:shadow-md flex flex-col relative overflow-hidden">
                                {/* Decorative Number Background */}
                                <span className="absolute -right-4 -top-6 text-9xl font-serif font-bold text-gray-50 opacity-5 group-hover:text-nature-dark/5 transition-colors select-none">
                                    {sabad.number}
                                </span>

                                <div className="mb-6 flex justify-between items-start">
                                    <span className="inline-block px-3 py-1 bg-nature-light text-nature-dark text-xs font-bold uppercase tracking-wider rounded-md">
                                        {isHindi ? "शब्द" : "Sabad"} {sabad.number}
                                    </span>
                                    <Feather className="w-5 h-5 text-nature-green opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12" />
                                </div>

                                {/* ORIGINAL TEXT (Always Visible) */}
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-nature-dark transition-colors line-clamp-2">
                                    {sabad.original}
                                </h3>

                                {/* TRANSLATED PREVIEW */}
                                <div className="border-t border-gray-100 pt-4 mt-auto">
                                    <p className="text-sm text-gray-500 line-clamp-3 mb-3">
                                        {isHindi ? sabad.meaning_hi : sabad.meaning_en}
                                    </p>
                                    <div className="flex items-center text-nature-green font-bold text-sm group-hover:translate-x-1 transition-transform">
                                        {isHindi ? "पूर्ण अर्थ पढ़ें" : "Read Full Analysis"}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredSabads.length === 0 && (
                    <div className="text-center py-20 opacity-50">
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