import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCrop } from '../../slices/CropSlice';
import { useNavigate } from 'react-router-dom';

interface AddCropPageProps {
    onClose: () => void;
}

const AddCropPage: React.FC<AddCropPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [crop, setCrop] = useState({
        commonName: '',
        scientificName: '',
        category: '',
        season: '',
        image: '',
        fieldId: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCrop({ ...crop, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCrop({ ...crop, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addCrop(crop));
        navigate('/home/crop');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add Crop</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="commonName"
                            placeholder="Common Name"
                            value={crop.commonName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="scientificName"
                            placeholder="Scientific Name"
                            value={crop.scientificName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={crop.category}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="season"
                            placeholder="Season"
                            value={crop.season}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brown-50 file:text-brown-700 hover:file:bg-brown-100"
                        />
                        {crop.image && (
                            <img
                                src={crop.image}
                                alt="Crop preview"
                                className="mt-2 w-20 h-20 object-cover rounded-lg"
                            />
                        )}
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="fieldId"
                            placeholder="fieldId"
                            value={crop.fieldId}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <button type="submit" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Save</button>
                        <button type="button" onClick={onClose}
                                className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCropPage;