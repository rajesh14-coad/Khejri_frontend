import { Link } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { Menu, X, TreeDeciduous, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isCultureOpen, setIsCultureOpen] = useState(false);

    // Close dropdown when clicking outside
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsCultureOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-nature-green text-white shadow-md relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <TreeDeciduous className="h-8 w-8 text-nature-tan" />
                            <span className="font-bold text-xl">Khejri Guardian</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Link to="/" className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium">{t('menu.home')}</Link>

                            {/* Culture Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsCultureOpen(!isCultureOpen)}
                                    className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium inline-flex items-center focus:outline-none"
                                >
                                    Culture <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isCultureOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isCultureOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in-down">
                                        <Link
                                            to="/guru"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsCultureOpen(false)}
                                        >
                                            Guru Jambheshwar
                                        </Link>
                                        <Link
                                            to="/rules"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsCultureOpen(false)}
                                        >
                                            29 Rules
                                        </Link>
                                        <Link
                                            to="/sabadwani"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsCultureOpen(false)}
                                        >
                                            Sabadwani (120 Verses)
                                        </Link>
                                        <Link
                                            to="/history"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => setIsCultureOpen(false)}
                                        >
                                            History & Legacy
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* <Link to="/community" className="text-white hover:text-nature-tan px-3 py-2 rounded-md text-sm font-bold bg-white/10">Community</Link> */}
                            <Link to="/incidents" className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium">Incidents</Link>
                            <Link to="/news" className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium">{t('menu.news')}</Link>
                            {user && <Link to="/report" className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium">{t('menu.report')}</Link>}
                            {user && user.role === 'admin' && <Link to="/admin" className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium">{t('menu.admin')}</Link>}

                            {user ? (
                                <button onClick={logout} className="bg-nature-dark hover:bg-black px-4 py-2 rounded-md text-sm">{t('menu.logout')}</button>
                            ) : (
                                <>
                                    <Link to="/login" className="hover:text-nature-tan px-3 py-2 rounded-md text-sm font-medium">{t('menu.login')}</Link>
                                    <Link to="/register" className="bg-nature-tan text-nature-green hover:bg-white px-4 py-2 rounded-md text-sm font-bold">{t('menu.register')}</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-nature-dark focus:outline-none">
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-nature-green shadow-lg">
                        <div className="px-3 py-2">
                            <LanguageSwitcher />
                        </div>
                        <Link to="/" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{t('menu.home')}</Link>
                        <div className="pl-3 space-y-1 border-l-2 border-nature-tan ml-3 my-2">
                            <Link to="/guru" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Guru Jambheshwar</Link>
                            <Link to="/rules" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>29 Rules</Link>
                            <Link to="/sabadwani" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Sabadwani</Link>
                            <Link to="/history" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>History & Legacy</Link>
                        </div>
                        {/* <Link to="/community" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium font-bold text-nature-tan" onClick={() => setIsOpen(false)}>Community Chaupal</Link> */}
                        <Link to="/incidents" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Incidents</Link>
                        <Link to="/news" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{t('menu.news')}</Link>
                        {user && <Link to="/report" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{t('menu.report')}</Link>}
                        {user && user.role === 'admin' && <Link to="/admin" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{t('menu.admin')}</Link>}
                        {user ? (
                            <button onClick={() => { logout(); setIsOpen(false); }} className="block w-full text-left bg-nature-dark px-3 py-2 rounded-md text-base font-medium mt-4">{t('menu.logout')}</button>
                        ) : (
                            <>
                                <Link to="/login" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{t('menu.login')}</Link>
                                <Link to="/register" className="block hover:text-nature-tan px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{t('menu.register')}</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
