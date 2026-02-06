import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-brand-olive text-nature-light py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
                <div className="mt-4 text-sm text-gray-300">
                    <p className="font-bold">{t('footer.disclaimerTitle')}</p>
                    <p>{t('footer.disclaimerText')}</p>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-400">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <span className="hidden md:inline">•</span>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    <span className="hidden md:inline">•</span>
                    <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
