import { useState, useEffect } from 'react';
import axios from 'axios';
import { Check, X, Trash2, FileText, AlertCircle } from 'lucide-react';
import AdminNewsManagement from '../components/AdminNewsManagement';
import SEO from '../components/SEO';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('incidents');
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        if (activeTab === 'incidents') {
            fetchIncidents();
        }
    }, [activeTab]);

    const fetchIncidents = async () => {
        try {
            const { data } = await axios.get('/api/incidents');
            setIncidents(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await axios.put(`/api/incidents/${id}/status`, { status });
            fetchIncidents();
        } catch (error) {
            console.error('Error updating status', error);
            alert('Action failed');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this report?')) return;
        try {
            await axios.delete(`/api/incidents/${id}`);
            fetchIncidents();
        } catch (error) {
            console.error('Error deleting incident', error);
            alert('Delete failed');
        }
    };

    return (
        <div className="min-h-screen pb-32 relative">
            <SEO title="Admin Dashboard" noindex={true} />

            {/* FIXED BACKGROUND */}
            <div className="fixed inset-0 bg-[url('/images/desert-bg.jpg')] bg-cover bg-center bg-no-repeat z-[-1]"></div>
            <div className="fixed inset-0 bg-black/60 z-[-1]"></div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-serif font-bold text-white mb-6 drop-shadow-md">Admin Dashboard</h1>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-white/10">
                    <button
                        onClick={() => setActiveTab('incidents')}
                        className={`flex items-center gap-2 px-6 py-3 font-bold transition border-b-2 ${activeTab === 'incidents'
                            ? 'border-brand-neon text-brand-neon'
                            : 'border-transparent text-gray-400 hover:text-white'
                            }`}
                    >
                        <AlertCircle className="w-5 h-5" />
                        Incident Reports
                    </button>
                    <button
                        onClick={() => setActiveTab('news')}
                        className={`flex items-center gap-2 px-6 py-3 font-bold transition border-b-2 ${activeTab === 'news'
                            ? 'border-brand-neon text-brand-neon'
                            : 'border-transparent text-gray-400 hover:text-white'
                            }`}
                    >
                        <FileText className="w-5 h-5" />
                        News Management
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'incidents' && (
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/10">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-white/10">
                                <thead className="bg-brand-olive/80 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Reports</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Reporter</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10 text-gray-200">
                                    {incidents.map((incident) => (
                                        <tr key={incident._id} className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-bold text-white">{incident.title}</div>
                                                <div className="text-sm text-gray-400 truncate max-w-xs">{incident.description}</div>
                                                {incident.image && (
                                                    <a href={incident.image} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-neon hover:underline mt-1 block">View Image</a>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-400">
                                                {incident.locationName}
                                                <div className="text-xs font-mono mt-1 opacity-70">
                                                    {incident.coordinates.lat.toFixed(4)}, {incident.coordinates.lng.toFixed(4)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-400">
                                                {incident.reporter?.name || 'Unknown'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${incident.status === 'verified' ? 'bg-green-900/50 text-green-300 border border-green-500/30' :
                                                    incident.status === 'rejected' ? 'bg-red-900/50 text-red-300 border border-red-500/30' :
                                                        'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
                                                    }`}>
                                                    {incident.status.toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => handleStatusUpdate(incident._id, 'verified')}
                                                    className="text-green-400 hover:text-green-300 bg-green-900/30 p-2 rounded-lg transition"
                                                    title="Verify"
                                                >
                                                    <Check className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(incident._id, 'rejected')}
                                                    className="text-red-400 hover:text-red-300 bg-red-900/30 p-2 rounded-lg transition"
                                                    title="Reject"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(incident._id)}
                                                    className="text-gray-400 hover:text-white bg-white/10 p-2 rounded-lg transition"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'news' && <AdminNewsManagement />}
            </div>
        </div>
    );
};

export default AdminPage;
