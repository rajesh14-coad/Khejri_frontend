
import React from 'react';
import SEO from '../components/SEO';
import { OctagonAlert, FileText, Globe } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 py-16 px-4 md:px-8 font-sans">
      <SEO
        title="Terms & Conditions - नियम और शर्तें"
        description="Terms of Use for Khejri Bachao. Please read our guidelines on content usage, sensitivity, and liabilities."
      />

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-neon mb-4">
            Terms & Conditions
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-hindi">
            नियम और शर्तें
          </h2>
        </header>

        <div className="space-y-12 bg-neutral-800/40 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-md">

          {/* Content Usage */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <FileText className="w-8 h-8 text-brand-saffron" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Non-Commercial Usage</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The content provided on this website, especially the <strong>'Sabad Vani'</strong> analysis and translations, is for personal and educational use only. Users are strictly prohibited from copying, distributing, or using this content for any commercial purposes without explicit written permission.
              </p>
              <p className="text-gray-400 font-hindi text-sm italic border-l-4 border-brand-saffron pl-4">
                इस वेबसाइट पर दी गई सामग्री, विशेष रूप से <strong>'सब्द वाणी'</strong> विश्लेषण, केवल व्यक्तिगत और शैक्षिक उपयोग के लिए है। किसी भी व्यावसायिक उद्देश्य के लिए इस सामग्री का उपयोग सख्त वर्जित है।
              </p>
            </div>
          </div>

          {/* Sensitivity */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <Globe className="w-8 h-8 text-brand-olive" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Religious & Environmental Sensitivity</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This platform respects the deep religious and environmental sentiments associated with the Bishnoi community and the Khejri tree. We expect all users to engage with the content respectfully and avoid using it in contexts that might offend community values.
              </p>
              <p className="text-gray-400 font-hindi text-sm italic border-l-4 border-brand-olive pl-4">
                हम सभी उपयोगकर्ताओं से अपेक्षा करते हैं कि वे सामग्री के साथ सम्मानपूर्वक जुड़ें और इसका उपयोग ऐसे संदर्भों में करने से बचें जो समुदाय की भावनाओं को ठेस पहुंचा सकते हैं।
              </p>
            </div>
          </div>

          {/* Warranty */}
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 mt-1">
              <OctagonAlert className="w-8 h-8 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Warranty Disclaimer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This website is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, regarding the operation of the site or the information, content, or materials included on it.
              </p>
              <p className="text-gray-400 font-hindi text-sm italic border-l-4 border-red-500 pl-4">
                यह वेबसाइट "जैसी है" और "जैसी उपलब्ध है" के आधार पर प्रदान की जाती है। हम साइट के संचालन या इसमें शामिल जानकारी या सामग्री के संबंध में किसी भी प्रकार की कोई वारंटी नहीं देते हैं।
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
