import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  TreeDeciduous,
  Thermometer,
  Droplets,
  Wind,
  Sprout,
  Leaf,
  Heart,
  ShieldAlert,
  CheckCircle,
  XCircle,
  Pickaxe,
  Microscope,
  ArrowDown
} from 'lucide-react';

const KhejriImportancePage = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  // Data for the Comparison Table - Bilingual
  const comparisonData = isHindi ? [
    { factor: "मिट्टी की गुणवत्ता", withKhejri: "समृद्ध (नाइट्रोजन स्थिरीकरण)", withoutKhejri: "बंजर / खराब भूमि" },
    { factor: "तापमान", withKhejri: "4-5°C ठंडा (प्राकृतिक AC)", withoutKhejri: "अत्यधिक गर्मी (हीट आइलैंड)" },
    { factor: "भूजल", withKhejri: "स्थिर (गहरी जड़ें)", withoutKhejri: "तेजी से गिरता जल स्तर" },
    { factor: "वन्यजीव", withKhejri: "समृद्ध पारिस्थितिकी तंत्र", withoutKhejri: "आवास का विनाश" },
    { factor: "अकाल सुरक्षा", withKhejri: "खाद्य स्रोत (सांगरी/छाल)", withoutKhejri: "भुखमरी का खतरा" }
  ] : [
    { factor: "Soil Quality", withKhejri: "Enriched (Nitrogen Fixation)", withoutKhejri: "Degraded, Barren" },
    { factor: "Temperature", withKhejri: "4-5°C Cooler", withoutKhejri: "Extreme Heat (Heat Island)" },
    { factor: "Groundwater", withKhejri: "Stabilized (Deep Roots)", withoutKhejri: "Rapid Depletion" },
    { factor: "Wildlife", withKhejri: "Thriving Ecosystem", withoutKhejri: "Habitat Loss" },
    { factor: "Famine Survival", withKhejri: "Food Source (Sangri/Bark)", withoutKhejri: "Starvation Risk" }
  ];

  return (
    <div className="min-h-screen font-sans text-white selection:bg-brand-olive selection:text-brand-neon">
      <SEO
        title={isHindi ? "खेजड़ी का वैज्ञानिक महत्व" : "Scientific Importance of Khejri"}
        description={isHindi
          ? "क्यों खेजड़ी (प्रोसोपिस सिनेरेरिया) थार रेगिस्तान का जैविक चमत्कार है। इसका पारिस्थितिक, औषधीय और आर्थिक विश्लेषण जानें।"
          : "Why Khejri (Prosopis cineraria) is the biological miracle of the Thar Desert. Ecological, Medicinal, and Economic analysis."}
      />

      {/* PARALLAX BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a0f] via-transparent to-black/20 z-10" />
        <img
          src="/images/hero_desert.jpg"
          alt="Khejri trees in Thar Desert"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-6 border border-white/30 bg-black/30 backdrop-blur-md rounded-full text-brand-neon text-sm font-bold tracking-[0.3em] uppercase mb-8 shadow-lg">
              {isHindi ? "एक जैविक चमत्कार" : "The Biological Miracle"}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              {isHindi ? "खेजड़ी: रेगिस्तान की संजीवनी" : "Khejri: The Life-Giver"}
            </h1>
            <p className="text-2xl text-gray-200 font-serif italic max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              "Scientific Name: Prosopis cineraria"
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-12 opacity-80"
            >
              <ArrowDown className="w-8 h-8 mx-auto text-brand-neon" />
            </motion.div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-24">

          {/* SECTION 1: SCIENTIFIC PROFILE */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 text-center">
                <div className="w-48 h-48 mx-auto bg-brand-olive/20 rounded-full flex items-center justify-center border-2 border-brand-neon/50 shadow-[0_0_30px_rgba(76,213,122,0.2)] mb-6">
                  <Microscope className="w-20 h-20 text-brand-neon" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-neon mb-2">
                  {isHindi ? "वैज्ञानिक प्रोफ़ाइल" : "Scientific Profile"}
                </h3>
                <p className="text-gray-400 font-mono text-sm">
                  {isHindi ? "फैबेसी परिवार (Fabaceae)" : "Fabaceae Family"}
                </p>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  {isHindi ? "जैविक विशेषताएँ" : "The Biological Miracle"}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-2 text-brand-neon">
                      <Wind className="w-5 h-5" />
                      <h4 className="font-bold">{isHindi ? "गहरी जड़ प्रणाली" : "Deep Root System"}</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {isHindi
                        ? "भूजल तक पहुँचने के लिए जड़ें 30 मीटर (100 फीट) तक गहरी जाती हैं, जो रेत के टीलों को स्थिर करती हैं और मरुस्थलीकरण को रोकती हैं।"
                        : "Roots penetrate up to 30 meters (100 feet) deep to access groundwater, stabilizing sand dunes and preventing desertification."}
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-2 text-brand-neon">
                      <TreeDeciduous className="w-5 h-5" />
                      <h4 className="font-bold">{isHindi ? "जीवनकाल" : "Lifespan"}</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {isHindi
                        ? "कठोर शुष्क परिस्थितियों में 400+ वर्षों तक जीवित रहने में सक्षम एक अविश्वसनीय रूप से लचीली प्रजाति।"
                        : "An incredibly resilient species capable of living for 400+ years in harsh arid conditions."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: KALPAVRIKSHA (ECOLOGY) */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-3 text-center mb-8">
              <span className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-2 block">
                {isHindi ? "पारिस्थितिक लाभ" : "Ecological Benefits"}
              </span>
              <h2 className="text-4xl font-serif font-bold text-white">
                {isHindi ? "थार का 'कल्पवृक्ष'" : "The \"Kalpavriksha\" of Thar"}
              </h2>
            </div>

            {[
              {
                icon: <Sprout className="w-8 h-8" />,
                title: isHindi ? "मिट्टी की उर्वरता" : "Soil Fertility",
                desc: isHindi
                  ? "वायुमंडलीय नाइट्रोजन को मिट्टी में स्थिर करता है। अन्य पेड़ों के विपरीत, पोषक तत्वों से भरपूर मिट्टी के कारण खेजड़ी की छाया में फसलें बेहतर होती हैं।"
                  : "Fixes atmospheric nitrogen into the soil. Unlike other trees, crops grow BETTER under the Khejri canopy due to nutrient-rich soil.",
                color: "text-green-400"
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: isHindi ? "तापमान नियंत्रक (Cooling)" : "Temperature Controller",
                desc: isHindi
                  ? "प्राकृतिक एयर कंडीशनर के रूप में कार्य करता है। खेजड़ी के नीचे का तापमान आसपास की रेगिस्तानी गर्मी से आमतौर पर 4-5 डिग्री सेल्सियस कम होता है।"
                  : "Acts as a natural air conditioner. The temperature under Khejri is typically 4-5°C lower than the surrounding desert heat.",
                color: "text-blue-400"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: isHindi ? "जैव विविधता केंद्र" : "Biodiversity Hub",
                desc: isHindi
                  ? "भीषण गर्मी के महीनों में वन्यजीवों (काला हिरण, मोर) और कीड़ों के लिए प्राथमिक आश्रय स्थल।"
                  : "The primary shelter for wildlife (Blackbucks, Peacocks) and insects during the scorching summer months.",
                color: "text-yellow-400"
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                <div className={`w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* SECTION 3: ECONOMIC & MEDICINAL */}
          <div className="bg-brand-olive/80 backdrop-blur-xl border border-brand-neon/30 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Heart className="w-64 h-64 text-brand-neon" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-white mb-10 flex items-center">
                <Heart className="w-8 h-8 mr-4 text-brand-neon" />
                {isHindi ? "आर्थिक और औषधीय महत्व" : "Economic & Medicinal Value"}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 rounded-lg text-brand-neon"><Pickaxe className="w-5 h-5" /></div>
                    <h3 className="font-bold text-xl text-white">{isHindi ? "सांगरी (फल)" : "Sangri (Fruit)"}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {isHindi
                      ? "प्रोटीन और खनिजों से भरपूर। सूखी सब्जी (केर-सांगरी) के रूप में प्रसंस्कृत, जो अकाल के दौरान एक महत्वपूर्ण जीवन रक्षक खाद्य स्रोत है।"
                      : "Rich in protein and minerals. Processed as a dried vegetable (Ker-Sangri) that serves as a vital food source during famines."}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 rounded-lg text-brand-neon"><Leaf className="w-5 h-5" /></div>
                    <h3 className="font-bold text-xl text-white">{isHindi ? "लूंग (पत्तियां)" : "Loom (Leaves)"}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {isHindi
                      ? "पशुधन (बकरियां, ऊंट) के लिए उच्च प्रोटीन वाला चारा। शुष्क क्षेत्रों में दूध की पैदावार और पशु स्वास्थ्य को काफी बढ़ाता है।"
                      : "High-protein fodder for livestock (Goats, Camels). Significantly increases milk yield and animal health in arid zones."}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black/20 rounded-lg text-brand-neon"><Droplets className="w-5 h-5" /></div>
                    <h3 className="font-bold text-xl text-white">{isHindi ? "छाल (Bark)" : "Bark"}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    {isHindi
                      ? "पारंपरिक रूप से अस्थमा, ब्रोंकाइटिस, पेचिश और त्वचा विकारों के उपचार के लिए औषधीय रूप में उपयोग किया जाता है।"
                      : "Used traditionally to treat asthma, bronchitis, dysentery, and skin disorders."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: THE SOLAR THREAT */}
          <div className="bg-[#C53030]/10 backdrop-blur-xl border border-red-500/30 rounded-[2.5rem] p-10 md:p-16">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="bg-red-500/20 w-fit p-4 rounded-2xl mb-6">
                  <ShieldAlert className="w-12 h-12 text-red-500" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  {isHindi ? "सौर संयंत्र खतरा क्यों हैं?" : "Why Solar Plants are a Threat?"}
                </h2>
                <p className="text-red-300 font-bold uppercase tracking-wider text-sm">
                  {isHindi ? "वैज्ञानिक तर्क" : "Scientific Argument"}
                </p>
              </div>
              <div className="md:w-2/3 space-y-6 text-gray-200 leading-relaxed text-lg">
                <p>
                  {isHindi
                    ? "यद्यपि नवीकरणीय ऊर्जा आवश्यक है, सौर पार्कों के लिए खेजड़ी के पेड़ों को काटना पारिस्थितिक रूप से विनाशकारी है। खेजड़ी रेगिस्तान की प्राकृतिक शीतलन प्रणाली है।"
                    : "While renewable energy is essential, cutting Khejri trees for solar parks is ecologically counter-productive. Khejri is the desert's natural cooling system."}
                </p>
                <p>
                  {isHindi ? (
                    <>
                      <strong className="text-white">हीट आइलैंड प्रभाव (Heat Island Effect):</strong> सौर पैनल गर्मी को सोखते हैं और स्थानीय तापमान को 2-3°C तक बढ़ा सकते हैं।
                      एक अकेला खेजड़ी का पेड़ तापमान को 4-5°C कम करता है। इन शीतलन पेड़ों को गर्मी सोखने वाले पैनलों से बदलना
                      सूक्ष्म जलवायु (micro-climate) को नष्ट कर देता है।
                    </>
                  ) : (
                    <>
                      <strong className="text-white">The Heat Island Effect:</strong> Solar panels absorb heat and can increase local temperatures by 2-3°C.
                      A single Khejri tree reduces temperature by 4-5°C. Replacing these cooling trees with heat-absorbing panels
                      drastically alters the micro-climate, making the desert hotter and uninhabitable for wildlife.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div className="bg-black/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="p-8 border-b border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold text-white text-center">
                {isHindi ? "प्रभाव विश्लेषण: खेजड़ी के साथ बनाम खेजड़ी के बिना" : "Impact Analysis: With vs Without Khejri"}
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead className="bg-black/40 text-xs uppercase font-bold text-gray-400">
                  <tr>
                    <th className="px-6 py-4">{isHindi ? "मानदंड (Parameter)" : "Parameter"}</th>
                    <th className="px-6 py-4 text-brand-neon">{isHindi ? "खेजड़ी के साथ (प्राकृतिक)" : "With Khejri (Natural State)"}</th>
                    <th className="px-6 py-4 text-red-400">{isHindi ? "खेजड़ी के बिना (विनाश)" : "Without Khejri (Destruction)"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{row.factor}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-neon shrink-0" />
                          {row.withKhejri}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                          {row.withoutKhejri}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KhejriImportancePage;
