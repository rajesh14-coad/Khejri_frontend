import { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';
import { ArrowRight, Leaf, BookOpen, Shield, History, MapPin, Feather, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
                console.error("Error fetching data:", error);

                // FALLBACK MOCK DATA FOR UI DEMONSTRATION
                setIncidents([
                    {
                        id: 1,
                        title: "Tree Felling at Kakko Village",
                        description: "Heavy machinery spotted clearing 50+ Khejri trees for solar transmission lines.",
                        coordinates: { lat: 28.0167, lng: 73.3119 },
                        status: "verified",
                        locationName: "Kakko, Bikaner",
                        image: "/images/solar_contrast.png",
                        reporter: { name: "Bishnoi Scout" }
                    },
                    {
                        id: 2,
                        title: "Mahapadav Gathering",
                        description: "Over 5000 people gathered at Collectorate. Peaceful sit-in continues.",
                        coordinates: { lat: 28.0229, lng: 73.3119 },
                        status: "pending",
                        locationName: "Collectorate",
                        image: "/images/andolan_protest.png",
                        reporter: { name: "Live Unit" }
                    }
                ]);

                setNews([
                    {
                        _id: "1",
                        title: "Bikaner Mahapadav Enters Day 5",
                        slug: "bikaner-mahapadav-day-5",
                        excerpt: "Thousands of environmental activists have refused to leave until the Tree Protection Act is enforced.",
                        publishedAt: new Date().toISOString(),
                        featuredImage: "/images/andolan_protest.png",
                        category: "Protest"
                    },
                    {
                        _id: "2",
                        title: "Solar Companies Face Local Resistance",
                        slug: "solar-companies-resistance",
                        excerpt: "Adani and NTPC projects halted in 3 villages as farmers block bulldozers to save Khejri groves.",
                        publishedAt: new Date().toISOString(),
                        featuredImage: "/images/solar_contrast.png",
                        category: "Environment"
                    }
                ]);
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
        <div className="min-h-screen text-white font-sans selection:bg-brand-olive selection:text-brand-neon">
            <SEO
                title="Home"
                description="Guardians of Nature - Discover the 550+ year legacy of the Bishnoi community and their unwavering commitment to environmental protection."
            />
            {/* HERO SECTION - REALISTIC PARALLAX */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    style={{ y: "-10%" }} // Basic parallax via CSS or ensure parent has overflow-hidden
                >
                    <div className="absolute inset-0 bg-black/30 z-10 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-dark via-transparent to-black/20 z-10" />
                    <img
                        src="/images/hero_desert.jpg"
                        alt="Khejri trees in Rajasthan Desert"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-12 mt-24">
                    <div className="animate-fade-in-up">
                        <span className="inline-block py-2 px-6 border border-white/30 bg-black/30 backdrop-blur-md rounded-full text-brand-neon text-sm font-bold tracking-[0.3em] uppercase mb-8 shadow-lg">
                            The Digital Museum
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-100 font-serif italic max-w-3xl mx-auto leading-relaxed drop-shadow-lg text-shadow-sm">
                            "{t('hero.subtitle')}"
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8 pt-8 animate-fade-in-up delay-200">
                        <Link to="/history" className="group bg-brand-olive text-brand-neon border border-brand-neon hover:bg-brand-olive/80 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(76,213,122,0.6)] hover:shadow-[0_0_30px_rgba(76,213,122,0.8)] hover:-translate-y-1">
                            {t('hero.explore')}
                            <History className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </Link>
                        <button onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })} className="group bg-black/30 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black/50 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 shadow-lg">
                            {t('hero.liveMap')}
                            <MapPin className="ml-3 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Latest Updates Ticker */}
                <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 py-3 z-30 overflow-hidden flex items-center">
                    <div className="animate-pulse bg-red-600 text-white px-3 py-1 ml-4 md:ml-8 rounded-full text-xs font-bold tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.6)] shrink-0">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                        {t('home.liveAction', 'LIVE ACTION')}
                    </div>
                    <div className="flex-1 overflow-hidden w-full ml-4">
                        <p className="whitespace-nowrap animate-marquee text-white font-medium flex items-center">
                            <Link to="/movements/bikaner-2026" className="text-brand-neon hover:underline mr-12 flex items-center text-sm md:text-base font-bold">
                                BIKANER CRISIS: 50,000+ Khejri Trees at Risk. Join the Mahapadav NOW.
                            </Link>
                            {news.map((item) => (
                                <Link key={item._id} to={`/news/${item.slug}`} className="text-gray-300 hover:text-white mr-12 text-sm flex items-center">
                                    <span className="text-nature-green mr-2">●</span> {item.title}
                                </Link>
                            ))}
                        </p>
                    </div>
                </div>
            </div>

            {/* EXHIBITION GRID */}
            <div className="max-w-7xl mx-auto px-6 py-32 -mt-20 relative z-20">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Card 1: 29 Rules */}
                    <Link to="/rules" className="group relative bg-black/40 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
                            <Leaf className="w-24 h-24 text-brand-neon" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-brand-neon/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-brand-neon/30">
                                <Leaf className="w-7 h-7 text-brand-neon" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-4 drop-shadow-md">{t('home.rulesTitle')}</h3>
                            <p className="text-gray-200 mb-8 leading-relaxed text-lg font-light">
                                {t('home.rulesDesc')}
                            </p>
                            <span className="text-brand-neon font-bold text-sm tracking-widest uppercase group-hover:underline decoration-2 underline-offset-4 flex items-center">
                                {t('home.viewRules')} <ArrowRight className="ml-2 w-4 h-4" />
                            </span>
                        </div>
                    </Link>

                    {/* Card 2: Sabadwani */}
                    <Link to="/sabadwani" className="group relative bg-black/40 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-brand-neon/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-brand-neon/30">
                                <BookOpen className="w-7 h-7 text-brand-neon" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-4 drop-shadow-md">{t('home.sabadTitle')}</h3>
                            <p className="text-gray-200 mb-8 leading-relaxed text-lg font-light">
                                {t('home.sabadDesc')}
                            </p>
                            <span className="text-brand-neon font-bold text-sm tracking-widest uppercase group-hover:underline decoration-2 underline-offset-4 flex items-center">
                                {t('home.readScripture')} <ArrowRight className="ml-2 w-4 h-4" />
                            </span>
                        </div>
                    </Link>

                    {/* Card 3: History */}
                    <Link to="/history" className="group relative bg-black/40 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/10">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
                            <Shield className="w-24 h-24 text-brand-saffron" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-brand-saffron/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-brand-saffron/30">
                                <Shield className="w-7 h-7 text-brand-saffron" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-4 drop-shadow-md">{t('home.historyTitle')}</h3>
                            <p className="text-gray-200 mb-8 leading-relaxed text-lg font-light">
                                {t('home.historyDesc')}
                            </p>
                            <span className="text-brand-saffron font-bold text-sm tracking-widest uppercase group-hover:underline decoration-2 underline-offset-4 flex items-center">
                                {t('home.witnessHistory')} <ArrowRight className="ml-2 w-4 h-4" />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* FEATURE: PHILOSOPHY CAROUSEL */}
            {/* FEATURE: PHILOSOPHY CAROUSEL */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center space-x-2 text-brand-saffron font-bold tracking-widest uppercase text-sm">
                                    <Feather className="w-4 h-4" />
                                    <span>{t('home.corePhilosophy')}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight drop-shadow-md">
                                    "Sar Sathey Runkh Rahe <br />To Bhi Sasto Jaan"
                                </h2>
                                <p className="text-2xl font-serif italic text-gray-300">
                                    {t('home.philosophyQuoteMeaning')}
                                </p>
                                <p className="text-gray-300 leading-relaxed text-lg font-light">
                                    {t('home.philosophyDesc')}
                                </p>
                                <Link to="/history/amrita-devi" className="inline-flex items-center text-white font-bold underline decoration-brand-saffron underline-offset-8 hover:decoration-4 transition-all">
                                    {t('home.readAmritaStory')} <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>

                            {/* Animated Rule Card */}
                            <div className="relative h-96 w-full perspective-1000">
                                {featuredRules.map((rule, idx) => (
                                    <div
                                        key={idx}
                                        className={`absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-3xl p-10 flex flex-col justify-center transition-all duration-700 ease-in-out border border-white/20 shadow-xl ${idx === activeRule
                                            ? 'opacity-100 translate-x-0 rotate-0 z-10'
                                            : 'opacity-0 translate-x-10 rotate-3 -z-10'
                                            }`}
                                    >
                                        <span className="text-8xl font-serif text-white/5 absolute top-0 right-4 font-bold">#{rule.number}</span>
                                        <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-sm">{rule.title}</h3>
                                        <p className="text-xl text-gray-200 font-serif leading-relaxed">
                                            "{rule.desc}"
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: THE FOUNDER */}
            {/* SECTION: THE FOUNDER */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            {/* Image/Graphic Placeholder */}
                            <div className="w-full md:w-1/3">
                                <div className="aspect-[3/4] rounded-full border-4 border-[#C2B280]/30 p-2 relative">
                                    <div className="w-full h-full rounded-full bg-black/20 overflow-hidden flex items-center justify-center relative shadow-inner">
                                        <img
                                            src="/images/guru_jambheshwar2.png"
                                            alt="Guru Jambheshwar"
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 right-10 bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow-lg border border-white/20 backdrop-blur-md">
                                        {t('home.est')}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <span className="text-[#C2B280] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">{t('home.founderTitle')}</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">Guru Jambheshwar</h2>
                                <p className="text-xl text-gray-200 leading-relaxed font-light mb-8 font-serif italic">
                                    "{t('home.founderDesc')}"
                                </p>
                                <p className="text-gray-300 mb-8 leading-relaxed text-lg font-light">
                                    {t('home.founderLongDesc')}
                                </p>
                                <Link to="/guru" className="inline-flex items-center border border-[#C2B280] text-[#C2B280] px-8 py-3 rounded-full hover:bg-[#C2B280] hover:text-black transition-all duration-300 font-bold uppercase tracking-wider text-sm">
                                    {t('home.readBio')} <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: LATEST CHRONICLES (NEWS) */}
            {/* SECTION: LATEST CHRONICLES (NEWS) */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-2 block">{t('home.communityUpdates')}</span>
                            <h2 className="text-4xl font-serif font-bold text-white drop-shadow-md">{t('home.latestChronicles')}</h2>
                        </div>
                        <Link to="/news" className="hidden md:flex items-center text-gray-300 hover:text-white font-bold transition">
                            {t('home.viewArchive')} <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {news.length > 0 ? (
                            news.map((item, idx) => (
                                <Link to={`/news/${item.slug}`} key={item._id} className="group bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 border border-white/10 flex flex-col h-full hover:scale-[1.02]">
                                    <div className="h-56 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        {item.featuredImage ? (
                                            <img
                                                src={item.featuredImage}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-white/5">
                                                <Feather className="w-12 h-12 text-white/30" />
                                            </div>
                                        )}
                                        <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                                            {item.category || 'News'}
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow flex flex-col">
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 block">
                                            {new Date(item.publishedAt || item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors font-serif line-clamp-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed mb-6 flex-grow font-light">
                                            {item.excerpt}
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-white/10">
                                            <span className="text-green-400 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                                Read Story <ArrowRight className="ml-2 w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12 text-white/50">
                                <p>No news updates yet. Stay tuned!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* MODERN VIGILANCE (MAP & REPORT) */}
            {/* MODERN VIGILANCE (MAP & REPORT) */}
            <section id="map-section" className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 shadow-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div className="max-w-2xl">
                                <span className="text-white/60 font-bold tracking-widest uppercase text-sm mb-2 block">Modern Action</span>
                                <h2 className="text-4xl font-serif font-bold mb-4 text-white drop-shadow-md">Protecting the Legacy Today</h2>
                                <p className="text-gray-200 text-lg font-light">
                                    The fight isn't over. Use our digital tools to report threats to Khejri trees and wildlife. View real-time reports from the community.
                                </p>
                            </div>
                            <Link to="/report" className="bg-brand-olive text-brand-neon border border-brand-neon font-bold px-10 py-4 rounded-full hover:bg-brand-olive/80 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(76,213,122,0.6)] flex items-center">
                                Report an Incident <Wind className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                        <div className="bg-white/5 rounded-3xl p-2 border border-white/10 backdrop-blur-sm shadow-inner">
                            <MapComponent incidents={incidents} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
