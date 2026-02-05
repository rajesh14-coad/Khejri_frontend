import { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, MessageSquare, Heart, Share2, MapPin, Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Post Card Component (Internal for now)
const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false); // Local optimistic UI state
    const [likesCount, setLikesCount] = useState(post.likes.length);

    const handleLike = async () => {
        // Optimistic update
        setLiked(!liked);
        setLikesCount(prev => liked ? prev - 1 : prev + 1);
        try {
            await axios.put(`/api/posts/${post._id}/like`);
        } catch (error) {
            console.error(error);
            // Revert on error
            setLiked(!liked);
            setLikesCount(prev => liked ? prev + 1 : prev - 1);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            {/* Header */}
            <div className="flex items-center mb-4">
                <img
                    src={post.user?.profilePicture || 'https://via.placeholder.com/40'}
                    alt={post.user?.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200"
                />
                <div>
                    <h4 className="font-bold text-gray-900">{post.user?.name || 'Anonymous User'}</h4>
                    <span className="text-xs text-gray-500">
                        {post.location && <span className="inline-flex items-center mr-2"><MapPin className="w-3 h-3 mr-1" /> {post.location}</span>}
                        {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>

            {/* Content */}
            <p className="text-gray-800 mb-4 whitespace-pre-wrap leading-relaxed">{post.content}</p>

            {/* Media Grid */}
            {post.images && post.images.length > 0 && (
                <div className={`grid gap-2 mb-4 ${post.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {post.images.map((img, idx) => (
                        <img key={idx} src={img} alt="Post content" className="rounded-xl w-full h-64 object-cover" />
                    ))}
                </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-blue-600 text-sm font-medium hover:underline">#{tag}</span>
                    ))}
                </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between text-gray-500 pt-4 border-t border-gray-100">
                <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 transition ${liked ? 'text-red-500' : 'hover:text-red-500'}`}
                >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                    <span>{likesCount}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500 transition">
                    <MessageSquare className="w-5 h-5" />
                    <span>{post.comments?.length || 0}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500 transition">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const CommunityPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // New Post State
    const [newPostContent, setNewPostContent] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { data } = await axios.get('/api/posts');
            setPosts(data.posts);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();
        if (!newPostContent.trim()) return;

        setIsPosting(true);
        try {
            await axios.post('/api/posts', { content: newPostContent }); // Basic text post for now
            setNewPostContent("");
            fetchPosts(); // Refresh feed
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Failed to post. Please try again.");
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="bg-[#f8f5f1] min-h-screen py-8">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

                {/* LEFT SIDEBAR (Profile/Nav) */}
                <div className="hidden md:block">
                    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24 border border-gray-100">
                        <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-nature-tan rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-nature-dark">U</div>
                            <h3 className="font-bold text-lg">Welcome User</h3>
                            <p className="text-sm text-gray-500">Member since 2024</p>
                        </div>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer font-medium text-nature-green bg-nature-light/30">
                                <span className="w-2 h-2 rounded-full bg-nature-green mr-3"></span> The Chaupal (Feed)
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span> My Profile
                            </li>
                            <li className="flex items-center p-2 rounded hover:bg-gray-50 cursor-pointer">
                                <span className="w-2 h-2 rounded-full bg-gray-300 mr-3"></span> Saved Sabads
                            </li>
                        </ul>
                    </div>
                </div>

                {/* MAIN FEED */}
                <div className="md:col-span-2">
                    {/* Create Post Widget */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-nature-tan rounded-full flex-shrink-0"></div>
                            <div className="flex-grow">
                                <textarea
                                    value={newPostContent}
                                    onChange={(e) => setNewPostContent(e.target.value)}
                                    placeholder="Share your thoughts, a photo, or a Sabad reflection..."
                                    className="w-full bg-gray-50 rounded-xl p-3 outline-none focus:ring-2 focus:ring-nature-green/20 resize-none min-h-[100px]"
                                ></textarea>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex space-x-2 text-gray-400">
                                        <button className="p-2 hover:bg-gray-100 rounded-full transition"><Image className="w-5 h-5" /></button>
                                        <button className="p-2 hover:bg-gray-100 rounded-full transition"><MapPin className="w-5 h-5" /></button>
                                    </div>
                                    <button
                                        onClick={handleCreatePost}
                                        disabled={isPosting || !newPostContent.trim()}
                                        className="bg-nature-green text-white px-6 py-2 rounded-full font-bold hover:bg-nature-dark transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                    >
                                        {isPosting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feed Content */}
                    {loading ? (
                        <div className="text-center py-20 text-gray-400">Loading the Chaupal...</div>
                    ) : posts.length > 0 ? (
                        posts.map(post => <PostCard key={post._id} post={post} />)
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                            <h3 className="text-lg font-bold text-gray-500 mb-2">Whatever you say, say it with love.</h3>
                            <p className="text-gray-400">Be the first to post in the digital chaupal!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;
