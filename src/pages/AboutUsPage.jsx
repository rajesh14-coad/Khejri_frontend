import React from 'react';
import SEO from '../components/SEO';
import { Leaf, Feather, History, TreeDeciduous, Scroll, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-brand-olive selection:text-brand-neon">
      <SEO
        title="About Us - हमारे बारे में"
        description="Discover the legacy of the Bishnoi community, Guru Jambheshwar Bhagwan, and the supreme sacrifice of Amrita Devi."
      />

      {/* HERO SECTION */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/amrita2.png" // Ensure this image exists
            alt="Amrita Devi & Bishnoi Heritage"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 border border-brand-neon/30 bg-black/40 backdrop-blur-md rounded-full text-brand-neon text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6">
              Est. Samrathal Dhora, 1485 AD
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl tracking-wide">
              The First <span className="text-brand-neon">Eco-Warriors</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-brand-saffron font-hindi font-light drop-shadow-md">
              बिश्नोई: प्रकृति और बलिदान की अमर गाथा
            </h2>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 -mt-32 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN: VISUALS (Sticky on Desktop) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Khejri Tree Card */}
            <div className="bg-neutral-800/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden relative group hover:border-brand-neon/30 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <TreeDeciduous className="w-12 h-12 text-brand-neon mb-6" />
              <h3 className="text-2xl font-serif font-bold text-white mb-2">The Sacred Khejri</h3>
              <p className="text-gray-400 text-sm font-light italic mb-4">Prosopis cineraria</p>
              <p className="text-gray-300 leading-relaxed font-light text-sm">
                The lifeline of the Thar desert. For a Bishnoi, this tree is not just wood; it is a living deity worthy of sacrifice.
              </p>
              <div className="mt-6 h-48 rounded-xl overflow-hidden shadow-inner bg-black/20 flex items-center justify-center p-4">
                 <img src="/images/kh.png" alt="Khejri Tree" className="w-full h-full object-contain opacity-90 drop-shadow-lg" />
              </div>
            </div>

            {/* Guru Jambheshwar Quote Card */}
            <div className="bg-brand-olive/10 border border-brand-olive/20 rounded-[2rem] p-8 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute -right-4 -top-4 text-brand-olive/10">
                   <Feather size={120} strokeWidth={1} />
               </div>
              <blockquote className="text-xl font-serif italic text-white/90 leading-relaxed relative z-10">
                "Jeev Daya Palani, Runkh Lila Nahi Ghave."
              </blockquote>
              <p className="text-brand-saffron/80 text-sm mt-3 font-hindi relative z-10">
                (जीव मात्र पर दया करो, हरे वृक्ष को कभी मत काटो।)
              </p>
              <p className="text-white/40 mt-6 text-xs font-bold uppercase tracking-widest text-right relative z-10">
                — Guru Jambheshwar Bhagwan
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: DETAILED CONTENT */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. THE BISHNOI COMMUNITY */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-brand-neon w-6 h-6" />
                <h3 className="text-3xl font-bold text-white">The Bishnoi Community</h3>
              </div>
              
              <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed">
                <p className="text-lg">
                  The word 'Bishnoi' is derived from <strong>20 (Bish)</strong> and <strong>9 (Noi)</strong>, representing the <strong>29 principles</strong> given by our founder. We are likely the only community in the world where ecology is a religion.
                </p>
                <p className="mt-4 border-l-2 border-brand-neon pl-4 text-gray-400 italic">
                  "For 5 centuries, Bishnois have fiercely protected the Blackbuck (Krishna Mrig) and Khejri trees, treating wildlife as their own children."
                </p>
                
                {/* Hindi Translation */}
                <div className="mt-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h4 className="text-xl font-bold text-brand-saffron font-hindi mb-3">बिश्नोई समाज: पर्यावरण के पहले प्रहरी</h4>
                  <p className="text-base font-hindi text-gray-300">
                    'बिश्नोई' शब्द <strong>20 (बीस)</strong> और <strong>9 (नौ)</strong> से मिलकर बना है, जो गुरु जांभोजी द्वारा दिए गए 29 नियमों का प्रतीक है। यह दुनिया का शायद एकमात्र ऐसा समाज है, जहां 'पर्यावरण रक्षा' ही सबसे बड़ा धर्म है। 500 वर्षों से यह समाज काले हिरण और खेजड़ी के वृक्षों को अपने बच्चों की तरह पालता और बचाता आ रहा है।
                  </p>
                </div>
              </div>
            </motion.section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* 2. GURU JAMBHESHWAR BHAGWAN */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Scroll className="text-brand-saffron w-6 h-6" />
                <h3 className="text-3xl font-bold text-white">Guru Jambheshwar Bhagwan</h3>
              </div>

              <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed">
                <p>
                  Born in <strong>1451 AD</strong> in Pipasar, Guru Jambheshwar (Jambhoji) was a visionary saint who foresaw the consequences of harming nature. In 1485 AD, at <strong>Samrathal Dhora</strong>, he founded the Bishnoi sect based on scientific and spiritual principles.
                </p>
                <p className="mt-2">
                  He taught that God resides in nature. His 120 'Sabads' (poetic teachings) guide humanity to live a clean, simple, and non-violent life.
                </p>

                {/* Hindi Translation */}
                <div className="mt-6 p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10">
                  <h4 className="text-xl font-bold text-brand-saffron font-hindi mb-3">गुरु जांभोजी: महान पर्यावरण वैज्ञानिक</h4>
                  <p className="text-base font-hindi text-gray-300">
                    वि.सं. 1508 (1451 ई.) में पीपासर में जन्मे, गुरु जांभोजी एक दूरदर्शी संत थे। उन्होंने 1485 ई. में समराथल धोरा पर बिश्नोई पंथ की स्थापना की। उन्होंने सिखाया कि ईश्वर प्रकृति के कण-कण में है। उनकी वाणी (सबद वाणी) न केवल आध्यात्मिक है, बल्कि स्वस्थ और वैज्ञानिक जीवन जीने की एक नियमावली है।
                  </p>
                </div>
              </div>
            </motion.section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* 3. AMRITA DEVI & KHEJARLI SACRIFICE */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Heart className="text-red-500 w-6 h-6" />
                <h3 className="text-3xl font-bold text-white">The Supreme Sacrifice (1730 AD)</h3>
              </div>

              <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed">
                <p>
                  In <strong>1730 AD</strong>, the soldiers of the Maharaja of Jodhpur arrived in Khejarli village to cut trees for a new palace. A brave woman, <strong>Amrita Devi Bishnoi</strong>, rushed out and hugged a Khejri tree, daring the soldiers to cut her head before the tree.
                </p>
                <p className="mt-2 font-serif text-xl text-white/90 italic pl-4 border-l-4 border-red-500/50 my-4">
                  "Sir Santey Runkh Rahe, To Bhi Sasto Jaan."
                  <span className="block text-sm text-gray-400 font-sans not-italic mt-1">(If a tree is saved even at the cost of one's head, it is a cheap bargain.)</span>
                </p>
                <p>
                  She was beheaded. Her three daughters followed, then her husband, and then <strong>363 Bishnois</strong> from 84 villages gave their lives. This historic event inspired the modern Chipko Movement.
                </p>

                {/* Hindi Translation */}
                <div className="mt-6 p-6 bg-red-900/10 rounded-2xl border border-red-500/20">
                  <h4 className="text-xl font-bold text-brand-saffron font-hindi mb-3">अमृता देवी और 363 शहीदों का बलिदान</h4>
                  <p className="text-base font-hindi text-gray-300">
                    इतिहास की सबसे बड़ी अहिंसक पर्यावरणीय क्रांति। 1730 ई. (वि.सं. 1787) में, अमृता देवी बिश्नोई ने खेजड़ी के पेड़ से लिपटकर कहा— <strong>"सिर सांटे रूंख रहे, तो भी सस्तो जाण"</strong>। राजा के सैनिकों ने कुल्हाड़ी चलाई, और अमृता देवी समेत 363 बिश्नोई (पुरुष, महिलाएं और बच्चे) शहीद हो गए। यह बलिदान हमें याद दिलाता है कि पेड़ों की कीमत हमारी जान से भी ज्यादा है।
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <div className="pt-12 text-center md:text-left">
              <a href="/history" className="inline-flex items-center gap-3 px-8 py-3 bg-brand-neon/10 text-brand-neon font-bold rounded-full border border-brand-neon hover:bg-brand-neon hover:text-black transition-all duration-300 group">
                Explore Full History <History className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;