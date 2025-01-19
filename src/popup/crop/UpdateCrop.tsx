import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateCrop,  clearSelectedCrop } from '../../slices/CropSlice';
import { useNavigate } from 'react-router-dom';

interface UpdateCropPageProps {
    onClose: () => void;
}

const UpdateCropPage: React.FC<UpdateCropPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCrop = useSelector((state: RootState) => state.crop.selectedCrop);
    const [crop, setCrop] = useState(selectedCrop);

    useEffect(() => {
        if (selectedCrop) {
            setCrop(selectedCrop);
        }
    }, [selectedCrop]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCrop({ ...crop, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedImages = [...crop.images];
                updatedImages[index] = reader.result as string;
                setCrop({ ...crop, images: updatedImages });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (crop) {
            dispatch(updateCrop(crop));
            navigate('/home/crop');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Update Crop</h1>
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
                            onChange={(e) => handleImageChange(e, 0)}
                            accept="image/*"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brown-50 file:text-brown-700 hover:file:bg-brown-100"
                        />
                        {crop.images[0] && (
                            <img
                                src={crop.images[0]}
                                alt="Crop preview"
                                className="mt-2 w-20 h-20 object-cover rounded-lg"
                            />
                        )}
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="file"
                            onChange={(e) => handleImageChange(e, 1)}
                            accept="image/*"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brown-50 file:text-brown-700 hover:file:bg-brown-100"
                        />
                        {crop.images[1] && (
                            <img
                                src={crop.images[1]}
                                alt="Crop preview"
                                className="mt-2 w-20 h-20 object-cover rounded-lg"
                            />
                        )}
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <button type="submit" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Update</button>
                        <button type="button" onClick={onClose} className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCropPage;