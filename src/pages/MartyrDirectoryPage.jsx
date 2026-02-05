import React from 'react';
import { Link } from 'react-router-dom';
import { martyrsData } from '../data/martyrs';
import { ArrowLeft, Flag, Users, ArrowRight } from 'lucide-react';

const MartyrDirectoryPage = () => {
    return (
        <div className="bg-nature-light/50 min-h-screen pb-16">
            <div className="bg-nature-dark text-white py-16 px-4 text-center">
                <Link to="/history/khejarli" className="inline-flex items-center text-white/50 hover:text-white mb-6 transition">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Event
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Roll of Honor</h1>
                <p className="text-xl max-w-2xl mx-auto opacity-80">
                    The 363 brave souls who laid down their lives on September 11, 1730.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        {martyrsData.stats.men} Men
                    </span>
                    <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                        {martyrsData.stats.women} Women
                    </span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 space-y-8">
                    {/* Featured Martyrs (Data available) */}
                    <div>
                        <h2 className="text-2xl font-bold text-nature-dark mb-6 border-b border-gray-100 pb-2">Documented Leaders</h2>
                        <div className="space-y-4">
                            {martyrsData.individuals.map((person) => (
                                <Link to={`/history/martyr/${person.id}`} key={person.id} className="block group">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-nature-tan/10 transition border border-transparent hover:border-nature-tan/30">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-nature-dark text-nature-tan flex items-center justify-center rounded-full font-bold">
                                                {person.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900">{person.name}</h3>
                                                <p className="text-sm text-gray-500">{person.village} • {person.gotra}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-nature-dark group-hover:translate-x-1 transition" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Placeholder for remaining 350+ */}
                    <div className="bg-nature-light p-8 rounded-2xl text-center space-y-4 border border-nature-green/20">
                        <Flag className="w-12 h-12 text-nature-green mx-auto" />
                        <h3 className="text-xl font-bold text-nature-dark">The Unnamed 350+</h3>
                        <p className="text-gray-600">
                            While historical texts highlight key leaders, the sacrifice was a mass movement.
                            Names are preserved in oral traditions of the 83 villages.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MartyrDirectoryPage;
