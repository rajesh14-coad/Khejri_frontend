import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Mobile LIVE ACTION Button */}
            <div className="fixed bottom-24 right-4 z-50 md:hidden">
                <Link
                    to="/movements/bikaner-2026"
                    className="flex items-center gap-2 bg-red-600 text-white font-bold px-5 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors animate-pulse border-2 border-white/20"
                >
                    <Video className="w-5 h-5" />
                    LIVE
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
