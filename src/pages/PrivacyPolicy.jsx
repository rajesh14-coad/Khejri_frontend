import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-black/50">
      <SEO title="Privacy Policy" />
      <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl text-white border border-white/10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-brand-neon">Privacy Policy</h1>

        <div className="space-y-6 text-gray-200 leading-relaxed">
          <p>
            At Khejri Bachao, accessible from https://khejribachao.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Khejri Bachao and how we use it.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">Log Files</h2>
          <p>
            Khejri Bachao follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">Cookies and Web Beacons</h2>
          <p>
            Like any other website, Khejri Bachao uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">Google DoubleClick DART Cookie</h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-brand-neon hover:underline">https://policies.google.com/technologies/ads</a>
          </p>
          <p className="mt-2 text-sm bg-white/5 p-4 rounded border-l-4 border-brand-neon">
            <strong>Note:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
          </p>

          <h2 className="text-xl font-bold text-white mt-4">Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
