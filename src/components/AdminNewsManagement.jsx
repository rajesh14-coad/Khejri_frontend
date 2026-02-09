import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X, Image as ImageIcon } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const AdminNewsManagement = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [loading, setLoading] = useState(true);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Environmental News',
        tags: '',
        status: 'draft',
        featured: false,
        metaDescription: '',
        metaKeywords: '',
        featuredImage: null
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        fetchNews();
        fetchCategories();
    }, []);

    const fetchNews = async () => {
        try {
            const { data } = await axios.get('/api/news/admin/all');
            setNews(data);
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

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, featuredImage: file }));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submitData = new FormData();
        submitData.append('title', formData.title);
        submitData.append('excerpt', formData.excerpt);
        submitData.append('content', formData.content);
        submitData.append('category', formData.category);
        submitData.append('tags', formData.tags);
        submitData.append('status', formData.status);
        submitData.append('featured', formData.featured);
        submitData.append('metaDescription', formData.metaDescription);
        submitData.append('metaKeywords', formData.metaKeywords);

        if (formData.featuredImage) {
            submitData.append('featuredImage', formData.featuredImage);
        }

        try {
            if (editingNews) {
                await axios.put(`/api/news/${editingNews._id}`, submitData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await axios.post('/api/news', submitData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }

            resetForm();
            fetchNews();
        } catch (error) {
            console.error('Error saving news:', error);
            alert('Failed to save news article');
        }
    };

    const handleEdit = async (newsItem) => {
        setEditingNews(newsItem);
        setFormData({
            title: newsItem.title,
            excerpt: newsItem.excerpt,
            content: newsItem.content,
            category: newsItem.category,
            tags: newsItem.tags.join(', '),
            status: newsItem.status,
            featured: newsItem.featured,
            metaDescription: newsItem.metaDescription || '',
            metaKeywords: newsItem.metaKeywords?.join(', ') || '',
            featuredImage: null
        });
        setImagePreview(newsItem.featuredImage || '');
        setIsCreating(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this news article?')) {
            try {
                await axios.delete(`/api/news/${id}`);
                fetchNews();
            } catch (error) {
                console.error('Error deleting news:', error);
                alert('Failed to delete news article');
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Environmental News',
            tags: '',
            status: 'draft',
            featured: false,
            metaDescription: '',
            metaKeywords: '',
            featuredImage: null
        });
        setImagePreview('');
        setIsCreating(false);
        setEditingNews(null);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white drop-shadow-md">News Management</h2>
                {!isCreating && (
                    <button
                        onClick={() => setIsCreating(true)}
                        className="flex items-center gap-2 bg-brand-olive text-brand-neon border border-brand-neon px-6 py-3 rounded-lg font-bold hover:bg-brand-olive/80 transition shadow-lg hover:shadow-[0_0_15px_rgba(76,213,122,0.4)]"
                    >
                        <Plus className="w-5 h-5" />
                        Create New Article
                    </button>
                )}
            </div>

            {/* Create/Edit Form */}
            {isCreating && (
                <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-8 border border-white/10">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-white drop-shadow-md">
                            {editingNews ? 'Edit Article' : 'Create New Article'}
                        </h3>
                        <button onClick={resetForm} className="text-gray-400 hover:text-white transition">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                placeholder="Enter article title"
                            />
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Excerpt * (Max 300 chars)</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleInputChange}
                                required
                                maxLength={300}
                                rows={3}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                placeholder="Brief summary of the article"
                            />
                            <p className="text-xs text-gray-400 mt-1">{formData.excerpt.length}/300 characters</p>
                        </div>



                        {/* Content */}
                        <div className="mb-12">
                            <label className="block text-sm font-bold text-gray-300 mb-2">Content *</label>
                            <div className="bg-white/95 rounded-lg overflow-hidden text-black shadow-inner">
                                <ReactQuill
                                    theme="snow"
                                    value={formData.content}
                                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                                    className="h-64 mb-12"
                                    modules={{
                                        toolbar: [
                                            [{ 'header': [1, 2, 3, false] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                            ['link', 'image'],
                                            ['clean']
                                        ],
                                    }}
                                />
                            </div>
                        </div>

                        {/* Category and Status Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat} className="text-black">{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Status *</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                >
                                    <option value="draft" className="text-black">Draft</option>
                                    <option value="published" className="text-black">Published</option>
                                </select>
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Tags (comma-separated)</label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                placeholder="e.g., conservation, wildlife, environment"
                            />
                        </div>

                        {/* Featured Image */}
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Featured Image</label>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 text-white transition">
                                    <ImageIcon className="w-5 h-5" />
                                    Choose Image
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                                {imagePreview && (
                                    <img src={imagePreview} alt="Preview" className="h-20 w-32 object-cover rounded-lg border border-white/20" />
                                )}
                            </div>
                        </div>

                        {/* SEO Fields */}
                        <div className="border-t border-white/10 pt-6">
                            <h4 className="text-lg font-bold text-gray-300 mb-4">SEO Settings</h4>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Meta Description (Max 160 chars)</label>
                                    <textarea
                                        name="metaDescription"
                                        value={formData.metaDescription}
                                        onChange={handleInputChange}
                                        maxLength={160}
                                        rows={2}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                        placeholder="SEO meta description"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">{formData.metaDescription.length}/160 characters</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Meta Keywords (comma-separated)</label>
                                    <input
                                        type="text"
                                        name="metaKeywords"
                                        value={formData.metaKeywords}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-neon focus:border-transparent backdrop-blur-sm transition-all"
                                        placeholder="keyword1, keyword2, keyword3"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Checkbox */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="featured"
                                id="featured"
                                checked={formData.featured}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-brand-neon bg-black/20 border-white/30 rounded focus:ring-brand-neon"
                            />
                            <label htmlFor="featured" className="text-sm font-bold text-gray-300">
                                Mark as Featured Article
                            </label>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-brand-olive text-brand-neon border border-brand-neon px-8 py-3 rounded-lg font-bold hover:bg-brand-olive/80 transition shadow-lg hover:shadow-[0_0_15px_rgba(76,213,122,0.4)]"
                            >
                                <Save className="w-5 h-5" />
                                {editingNews ? 'Update Article' : 'Create Article'}
                            </button>
                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-8 py-3 bg-white/10 text-white border border-white/10 rounded-lg font-bold hover:bg-white/20 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* News List */}
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-brand-olive/80 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold">Title</th>
                                <th className="px-6 py-4 text-left text-sm font-bold">Category</th>
                                <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-bold">Views</th>
                                <th className="px-6 py-4 text-left text-sm font-bold">Date</th>
                                <th className="px-6 py-4 text-center text-sm font-bold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">Loading...</td>
                                </tr>
                            ) : news.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">No news articles yet</td>
                                </tr>
                            ) : (
                                news.map(item => (
                                    <tr key={item._id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {item.featuredImage && (
                                                    <img src={item.featuredImage} alt="" className="w-12 h-12 object-cover rounded" />
                                                )}
                                                <div>
                                                    <p className="font-bold text-white">{item.title}</p>
                                                    {item.featured && (
                                                        <span className="text-xs bg-yellow-400/20 text-yellow-200 border border-yellow-400/30 px-2 py-1 rounded-full mt-1 inline-block">Featured</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">{item.category}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${item.status === 'published' ? 'bg-green-900/40 text-green-300 border border-green-500/30' : 'bg-gray-800/60 text-gray-300 border border-gray-600/30'
                                                }`}>
                                                {item.status === 'published' ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                                                {item.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-300">{item.views}</td>
                                        <td className="px-6 py-4 text-sm text-gray-300">
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className="p-2 text-brand-neon hover:bg-brand-neon/10 rounded-lg transition"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminNewsManagement;
