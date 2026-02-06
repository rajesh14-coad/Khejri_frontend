import { useTranslation } from 'react-i18next';

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
            </div>
        </footer>
    );
};

export default Footer;
