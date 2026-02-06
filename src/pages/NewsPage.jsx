import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, User, Eye, Filter, Star } from 'lucide-react';
import SEO from '../components/SEO';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [featuredNews, setFeaturedNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
        fetchCategories();
    }, []);

    useEffect(() => {
        filterNews();
    }, [news, selectedCategory]);

    const fetchNews = async () => {
        try {
            const { data } = await axios.get('/api/news');
            setNews(data);
            setFeaturedNews(data.filter(item => item.featured).slice(0, 3));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get('/api/news/categories/list');
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const filterNews = () => {
        if (selectedCategory === 'all') {
            setFilteredNews(news);
        } else {
            setFilteredNews(news.filter(item => item.category === selectedCategory));
        }
    };

    return (
        <div className="min-h-screen pb-32 relative">
            <SEO
                title="Community Updates"
                description="Stay informed about environmental conservation, community initiatives, and the latest news from the Khejri Guardian."
            />

            {/* FIXED BACKGROUND */}
            <div className="fixed inset-0 bg-[url('/images/desert-bg.jpg')] bg-cover bg-center bg-no-repeat z-[-1]"></div>
            <div className="fixed inset-0 bg-black/60 z-[-1]"></div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif font-bold text-white mb-4 drop-shadow-md">Latest News & Updates</h1>
                    <p className="text-xl text-gray-300 font-light">Stay informed about environmental conservation and community initiatives</p>
                </div>

                {/* Featured Articles */}
                {featuredNews.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <Star className="w-6 h-6 text-[#C2B280] fill-[#C2B280]" />
                            <h2 className="text-3xl font-serif font-bold text-white">Featured Stories</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredNews.map(article => (
                                <Link
                                    key={article._id}
                                    to={`/news/${article.slug}`}
                                    className="group bg-black/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/10 hover:border-brand-neon/50 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {article.featuredImage && (
                                        <div className="relative overflow-hidden h-56">
                                            <img
                                                src={article.featuredImage}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="bg-[#C2B280] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                                    <Star className="w-3 h-3 fill-black" />
                                                    Featured
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                                        </div>
                                    )}
                                    <div className="p-6 relative">
                                        <span className="inline-block px-3 py-1 bg-brand-olive/30 border border-brand-olive text-brand-neon text-xs font-bold rounded-full mb-3 backdrop-blur-md">
                                            {article.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-neon transition line-clamp-2 leading-tight">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{article.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Eye className="w-4 h-4" />
                                                <span>{article.views}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Category Filter */}
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-lg p-6 mb-8 border border-white/10">
                    <div className="flex items-center gap-4 flex-wrap">
                        <Filter className="w-5 h-5 text-brand-neon" />
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${selectedCategory === 'all'
                                ? 'bg-brand-neon text-black font-bold shadow-lg shadow-brand-neon/40'
                                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            All News ({news.length})
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                    ? 'bg-brand-neon text-black font-bold shadow-lg shadow-brand-neon/40'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {category} ({news.filter(n => n.category === category).length})
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                {loading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-brand-neon mx-auto mb-4 border-r-2 border-transparent"></div>
                        <p className="text-gray-400 animate-pulse">Loading updates...</p>
                    </div>
                ) : filteredNews.length === 0 ? (
                    <div className="text-center py-20 bg-black/40 backdrop-blur-xl rounded-2xl border border-dashed border-white/20">
                        <h3 className="text-lg font-bold text-gray-300 mb-2">No articles found</h3>
                        <p className="text-gray-500">No articles match the selected category.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map(article => (
                            <Link
                                key={article._id}
                                to={`/news/${article.slug}`}
                                className="group bg-black/40 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/10 hover:border-brand-neon/30 hover:bg-black/50 transition-all duration-300"
                            >
                                {article.featuredImage && (
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={article.featuredImage}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                )}
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold rounded-full mb-3">
                                        {article.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-neon transition line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{article.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-1 text-brand-neon">
                                            <User className="w-3 h-3" />
                                            <span>{article.author?.name || 'Admin'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsPage;
