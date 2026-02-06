
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { Menu, X, TreeDeciduous, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    // Dropdown states
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState({});

    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const toggleMobileGroup = (name) => {
        setMobileExpanded(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const navStructure = [
        {
            title: t('nav.spirituality', 'Spirituality'),
            key: 'spirituality',
            items: [
                { name: t('nav.guru', 'Guru Jambheshwar'), path: '/guru' },
                { name: t('nav.rules', '29 Rules'), path: '/rules' },
                { name: t('nav.sabad', '120 Sabad'), path: '/sabadwani' }
            ]
        },
        {
            title: t('nav.history', 'History'),
            key: 'history',
            items: [
                { name: t('nav.legacy', 'Bishnoi Samaj History'), path: '/history' },
                { name: t('nav.amrita', 'Ma Amrita Devi'), path: '/history/amrita-devi' }
            ]
        },
        {
            title: t('nav.movements', 'Movements'),
            key: 'movements',
            items: [
                { name: t('nav.importance', 'Importance of Khejri Tree'), path: '/movements/importance' },
                { name: t('nav.bikaner', 'LIVE: Bikaner Andolan 2026'), path: '/movements/bikaner-2026', highlight: true }
            ]
        }
    ];

    return (

        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
            {/* Desktop & Mobile Header - Glass/Transparent */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
                                <TreeDeciduous className="h-6 w-6 text-brand-neon" />
                            </div>
                            <span className="font-bold text-xl tracking-wide text-white drop-shadow-md">Khejri Guardian</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2" ref={dropdownRef}>
                        {/* Language Switcher - Desktop Position */}
                        <div className="mr-4">
                            <LanguageSwitcher />
                        </div>

                        <Link to="/" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-bold transition-all backdrop-blur-sm border border-transparent hover:border-white/10">
                            {t('menu.home', 'Home')}
                        </Link>

                        {navStructure.map((group) => (
                            <div key={group.key} className="relative">
                                <button
                                    onClick={() => toggleDropdown(group.key)}
                                    className={`text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-bold inline-flex items-center focus:outline-none transition-all backdrop-blur-sm border border-transparent hover:border-white/10 ${activeDropdown === group.key ? 'bg-white/10 border-white/10' : ''}`}
                                >
                                    {group.title} <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === group.key ? 'rotate-180' : ''}`} />
                                </button>

                                {activeDropdown === group.key && (
                                    <div className="absolute left-0 mt-3 w-64 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2 z-50 animate-fade-in-down origin-top-left overflow-hidden">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className={`block px-5 py-3 text-sm hover:bg-white/10 transition-colors border-b last:border-0 border-white/5
                                                    ${item.highlight ? 'text-red-400 font-bold bg-red-900/20' : 'text-gray-200'}`}
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                {item.highlight && <span className="mr-2 animate-pulse">●</span>}
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link to="/news" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-bold transition-all backdrop-blur-sm border border-transparent hover:border-white/10">{t('menu.news', 'News')}</Link>

                        {user && <Link to="/report" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-bold transition-all backdrop-blur-sm border border-transparent hover:border-white/10">{t('menu.report', 'Report')}</Link>}
                        {user && user.role === 'admin' && <Link to="/admin" className="text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-bold transition-all backdrop-blur-sm border border-transparent hover:border-white/10">{t('menu.admin', 'Admin')}</Link>}

                        <div className="ml-2">
                            {user ? (
                                <button onClick={logout} className="bg-white/10 hover:bg-red-600/80 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg">{t('menu.logout', 'Logout')}</button>
                            ) : (
                                <Link to="/login" className="bg-brand-olive text-brand-neon border border-brand-neon hover:bg-brand-olive/80 px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(76,213,122,0.4)] hover:shadow-[0_0_20px_rgba(76,213,122,0.6)]">
                                    {t('menu.login', 'Login')}
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile Header Elements (Hamburger + Lang Switcher) */}
                    <div className="flex items-center space-x-4 md:hidden">
                        {/* Mobile Language Switcher */}
                        <div className="transform scale-90 bg-black/30 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
                            <LanguageSwitcher />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-full text-white bg-black/30 backdrop-blur-md hover:bg-white/20 focus:outline-none transition-all border border-white/10"
                        >
                            {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay (Full Screen Glass) */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl border-t border-white/10 animate-fade-in pt-24 px-6 overflow-y-auto">
                    <div className="space-y-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block p-4 rounded-2xl bg-white/5 border border-white/10 text-xl font-bold text-white text-center">
                            {t('menu.home', 'Home')}
                        </Link>

                        {navStructure.map((group) => (
                            <div key={group.key} className="space-y-2">
                                <div className="text-[#E07A5F] text-xs font-bold uppercase tracking-widest pl-2 mt-6 mb-2">{group.title}</div>
                                {group.items.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block p-4 rounded-2xl bg-white/5 border border-white/10 text-lg font-medium text-gray-200 active:bg-white/20 active:scale-95 transition-all
                                            ${item.highlight ? 'border-red-500/30 bg-red-900/10 text-red-300' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        ))}

                        <Link to="/news" onClick={() => setIsOpen(false)} className="block p-4 rounded-2xl bg-white/5 border border-white/10 text-xl font-medium text-white text-center mt-6">
                            {t('menu.news', 'News')}
                        </Link>

                        <div className="pt-8 pb-32">
                            {user ? (
                                <button onClick={logout} className="w-full bg-red-600/80 p-4 rounded-2xl text-xl font-bold text-white shadow-lg">{t('menu.logout', 'Logout')}</button>
                            ) : (
                                <div className="grid grid-cols-2 gap-4">
                                    <Link onClick={() => setIsOpen(false)} to="/login" className="text-center bg-white/10 border border-white/10 p-4 rounded-2xl text-lg font-bold text-white">{t('menu.login', 'Login')}</Link>
                                    <Link onClick={() => setIsOpen(false)} to="/register" className="text-center bg-[#E07A5F] p-4 rounded-2xl text-lg font-bold text-white shadow-lg">{t('menu.register', 'Join')}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Premium Mobile Bottom Navigation Bar - Floating Glass Pill */}
            <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
                <div className="bg-black/80 backdrop-blur-2xl border border-white/15 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-2 py-3">
                    <div className="flex justify-around items-center">
                        <Link to="/" className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${location.pathname === '/' ? 'text-brand-neon scale-110' : 'text-gray-400 hover:text-gray-200'}`}>
                            <div className={`absolute -top-1 w-1 h-1 rounded-full bg-brand-neon shadow-[0_0_8px_#4cd57a] transition-opacity duration-300 ${location.pathname === '/' ? 'opacity-100' : 'opacity-0'}`}></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mb-1"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider scale-90">{t('menu.home', 'Home')}</span>
                        </Link>

                        <Link to="/sabadwani" className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${location.pathname === '/sabadwani' ? 'text-brand-neon scale-110' : 'text-gray-400 hover:text-gray-200'}`}>
                            <div className={`absolute -top-1 w-1 h-1 rounded-full bg-brand-neon shadow-[0_0_8px_#4cd57a] transition-opacity duration-300 ${location.pathname === '/sabadwani' ? 'opacity-100' : 'opacity-0'}`}></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mb-1"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider scale-90">Sabad</span>
                        </Link>

                        <Link to="/history" className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${location.pathname === '/history' ? 'text-brand-neon scale-110' : 'text-gray-400 hover:text-gray-200'}`}>
                            <div className={`absolute -top-1 w-1 h-1 rounded-full bg-brand-neon shadow-[0_0_8px_#4cd57a] transition-opacity duration-300 ${location.pathname === '/history' ? 'opacity-100' : 'opacity-0'}`}></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mb-1"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider scale-90">History</span>
                        </Link>

                        <Link to="/movements/bikaner-2026" className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${location.pathname === '/movements/bikaner-2026' ? 'text-brand-neon scale-110' : 'text-gray-400 hover:text-gray-200'}`}>
                            {/* Live Pulse */}
                            <div className="absolute top-1 right-2 w-2 h-2 bg-brand-neon rounded-full animate-ping"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mb-1"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" /><path d="M12 13v9" /><path d="M12 21v-8" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider scale-90">Andolan</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
