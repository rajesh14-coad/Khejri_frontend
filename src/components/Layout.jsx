import { Link, useLocation } from 'react-router-dom';
import { Video } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="flex flex-col min-h-screen relative pb-24 md:pb-0">
            {/* Global Background Wrapper */}
            <div className="fixed inset-0 -z-50 bg-[url('/images/khejri.png')] bg-no-repeat bg-cover bg-[center_top] md:bg-center md:bg-fixed w-full min-h-screen" />

            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Mobile LIVE ACTION Button */}
            {/* Mobile LIVE ACTION Button - Hidden on the live page itself */}
            {location.pathname !== '/movements/bikaner-2026' && location.pathname !== '/live' && (
                <div className="fixed bottom-24 right-4 z-50 md:hidden">
                    <Link
                        to="/movements/bikaner-2026"
                        className="flex items-center gap-2 bg-red-600 text-white font-bold px-5 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors animate-pulse border-2 border-white/20"
                    >
                        <Video className="w-5 h-5" />
                        LIVE
                    </Link>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Layout;
