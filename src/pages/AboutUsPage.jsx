
import React from 'react';
import SEO from '../components/SEO';
import { Leaf, Feather, History, TreeDeciduous } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-brand-olive selection:text-brand-neon">
      <SEO
        title="About Us - हमारे बारे में"
        description="Discover the legacy of the Bishnoi community and our mission to protect the Khejri tree. A tribute to 363 martyrs."
      />

      {/* HERO SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/amrita2.png"
            alt="Desert Landscape"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 border border-brand-neon/30 bg-black/30 backdrop-blur-md rounded-full text-brand-neon text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Since 1485 AD
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              The Guardians of Nature
            </h1>
            <h2 className="text-xl md:text-3xl text-brand-saffron font-hindi font-light drop-shadow-md">
              प्रकृति के रक्षक
            </h2>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: VISUALS & QUOTE */}
          <div className="space-y-8">
            {/* Khejri Tree Card */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <TreeDeciduous className="w-12 h-12 text-brand-neon mb-6" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Sacred Khejri</h3>
              <p className="text-gray-300 leading-relaxed font-light">
                More than just a tree, it is the lifeline of the desert and a symbol of our faith. "Sir Santey Runkh Rahe To Bhi Sasto Jaan."
              </p>
              <div className="mt-6 h-48 rounded-xl overflow-hidden shadow-inner">
                {/* Placeholder for Khejri Tree Logo/Image */}
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/20">
                  <img src="/images/kh.png" alt="Khejri Logo" className="w-full h-full object-contain opacity-80" />
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-brand-olive/10 border border-brand-olive/30 rounded-[2rem] p-8 backdrop-blur-sm">
              <Feather className="w-8 h-8 text-brand-saffron mb-4" />
              <blockquote className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed">
                "Jeev Daya Palani, Runkh Lila Nahi Ghave."
                <br />
                <span className="text-sm font-sans not-italic text-brand-saffron mt-2 block">
                  (Protect all living beings, do not cut green trees.)
                </span>
              </blockquote>
              <p className="text-gray-400 mt-4 text-sm font-bold uppercase tracking-widest text-right">
                — Guru Jambheshwar Bhagwan
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="space-y-12">
            {/* English Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-brand-neon mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-neon rounded-full"></span>
                Our Mission
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 font-light">
                <strong>Khejri Bachao</strong> is a digital movement inspired by the 550-year-old legacy of the Bishnoi Community. Founded on the 29 principles of Guru Jambheshwar Bhagwan, the community has been at the forefront of wildlife and tree protection for centuries.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                Our mission is to digitize the sacred 'Sabad Vani' and document the modern struggle against industrial expansion in our forests. This platform is a tribute to the <strong>363 martyrs of Khejarli</strong> who gave their lives to save a tree. It serves as a bridge between ancient ecological wisdom and modern environmental activism.
              </p>
            </motion.section>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* Hindi Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-saffron mb-6 font-hindi flex items-center gap-3">
                <span className="w-8 h-1 bg-brand-saffron rounded-full"></span>
                हमारा संकल्प
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed mb-6 font-hindi font-light">
                <strong>खेजड़ी बचाओ</strong> एक डिजिटल आंदोलन है जो बिश्नोई समाज की 550 साल पुरानी गौरवशाली विरासत से प्रेरित है। गुरु जांभोजी महाराज के बताए 29 नियमों पर चलते हुए, इस समाज ने सदियों से वन्यजीवों और पेड़ों की रक्षा के लिए अपना बलिदान दिया है।
              </p>
              <p className="text-gray-200 text-lg leading-relaxed font-hindi font-light">
                हमारा उद्देश्य पवित्र 'सबद वाणी' को डिजिटल रूप में सहेजना और हमारे जंगलों पर हो रहे औद्योगिक अतिक्रमण के खिलाफ आधुनिक संघर्ष को दर्ज करना है। यह मंच खेजड़ली के उन <strong>363 शहीदों</strong> को एक श्रद्धांजलि है, जिन्होंने पेड़ बचाने के लिए अपना शीश कटा दिया था।
              </p>
            </motion.section>

            {/* Call to Action */}
            <div className="pt-8">
              <a href="/community" className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-brand-neon pb-1 hover:text-brand-neon transition-colors group">
                Join the Community <History className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
