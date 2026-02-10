import { Leaf, ChevronRight, Info, Languages, Droplet, Flame, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const RulesPage = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    // Toggle language
    const toggleLanguage = () => {
        i18n.changeLanguage(currentLang === 'en' ? 'hi' : 'en');
    };

    // All 29 rules in one array - same emerald green color for all
    const allRules = [
        {
            id: 1,
            hindi: "तीस दिन सूतक",
            hindiRoman: "Tis Din Sutak",
            english: "Observe 30 days of isolation after childbirth",
            detail: {
                hi: "माँ और नवजात शिशु को संक्रमण से बचाने (संगरोध) और माँ को अपनी शक्ति पुनः प्राप्त करने के लिए आराम देने की एक वैज्ञानिक प्रथा।",
                en: "A scientific practice to protect the mother and newborn from infection (quarantine) and give the mother rest to recover her strength."
            }
        },
        {
            id: 2,
            hindi: "पाँच दिन ऋतुवंती",
            hindiRoman: "Paanch Din Rituwanti",
            english: "5 days rest during menstruation",
            detail: {
                hi: "महिलाओं को उनके मासिक धर्म के दौरान कठिन शारीरिक श्रम से पूर्ण आराम प्रदान करना, उनके स्वास्थ्य और स्वच्छता सुनिश्चित करना।",
                en: "To provide women complete rest from hard physical labor during their menstrual cycle, ensuring their health and hygiene."
            }
        },
        {
            id: 3,
            hindi: "सेरे स्नान",
            hindiRoman: "Saere Snan",
            english: "Bathe daily in the morning",
            detail: {
                hi: "शारीरिक शुद्धता के साथ दिन की शुरुआत करने का अनुशासन, पूजा से पहले सुस्ती और गंदगी को धो देना।",
                en: "Discipline to start the day with physical purity, washing away lethargy and dirt before worship."
            }
        },
        {
            id: 4,
            hindi: "शील",
            hindiRoman: "Sheel",
            english: "Maintain good character and modesty",
            detail: {
                hi: "विचार और चरित्र की पवित्रता धर्म की नींव है।",
                en: "Purity of thought and character is the foundation of a Dharma."
            }
        },
        {
            id: 5,
            hindi: "संतोष",
            hindiRoman: "Santosh",
            english: "Practice contentment",
            detail: {
                hi: "ईमानदार कमाई से संतुष्ट रहें। लालच सभी दुखों की जड़ है।",
                en: "Be satisfied with honest earnings. Greed is the root of all suffering."
            }
        },
        {
            id: 6,
            hindi: "द्विकाल संध्या",
            hindiRoman: "Dwikal Sandhya",
            english: "Pray twice a day (Morning & Evening)",
            detail: {
                hi: "आध्यात्मिक संतुलन बनाए रखने के लिए सूर्योदय और सूर्यास्त के समय परमात्मा से जुड़ें।",
                en: "Connect with the divine at sunrise and sunset to maintain spiritual balance."
            }
        },
        {
            id: 7,
            hindi: "सांझ आरती",
            hindiRoman: "Sanjh Aarti",
            english: "Sing praises of the Lord in the evening",
            detail: {
                hi: "एकता और भक्ति को बढ़ावा देने के लिए सामुदायिक प्रार्थना।",
                en: "Community prayer to foster unity and devotion."
            }
        },
        {
            id: 8,
            hindi: "पाणी, वाणी, दूध छान ले",
            hindiRoman: "Pani, Vani, Dudh Chhan Le",
            english: "Filter water, milk, and firewood",
            detail: {
                hi: "सूक्ष्म कीड़ों (जीव रक्षा) और अशुद्धियों के सेवन से बचने के लिए पानी और दूध को छान लें। सुनिश्चित करें कि कोई कीड़ा जिंदा न जले, इसके लिए लकड़ी साफ करें।",
                en: "Filter water and milk to avoid consuming microscopic insects (Jeev Raksha) and impurities. Clean firewood to ensure no insects are burnt alive."
            },
            highlight: true
        },
        {
            id: 9,
            hindi: "हवन",
            hindiRoman: "Havan/Hom",
            english: "Perform daily Havan",
            detail: {
                hi: "घी और नारियल का उपयोग करके वातावरण को शुद्ध करें। इसके आध्यात्मिक और पर्यावरणीय दोनों लाभ हैं (हवा को साफ करना)।",
                en: "Purify the atmosphere using Ghee and Coconut. It has both spiritual and environmental benefits (cleansing the air)."
            }
        },
        {
            id: 10,
            hindi: "क्षमा",
            hindiRoman: "Kshama",
            english: "Forgiveness is a virtue",
            detail: {
                hi: "दूसरों की गलतियों को माफ करें। क्रोध दूसरे से ज्यादा खुद को जलाता है।",
                en: "Forgive others' mistakes. Anger burns the self more than the other."
            }
        },
        {
            id: 11,
            hindi: "दया",
            hindiRoman: "Daya",
            english: "Practice compassion",
            detail: {
                hi: "सभी जीवों के प्रति दयालु रहें। करुणा सबसे बड़ा गुण है।",
                en: "Be compassionate to all living beings. Compassion is the greatest virtue."
            }
        },
        {
            id: 12,
            hindi: "चोरी न करनी",
            hindiRoman: "Chori Na Karni",
            english: "Do not steal",
            detail: {
                hi: "कड़ी मेहनत ही पूजा है। जो आपका नहीं है उसे लेना बुरा कर्म लाता है।",
                en: "Hard work is worship. Taking what is not yours brings bad karma."
            }
        },
        {
            id: 13,
            hindi: "निंदा न करनी",
            hindiRoman: "Ninda Na Karni",
            english: "Do not criticize others",
            detail: {
                hi: "दूसरों में दोष ढूंढने के बजाय खुद को सुधारने पर ध्यान दें।",
                en: "Focus on improving yourself instead of finding faults in others."
            }
        },
        {
            id: 14,
            hindi: "झूठ न बोलना",
            hindiRoman: "Jhooth Na Bolna",
            english: "Do not lie",
            detail: {
                hi: "सत्य सबसे बड़ा धर्म है। हमेशा सच बोलें।",
                en: "Truth is the highest religion. Always speak the truth."
            }
        },
        {
            id: 15,
            hindi: "वाद-विवाद न करना",
            hindiRoman: "Vaad-Vivaad Na Karna",
            english: "Do not engage in unnecessary arguments",
            detail: {
                hi: "व्यर्थ की बहस से बचें। शांति और सद्भाव बनाए रखें।",
                en: "Avoid unnecessary arguments. Maintain peace and harmony."
            }
        },
        {
            id: 16,
            hindi: "अमावस व्रत",
            hindiRoman: "Amawas Vrat",
            english: "Fast on Amavasya (New Moon)",
            detail: {
                hi: "आत्म-नियंत्रण और शरीर और मन को शुद्ध करने का दिन।",
                en: "A day of self-control and cleansing the body and mind."
            }
        },
        {
            id: 17,
            hindi: "विष्णु भजन",
            hindiRoman: "Vishnu Bhajan",
            english: "Worship Lord Vishnu",
            detail: {
                hi: "उस दिव्य शक्ति को पहचानें जो ब्रह्मांड को बनाए रखती है।",
                en: "Recognize the divine power that sustains the universe."
            }
        },
        {
            id: 18,
            hindi: "जीव दया पालनी",
            hindiRoman: "Jeev Daya Palni",
            english: "Be compassionate to all living beings",
            detail: {
                hi: "वन्यजीवों को अपने परिवार की तरह सुरक्षित रखें। इसीलिए बिश्नोई अनाथ हिरण के बच्चों को अपने बच्चों की तरह पालते हैं।",
                en: "Protect wildlife as your own family. This is why Bishnois are known to nurse orphaned deer fawns like their own children."
            }
        },
        {
            id: 19,
            hindi: "रूख लीलो न घावे",
            hindiRoman: "Rukh Lila Nahi Ghave",
            english: "Never cut a green tree",
            detail: {
                hi: "पेड़ रेगिस्तान की जीवन रेखा हैं। गुरु जम्भेश्वर जी ने सिखाया कि सिर की कीमत पर भी पेड़ बचाना सस्ता सौदा है। इसी नियम ने खेजड़ली बलिदान को प्रेरित किया।",
                en: "Trees are the lifeline of the desert. Guru Jambheshwar Ji taught that saving a tree even at the cost of one's head is a cheap bargain. This rule inspired the Khejarli sacrifice."
            },
            highlight: true
        },
        {
            id: 20,
            hindi: "अजर जरे",
            hindiRoman: "Ajar Jare",
            english: "Crush your ego",
            detail: {
                hi: "सच्चे ज्ञान को प्राप्त करने के लिए अहंकार और घमंड पर विजय प्राप्त करें।",
                en: "Overcome pride and ego to attain true knowledge."
            }
        },
        {
            id: 21,
            hindi: "भोजन शुद्ध रखना",
            hindiRoman: "Bhojan Shuddh Rakhna",
            english: "Keep food pure and clean",
            detail: {
                hi: "शुद्ध और सात्विक भोजन ग्रहण करें। भोजन की पवित्रता मन की पवित्रता है।",
                en: "Consume pure and sattvic food. Purity of food is purity of mind."
            }
        },
        {
            id: 22,
            hindi: "भेड बकरी न पालनी",
            hindiRoman: "Bhed Bakri Na Palni",
            english: "Do not rear sheep and goats",
            detail: {
                hi: "एक अनूठा पारिस्थितिक नियम। भेड़ और बकरियां पौधों को जड़ से उखाड़ देती हैं, जिससे वनस्पति नष्ट होती है और मरुस्थलीकरण होता है। इसलिए हरियाली की रक्षा के लिए इन्हें टाला जाता है।",
                en: "A unique ecological rule. Sheep and goats pull plants up by the roots, destroying vegetation and leading to desertification. Hence, they are avoided to protect the greenery."
            },
            highlight: true
        },
        {
            id: 23,
            hindi: "अमर रखावे",
            hindiRoman: "Amar Rakhave",
            english: "Do not sterilize bulls",
            detail: {
                hi: "पशुओं की प्रजनन शक्ति का सम्मान करें। बैलों को सम्मान के साथ रखा जाना चाहिए, केवल श्रम के लिए उपयोग या नपुंसक नहीं बनाया जाना चाहिए।",
                en: "Respect the procreative power of animals. Bulls should be treated with dignity, not used merely for labor or castrated for convenience."
            }
        },
        {
            id: 24,
            hindi: "नील न धारण करनी",
            hindiRoman: "Neel Na Dharan Karni",
            english: "Do not wear blue (indigo-dyed) clothes",
            detail: {
                hi: "ऐतिहासिक रूप से, नील की खेती ने भूमि की उर्वरता को नुकसान पहुंचाया और कई झाड़ियों को काटने की आवश्यकता थी। इस कृषि क्षति को रोकने के लिए नीला (नील) वर्जित था।",
                en: "Historically, indigo farming damaged the fertility of the land and required cutting many shrubs. To prevent this agricultural harm, blue (indigo) was forbidden."
            }
        },
        {
            id: 25,
            hindi: "पुष्प, फल न तोड़ना",
            hindiRoman: "Pushp, Phal Na Todna",
            english: "Do not pluck flowers or fruits unnecessarily",
            detail: {
                hi: "केवल आवश्यकता के अनुसार ही फूल और फल तोड़ें। प्रकृति का सम्मान करें और बर्बादी से बचें।",
                en: "Pluck flowers and fruits only as needed. Respect nature and avoid wastage."
            }
        },
        {
            id: 26,
            hindi: "अमल न खावे",
            hindiRoman: "Amal Na Khave",
            english: "Do not consume Opium",
            detail: {
                hi: "नशीले पदार्थों से बचें जो मन को सुस्त करते हैं और स्वास्थ्य को बर्बाद करते हैं।",
                en: "Avoid intoxicants that dull the mind and ruin health."
            }
        },
        {
            id: 27,
            hindi: "तंबाकू न पीवे",
            hindiRoman: "Tamaku Na Pive",
            english: "Do not use Tobacco",
            detail: {
                hi: "तंबाकू कैंसर का कारण बनता है और पर्यावरण को प्रदूषित करता है। यह सख्ती से निषिद्ध है।",
                en: "Tobacco causes cancer and pollutes the environment. It is strictly prohibited."
            }
        },
        {
            id: 28,
            hindi: "भांग न पीवे",
            hindiRoman: "Bhang Na Pive",
            english: "Do not consume Cannabis",
            detail: {
                hi: "मानसिक स्पष्टता बनाए रखें और व्यसन से बचें।",
                en: "Preserve mental clarity and avoid addiction."
            }
        },
        {
            id: 29,
            hindi: "मद्य न पीवे",
            hindiRoman: "Madya Na Pive",
            english: "Do not drink Alcohol",
            detail: {
                hi: "शराब बुद्धि, परिवार और सामाजिक स्थिति को नष्ट कर देती है। पूर्ण परहेज आवश्यक है।",
                en: "Alcohol destroys the intellect, family, and social standing. Complete abstinence is required."
            }
        }
    ];

    return (
        <div className="min-h-screen text-white pb-20">
            <SEO
                title={currentLang === 'hi' ? "29 सिद्धांत: बिश्नोई धर्म की संहिता" : "29 Principles: The Code of Bishnoi-Dharma"}
                description={currentLang === 'hi'
                    ? "1485 ईस्वी में गुरु जम्भेश्वर द्वारा स्थापित 29 पवित्र नियमों का अन्वेषण करें। पर्यावरण संरक्षण, स्वास्थ्य और आध्यात्मिक जीवन के लिए दुनिया का पहला बिश्नोई-धर्म।"
                    : "Explore the 29 sacred rules established by Guru Jambheshwar in 1485 AD for environmental protection, health, and spiritual living. The world's first Bishnoi-Dharma."
                }
                keywords={['Guru Jambheshwar 29 Rules', 'Bishnoi Guidelines', 'Bishnoi-Dharma', '29 Niyam', 'Bishnoi Philosophy', 'Environmental Ethics']}
                url="/rules"
                type="article"
            />



            {/* Hero Section - Mobile Optimized */}
            <div className="relative py-12 md:py-20 px-4 text-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 20 L45 20 L37 27 L40 37 L30 30 L20 37 L23 27 L15 20 L25 20 Z' fill='%234cd57a' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block p-3 md:p-4 rounded-full bg-brand-neon/10 border border-brand-neon/30 mb-4 md:mb-6 backdrop-blur-md">
                            <Leaf className="w-8 h-8 md:w-12 md:h-12 text-brand-neon mx-auto" />
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 md:mb-4 drop-shadow-lg px-2">
                            {currentLang === 'hi' ? '29 सिद्धांत: बिश्नोई धर्म की संहिता' : '29 Principles: The Code of Bishnoi-Dharma'}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-2 font-serif italic px-2">
                            {currentLang === 'hi' ? 'गुरु जम्भेश्वर भगवान द्वारा स्थापित' : 'Established by Guru Jambheshwar Bhagwan'}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Storytelling Intro - Mobile Optimized */}
            <div className="max-w-4xl mx-auto px-4 mb-8 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-6 md:p-12 border border-white/10 shadow-2xl"
                >
                    <div className="flex items-start space-x-3 md:space-x-4 mb-4 md:mb-6">
                        <Info className="w-5 h-5 md:w-6 md:h-6 text-brand-neon flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-3 md:mb-4">
                                {currentLang === 'hi' ? 'बिश्नोई-धर्म की उत्पत्ति' : 'The Origin of Bishnoi-Dharma'}
                            </h2>
                            {currentLang === 'hi' ? (
                                <>
                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-3 md:mb-4">
                                        <span className="text-brand-neon font-bold">1485 ईस्वी</span> में, <span className="text-brand-neon font-bold">समराथल धोरा</span> में, गुरु जम्भेश्वर भगवान ने 29 सिद्धांत स्थापित किए जो केवल धर्म के लिए नहीं, बल्कि प्रकृति और मानवता के अस्तित्व के लिए थे।
                                    </p>
                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                                        ये नियम आध्यात्मिक भक्ति, पर्यावरण संरक्षण, और वैज्ञानिक जीवन का मिश्रण हैं। ये दुनिया के पहले प्रलेखित <span className="font-bold text-white">बिश्नोई-धर्म</span> का प्रतिनिधित्व करते हैं — एक संहिता जो बिश्नोई समुदाय को प्रकृति का मूल संरक्षक बनाती है।
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-3 md:mb-4">
                                        In <span className="text-brand-neon font-bold">1485 AD</span>, at <span className="text-brand-neon font-bold">Samrathal Dhora</span>, Guru Jambheshwar Bhagwan laid down 29 tenets not just for religion, but for the survival of nature and humanity.
                                    </p>
                                    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                                        These rules are a blend of spiritual devotion, environmental protection, and scientific living. They represent the world's first documented <span className="font-bold text-white">Bishnoi-Dharma</span> — a code that makes the Bishnoi community the original guardians of nature.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* All 29 Rules - Single List with Emerald Green - Clickable */}
            <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {allRules.map((rule, index) => (
                        <Link
                            key={rule.id}
                            to={`/rules/rule-${rule.id}`}
                            className="block group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-5 md:p-8 border ${rule.highlight
                                    ? 'border-emerald-500/30 border-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                    : 'border-white/10'
                                    } shadow-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer`}
                            >
                                {/* Rule Number Badge */}
                                <div className="flex items-start justify-between mb-3 md:mb-4">
                                    <span className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 border text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                                        {currentLang === 'hi' ? `नियम #${rule.id}` : `Rule #${rule.id}`}
                                    </span>
                                    {rule.highlight && (
                                        <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs font-bold px-2 md:px-3 py-1 rounded-full flex items-center">
                                            <ChevronRight className="w-3 h-3 mr-1" />
                                            {currentLang === 'hi' ? 'मुख्य नियम' : 'Key Rule'}
                                        </span>
                                    )}
                                </div>

                                {/* Hindi or English Name Only */}
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 font-serif leading-tight group-hover:text-emerald-400 transition-colors">
                                    {currentLang === 'hi' ? rule.hindi : rule.english}
                                </h3>

                                {/* Detail/Explanation - Language Specific */}
                                <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-3">
                                    {rule.detail[currentLang]}
                                </p>

                                {/* Read More Indicator */}
                                <div className="flex items-center text-emerald-400 text-sm font-semibold">
                                    {currentLang === 'hi' ? 'विस्तार से पढ़ें' : 'Read More'}
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Category Summary Cards - Bottom Section */}
            <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center text-white mb-6 md:mb-8">
                        {currentLang === 'hi' ? 'नियमों का वर्गीकरण' : 'Rules Classification'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Environment Card */}
                        <div className="bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-6 md:p-8 border-2 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                                    <Leaf className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
                                {currentLang === 'hi' ? 'पर्यावरण और जीव रक्षा' : 'Environment & Wildlife'}
                            </h3>
                            <div className="text-4xl md:text-5xl font-bold text-emerald-400 text-center mb-2">
                                8
                            </div>
                            <p className="text-gray-400 text-center text-sm">
                                {currentLang === 'hi' ? 'नियम' : 'Rules'}
                            </p>
                            <p className="text-gray-300 text-sm text-center mt-4 leading-relaxed">
                                {currentLang === 'hi'
                                    ? 'पेड़ों की रक्षा, जीव दया, और पर्यावरण संरक्षण के नियम।'
                                    : 'Rules for tree protection, animal compassion, and environmental conservation.'
                                }
                            </p>
                        </div>

                        {/* Health & Hygiene Card */}
                        <div className="bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-6 md:p-8 border-2 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                                    <Droplet className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
                                {currentLang === 'hi' ? 'स्वास्थ्य और स्वच्छता' : 'Health & Hygiene'}
                            </h3>
                            <div className="text-4xl md:text-5xl font-bold text-emerald-400 text-center mb-2">
                                7
                            </div>
                            <p className="text-gray-400 text-center text-sm">
                                {currentLang === 'hi' ? 'नियम' : 'Rules'}
                            </p>
                            <p className="text-gray-300 text-sm text-center mt-4 leading-relaxed">
                                {currentLang === 'hi'
                                    ? 'शारीरिक शुद्धता, स्वास्थ्य, और नशे से मुक्ति के नियम।'
                                    : 'Rules for physical purity, health, and freedom from intoxication.'
                                }
                            </p>
                        </div>

                        {/* Social & Spiritual Card */}
                        <div className="bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-6 md:p-8 border-2 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                                    <Flame className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-3">
                                {currentLang === 'hi' ? 'सामाजिक और आध्यात्मिक' : 'Social & Spiritual'}
                            </h3>
                            <div className="text-4xl md:text-5xl font-bold text-emerald-400 text-center mb-2">
                                14
                            </div>
                            <p className="text-gray-400 text-center text-sm">
                                {currentLang === 'hi' ? 'नियम' : 'Rules'}
                            </p>
                            <p className="text-gray-300 text-sm text-center mt-4 leading-relaxed">
                                {currentLang === 'hi'
                                    ? 'नैतिकता, सत्य, क्षमा, और आध्यात्मिक जीवन के नियम।'
                                    : 'Rules for morality, truth, forgiveness, and spiritual living.'
                                }
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RulesPage;
