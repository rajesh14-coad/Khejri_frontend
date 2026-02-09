
import React from 'react';
import SEO from '../components/SEO';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 py-16 px-4 md:px-8 font-serif leading-relaxed">
      <SEO
        title="Disclaimer - अस्वीकरण"
        description="Disclaimer for Khejri Bachao. Read about the educational and spiritual nature of our 'Sabad Vani' content."
      />

      <div className="max-w-3xl mx-auto space-y-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-neon mb-4 font-serif italic tracking-wide">
            Disclaimer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-hindi font-light">
            अस्वीकरण
          </h2>
        </header>

        <section className="bg-neutral-800/50 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-neon/5 rounded-bl-full pointer-events-none"></div>

          <div className="space-y-10">
            {/* Educational & Spiritual Purpose */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-neon pl-4">
                Educational & Spiritual Purpose
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                The content provided on this website, particularly the "Sabad Vani" analysis, is for educational and spiritual purposes only. It is based on extensive research and traditional understanding.
              </p>
              <p className="text-gray-400 font-hindi text-lg italic border-t border-white/5 pt-4">
                इस वेबसाइट पर दी गई सामग्री, विशेष रूप से "सब्द वाणी" विश्लेषण, केवल शैक्षिक और आध्यात्मिक उद्देश्यों के लिए है। यह व्यापक शोध और पारंपरिक समझ पर आधारित है।
              </p>
            </div>

            {/* Accuracy Disclaimer */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-saffron pl-4">
                Accuracy of Content
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                While we strive for 100% accuracy and originality in our texts and translations, we are not responsible for any accidental inaccuracies or interpretations that may differ from individual beliefs.
              </p>
              <p className="text-gray-400 font-hindi text-lg italic border-t border-white/5 pt-4">
                यद्यपि हम अपने पाठों और अनुवादों में 100% सटीकता और मौलिकता के लिए प्रयास करते हैं, हम किसी भी आकस्मिक अशुद्धि या व्याख्या के लिए जिम्मेदार नहीं हैं जो व्यक्तिगत मान्यताओं से भिन्न हो सकती है।
              </p>
            </div>

            {/* Independent Initiative */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-brand-olive pl-4">
                Independent Initiative
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                This is an independent initiative to support the <strong>Khejri Bachao</strong> movement and preserve the cultural heritage of the Bishnoi community. We are not officially affiliated with any specific religious institution but work in solidarity with the community's values.
              </p>
              <p className="text-gray-400 font-hindi text-lg italic border-t border-white/5 pt-4">
                यह <strong>खेजड़ी बचाओ</strong> आंदोलन का समर्थन करने और बिश्नोई समाज की सांस्कृतिक विरासत को संरक्षित करने के लिए एक स्वतंत्र पहल है। हम किसी विशिष्ट धार्मिक संस्था से आधिकारिक रूप से संबद्ध नहीं हैं, लेकिन समुदाय के मूल्यों के साथ एकजुटता में काम करते हैं।
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
