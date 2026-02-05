import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ incidents }) => {
    // Center on Rajasthan approx
    const center = [26.5, 73.8];

    return (
        <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg border-2 border-nature-green z-0">
            <MapContainer center={center} zoom={7} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {/* Affected Area / Conservation Zone Polygon */}
                <Polygon
                    positions={[
                        [28.0229, 73.3119], // Bikaner
                        [27.1983, 73.7493], // Nagaur
                        [26.4499, 74.6399], // Ajmer Border
                        [26.2389, 73.0243], // Jodhpur
                        [25.7532, 71.4181], // Barmer
                        [26.9157, 70.9083], // Jaisalmer border
                        [28.0, 72.0]        // North West
                    ]}
                    pathOptions={{ color: '#d97706', fillColor: '#d97706', fillOpacity: 0.2, weight: 2 }}
                >
                    <Tooltip sticky direction="center" className="font-bold text-amber-700">
                        Khejri Critical Conservation Zone
                    </Tooltip>
                </Polygon>

                {incidents.map((incident) => {
                    // Create custom colored marker based on status
                    const getMarkerIcon = (status) => {
                        const colors = {
                            pending: '#eab308',    // yellow
                            verified: '#22c55e',   // green
                            resolved: '#3b82f6',   // blue
                            rejected: '#ef4444'    // red
                        };

                        const color = colors[status] || colors.pending;

                        const svgIcon = `
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="30" height="45">
                                <path fill="${color}" stroke="#000" stroke-width="1" d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 18 9 18s9-11.25 9-18c0-4.97-4.03-9-9-9z"/>
                                <circle cx="12" cy="9" r="4" fill="#fff"/>
                            </svg>
                        `;

                        return L.divIcon({
                            html: svgIcon,
                            className: 'custom-marker',
                            iconSize: [30, 45],
                            iconAnchor: [15, 45],
                            popupAnchor: [0, -45]
                        });
                    };

                    return (
                        <Marker
                            key={incident._id}
                            position={[incident.coordinates.lat, incident.coordinates.lng]}
                            icon={getMarkerIcon(incident.status)}
                        >
                            <Popup>
                                <div className="text-center min-w-[200px]">
                                    <h3 className="font-bold text-lg mb-2">{incident.title}</h3>
                                    {incident.image && (
                                        <img src={incident.image} alt="Incident" className="w-full h-32 object-cover mx-auto my-2 rounded" />
                                    )}
                                    <p className="text-sm text-gray-600 mb-2">{incident.description}</p>
                                    <p className="text-sm font-medium mb-2">📍 {incident.locationName}</p>
                                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mt-1 ${incident.status === 'verified' ? 'bg-green-100 text-green-800' :
                                            incident.status === 'resolved' ? 'bg-blue-100 text-blue-800' :
                                                incident.status === 'rejected' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                                    </span>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Reported by {incident.reporter?.name || 'Anonymous'}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
