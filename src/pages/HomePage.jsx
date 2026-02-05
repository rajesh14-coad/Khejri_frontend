import { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';
import { ArrowRight, Leaf, BookOpen, Shield, History, MapPin, Feather, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    const [incidents, setIncidents] = useState([]);
    const [news, setNews] = useState([]);
    const [activeRule, setActiveRule] = useState(0);

    // Featured Rules for the "Daily Inspiration" carousel
    const featuredRules = [
        { title: t('home.carousel.rule22.title'), desc: t('home.carousel.rule22.desc'), number: 22 },
        { title: t('home.carousel.rule29.title'), desc: t('home.carousel.rule29.desc'), number: 29 },
        { title: t('home.carousel.rule1.title'), desc: t('home.carousel.rule1.desc'), number: 1 }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Incidents
                const { data: incidentData } = await axios.get('/api/incidents');
                setIncidents(incidentData.filter(i => i.status !== 'rejected'));

                // Fetch News
                const { data: newsData } = await axios.get('/api/news');
                // Sort by date (newest first) and take top 3
                const latestNews = newsData
                    .sort((a, b) => new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt))
                    .slice(0, 3);
                setNews(latestNews);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        // Simple carousel interval
        const interval = setInterval(() => {
            setActiveRule(prev => (prev + 1) % featuredRules.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#f8f5f1]">
            <SEO
                title="Home"
                description="Guardians of Nature - Discover the 550+ year legacy of the Bishnoi community and their unwavering commitment to environmental protection."
            />
            {/* HER HERO SECTION */}
            <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background composed of gradients and patterns since we don't have a guaranteed HD hero image yet */}
                <div className="absolute inset-0 bg-nature-dark">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1548560781-a7a07d9d33db?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-dark via-transparent to-nature-dark/50"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
                    <div className="animate-fade-in-up">
                        <span className="inline-block py-1 px-4 border border-nature-tan/40 rounded-full text-nature-tan text-sm font-bold tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
                            The Digital Museum
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-2 drop-shadow-2xl">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-8 animate-fade-in-up delay-200">
                        <Link to="/history" className="group bg-nature-tan text-nature-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center">
                            {t('hero.explore')}
                            <History className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </Link>
                        <button onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })} className="group border border-white/30 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                            {t('hero.liveMap')}
                            <MapPin className="ml-3 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8f5f1] to-transparent"></div>
            </div>

            {/* EXHIBITION GRID */}
            <div className="max-w-7xl mx-auto px-4 py-24 -mt-20 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: 29 Rules */}
                    <Link to="/rules" className="group relative bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Leaf className="w-24 h-24 text-nature-green" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-nature-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Leaf className="w-6 h-6 text-nature-green" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-nature-dark mb-3">{t('home.rulesTitle')}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t('home.rulesDesc')}
                            </p>
                            <span className="text-nature-green font-bold text-sm tracking-widest uppercase group-hover:underline decoration-2 underline-offset-4">
                                {t('home.viewRules')} &rarr;
                            </span>
                        </div>
                    </Link>

                    {/* Card 2: Sabadwani */}
                    <Link to="/sabadwani" className="group relative bg-nature-dark rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden text-white">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-sm">
                                <BookOpen className="w-6 h-6 text-nature-tan" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-3">{t('home.sabadTitle')}</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {t('home.sabadDesc')}
                            </p>
                            <span className="text-nature-tan font-bold text-sm tracking-widest uppercase group-hover:underline decoration-2 underline-offset-4">
                                {t('home.readScripture')} &rarr;
                            </span>
                        </div>
                    </Link>

                    {/* Card 3: History */}
                    <Link to="/history" className="group relative bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Shield className="w-24 h-24 text-red-800" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6 text-red-800" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-nature-dark mb-3">{t('home.historyTitle')}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t('home.historyDesc')}
                            </p>
                            <span className="text-red-800 font-bold text-sm tracking-widest uppercase group-hover:underline decoration-2 underline-offset-4">
                                {t('home.witnessHistory')} &rarr;
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* FEATURE: PHILOSOPHY CAROUSEL */}
            <section className="bg-white py-24 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 text-nature-green font-bold tracking-widest uppercase text-sm">
                                <Feather className="w-4 h-4" />
                                <span>{t('home.corePhilosophy')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-dark leading-tight">
                                "Sar Sathey Runkh Rahe <br />To Bhi Sasto Jaan"
                            </h2>
                            <p className="text-2xl font-serif italic text-gray-500">
                                {t('home.philosophyQuoteMeaning')}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {t('home.philosophyDesc')}
                            </p>
                            <Link to="/history/amrita-devi" className="inline-flex items-center text-nature-dark font-bold underline decoration-nature-green underline-offset-8 hover:decoration-4 transition-all">
                                {t('home.readAmritaStory')} <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Animated Rule Card */}
                        <div className="relative h-80 w-full perspective-1000">
                            {featuredRules.map((rule, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 bg-nature-light rounded-3xl p-10 flex flex-col justify-center transition-all duration-700 ease-in-out border border-nature-tan/20 shadow-lg ${idx === activeRule
                                        ? 'opacity-100 translate-x-0 rotate-0 z-10'
                                        : 'opacity-0 translate-x-10 rotate-3 -z-10'
                                        }`}
                                >
                                    <span className="text-6xl font-serif text-nature-tan/20 absolute top-4 right-6 font-bold">#{rule.number}</span>
                                    <h3 className="text-3xl font-bold text-nature-dark mb-4">{rule.title}</h3>
                                    <p className="text-xl text-gray-600 font-serif leading-relaxed">
                                        "{rule.desc}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: THE FOUNDER */}
            <section className="py-24 bg-nature-dark text-nature-tan relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-left"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Image/Graphic Placeholder */}
                        <div className="w-full md:w-1/3">
                            <div className="aspect-[3/4] rounded-full border-4 border-nature-tan/30 p-2 relative">
                                <div className="w-full h-full rounded-full bg-nature-tan/10 overflow-hidden flex items-center justify-center">
                                    {/* Ideally an image of Guru Jambheshwar here */}
                                    <Feather className="w-32 h-32 text-nature-tan opacity-50" />
                                </div>
                                <div className="absolute -bottom-4 right-10 bg-nature-green text-white px-6 py-2 rounded-full font-bold shadow-lg">
                                    {t('home.est')}
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <span className="text-nature-green font-bold tracking-[0.2em] uppercase text-sm mb-4 block">{t('home.founderTitle')}</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Guru Jambheshwar</h2>
                            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 font-serif">
                                "{t('home.founderDesc')}"
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {t('home.founderLongDesc')}
                            </p>
                            <Link to="/guru" className="inline-flex items-center border border-nature-tan text-nature-tan px-8 py-3 rounded-full hover:bg-nature-tan hover:text-nature-dark transition-all duration-300 font-bold uppercase tracking-wider text-sm">
                                {t('home.readBio')} <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: LATEST CHRONICLES (NEWS) */}
            <section className="py-24 bg-[#f8f5f1] border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-2 block">{t('home.communityUpdates')}</span>
                            <h2 className="text-4xl font-serif font-bold text-nature-dark">{t('home.latestChronicles')}</h2>
                        </div>
                        <Link to="/news" className="hidden md:flex items-center text-gray-500 hover:text-nature-dark font-bold transition">
                            {t('home.viewArchive')} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {news.length > 0 ? (
                            news.map((item, idx) => (
                                <Link to={`/news/${item.slug}`} key={item._id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-nature-dark/10 group-hover:bg-nature-dark/0 transition-colors"></div>
                                        {item.featuredImage ? (
                                            <img
                                                src={item.featuredImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-nature-tan/20">
                                                <Feather className="w-12 h-12 text-nature-tan opacity-50" />
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-nature-dark shadow-sm">
                                            {item.category || 'News'}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2 block">
                                            {new Date(item.publishedAt || item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nature-green transition-colors font-serif line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-4 flex-grow">
                                            {item.excerpt}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-gray-50">
                                            <span className="text-nature-green font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                                Read Story <ArrowRight className="ml-2 w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12 text-gray-500">
                                <p>No news updates yet. Stay tuned!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* MODERN VIGILANCE (MAP & REPORT) */}
            <section id="map-section" className="py-24 px-4 bg-nature-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-nature-tan font-bold tracking-widest uppercase text-sm mb-2 block">Modern Action</span>
                            <h2 className="text-4xl font-serif font-bold mb-4">Protecting the Legacy Today</h2>
                            <p className="text-gray-400 text-lg">
                                The fight isn't over. Use our digital tools to report threats to Khejri trees and wildlife. View real-time reports from the community.
                            </p>
                        </div>
                        <Link to="/report" className="bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-nature-green transition-all shadow-lg shadow-nature-green/30 flex items-center">
                            Report an Incident <Wind className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    <div className="bg-white/5 rounded-3xl p-2 border border-white/10 backdrop-blur-sm">
                        <MapComponent incidents={incidents} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
