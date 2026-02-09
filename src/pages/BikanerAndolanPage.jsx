import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, AlertTriangle, CheckCircle, Clock, Share2, PenTool, Activity, Users, TreeDeciduous, Landmark } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const BikanerAndolanPage = () => {
    const { t, i18n } = useTranslation();
    const isHindi = i18n.language === 'hi';
    const [showAdaniModal, setShowAdaniModal] = React.useState(false);
    const [showNTPCModal, setShowNTPCModal] = React.useState(false);
    const [showGreencoModal, setShowGreencoModal] = React.useState(false);

    // Data points for the investigative report
    const INVESTIGATIVE_DATA = {
        adani: {
            theme: "brand-neon",
            icon: <Landmark className="w-16 h-16 text-brand-neon" />,
            title_en: "Adani Renewable Energy: The Desert Takeover",
            title_hi: "अडानी रिन्यूएबल एनर्जी: रेगिस्तान पर कब्जा",
            subtitle_en: "CONFIDENTIAL REPORT • BIKANER & JAISALMER • 2020-2026",
            subtitle_hi: "गोपनीय रिपोर्ट • बीकानेर और जैसलमेर • 2020-2026",
            sections: [
                {
                    title_en: "Mega Projects & Local Impact",
                    title_hi: "विशाल परियोजनाएँ और स्थानीय प्रभाव",
                    icon: <MapPin className="w-6 h-6 mr-3 text-[#E07A5F]" />,
                    content_en: [
                        "Fatehgarh Ultra Mega Solar Park (Jaisalmer): 1500 MW capacity. One of the largest solar parks, causing massive displacement in 'Khatedari' lands.",
                        "Nedan Village (Jaisalmer): 1500 MW plant by Adani Renewable Energy Park Rajasthan Ltd (AREPRL). 3,821 acres of agricultural land reclassified as 'barren' to facilitate acquisition.",
                        "Bhimsar Village (Jaisalmer): 250 MW plant. Residents verbally ordered to vacate lands including ponds and 'Orans' in Dec 2023.",
                        "Transmission Lines: High-tension wires crossing critical Great Indian Bustard (GIB) habitats in Gaijer (Bikaner) and Degrai Oran."
                    ],
                    content_hi: [
                        "फतेहगढ़ अल्ट्रा मेगा सोलर पार्क (जैसलमेर): 1500 मेगावाट क्षमता। सबसे बड़े पार्कों में से एक, जिससे 'खातेदारी' भूमि में भारी विस्थापन हुआ।",
                        "नेदान गाँव (जैसलमेर): अदानी रिन्यूएबल एनर्जी पार्क राजस्थान लिमिटेड (AREPRL) द्वारा 1500 मेगावाट का प्लांट। 3,821 एकड़ कृषि भूमि को 'बंजर' घोषित कर अधिग्रहित किया गया।",
                        "भीमसर गाँव (जैसलमेर): 250 मेगावाट प्लांट। दिसंबर 2023 में ग्रामीणों को तालाबों और 'ओरण' सहित भूमि खाली करने का मौखिक आदेश दिया गया।",
                        "ट्रांसमिशन लाइनें: गजेर (बीकानेर) और देग राय ओरण में गोडावण (GIB) के प्रमुख आवासों से गुजरने वाली हाई-टेंशन तारें।"
                    ]
                },
                {
                    title_en: "Ecological Devastation",
                    title_hi: "पारिस्थितिक विनाश",
                    icon: <TreeDeciduous className="w-6 h-6 mr-3 text-red-500" />,
                    content_en: [
                        "Oran Encroachment: Systematic occupation of sacred groves (Orans) in Jaisalmer, blocking community access to grazing land and water bodies.",
                        "Khejri Massacre: Allegations of thousands of state trees (Khejri) being uprooted, burnt, or buried at night to bypass environmental clearance.",
                        "Wildlife Threat: Fences and power lines have blocked migration routes for Chinkara and desert foxes, leading to fatal accidents."
                    ],
                    content_hi: [
                        "ओरण अतिक्रमण: जैसलमेर में पवित्र उपवनों (ओरण) पर व्यवस्थित कब्जा, जिससे समुदाय का चरागाह और जल स्रोतों तक जाना बंद हो गया।",
                        "खेजड़ी नरसंहार: पर्यावरण मंजूरी से बचने के लिए हजारों राज्य वृक्षों (खेजड़ी) को रात में उखाड़ने, जलाने या दफनाने के आरोप।",
                        "वन्यजीव खतरा: बाड़ और बिजली के तारों ने चिंकारा और रेगिस्तानी लोमड़ियों के प्रवास मार्ग रोक दिए हैं, जिससे जानलेवा दुर्घटनाएं हो रही हैं।"
                    ]
                },
                {
                    title_en: "Timeline of Resistance (2020-2026)",
                    title_hi: "विरोध की समयरेखा (2020-2026)",
                    icon: <Clock className="w-6 h-6 mr-3 text-yellow-500" />,
                    content_en: [
                        "Feb 2026: Massive 'Mahapadav' in Bikaner; indefinite hunger strike against tree felling.",
                        "Nov 2024: Baiya Village (Jaisalmer): Villagers lay in front of Adani vehicles to stop 600 MW project construction on Oran land.",
                        "Aug 2021: Fatehgarh Protests: Farmers agitated against encroachment on cultivated lands.",
                        "Legal: High Court interventions sought to cancel allotments in Nedan due to 'Oran' status."
                    ],
                    content_hi: [
                        "फरवरी 2026: बीकानेर में विशाल 'महापड़ाव'; पेड़ कटाई के खिलाफ अनिश्चितकालीन भूख हड़ताल।",
                        "नवंबर 2024: बइया गाँव (जैसलमेर): ओरण भूमि पर 600 मेगावाट परियोजना निर्माण रोकने के लिए ग्रामीण अदानी के वाहनों के सामने लेट गए।",
                        "अगस्त 2021: फतेहगढ़ विरोध: किसानों ने खेती योग्य भूमि पर अतिक्रमण के खिलाफ आंदोलन किया।",
                        "कानूनी: 'ओरण' स्थिति के कारण नेदान में आवंटन रद्द करने के लिए उच्च न्यायालय में याचिकाएं।"
                    ]
                }
            ]
        },
        ntpc: {
            theme: "blue-500",
            icon: <Activity className="w-16 h-16 text-blue-400" />,
            title_en: "NTPC Ltd: The Public Sector Giant",
            title_hi: "एनटीपीसी लिमिटेड: सार्वजनिक क्षेत्र की दिग्गज",
            subtitle_en: "GOVT PROJECTS • NOKH & PUGAL • ECOLOGICAL CRISIS",
            subtitle_hi: "सरकारी परियोजनाएँ • नोख और पूगल • पारिस्थितिक संकट",
            sections: [
                {
                    title_en: "Strategic Solar Zones",
                    title_hi: "रणनीतिक सोलर जोन",
                    icon: <MapPin className="w-6 h-6 mr-3 text-blue-400" />,
                    content_en: [
                        "Nokh Solar Park (Jaisalmer): 735 MW capacity, fully commissioned by Dec 2025. Sits dangerously close to multiple ecologically sensitive Orans.",
                        "Pugal Solar Park (Bikaner): 1500 MW ultra-mega project. Massive land levelling operations reported, flattening unparalleled desert dunes.",
                        "Land Usage: Thousands of hectares of 'waste land' acquired, which locals claim is active grazing land (Gauchar)."
                    ],
                    content_hi: [
                        "नोख सोलर पार्क (जैसलमेर): 735 मेगावाट क्षमता, दिसंबर 2025 तक पूरी तरह चालू। कई पारिस्थितिक रूप से संवेदनशील ओरणों के बेहद करीब स्थित।",
                        "पूगल सोलर पार्क (बीकानेर): 1500 मेगावाट अल्ट्रा-मेगा प्रोजेक्ट। बड़े पैमाने पर भूमि समतलीकरण की खबरें, जिससे अद्वितीय रेगिस्तानी टीले नष्ट हो गए।",
                        "भूमि उपयोग: हजारों हेक्टेयर 'बंजर भूमि' का अधिग्रहण, जिसे स्थानीय लोग सक्रिय चरागाह (गौचर) बताते हैं।"
                    ]
                },
                {
                    title_en: "The Khejri Crisis",
                    title_hi: "खेजड़ी संकट",
                    icon: <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />,
                    content_en: [
                        "30 Lakh Trees Lost: Estimates suggest over 3 million Khejri trees lost in the region due to cumulative solar expansion (NTPC & others).",
                        "Survival Rate Scandal: CAG reports indicate only ~67% survival rate for compensatory afforestation, failing to replace the mature ecosystem lost.",
                        "Method of Destruction: Use of heavy earthmovers to uproot mature trees, destroying the root systems that bind the desert soil."
                    ],
                    content_hi: [
                        "30 लाख पेड़ नष्ट: अनुमान है कि कुल सोलर विस्तार (एनटीपीसी और अन्य) के कारण क्षेत्र में 30 लाख से अधिक खेजड़ी के पेड़ नष्ट हो गए हैं।",
                        "जीवित रहने की दर का घोटाला: कैग (CAG) रिपोर्ट बताती है कि प्रतिपूरक वनरोपण की जीवित रहने की दर केवल ~67% है, जो नष्ट हुए पारिस्थितिकी तंत्र की भरपाई करने में विफल है।",
                        "विनाश का तरीका: परिपक्व पेड़ों को उखाड़ने के लिए भारी अर्थमूवर्स का उपयोग, जिससे रेगिस्तानी मिट्टी को बांधने वाली जड़ें नष्ट हो गईं।"
                    ]
                },
                {
                    title_en: "Community & Legal Pushback",
                    title_hi: "सामुदायिक और कानूनी विरोध",
                    icon: <Users className="w-6 h-6 mr-3 text-yellow-400" />,
                    content_en: [
                        "Lakhusar Incident (July 2025): Villagers caught contractors cutting 400+ Khejri trees illegally; forced work stoppage.",
                        "Sept 2024 Policy: Govt announced '10 trees for 1 cut' policy after protests, but implementation remains poor on the ground.",
                        "NGT Cases: Multiple notices issued to authorities regarding violation of environmental norms in solar park setups."
                    ],
                    content_hi: [
                        "लाखुसर घटना (जुलाई 2025): ग्रामीणों ने ठेकेदारों को 400+ खेजड़ी के पेड़ अवैध रूप से काटते हुए पकड़ा; काम रुकवाया।",
                        "सितंबर 2024 नीति: विरोध के बाद सरकार ने '1 कटने पर 10 पेड़' की नीति घोषित की, लेकिन जमीन पर कार्यान्वयन खराब है।",
                        "एनजीटी (NGT) मामले: सोलर पार्क सेटअप में पर्यावरण मानदंडों के उल्लंघन के संबंध में अधिकारियों को कई नोटिस जारी किए गए।"
                    ]
                }
            ]
        },
        greenco: {
            theme: "green-500",
            icon: <Activity className="w-16 h-16 text-green-400" />,
            title_en: "Greenco Energies: The Integrated Giant",
            title_hi: "ग्रीनको एनर्जीज़: एकीकृत दिग्गज",
            subtitle_en: "IRESP PROJECT • BARAN & DESERT • 2023-2026",
            subtitle_hi: "IRESP प्रोजेक्ट • बारां और रेगिस्तान • 2023-2026",
            sections: [
                {
                    title_en: "Project Scale & Footprint",
                    title_hi: "परियोजना पैमाना और पदचिह्न",
                    icon: <MapPin className="w-6 h-6 mr-3 text-green-400" />,
                    content_en: [
                        "Integrated Renewable Energy Storage Project (IRESP): A massive ~₹30,000 Cr investment combining Solar, Wind, and Pumped Hydro.",
                        "Shahbad (Baran): 1800 MW Pumped Hydro Storage. Involved cutting 1.19 lakh trees in the Shahbad forest area.",
                        "Pali & Jaisalmer: 3.6 GW Solar and 0.9 GW Wind capacity. Extensive land acquisition in the desert belt linking to the storage hub."
                    ],
                    content_hi: [
                        "एकीकृत अक्षय ऊर्जा भंडारण परियोजना (IRESP): सौर, पवन और पम्प हाइड्रो को मिलाने वाला ~₹30,000 करोड़ का भारी निवेश।",
                        "शाहबाद (बारां): 1800 मेगावाट पम्प हाइड्रो स्टोरेज। शाहबाद वन क्षेत्र में 1.19 लाख पेड़ों की कटाई शामिल।",
                        "पाली और जैसलमेर: 3.6 गीगावाट सौर और 0.9 गीगावाट पवन क्षमता। स्टोरेज हब से जुड़ने वाले रेगिस्तानी इलाके में व्यापक भूमि अधिग्रहण।"
                    ]
                },
                {
                    title_en: "Deforestation Details",
                    title_hi: "वनों की कटाई का विवरण",
                    icon: <TreeDeciduous className="w-6 h-6 mr-3 text-red-500" />,
                    content_en: [
                        "Shahbad Forest: Official reports confirm 1.19 lakh trees to be felled. Affected villages include Kaloni, Mungawali, and Baint.",
                        "Desert Vegetation: Clearing of intricate desert scrub and Khejri in Pali/Jaisalmer to install vast solar arrays.",
                        "Impact on Tribals: Displacement of Sahariya tribes in Baran and pastoral communities in the desert districts."
                    ],
                    content_hi: [
                        "शाहबाद वन: आधिकारिक रिपोर्टों ने 1.19 लाख पेड़ों के कटने की पुष्टि की। प्रभावित गाँवों में कैलोनी, मुंगावली और बैंत शामिल हैं।",
                        "रेगिस्तानी वनस्पति: विशाल सोलर पैनल लगाने के लिए पाली/जैसलमेर में रेगिस्तानी झाड़ियों और खेजड़ी की सफाई।",
                        "आदिवासियों पर प्रभाव: बारां में सहरिया जनजातियों और रेगिस्तानी जिलों में पशुपालक समुदायों का विस्थापन।"
                    ]
                },
                {
                    title_en: "Rising Resistance",
                    title_hi: "बढ़ता प्रतिरोध",
                    icon: <Clock className="w-6 h-6 mr-3 text-yellow-500" />,
                    content_en: [
                        "Ongoing: Protests in Barmer's Sheo subdivision (Aug 2025) against illegal felling involving multiple players including Greenko.",
                        "Tribal & Bishnoi Unity: A unique alliance forming between forest-dwelling tribes in Baran and nature-worshipping Bishnois in the desert.",
                        "Jaisalmer Wind Farm (900 MW): In permitting stage, but facing stiff opposition due to proximity to Great Indian Bustard habitats."
                    ],
                    content_hi: [
                        "जारी: बाड़मेर के शिव उपखंड (अगस्त 2025) में ग्रीनको सहित कई खिलाड़ियों द्वारा अवैध कटाई के खिलाफ विरोध प्रदर्शन।",
                        "आदिवासी और बिश्नोई एकता: बारां के वनवासी आदिवासियों और रेगिस्तान के प्रकृति-प्रेमी बिश्नोईयों के बीच एक अनूठा गठबंधन बन रहा है।",
                        "जैसलमेर विंड फार्म (900 मेगावाट): अनुमति चरण में, लेकिन गोडावण (GIB) आवासों के निकट होने के कारण कड़े विरोध का सामना कर रहा है।"
                    ]
                }
            ]
        }
    };

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
                    {/* Live Badge Removed as per user request */}
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
                        भाग 2.5: शामिल कंपनियां (Corporate Profile)
                    </span>
                    <h2 className="text-3xl font-serif font-bold text-center text-white mb-12">
                        मुख्य खिलाड़ी: अडानी रिन्यूएबल एनर्जी
                    </h2>

                    {/* Adani Renewable Energy - Clickable Feature Card */}
                    <div
                        onClick={() => setShowAdaniModal(true)}
                        className="group cursor-pointer bg-black/40 rounded-3xl border border-brand-neon/30 p-6 md:p-10 mb-12 shadow-[0_0_50px_rgba(76,213,122,0.1)] relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_80px_rgba(76,213,122,0.2)] hover:-translate-y-2"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                            <Landmark className="w-48 h-48 text-brand-neon rotate-12" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 text-center md:text-left">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                <span className="text-black font-bold text-4xl">A</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 group-hover:text-brand-neon transition-colors">
                                    {isHindi ? "अडानी रिन्यूएबल एनर्जी" : "Adani Renewable Energy"}
                                </h3>
                                <p className="text-gray-400 font-mono text-sm md:text-base uppercase tracking-wider mb-6">
                                    {isHindi ? "प्रमुख विकासकर्ता • राजस्थान (क्लिक करें और विवरण देखें)" : "Major Developer • Rajasthan (Click for Full Report)"}
                                </p>

                                <div className="inline-flex items-center gap-2 text-brand-neon border border-brand-neon/30 px-6 py-2 rounded-full bg-brand-neon/10 group-hover:bg-brand-neon/20 transition-colors">
                                    <span className="animate-pulse w-2 h-2 rounded-full bg-brand-neon"></span>
                                    <span className="font-bold text-sm tracking-wide">
                                        {isHindi ? "विस्तृत रिपोर्ट देखें" : "VIEW DETAILED REPORT"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Entities Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">

                        {/* NTPC - Clickable Card */}
                        <div
                            onClick={() => setShowNTPCModal(true)}
                            className="group cursor-pointer bg-black/40 p-6 md:p-8 rounded-3xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Activity className="w-32 h-32 text-blue-400 rotate-12" />
                            </div>

                            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-blue-400 border border-blue-400/30 font-bold text-3xl group-hover:scale-110 transition-transform duration-500">
                                    N
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-2xl md:text-3xl mb-2 group-hover:text-blue-400 transition-colors">
                                        {isHindi ? "एनटीपीसी लिमिटेड" : "NTPC Ltd"}
                                    </h3>
                                    <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-wider mb-4">
                                        {isHindi ? "सार्वजनिक क्षेत्र • 2235+ मेगावाट" : "Central PSU • 2235+ MW Projects"}
                                    </p>
                                    <div className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-bold uppercase tracking-wider border-b border-blue-400/30 pb-0.5 group-hover:border-blue-400 transition-colors">
                                        {isHindi ? "रिपोर्ट पढ़ें" : "Read Report"}
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Greenco - Clickable Card */}
                        <div
                            onClick={() => setShowGreencoModal(true)}
                            className="group cursor-pointer bg-black/40 p-6 md:p-8 rounded-3xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.2)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <TreeDeciduous className="w-32 h-32 text-green-400 rotate-12" />
                            </div>

                            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 relative z-10">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-green-400 border border-green-400/30 font-bold text-3xl group-hover:scale-110 transition-transform duration-500">
                                    G
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-2xl md:text-3xl mb-2 group-hover:text-green-400 transition-colors">
                                        {isHindi ? "ग्रीनको एनर्जीज़" : "Greenco Energies"}
                                    </h3>
                                    <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-wider mb-4">
                                        {isHindi ? "एकीकृत रिन्यूएबल • 4.5+ गीगावाट" : "Integrated Renewable • 4.5+ GW"}
                                    </p>
                                    <div className="inline-flex items-center gap-1.5 text-green-400 text-sm font-bold uppercase tracking-wider border-b border-green-400/30 pb-0.5 group-hover:border-green-400 transition-colors">
                                        {isHindi ? "रिपोर्ट पढ़ें" : "Read Report"}
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Unified Entity Details Modal */}
                    {(showAdaniModal || showNTPCModal || showGreencoModal) && (() => {
                        const activeKey = showAdaniModal ? 'adani' : showNTPCModal ? 'ntpc' : 'greenco';
                        const data = INVESTIGATIVE_DATA[activeKey];
                        const handleClose = () => {
                            if (showAdaniModal) setShowAdaniModal(false);
                            if (showNTPCModal) setShowNTPCModal(false);
                            if (showGreencoModal) setShowGreencoModal(false);
                        };

                        const getThemeClasses = (theme) => {
                            if (theme === 'brand-neon') return { border: 'border-brand-neon/30', text: 'text-brand-neon', bg: 'bg-brand-neon', scroll: 'scrollbar-thumb-brand-neon/30', iconBg: 'bg-white' };
                            if (theme === 'blue-500') return { border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500', scroll: 'scrollbar-thumb-blue-500/30', iconBg: 'bg-blue-900/50' };
                            return { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500', scroll: 'scrollbar-thumb-green-500/30', iconBg: 'bg-green-900/50' };
                        };
                        const themeClasses = getThemeClasses(data.theme);

                        return (
                            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
                                <div className={`bg-[#1a1a1a] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border ${themeClasses.border} shadow-2xl relative scrollbar-thin ${themeClasses.scroll} scrollbar-track-transparent`}>

                                    <button
                                        onClick={handleClose}
                                        className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hover:rotate-90 duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>

                                    <div className="p-6 md:p-12">
                                        <div className={`flex items-center gap-4 mb-8 md:mb-12 border-b ${themeClasses.border} pb-6`}>
                                            <div className={`w-16 h-16 ${themeClasses.iconBg} rounded-full flex items-center justify-center shadow-lg border ${themeClasses.border} transition-transform hover:scale-110`}>
                                                {/* Re-render icon to ensure class application if needed, but data.icon is already JSX */}
                                                {data.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                                    {isHindi ? data.title_hi : data.title_en}
                                                </h2>
                                                <p className={`${themeClasses.text} uppercase tracking-widest text-xs md:text-sm mt-2 font-mono`}>
                                                    {isHindi ? data.subtitle_hi : data.subtitle_en}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {data.sections.map((section, idx) => (
                                                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1 group">
                                                    <h4 className="flex items-center text-xl font-bold text-white mb-6 pb-4 border-b border-white/10 group-hover:border-white/20 transition-colors">
                                                        {section.icon}
                                                        {isHindi ? section.title_hi : section.title_en}
                                                    </h4>
                                                    <ul className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                                                        {(isHindi ? section.content_hi : section.content_en).map((point, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <span className={`w-1.5 h-1.5 ${themeClasses.bg} rounded-full mt-2.5 mr-3 flex-shrink-0 shadow-[0_0_8px_currentColor]`}></span>
                                                                <span className="opacity-90 group-hover:opacity-100 transition-opacity">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col items-center gap-4">
                                            <p className="text-gray-500 text-xs md:text-sm italic max-w-2xl">
                                                {isHindi
                                                    ? "* यह डेटा सार्वजनिक रिपोर्टों, एनजीटी फाइलिंग और समाचार स्रोतों (2020-2026) पर आधारित एक स्वतंत्र जांच है।"
                                                    : "* Data based on independent investigation using public reports, NGT filings, and news archives (2020-2026)."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}
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

            {/* Sticky Action Button - Optimized for Mobile Overlap */}
            <div className="fixed bottom-32 md:bottom-8 left-0 right-0 z-[60] px-3 md:px-4 pointer-events-none transition-all duration-300">
                <div className="max-w-md mx-auto pointer-events-auto flex gap-2 md:gap-3 scale-90 md:scale-100 origin-bottom">
                    <button className="flex-1 bg-[#C53030] hover:bg-red-700 text-white font-bold py-2.5 md:py-3.5 text-sm md:text-base rounded-full shadow-2xl shadow-red-900/40 flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all">
                        <PenTool className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
                        याचिका
                    </button>
                    {/* WhatsApp Share Button - Updated */}
                    <button
                        onClick={handleShare}
                        className="flex-1 bg-green-500/20 hover:bg-green-500/40 backdrop-blur-xl text-green-400 border border-green-500/50 font-bold py-2.5 md:py-3.5 text-sm md:text-base rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all text-shadow border-white/10"
                    >
                        <Share2 className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
                        शेयर करें
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BikanerAndolanPage;
