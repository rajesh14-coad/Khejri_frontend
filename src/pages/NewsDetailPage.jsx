import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Calendar, User, Eye, Tag, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const NewsDetailPage = () => {
    const { slug } = useParams();
    const { t, getLocalizedContent } = useLanguage();
    const [article, setArticle] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticle();
    }, [slug]);

    const fetchArticle = async () => {
        try {
            const { data } = await axios.get(`/api/news/${slug}`);
            setArticle(data);

            // Fetch related articles from same category
            const { data: related } = await axios.get(`/api/news?category=${data.category}`);
            setRelatedNews(related.filter(item => item.slug !== slug).slice(0, 3));

            setLoading(false);
        } catch (error) {
            console.error('Error fetching article:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f8f5f1] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-nature-green mx-auto mb-4"></div>
                    <p className="text-gray-600">{t('loading', 'Loading article...')}</p>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen bg-[#f8f5f1] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('article_not_found', 'Article Not Found')}</h2>
                    <Link to="/news" className="text-nature-green hover:underline">← {t('back_to_news', 'Back to News')}</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f5f1] py-8">
            <SEO
                title={article.title}
                description={article.metaDescription || article.excerpt}
                keywords={article.metaKeywords && article.metaKeywords.length > 0 ? article.metaKeywords : article.tags}
                image={article.featuredImage}
            />
            <div className="max-w-4xl mx-auto px-4">
                {/* Back Button */}
                <Link to="/news" className="inline-flex items-center gap-2 text-nature-green hover:text-nature-dark mb-6 font-medium">
                    <ArrowLeft className="w-4 h-4" />
                    {t('back_to_news', 'Back to News')}
                </Link>

                {/* Article Header */}
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Featured Image */}
                    {article.featuredImage && (
                        <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-96 object-cover"
                        />
                    )}

                    {/* Content */}
                    <div className="p-8">
                        {/* Category Badge */}
                        <span className="inline-block px-4 py-1 bg-nature-green text-white text-sm font-bold rounded-full mb-4">
                            {getLocalizedContent(article, 'category')}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-nature-dark mb-4">{getLocalizedContent(article, 'title')}</h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{article.author?.name || 'Admin'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye className="w-4 h-4" />
                                <span>{article.views} {t('views', 'views')}</span>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-700 mb-8 font-medium italic border-l-4 border-nature-green pl-4">
                            {getLocalizedContent(article, 'excerpt')}
                        </p>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none mb-8"
                            dangerouslySetInnerHTML={{ __html: getLocalizedContent(article, 'content') }}
                        />

                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
                                <Tag className="w-5 h-5 text-gray-400" />
                                {article.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </article>

                {/* Related Articles */}
                {relatedNews.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-nature-dark mb-6">{t('related_articles', 'Related Articles')}</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedNews.map(item => (
                                <Link
                                    key={item._id}
                                    to={`/news/${item.slug}`}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition"
                                >
                                    {item.featuredImage && (
                                        <img src={item.featuredImage} alt={getLocalizedContent(item, 'title')} className="w-full h-40 object-cover" />
                                    )}
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{getLocalizedContent(item, 'title')}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">{getLocalizedContent(item, 'excerpt')}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsDetailPage;
