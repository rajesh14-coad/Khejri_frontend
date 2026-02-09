
import React from 'react';
import SEO from '../components/SEO';
import { Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO
        title="Contact Us - संपर्क करें"
        description="Get in touch with the Khejri Bachao team. Contact us for inquiries, support, or feedback."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-brand-neon mb-2 text-center font-serif">
          Contact Us
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-12 text-center font-hindi">
          संपर्क करें
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 bg-neutral-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Mail className="text-brand-saffron" /> Email / ईमेल
              </h3>
              <p className="text-gray-300 hover:text-brand-neon transition-colors">
                <a href="mailto:contact@khejribachao.in">contact@khejribachao.in</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="text-brand-saffron" /> Location / स्थान
              </h3>
              <p className="text-gray-300">
                Sanchore, Rajasthan, India
                <br />
                सांचोर, राजस्थान, भारत
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Note / नोट</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We appreciate your feedback and inquiries related to the Khejri Bachao movement and the digital museum.
                <br /><br />
                हम खेजड़ी बचाओ आंदोलन और डिजिटल संग्रहालय से संबंधित आपकी प्रतिक्रिया और पूछताछ की सराहना करते हैं।
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name / नाम</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-neon focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email / ईमेल</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-neon focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message / संदेश</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-neon focus:border-transparent text-white placeholder-gray-500 outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-olive hover:bg-opacity-90 text-brand-neon font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-brand-neon/20 border border-brand-neon/30"
              >
                Send Message / संदेश भेजें
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
