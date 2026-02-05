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
        <div className="min-h-screen bg-[#f8f5f1] py-8">
            <SEO
                title="Community Updates"
                description="Stay informed about environmental conservation, community initiatives, and the latest news from the Khejri Guardian."
            />
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-nature-dark mb-4">Latest News & Updates</h1>
                    <p className="text-xl text-gray-600">Stay informed about environmental conservation and community initiatives</p>
                </div>

                {/* Featured Articles */}
                {featuredNews.length > 0 && (
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            <h2 className="text-3xl font-bold text-nature-dark">Featured Stories</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {featuredNews.map(article => (
                                <Link
                                    key={article._id}
                                    to={`/news/${article.slug}`}
                                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                >
                                    {article.featuredImage && (
                                        <div className="relative overflow-hidden h-56">
                                            <img
                                                src={article.featuredImage}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-white" />
                                                    Featured
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-nature-green text-white text-xs font-bold rounded-full mb-3">
                                            {article.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-nature-dark mb-3 group-hover:text-nature-green transition line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
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
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
                    <div className="flex items-center gap-4 flex-wrap">
                        <Filter className="w-5 h-5 text-gray-500" />
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === 'all'
                                ? 'bg-nature-green text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All News ({news.length})
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === category
                                    ? 'bg-nature-green text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-nature-green mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading news...</p>
                    </div>
                ) : filteredNews.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                        <h3 className="text-lg font-bold text-gray-500 mb-2">No articles found</h3>
                        <p className="text-gray-400">No articles match the selected category.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map(article => (
                            <Link
                                key={article._id}
                                to={`/news/${article.slug}`}
                                className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                {article.featuredImage && (
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={article.featuredImage}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-3">
                                        {article.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-nature-dark mb-3 group-hover:text-nature-green transition line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{article.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-1">
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
