import React, { useState } from 'react';
import SEO from '../components/SEO';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual only for now
    alert("Thank you for your message! This form is currently for demonstration.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-black/50">
      <SEO title="Contact Us" />
      <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl text-white border border-white/10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-brand-neon text-center">Sampark Karein</h1>
        <p className="text-center text-gray-300 mb-8">(Contact Us)</p>

        <div className="mb-8 text-center">
          <p className="text-gray-200">
            Have questions or want to join the movement? Reach out to us at:
          </p>
          <a href="mailto:contact@khejribachao.in" className="text-brand-neon font-bold text-lg hover:underline mt-2 block">
            contact@khejribachao.in
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-neon focus:border-transparent text-white placeholder-gray-400 outline-none transition-all"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-neon focus:border-transparent text-white placeholder-gray-400 outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-brand-neon focus:border-transparent text-white placeholder-gray-400 outline-none transition-all"
              placeholder="How can we help?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-neon hover:bg-opacity-90 text-black font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
