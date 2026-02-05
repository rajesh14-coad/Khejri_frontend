import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MapPin, Upload, Loader } from 'lucide-react';
import SEO from '../components/SEO';

const ReportPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [locationName, setLocationName] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, (error) => {
                console.error(error);
                alert('Unable to retrieve your location');
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('locationName', locationName);
        formData.append('lat', lat);
        formData.append('lng', lng);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('/api/incidents', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/');
        } catch (error) {
            console.error('Error reporting incident:', error);
            alert('Failed to submit report');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <SEO
                title="Report Incident | Protect Wildlife"
                description="Report environmental threats, poaching attempts, or illegal tree cutting. Help us protect the legacy of the Bishnoi community."
            />
            <h2 className="text-3xl font-bold text-nature-green mb-6 flex items-center">
                <MapPin className="mr-2" /> Report an Incident
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Incident Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-green focus:ring focus:ring-nature-green focus:ring-opacity-50 p-2 border"
                        placeholder="e.g., Illegal cutting in Khejarli"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-green focus:ring focus:ring-nature-green focus:ring-opacity-50 p-2 border"
                        placeholder="Describe what you saw..."
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location Name</label>
                        <input
                            type="text"
                            required
                            value={locationName}
                            onChange={(e) => setLocationName(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-green focus:ring focus:ring-nature-green focus:ring-opacity-50 p-2 border"
                            placeholder="Village or Area name"
                        />
                    </div>
                    <div className="flex flex-col justify-end">
                        <button
                            type="button"
                            onClick={getLocation}
                            className="w-full bg-nature-tan text-nature-green font-bold py-2 px-4 rounded hover:bg-opacity-80 transition flex items-center justify-center border border-nature-tan"
                        >
                            <MapPin className="w-4 h-4 mr-2" /> Use My GPS Location
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Latitude</label>
                        <input
                            type="number"
                            step="any"
                            required
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-green focus:ring focus:ring-nature-green focus:ring-opacity-50 p-2 border"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Longitude</label>
                        <input
                            type="number"
                            step="any"
                            required
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nature-green focus:ring focus:ring-nature-green focus:ring-opacity-50 p-2 border"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Evidence (Image)</label>
                    <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-nature-green transition cursor-pointer relative">
                        <div className="space-y-1 text-center">
                            {preview ? (
                                <img src={preview} alt="Preview" className="h-48 object-contain mx-auto" />
                            ) : (
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            )}
                            <div className="flex text-sm text-gray-600 justify-center">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-nature-green hover:text-nature-dark focus-within:outline-none">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-nature-green hover:bg-nature-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nature-green disabled:opacity-50"
                >
                    {loading ? <Loader className="animate-spin w-5 h-5" /> : 'Submit Report'}
                </button>
            </form>
        </div>
    );
};

export default ReportPage;
