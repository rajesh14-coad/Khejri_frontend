import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MapPin, Calendar, User, AlertCircle, CheckCircle, Clock, Filter } from 'lucide-react';
import MapComponent from '../components/MapComponent';
import AuthContext from '../context/AuthContext';

const IncidentsPage = () => {
    const [incidents, setIncidents] = useState([]);
    const [filteredIncidents, setFilteredIncidents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState('all');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchIncidents();
    }, []);

    useEffect(() => {
        filterIncidents();
    }, [incidents, statusFilter]);

    const fetchIncidents = async () => {
        try {
            const { data } = await axios.get('/api/incidents');
            setIncidents(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching incidents:', error);
            setLoading(false);
        }
    };

    const filterIncidents = () => {
        if (statusFilter === 'all') {
            setFilteredIncidents(incidents);
        } else {
            setFilteredIncidents(incidents.filter(i => i.status === statusFilter));
        }
    };

    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            verified: 'bg-green-100 text-green-800 border-green-300',
            resolved: 'bg-blue-100 text-blue-800 border-blue-300',
            rejected: 'bg-red-100 text-red-800 border-red-300'
        };
        const icons = {
            pending: <Clock className="w-4 h-4" />,
            verified: <CheckCircle className="w-4 h-4" />,
            resolved: <CheckCircle className="w-4 h-4" />,
            rejected: <AlertCircle className="w-4 h-4" />
        };
        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${styles[status] || styles.pending}`}>
                {icons[status]}
                {status.toUpperCase()}
            </span>
        );
    };

    const handleStatusChange = async (incidentId, newStatus) => {
        try {
            await axios.put(`/api/incidents/${incidentId}/status`, { status: newStatus });
            fetchIncidents(); // Refresh list
        } catch (error) {
            console.error('Error updating status:', error);
            alert('Failed to update status');
        }
    };

    return (
        <div className="bg-[#f8f5f1] min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-nature-dark mb-2">Incident Reports</h1>
                    <p className="text-gray-600">Track and manage environmental incidents across the Khejri conservation zone</p>
                </div>

                {/* Map Section */}
                <div className="mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-2xl font-bold text-nature-dark mb-4 flex items-center">
                            <MapPin className="w-6 h-6 mr-2 text-nature-green" />
                            Live Incident Map
                        </h2>
                        <MapComponent incidents={incidents} />

                        {/* Map Legend */}
                        <div className="mt-4 flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                <span className="text-sm text-gray-600">Pending</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <span className="text-sm text-gray-600">Verified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                <span className="text-sm text-gray-600">Resolved</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                <span className="text-sm text-gray-600">Rejected</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 border border-gray-100">
                    <div className="flex items-center gap-4 flex-wrap">
                        <Filter className="w-5 h-5 text-gray-500" />
                        <button
                            onClick={() => setStatusFilter('all')}
                            className={`px-4 py-2 rounded-full font-medium transition ${statusFilter === 'all' ? 'bg-nature-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            All ({incidents.length})
                        </button>
                        <button
                            onClick={() => setStatusFilter('pending')}
                            className={`px-4 py-2 rounded-full font-medium transition ${statusFilter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Pending ({incidents.filter(i => i.status === 'pending').length})
                        </button>
                        <button
                            onClick={() => setStatusFilter('verified')}
                            className={`px-4 py-2 rounded-full font-medium transition ${statusFilter === 'verified' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Verified ({incidents.filter(i => i.status === 'verified').length})
                        </button>
                        <button
                            onClick={() => setStatusFilter('resolved')}
                            className={`px-4 py-2 rounded-full font-medium transition ${statusFilter === 'resolved' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Resolved ({incidents.filter(i => i.status === 'resolved').length})
                        </button>
                    </div>
                </div>

                {/* Incidents List */}
                {loading ? (
                    <div className="text-center py-20 text-gray-400">Loading incidents...</div>
                ) : filteredIncidents.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                        <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-500 mb-2">No incidents found</h3>
                        <p className="text-gray-400">No incidents match the selected filter.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredIncidents.map(incident => (
                            <div key={incident._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
                                {/* Image */}
                                {incident.image && (
                                    <img src={incident.image} alt={incident.title} className="w-full h-48 object-cover" />
                                )}

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-nature-dark">{incident.title}</h3>
                                        {getStatusBadge(incident.status)}
                                    </div>

                                    <p className="text-gray-600 mb-4">{incident.description}</p>

                                    {/* Meta Info */}
                                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{incident.locationName}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>Reported by {incident.reporter?.name || 'Anonymous'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(incident.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Admin Actions */}
                                    {user && user.role === 'admin' && incident.status === 'pending' && (
                                        <div className="flex gap-2 pt-4 border-t border-gray-100">
                                            <button
                                                onClick={() => handleStatusChange(incident._id, 'verified')}
                                                className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
                                            >
                                                Verify
                                            </button>
                                            <button
                                                onClick={() => handleStatusChange(incident._id, 'rejected')}
                                                className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}

                                    {user && user.role === 'admin' && incident.status === 'verified' && (
                                        <div className="pt-4 border-t border-gray-100">
                                            <button
                                                onClick={() => handleStatusChange(incident._id, 'resolved')}
                                                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition"
                                            >
                                                Mark as Resolved
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IncidentsPage;
