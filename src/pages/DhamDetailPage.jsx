import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dhamsData } from '../data/dhams';
import { MapPin, ArrowLeft, Star, Heart } from 'lucide-react';

const DhamDetailPage = () => {
    const { id } = useParams();
    const dham = dhamsData[id];

    if (!dham) {
        return <div className="text-center py-20 text-2xl">Dham not found</div>;
    }

    return (
        <div className="bg-nature-light min-h-screen pb-20">
            {/* Hero Image */}
            <div className="h-[50vh] relative">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src={dham.image}
                    alt={dham.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <Link to="/guru" className="text-white/80 hover:text-white flex items-center mb-4 transition">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Guru Page
                        </Link>
                        <h1 className="text-5xl font-bold text-white mb-2">{dham.name}</h1>
                        <div className="flex items-center text-nature-tan text-xl">
                            <MapPin className="w-5 h-5 mr-2" />
                            {dham.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-30">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
                    {/* Significance Badge */}
                    <div className="flex justify-center">
                        <span className="bg-nature-green text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-md">
                            {dham.significance}
                        </span>
                    </div>

                    {/* History Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-nature-dark border-l-4 border-nature-tan pl-4">Historical Significance</h2>
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {dham.history}
                        </p>
                    </div>

                    {/* Miracle Section */}
                    <div className="bg-nature-tan/10 p-6 rounded-xl border border-nature-tan/30">
                        <div className="flex items-start space-x-4">
                            <Star className="w-8 h-8 text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Divine Connection</h3>
                                <p className="text-gray-700 italic">"{dham.miracle}"</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-gray-500 text-sm">One of the Ashta Dhams</span>
                        <button className="flex items-center text-nature-green font-bold hover:text-nature-dark transition">
                            <Heart className="w-5 h-5 mr-2" /> Mark as Visited
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DhamDetailPage;
