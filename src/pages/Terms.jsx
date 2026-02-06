import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-black/50">
      <SEO title="Terms & Conditions" />
      <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl text-white border border-white/10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-brand-neon">Terms and Conditions</h1>

        <div className="space-y-6 text-gray-200 leading-relaxed">
          <p>
            Welcome to Khejri Bachao! These terms and conditions outline the rules and regulations for the use of Khejri Bachao's Website.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Khejri Bachao if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">Educational and Informational Purpose</h2>
          <p>
            The content provided on this website is for educational and informational purposes regarding the Khejri movement, environmental protection, and related historical events. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">External Links Disclaimer</h2>
          <p>
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Khejri Bachao. Please note that the Khejri Bachao does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. We are not responsible for the content or practices of any linked third-party sites.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">User Content</h2>
          <p>
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website (e.g., comments, community posts). Khejri Bachao does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Khejri Bachao,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">License</h2>
          <p>
            Unless otherwise stated, Khejri Bachao and/or its licensors own the intellectual property rights for all material on Khejri Bachao. All intellectual property rights are reserved. You may access this from Khejri Bachao for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
