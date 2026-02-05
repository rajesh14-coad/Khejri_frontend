import React from 'react';
import { Link } from 'react-router-dom';
import { martyrsData } from '../data/martyrs';
import { ArrowLeft, MapPin, ArrowRight } from 'lucide-react';

const VillageDirectoryPage = () => {
    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            <div className="bg-nature-tan text-nature-dark py-16 px-4 text-center">
                <Link to="/history/khejarli" className="inline-flex items-center text-nature-dark/50 hover:text-nature-dark mb-6 transition">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Event
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">The Alliance of 83 Villages</h1>
                <p className="text-xl max-w-2xl mx-auto opacity-80 font-bold">
                    The communities that answered the call of the 'Dhol'.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 -mt-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8">
                    {/* Grid of Villages */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {martyrsData.villages && martyrsData.villages.map((village) => (
                            <Link to={`/history/village/${village.id}`} key={village.id} className="block group">
                                <div className="p-6 rounded-xl border border-gray-200 hover:border-nature-green hover:shadow-lg transition bg-white h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="bg-nature-light p-3 rounded-lg text-nature-green">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                                {village.distance}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-nature-green transition">{village.name}</h3>
                                        <p className="text-sm text-gray-500 line-clamp-2">{village.history}</p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                                        <span className="font-bold text-nature-dark">{village.martyrCount} Martyrs</span>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-nature-green transition" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VillageDirectoryPage;
