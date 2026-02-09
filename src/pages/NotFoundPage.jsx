
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center p-4">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="text-center max-w-lg bg-neutral-800/50 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl">
        <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-6xl font-serif font-bold text-brand-neon mb-2">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          <br />
          वह पृष्ठ जिसे आप ढूंढ रहे हैं, मौजूद नहीं है।
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-olive text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:-translate-y-1"
        >
          <Home className="w-5 h-5" /> Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
