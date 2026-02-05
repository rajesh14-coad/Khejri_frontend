import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { martyrsData } from '../data/martyrs';
import { ArrowLeft, MapPin, Users, Info, Shield } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const VillageDetailPage = () => {
    const { id } = useParams();
    const village = martyrsData.villages.find(v => v.id === id);

    if (!village) {
        return <div className="text-center py-20 bg-nature-light min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Village Not Found</h1>
            <Link to="/history/khejarli" className="text-nature-green underline">Return to Massacre Page</Link>
        </div>;
    }

    // Filter martyrs from this village
    const villageMartyrs = martyrsData.individuals.filter(m => m.village === village.name);

    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            <div className="bg-nature-tan text-nature-dark py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link to="/history/khejarli" className="inline-flex items-center text-nature-dark/70 hover:text-nature-dark mb-6 transition">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to History
                    </Link>
                    <div className="w-20 h-20 mx-auto bg-white/40 rounded-full flex items-center justify-center backdrop-blur-md mb-6 border border-nature-dark/10">
                        <MapPin className="w-10 h-10 text-nature-dark" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">{village.name}</h1>
                    <p className="text-xl opacity-90 font-bold tracking-wide">A Bastion of Bishnoi Faith</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 space-y-12">
                    {/* Statistics */}
                    <div className="flex justify-center border-b border-gray-100 pb-8">
                        <div className="text-center px-8">
                            <div className="text-5xl font-bold text-nature-green mb-2">{village.martyrCount}</div>
                            <div className="text-sm uppercase tracking-widest text-gray-500">Martyrs Provided</div>
                        </div>
                        <div className="text-center px-8 border-l border-gray-100">
                            <div className="text-5xl font-bold text-nature-dark mb-2">{village.distance}</div>
                            <div className="text-sm uppercase tracking-widest text-gray-500">Distance from Khejarli</div>
                        </div>
                    </div>

                    {/* Village History */}
                    <div className="prose prose-lg max-w-none">
                        <h2 className="flex items-center text-2xl font-bold text-nature-dark">
                            <Info className="w-6 h-6 mr-3 text-nature-tan" /> History & Contribution
                        </h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {village.history}
                        </p>
                    </div>

                    {/* List of Martyrs from this Village */}
                    <div>
                        <h2 className="flex items-center text-2xl font-bold text-nature-dark mb-6">
                            <Shield className="w-6 h-6 mr-3 text-nature-red-500" /> Heroes of {village.name}
                        </h2>
                        {villageMartyrs.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-4">
                                {villageMartyrs.map(martyr => (
                                    <Link to={`/history/martyr/${martyr.id}`} key={martyr.id} className="block group">
                                        <div className="bg-nature-light p-4 rounded-xl border border-transparent group-hover:border-nature-green transition flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-nature-dark">{martyr.name}</h4>
                                                <p className="text-xs text-gray-500 uppercase">{martyr.gotra} Clan</p>
                                            </div>
                                            <ArrowLeft className="w-4 h-4 text-nature-green rotate-180 opacity-0 group-hover:opacity-100 transition" />
                                        </div>
                                    </Link>
                                ))}
                                <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-gray-500 italic">
                                    And {village.martyrCount - villageMartyrs.length} other unnamed heroes...
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">Records of individual names from this village are preserved in local oral traditions.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VillageDetailPage;
