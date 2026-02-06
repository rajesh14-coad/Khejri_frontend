import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, AlertTriangle, CheckCircle, Clock, Share2, PenTool, Activity, Users, TreeDeciduous, Landmark } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const BikanerAndolanPage = () => {
    const { t, isHindi } = useTranslation();

    // Data points for the investigative report
    const impactData = {
        landParams: "25,000+",
        landUnit: "हेक्टेयर भूमि अर्ध-अधिग्रहीत",
        treeCasualties: "50,000+", // Estimated
        treeLabel: "खेजड़ी के पेड़ खतरे में",
        villages: "12",
        villageLabel: "प्रभावित गाँव"
    };

    const handleShare = () => {
        const text = "Check out this movement to save Khejri trees: https://khejribachao.in/movements/bikaner-2026";
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-transparent min-h-screen pb-32 font-sans selection:bg-[#E07A5F] selection:text-white">
            <SEO
                title="बीकानेर संकट: सौर ऊर्जा बनाम खेजड़ी"
                description="Investigative report on the ecological conflict in Western Rajasthan. 50,000+ trees at risk. Join the movement."
            />

            {/* 1. HERO SECTION: THE CRISIS */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/solar_contrast.png"
                        alt="Contrast between Solar Panels and Khejri Trees"
                        className="w-full h-full object-cover grayscale-[30%] contrast-125 scale-105 animate-slow-pan"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-[#C53030] text-white px-4 py-1.5 rounded-sm font-bold uppercase tracking-widest text-xs mb-4 md:mb-6 shadow-lg animate-pulse">
                        <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                        Status: 🔴 सक्रिय/LIVE
                    </div>
                    <h1 className="text-3xl md:text-7xl font-serif font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                        बीकानेर खेजड़ी बचाओ <br />
                        <span className="text-brand-neon">आंदोलन 2026</span>
                    </h1>
                    <div className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed border-l-4 border-brand-neon pl-4 md:pl-6 text-left bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-r-lg space-y-2 md:space-y-4">
                        <p className="font-semibold text-white text-sm md:text-base">
                            📍 स्थान: बीकानेर कलेक्ट्रेट और करणीसर भाटियान, राजस्थान।
                        </p>
                        <p className="text-sm md:text-base">
                            मुख्य मुद्दा: पश्चिमी राजस्थान में सौर ऊर्जा संयंत्रों (Solar Plants) के नाम पर हजारों खेजड़ी के पेड़ों की निर्मम कटाई के विरोध में।
                        </p>
                        <p className="text-brand-neon font-serif italic text-xl md:text-2xl mt-4">
                            "सिर साठे रूंख रहे तो भी सस्तो जाण"
                        </p>
                        <p className="text-xs md:text-sm opacity-80">(अर्थ: अगर सिर कटने पर भी पेड़ बच जाए, तो भी यह सौदा सस्ता है)</p>
                    </div>
                </div>
            </div>

            {/* 2. SUBSECTION A: THE ROOT CAUSE (Deep Dive) */}
            <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <div className="bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl border border-white/10">
                    <span className="text-brand-neon font-bold tracking-widest uppercase text-sm block mb-4 border-b-2 border-brand-neon w-fit pb-1 bg-white/10 px-2 rounded">
                        मुख्य मुद्दा (Main Issue)
                    </span>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
                        सौर ऊर्जा संयंत्र बनाम खेजड़ी
                    </h2>
                    <div className="prose prose-lg text-gray-200 leading-relaxed space-y-6">
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#E07A5F] first-letter:float-left first-letter:mr-3">
                            पश्चिमी राजस्थान में सौर ऊर्जा संयंत्रों (Solar Plants) के नाम पर हजारों खेजड़ी के पेड़ों की निर्मम कटाई की जा रही है।
                            बीकानेर कलेक्ट्रेट और करणीसर भाटियान में इसका कड़ा विरोध हो रहा है।
                        </p>
                        <p>
                            सरकार और कंपनियों द्वारा विकास के नाम पर हमारी 'सांस्कृतिक धरोहर' और रेगिस्तान के जीवन रक्षक 'खेजड़ी' को नष्ट करना अस्वीकार्य है।
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. SUBSECTION B: THE SCALE OF DESTRUCTION (Data) */}
            <div className="py-24 relative overflow-hidden bg-black/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#E07A5F] font-bold tracking-widest uppercase text-sm block mb-4">
                                भाग 2: विनाश का पैमाना
                            </span>
                            <h2 className="text-4xl font-serif font-bold mb-8 text-white">आंकड़े झूठ नहीं बोलते</h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                पिछले 2 वर्षों में, अधिग्रहण की गति तेज हो गई है। स्थानीय रिपोर्टों के अनुसार, प्रभाव विनाशकारी है।
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors">
                                    <div className="p-4 bg-brand-neon/20 rounded-full text-brand-neon">
                                        <Landmark className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white">{impactData.landParams}</h3>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider">{impactData.landUnit}</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors">
                                    <div className="p-4 bg-[#C53030]/20 rounded-full text-[#C53030]">
                                        <TreeDeciduous className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white animate-pulse">{impactData.treeCasualties}</h3>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider">{impactData.treeLabel}</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors">
                                    <div className="p-4 bg-blue-500/20 rounded-full text-blue-400">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-white">{impactData.villages}</h3>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider">{impactData.villageLabel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-black/50 rounded-lg overflow-hidden border border-white/20 shadow-2xl backdrop-blur-md">
                            {/* Map or Graphic Placeholder - Visualizing the Land Grab */}
                            <div className="absolute inset-0 opacity-60">
                                <img src="/images/solar_contrast.png" className="w-full h-full object-cover opacity-50" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                                <h4 className="text-xl font-bold text-white mb-2">जमीनी हकीकत</h4>
                                <p className="text-sm text-gray-300">
                                    सैटेलाइट इमेजरी बंजर भूमि नहीं, बल्कि खेजड़ी के घने जंगलों को दिखाती है जिन्हें 'बंजर' बताकर अधिग्रहित किया जा रहा है।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3.1 SUBSECTION C: THE CORPORATE ENTITIES */}
            <div className="py-16 border-y border-white/10 bg-black/30 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4">
                    <span className="text-gray-400 font-bold tracking-widest uppercase text-sm block mb-4 text-center">
                        भाग 2.5: शामिल कंपनियां
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-center text-white mb-12">
                        किसके प्रोजेक्ट्स हैं?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        {["Adani Renewable Energy", "NTPC Ltd (National Thermal)", "Greenco Energies"].map((corp, i) => (
                            <div key={i} className="p-6 bg-black/40 rounded-xl border border-white/10 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all">
                                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-300 border border-white/20">
                                    <span className="font-bold text-xl">{corp[0]}</span>
                                </div>
                                <h3 className="font-bold text-white text-lg">{corp}</h3>
                                <p className="text-sm text-gray-400 mt-2">Multiple Mega-Projects in Bikaner & Jaisalmer</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. SUBSECTION D: THE RESISTANCE (Mahapadav) */}
            <div className="max-w-5xl mx-auto px-4 py-24">
                <span className="text-[#C53030] font-bold tracking-widest uppercase text-sm block mb-4 border-b-2 border-[#C53030] w-fit pb-1">
                    भाग 3: प्रतिरोध
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
                    महापड़ाव: अस्तित्व की लड़ाई
                </h2>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group border border-white/10">
                    <img
                        src="/images/andolan_protest.png"
                        alt="Bishnoi Community Protest"
                        className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#C53030] text-white px-3 py-1 rounded text-xs font-bold uppercase animate-pulse">Live Now</span>
                            <span className="text-gray-300 font-mono text-xs">28.0167° N, 73.3119° E</span>
                        </div>
                        <p className="text-lg md:text-xl font-medium max-w-3xl drop-shadow-md">
                            हजारों बिश्नोई, किसान और पर्यावरण कार्यकर्ता बीकानेर कलेक्ट्रेट पर अनिश्चितकालीन धरने पर बैठे हैं। उनकी मांग स्पष्ट है: हमारी आस्था और पर्यावरण को बिकाऊ नहीं समझा जा सकता।
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-white/10 overflow-hidden">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <CheckCircle className="w-6 h-6 mr-3 text-[#2D5A27]" />
                            प्रमुख मांगें (Core Demands)
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "सख्त 'वृक्ष संरक्षण अधिनियम' (Tree Protection Act) तुरंत लागू हो।",
                                "सौर परियोजनाओं के लिए खेजड़ी काटने पर पूर्ण प्रतिबंध लगे।",
                                "खेजड़ी को 'सांस्कृतिक धरोहर' घोषित किया जाए।"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-gray-200">
                                    <span className="w-1.5 h-1.5 bg-[#2D5A27] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Darker Glass for Live Updates as requested */}
                    <div className="bg-black/70 backdrop-blur-xl p-8 rounded-2xl border border-brand-neon/30 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-20">
                            <Activity className="w-24 h-24 text-brand-neon" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center relative z-10">
                            <Activity className="w-6 h-6 mr-3 text-brand-neon animate-pulse" />
                            ताज़ा खबर (Live Updates)
                        </h3>
                        <div className="space-y-6 relative border-l border-gray-600 ml-3 pl-6 z-10">
                            {[
                                { time: "ताज़ा खबर", text: "सरकार के प्रतिनिधि और मंत्री केके बिश्नोई ने वार्ता की पेशकश की है।" },
                                { time: "3 फरवरी 2026", text: "संतों और बिश्नोई कार्यकर्ताओं द्वारा अनिश्चितकालीन भूख हड़ताल।" },
                                { time: "1 फरवरी 2026", text: "विशाल महापड़ाव शुरू।" }
                            ].map((update, i) => (
                                <div key={i} className="relative group">
                                    <div className="absolute -left-[30px] top-1 w-3 h-3 rounded-full bg-brand-neon border-2 border-black group-hover:scale-125 transition-transform"></div>
                                    <span className="text-xs font-bold text-brand-neon block mb-1 uppercase tracking-wider">{update.time}</span>
                                    <p className="text-sm text-white font-medium">{update.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Action Button */}
            <div className="fixed bottom-20 md:bottom-8 left-0 right-0 z-40 px-4 pointer-events-none">
                <div className="max-w-md mx-auto pointer-events-auto flex gap-3">
                    <button className="flex-1 bg-[#C53030] hover:bg-red-700 text-white font-bold py-3.5 rounded-full shadow-2xl shadow-red-900/40 flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all">
                        <PenTool className="w-5 h-5 mr-2" />
                        याचिका
                    </button>
                    {/* WhatsApp Share Button - Updated */}
                    <button
                        onClick={handleShare}
                        className="flex-1 bg-green-500/20 hover:bg-green-500/40 backdrop-blur-xl text-green-400 border border-green-500/50 font-bold py-3.5 rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all text-shadow border-white/10"
                    >
                        <Share2 className="w-5 h-5 mr-2" />
                        शेयर करें
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BikanerAndolanPage;
