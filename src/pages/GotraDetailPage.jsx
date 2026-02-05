import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { martyrsData } from '../data/martyrs';
import { ArrowLeft, Users, Shield, Target, MapPin, Scroll, BookOpen } from 'lucide-react';

const GotraDetailPage = () => {
    const { id } = useParams();
    const gotra = martyrsData.gotras.find(g => g.id === id);

    if (!gotra) {
        return <div className="text-center py-20 bg-nature-light min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Clan Not Found</h1>
            <Link to="/history/khejarli" className="text-nature-green underline">Return to Massacre Page</Link>
        </div>;
    }

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            <div className="bg-nature-green text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link to="/history/khejarli" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to History
                    </Link>
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-6">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">{gotra.name} Clan</h1>
                    <p className="text-xl opacity-90 text-nature-tan font-bold tracking-wide">The Defenders of {gotra.villages[0]}</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 text-center border-b border-gray-100 bg-gray-50/50">
                        <div className="p-8 border-r border-gray-100">
                            <div className="text-4xl font-bold text-nature-dark mb-1">{gotra.count}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Total Martyrs</div>
                        </div>
                        <div className="p-8">
                            <div className="text-4xl font-bold text-nature-dark mb-1">{gotra.villages.length}+</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">Villages Mobilized</div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 space-y-12">
                        {/* Historical Context */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-nature-dark">Historical Context</h2>
                            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-nature-tan pl-6">
                                {gotra.desc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-nature-light p-6 rounded-2xl">
                                <div className="flex items-center mb-4">
                                    <Target className="w-6 h-6 text-red-500 mr-3" />
                                    <h3 className="text-xl font-bold text-nature-dark">Motivation</h3>
                                </div>
                                <p className="text-gray-700">
                                    {gotra.motivation}
                                </p>
                            </div>
                            <div className="bg-nature-light p-6 rounded-2xl">
                                <div className="flex items-center mb-4">
                                    <Shield className="w-6 h-6 text-blue-500 mr-3" />
                                    <h3 className="text-xl font-bold text-nature-dark">Strategic Role</h3>
                                </div>
                                <p className="text-gray-700">
                                    {gotra.role}
                                </p>
                            </div>
                        </div>

                        {/* Villages Badge List */}
                        <div>
                            <div className="flex items-center mb-4 text-gray-500 font-bold uppercase tracking-widest text-sm">
                                <MapPin className="w-4 h-4 mr-2" /> Key Villages
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {gotra.villages.map((v, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-nature-green hover:text-white transition cursor-default">
                                        {v}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DEEP ANALYSIS Section */}
                        {gotra.deepAnalysis && (
                            <div className="mt-16 pt-12 border-t-2 border-dashed border-nature-tan/30 relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-nature-tan">
                                    <Scroll className="w-8 h-8" />
                                </div>

                                <div className="bg-[#fcfbf7] rounded-3xl p-8 md:p-12 border border-nature-tan/20 shadow-inner relative overflow-hidden text-left">
                                    {/* Decorative corner accents */}
                                    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-nature-tan/20 rounded-tl-3xl"></div>
                                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-nature-tan/20 rounded-br-3xl"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-center mb-8 border-b border-nature-tan/10 pb-4">
                                            <BookOpen className="w-6 h-6 text-nature-green mr-3" />
                                            <h2 className="text-3xl font-bold text-nature-dark font-serif tracking-wide">Historical Analysis</h2>
                                        </div>

                                        <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-nature-dark prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-nature-green">
                                            <ReactMarkdown>{gotra.deepAnalysis}</ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GotraDetailPage;
