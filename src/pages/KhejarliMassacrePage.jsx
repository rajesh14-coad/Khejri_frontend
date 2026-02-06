import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { martyrsData } from '../data/martyrs';
import { Users, Clock, AlertTriangle, Scroll, ArrowLeft, Flame, ArrowRight, Shield, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';

const KhejarliMassacrePage = () => {
    const { currentLanguage } = useLanguage();
    const isHindi = currentLanguage === 'hi';
    const getText = (obj) => isHindi && obj.hi ? obj.hi : obj.en;

    const [selectedModal, setSelectedModal] = useState(null);

    // Modal Content Data Map
    const startMassacreModal = () => {
        setSelectedModal({
            title: isHindi ? 'खेजड़ली नरसंहार' : 'The Khejarli Massacre',
            content: [
                { label: isHindi ? 'तारीख' : 'Date', value: "11 September 1730 (Bhadrapad Shukla Dashami, Samvat 1787)" },
                { label: isHindi ? 'आदेश' : 'The Order', value: isHindi ? "महाराजा अभय सिंह ने अपने मंत्री गिरधर दास भंडारी को अपने नए महल 'फूल महल' के लिए चूना जलाने हेतु खेजड़ी के पेड़ काटने का आदेश दिया।" : "Maharaja Abhay Singh of Jodhpur ordered his minister Giridhar Das Bhandari to cut Khejri trees for burning lime (chuna) for his new palace 'Phool Mahal'." },
                { label: isHindi ? 'घटना' : 'The Event', value: isHindi ? "जब सैनिक पहुंचे, तो अमृता देवी बिश्नोई ने पहले पेड़ को गले लगा लिया। उनका सिर काट दिया गया। उनकी तीन बेटियों (आशु, रत्नी, भागू) ने उनका अनुसरण किया।" : "When soldiers arrived, Amrita Devi Bishnoi hugged the first tree. She was beheaded. Her three daughters (Asu, Ratni, Bhagu) followed her." },
                { label: isHindi ? 'परिणाम' : 'The Outcome', value: isHindi ? "यह देखकर 84 गांवों के बिश्नोई जमा हो गए। कुल मिलाकर 363 लोगों (69 महिलाएं, 294 पुरुष) ने अपने प्राणों की आहुति दे दी।" : "Seeing this, Bishnois from 84 villages gathered. In total, 363 people (69 women, 294 men) sacrificed their lives." },
                { label: isHindi ? 'शाही फरमान' : 'Royal Decree', value: isHindi ? "राजा ने माफी मांगी और एक ताम्र पत्र (Copper Plate) जारी किया जिसमें बिश्नोई क्षेत्रों में पेड़ों की कटाई पर हमेशा के लिए प्रतिबंध लगा दिया गया।" : "The King apologized and issued a copper plate inscription (Tamra Patra) banning tree cutting in Bishnoi areas forever." }
            ]
        });
    };

    const handleMartyrClick = (person) => {
        let details = [];

        // Specific content mapping based on ID
        if (person.id === 'amrita-devi') {
            details = [
                { label: isHindi ? 'भूमिका' : 'Role', value: isHindi ? "नेता / प्रथम शहीद" : "The Leader / First Martyr" },
                { label: isHindi ? 'मंत्र' : 'Mantra', value: isHindi ? "\"सिर सांटे रूँख रहे तो भी सस्तो जाण\" (यदि एक पेड़ को बचाने के लिए सिर भी कट जाए, तो इसे सस्ता सौदा समझो)।" : "\"Sir santey rukh rahe to bhi sasto jaan\" (If a head is given to save a tree, it is a cheap bargain)." },
                { label: isHindi ? 'विरासत' : 'Legacy', value: isHindi ? "उनका बलिदान इतिहास में पहले संगठित पर्यावरण आंदोलन का सूत्रधार बना।" : "Her sacrifice ignited the first organized environmental movement in history." }
            ];
        } else if (['asu-bai', 'ratni-bai', 'bhagu-bai'].includes(person.id)) {
            details = [
                { label: isHindi ? 'बलिदान' : 'Sacrifice', value: isHindi ? "तीन छोटी बेटियाँ जिन्होंने तुरंत अपनी माँ की जगह ली और उनका सिर काट दिया गया।" : "The three young daughters who immediately took their mother's place and were beheaded." },
                { label: isHindi ? 'संदर्भ' : 'Context', value: isHindi ? "उन्होंने अपनी माँ की हत्या देखने के बाद भी सैनिकों को रोकने से इनकार कर दिया।" : "They refused to let the soldiers continue even after seeing their mother killed." }
            ];
        } else if (person.id === 'bucho-ji') {
            details = [
                { label: isHindi ? 'ऐतिहासिक संदर्भ' : 'Historical Context', value: isHindi ? "वे 1643 ईस्वी (संवत 1600) से हैं। पोलावास गाँव के एक शहीद जिन्होंने खेजड़ली से लगभग एक सदी पहले पेड़ों के लिए अपने प्राणों का बलिदान दिया, और एक मिसाल कायम की।" : "He is from 1643 AD (Samvat 1600). A martyr from Polawas village who sacrificed his life for trees almost a century before Khejarli, setting the precedent." }
            ];
        } else if (person.id === 'mobile-messenger') { // Ramo Ji
            details = [
                { label: isHindi ? 'भूमिका' : 'Role', value: isHindi ? "हमले के बारे में आसपास के 84 गांवों को सचेत करने के लिए ढोल बजाया।" : "Played the drum (Dhol) to alert the surrounding 84 villages about the attack." },
                { label: isHindi ? 'कार्य/प्रभाव' : 'Action/Impact', value: isHindi ? "उनकी त्वरित सोच ने समुदाय को लामबंद किया, जिससे एक स्थानीय घटना भारी प्रतिरोध में बदल गई।" : "His quick thinking mobilized the community, turning a local incident into a massive resistance." }
            ];
        } else {
            // Default fallback using existing data if needed, or generic
            details = [
                { label: isHindi ? 'भूमिका' : 'Role', value: getText(person.role) },
                { label: isHindi ? 'गाँव' : 'Village', value: getText(person.village) },
                { label: isHindi ? 'उद्धरण' : 'Quote', value: getText(person.quote) }
            ];
        }

        setSelectedModal({
            title: getText(person.name),
            content: details
        });
    };

    const handleClanClick = () => {
        setSelectedModal({
            title: isHindi ? 'भागीदार गोत्र' : 'Participating Clans',
            isTable: true,
            content: [
                { label: isHindi ? 'बेनीवाल' : 'Beniwal', value: isHindi ? "42 शहीद (सर्वाधिक संख्या, अमृता देवी के परिवार सहित)" : "42 Martyrs (Highest number, including Amrita Devi's family)" },
                { label: isHindi ? 'पंवार' : 'Panwar', value: isHindi ? "24 शहीद" : "24 Martyrs" },
                { label: isHindi ? 'जानी' : 'Jani', value: isHindi ? "18 शहीद" : "18 Martyrs" },
                { label: isHindi ? 'कुल गाँव' : 'Total Villages', value: isHindi ? "49 विभिन्न गांवों से योद्धा बलिदान देने आए।" : "Warriors came from 49 different villages to sacrifice themselves." }
            ]
        });
    };

    const handleAllianceClick = () => {
        setSelectedModal({
            title: isHindi ? 'चौरासी गांवों की पंचायत' : 'Alliance of 84 Villages',
            content: [
                { label: isHindi ? 'आपातकालीन परिषद' : 'The Emergency Council', value: isHindi ? "जब अमृता देवी की मृत्यु की खबर फैली, तो 84 बिश्नोई गांवों के बुजुर्ग तुरंत एकत्र हुए।" : "When the news of Amrita Devi's death spread, elders from 84 Bishnoi villages gathered instantly." },
                { label: isHindi ? 'संकल्प' : 'The Resolution', value: isHindi ? "उन्होंने एक ऐतिहासिक प्रस्ताव पारित किया: \"एक पेड़ के लिए एक शरीर।\" हर स्वयंसेवक एक पेड़ को गले लगाएगा और अपना जीवन देगा।" : "They passed a historic resolution: \"One body for one tree.\" Every volunteer would hug one tree and give their life." },
                { label: isHindi ? 'महत्व' : 'Significance', value: isHindi ? "यह इतिहास का पहला संगठित 'चिपको' आंदोलन था, जिसे इस परिषद द्वारा संचालित किया गया था।" : "This was the first organized \"Chipko\" movement in history, orchestrated by this council." }
            ]
        });
    };

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16 selection:bg-nature-green selection:text-white relative">
            {/* HERO SECTION: THE KHEJARLI MASSACRE */}
            <div
                className="bg-red-900 text-white py-20 px-4 text-center cursor-pointer hover:bg-red-800 transition-colors duration-500 relative overflow-hidden group"
                onClick={startMassacreModal}
            >
                <div className="absolute inset-0 bg-[url('/images/khejarli_hero_pattern.png')] opacity-10"></div>
                <div className="relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
                        {isHindi ? 'इंटरेक्टिव इतिहास' : 'Interactive History'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 group-hover:scale-105 transition-transform duration-500">
                        {isHindi ? 'खेजड़ली नरसंहार' : 'The Khejarli Massacre'}
                    </h1>
                    <p className="text-2xl opacity-80 decoration-nature-tan group-hover:text-nature-tan transition-colors">
                        {isHindi ? 'मंगलवार, 11 सितंबर 1730' : 'Tuesday, 11th September 1730'}
                    </p>
                    <p className="mt-4 text-sm opacity-60 font-mono hidden group-hover:block transition-all animate-fade-in">
                        {isHindi ? 'पूरी कहानी पढ़ने के लिए क्लिक करें' : '(Click to read the full story)'}
                    </p>
                    <div className="mt-8 flex justify-center gap-8 pointer-events-none">
                        <div className="text-center group-hover:translate-y-[-5px] transition-transform duration-300 delay-75">
                            <span className="block text-4xl font-bold text-nature-tan">{martyrsData.stats.total}</span>
                            <span className="text-sm uppercase tracking-wide opacity-80 decoration-nature-tan/50">
                                {isHindi ? 'शहीद' : 'Martyrs'}
                            </span>
                        </div>
                        <div className="text-center border-l border-white/20 pl-8 group-hover:translate-y-[-5px] transition-transform duration-300 delay-100">
                            <span className="block text-4xl font-bold text-nature-tan">84</span>
                            <span className="text-sm uppercase tracking-wide opacity-80 decoration-nature-tan/50">
                                {isHindi ? 'गाँव' : 'Villages'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
                <Link to="/history" className="inline-flex items-center text-gray-500 hover:text-nature-green mb-4 transition">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {isHindi ? 'इतिहास पृष्ठ पर वापस जाएं' : 'Back to History Hub'}
                </Link>

                {/* TIMELINE SECTION */}
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

                {/* NOTABLE MARTYRS - INTERACTIVE GRID */}
                <section className="bg-nature-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-nature-tan/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                    <h2 className="text-3xl font-bold mb-8 text-center text-nature-tan flex items-center justify-center relative z-10">
                        <Flame className="w-8 h-8 mr-3" /> {isHindi ? 'उल्लेखनीय शहीद' : 'Notable Martyrs'}
                    </h2>
                    <p className="text-center mb-12 opacity-80 max-w-2xl mx-auto relative z-10">
                        {isHindi ? 'विस्तृत प्रोफ़ाइल देखने के लिए किसी भी कार्ड पर क्लिक करें।' : 'Click on any card to view detailed profiles and their specific contributions.'}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        {martyrsData.individuals.map((person) => (
                            <div
                                key={person.id}
                                onClick={() => handleMartyrClick(person)}
                                className="bg-white/10 hover:bg-white/20 cursor-pointer transition-all duration-300 p-6 rounded-2xl flex items-center justify-between group border border-white/5 hover:border-nature-tan/50 hover:shadow-[0_0_30px_rgba(194,178,128,0.2)]"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="w-14 h-14 bg-nature-tan rounded-full flex items-center justify-center text-nature-dark text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                                        {getText(person.name).charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg group-hover:text-nature-tan transition-colors">{getText(person.name)}</h4>
                                        <p className="text-xs opacity-70 uppercase tracking-wider">{getText(person.role)}</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-nature-tan opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* PARTICIPATING CLANS - INTERACTIVE */}
                <section
                    className="p-8 border border-gray-200 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 bg-white cursor-pointer group"
                    onClick={handleClanClick}
                >
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-nature-dark flex items-center">
                            <Shield className="w-8 h-8 mr-3 text-nature-green" /> {isHindi ? 'प्रतिभागी कबीले (गोत्र)' : 'Participating Clans'}
                        </h2>
                        <span className="bg-nature-green/10 text-nature-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider group-hover:bg-nature-green group-hover:text-white transition-colors">
                            {isHindi ? 'विवरण देखें' : 'View Breakdown'}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {martyrsData.gotras.slice(0, 3).map((gotra) => (
                            <div key={gotra.id} className="bg-nature-light/30 border border-gray-100 p-6 rounded-xl text-center group-hover:border-nature-green/30 transition-colors">
                                <h3 className="text-xl font-bold text-gray-900">{getText(gotra.name)}</h3>
                                <p className="text-sm text-gray-500 mt-2">{gotra.count} {isHindi ? 'शहीद' : 'Martyrs'}</p>
                            </div>
                        ))}
                        <div className="flex items-center justify-center">
                            <p className="text-sm text-nature-green font-bold">+ More (Click to view full list)</p>
                        </div>
                    </div>
                </section>

                {/* ALLIANCE OF 84 VILLAGES - INTERACTIVE */}
                <section
                    className="bg-nature-light/50 p-10 rounded-[2.5rem] border border-nature-dark/10 cursor-pointer hover:bg-nature-green/5 transition-colors group"
                    onClick={handleAllianceClick}
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-nature-dark flex items-center">
                            <MapPin className="w-8 h-8 mr-3 text-red-600" /> {isHindi ? '84 गांवों का गठबंधन' : 'The Alliance of 84 Villages'}
                        </h2>
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-nature-dark group-hover:translate-x-2 transition-all" />
                    </div>

                    <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                        {isHindi ? 'जबकि खेजड़ली केंद्र था, 84 विभिन्न गांवों से 363 शहीद आए थे। उनके व्यक्तिगत इतिहास की खोज लामबंदी के पैमाने को उजागर करती है।' : 'While Khejarli was the epicenter, 363 martyrs arrived from 84 different villages. Exploring their individual histories reveals the scale of the mobilization.'}
                    </p>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group-hover:shadow-md transition-shadow">
                        <div className="bg-red-100 p-3 rounded-full">
                            <AlertTriangle className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{isHindi ? 'इतिहास का पहला "चिपको"' : 'The First "Chipko"'}</h4>
                            <p className="text-sm text-gray-500">{isHindi ? '84 गांवों की आपातकालीन परिषद के बारे में पढ़ने के लिए टैप करें।' : 'Tap to read about the Emergency Council of 84 villages.'}</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* DETAILED GLASS MODAL */}
            <AnimatePresence>
                {selectedModal && (
                    <motion.div
                        key="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
                        onClick={() => setSelectedModal(null)}
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative z-10 bg-black/40 border border-white/20 text-white p-8 md:p-10 rounded-[2rem] max-w-2xl w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl"
                        >
                            {/* Noise Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                            <button
                                onClick={() => setSelectedModal(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">
                                {selectedModal.title}
                            </h3>

                            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                {selectedModal.content && selectedModal.content.map((item, idx) => (
                                    <div key={idx} className={`p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors ${selectedModal.isTable ? 'flex justify-between items-center' : ''}`}>
                                        {selectedModal.isTable ? (
                                            <>
                                                <span className="font-bold text-nature-tan text-lg">{item.label}</span>
                                                <span className="font-mono text-white font-bold">{item.value}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="block text-xs font-bold text-[#4cd57a] uppercase tracking-widest mb-1 shadow-green-glow">
                                                    {item.label}
                                                </span>
                                                <p className="text-lg text-gray-200 font-light leading-relaxed">
                                                    {item.value}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default KhejarliMassacrePage;
