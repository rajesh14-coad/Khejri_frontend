import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dhamsData } from '../data/dhams';
import { MapPin, ArrowLeft, Star, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const DhamDetailPage = () => {
    const { id } = useParams();
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';
    const getText = (obj) => isHindi ? obj.hi : obj.en;

    const dham = dhamsData[id];

    if (!dham) {
        return <div className="text-center py-20 text-2xl">Dham not found</div>;
    }

    return (
        <React.Fragment>
            {/* 1. Fixed Background Layer */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: `url('${dham.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: -1
                }}
            >
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/50 bg-opacity-60 backdrop-blur-sm"></div>
            </div>

            {/* 2. Scrollable Content Layer */}
            <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 md:p-8 w-full overflow-y-auto pb-20">

                {/* Back Button */}
                <div className="self-start mb-6 max-w-4xl mx-auto w-full pt-20 md:pt-24">
                    <Link to="/guru" className="text-white flex items-center gap-2 px-5 py-2.5 bg-black/40 backdrop-blur-md rounded-full hover:bg-white/10 transition-all w-fit border border-white/10 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        {isHindi ? 'गुरु पृष्ठ पर वापस जाएं' : 'Back to Guru Page'}
                    </Link>
                </div>

                {/* PREMIUM GLASS CARD */}
                <div
                    className="w-full max-w-4xl p-6 md:p-12 text-white rounded-[2.5rem] shadow-2xl mb-12 animate-fade-in-up"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                >

                    {/* Header */}
                    <div className="mb-10 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#4cd57a]/15 text-[#4cd57a] font-bold text-xs tracking-widest uppercase mb-6 border border-[#4cd57a]/20">
                            {getText(dham.significance)}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif leading-tight">
                            {getText(dham.name)}
                        </h1>

                        <p className="text-xl text-gray-300 flex items-center justify-center md:justify-start gap-2 font-medium">
                            <MapPin className="w-5 h-5 text-[#4cd57a]" /> {getText(dham.location)}
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="prose prose-invert lg:prose-xl max-w-none space-y-8 text-gray-200">
                        {/* Short Desc Highlight */}
                        <p className="text-xl md:text-2xl font-serif italic text-[#C2B280] leading-relaxed border-l-4 border-[#C2B280] pl-6 py-2 bg-gradient-to-r from-[#C2B280]/10 to-transparent rounded-r-lg">
                            "{getText(dham.shortDesc)}"
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <span className="w-2 h-8 bg-[#4cd57a] rounded-full mr-3 shadow-[0_0_15px_#4cd57a]"></span>
                                {isHindi ? 'ऐतिहासिक महत्व' : 'Historical Significance'}
                            </h2>
                            <p className="leading-relaxed whitespace-pre-line text-lg font-light text-gray-100">
                                {getText(dham.history)}
                            </p>
                        </div>

                        {/* Miracle Section */}
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4cd57a]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                            <div className="flex items-start space-x-6 relative z-10">
                                <div className="bg-[#4cd57a]/20 p-3 rounded-full">
                                    <Star className="w-8 h-8 text-[#4cd57a]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {isHindi ? 'देवीय चमत्कार' : 'Divine Connection & Miracle'}
                                    </h3>
                                    <p className="text-gray-200 italic text-lg leading-relaxed">"{getText(dham.miracle)}"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    );
};

export default DhamDetailPage;
