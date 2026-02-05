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
        <div className="min-h-screen bg-[#f8f5f1] py-8">
            <SEO title="Admin Dashboard" noindex={true} />
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-nature-dark mb-6">Admin Dashboard</h1>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('incidents')}
                        className={`flex items-center gap-2 px-6 py-3 font-bold transition border-b-2 ${activeTab === 'incidents'
                            ? 'border-nature-green text-nature-green'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <AlertCircle className="w-5 h-5" />
                        Incident Reports
                    </button>
                    <button
                        onClick={() => setActiveTab('news')}
                        className={`flex items-center gap-2 px-6 py-3 font-bold transition border-b-2 ${activeTab === 'news'
                            ? 'border-nature-green text-nature-green'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <FileText className="w-5 h-5" />
                        News Management
                    </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'incidents' && (
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-nature-green text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Reports</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Reporter</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {incidents.map((incident) => (
                                        <tr key={incident._id}>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900">{incident.title}</div>
                                                <div className="text-sm text-gray-500 truncate max-w-xs">{incident.description}</div>
                                                {incident.image && (
                                                    <a href={incident.image} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">View Image</a>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {incident.locationName}
                                                <div className="text-xs">
                                                    {incident.coordinates.lat.toFixed(4)}, {incident.coordinates.lng.toFixed(4)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {incident.reporter?.name || 'Unknown'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${incident.status === 'verified' ? 'bg-green-100 text-green-800' :
                                                    incident.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                        'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {incident.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => handleStatusUpdate(incident._id, 'verified')}
                                                    className="text-green-600 hover:text-green-900"
                                                    title="Verify"
                                                >
                                                    <Check className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(incident._id, 'rejected')}
                                                    className="text-red-600 hover:text-red-900"
                                                    title="Reject"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(incident._id)}
                                                    className="text-gray-600 hover:text-gray-900"
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
