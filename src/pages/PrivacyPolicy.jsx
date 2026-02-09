
import React from 'react';
import SEO from '../components/SEO';
import { Shield, Eye, Database, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 py-16 px-4 md:px-8 font-sans">
      <SEO
        title="Privacy Policy - गोपनीयता नीति"
        description="Our privacy commitment. We respect user privacy and adhere to transparent data practices using Google Analytics and AdSense."
      />

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-neon mb-4">
            Privacy Policy
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 font-hindi">
            गोपनीयता नीति
          </h2>
        </header>

        <div className="space-y-8 bg-neutral-800/40 p-8 rounded-2xl border border-white/10 backdrop-blur-md">

          {/* User Privacy */}
          <section className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                <Shield className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">We Respect User Privacy</h3>
              <p className="text-gray-300 mb-2">
                Your privacy is of utmost importance to us. We are committed to transparency and respect for your personal information while you browse our website.
              </p>
              <p className="text-gray-400 font-hindi italic text-sm">
                आपकी गोपनीयता हमारे लिए अत्यंत महत्वपूर्ण है। हम आपकी व्यक्तिगत जानकारी के प्रति पारदर्शिता और सम्मान के लिए प्रतिबद्ध हैं।
              </p>
            </div>
          </section>

          {/* Google Analytics */}
          <section className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                <Eye className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Google Analytics Usage</h3>
              <p className="text-gray-300 mb-2">
                We use <strong>Google Analytics (Tracking ID: G-NLPGD37DRE)</strong> to analyze user behavior, understand traffic sources, and improve our website's performance. This helps us tailor our content to better serve the community.
              </p>
              <p className="text-gray-400 font-hindi italic text-sm">
                वेबसाइट के प्रदर्शन को बेहतर बनाने और उपयोगकर्ता व्यवहार का अध्ययन करने के लिए हम Google Analytics (ID: G-NLPGD37DRE) का उपयोग करते हैं।
              </p>
            </div>
          </section>

          {/* No Selling Data */}
          <section className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-red-400">
                <Lock className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">No Sale of Personal Data</h3>
              <p className="text-gray-300 mb-2">
                We do not, under any circumstances, sell, trade, or rent your personal identification information to third parties. Your trust is our foundation.
              </p>
              <p className="text-gray-400 font-hindi italic text-sm">
                हम किसी भी परिस्थिति में आपकी व्यक्तिगत जानकारी को तीसरे पक्ष को नहीं बेचते हैं। आपका विश्वास ही हमारी नींव है।
              </p>
            </div>
          </section>

          {/* AdSense Cookies */}
          <section className="flex flex-col md:flex-row gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400">
                <Database className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Cookies & AdSense</h3>
              <p className="text-gray-300 mb-2">
                We may use cookies to personalize content and ads via Google AdSense. These cookies help us serve relevant advertisements based on your visits to this and other websites. You can choose to disable cookies through your browser settings.
              </p>
              <p className="text-gray-400 font-hindi italic text-sm">
                हम विज्ञापनों और सामग्री को वैयक्तिकृत करने के लिए कुकीज़ का उपयोग कर सकते हैं। आप अपनी ब्राउज़र सेटिंग के माध्यम से कुकीज़ को अक्षम करना चुन सकते हैं।
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
