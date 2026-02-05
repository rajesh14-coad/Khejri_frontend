import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { martyrsData } from '../data/martyrs';
import { ArrowLeft, User, Heart, Leaf, Quote, Activity, Award, BookOpen, Scroll } from 'lucide-react';

const MartyrDetailPage = () => {
    const { id } = useParams();
    const martyr = martyrsData.individuals.find(m => m.id === id);

    if (!martyr) {
        return <div className="text-center py-20 bg-nature-light min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Martyr Not Found</h1>
            <Link to="/history/khejarli" className="text-nature-green underline">Return to Massacre Page</Link>
        </div>;
    }

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            <div className="bg-nature-dark text-white py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <Link to="/history/khejarli" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Roll of Honor
                    </Link>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="w-32 h-32 bg-nature-tan rounded-full flex items-center justify-center text-nature-dark shadow-2xl border-4 border-nature-green/50">
                            <User className="w-16 h-16" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-5xl font-bold font-serif mb-2">{martyr.name}</h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm opacity-90 uppercase tracking-widest text-nature-tan font-bold">
                                <span>{martyr.role}</span>
                                <span>•</span>
                                <span>{martyr.village}</span>
                                <span>•</span>
                                <span>{martyr.gotra}</span>
                            </div>
                            <div className="mt-6 inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20">
                                <p className="italic font-serif text-lg">"{martyr.quote}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-12">

                    {/* WHY Section */}
                    <div className="grid md:grid-cols-[100px_1fr] gap-6">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center text-nature-green">
                                <Heart className="w-6 h-6" />
                            </div>
                            <div className="h-full w-0.5 bg-gray-100 my-2"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-nature-dark mb-3">Why they sacrificed</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {martyr.why}
                            </p>
                        </div>
                    </div>

                    {/* HOW Section */}
                    <div className="grid md:grid-cols-[100px_1fr] gap-6">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center text-red-500">
                                <Activity className="w-6 h-6" />
                            </div>
                            <div className="h-full w-0.5 bg-gray-100 my-2"></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-nature-dark mb-3">The Act of Valor</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {martyr.how}
                            </p>
                        </div>
                    </div>

                    {/* LEGACY Section */}
                    <div className="grid md:grid-cols-[100px_1fr] gap-6">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center text-yellow-500">
                                <Award className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="bg-nature-tan/10 p-6 rounded-xl border border-nature-tan/30">
                            <h2 className="text-2xl font-bold text-nature-dark mb-3">Eternal Legacy</h2>
                            <p className="text-lg text-gray-800 leading-relaxed">
                                {martyr.legacy}
                            </p>
                        </div>
                    </div>

                    {/* DEEP ANALYSIS Section */}
                    {martyr.deepAnalysis && (
                        <div className="mt-16 pt-12 border-t-2 border-dashed border-nature-tan/30 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-nature-tan">
                                <Scroll className="w-8 h-8" />
                            </div>

                            <div className="bg-[#fcfbf7] rounded-3xl p-8 md:p-12 border border-nature-tan/20 shadow-inner relative overflow-hidden">
                                {/* Decorative corner accents */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-nature-tan/20 rounded-tl-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-nature-tan/20 rounded-br-3xl"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-8">
                                        <BookOpen className="w-6 h-6 text-nature-green mr-3" />
                                        <h2 className="text-3xl font-bold text-nature-dark font-serif tracking-wide">Historical Analysis</h2>
                                    </div>

                                    <div className="prose prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:text-nature-dark prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-nature-green">
                                        <ReactMarkdown>{martyr.deepAnalysis}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MartyrDetailPage;
