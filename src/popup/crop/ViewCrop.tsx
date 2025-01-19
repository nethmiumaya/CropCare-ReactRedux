import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearSelectedCrop } from '../../slices/CropSlice';

interface ViewCropPageProps {
    onClose: () => void;
}

const ViewCropPage: React.FC<ViewCropPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const selectedCrop = useSelector((state: RootState) => state.crop.selectedCrop);

    useEffect(() => {
        return () => {
            dispatch(clearSelectedCrop());
        };
    }, [dispatch]);

    if (!selectedCrop) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4 bg-[#fff6ee] p-4 rounded-t-lg">
                    <h1 className="text-xl font-bold text-[#8b4513]">View Crop</h1>
                    <img src="/assets/images/real_logo.svg" alt="Crop Care Logo" className="w-10 h-10" />
                </header>
                <div className="bg-[#fff6ee] p-4 rounded-b-lg">
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex-1">
                            <label className="text-gray-600">Common Name:</label>
                            <span className="block text-black border-b border-gray-300 pb-1">{selectedCrop.commonName}</span>
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600">Scientific Name:</label>
                            <span className="block text-black border-b border-gray-300 pb-1">{selectedCrop.scientificName}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex-1">
                            <label className="text-gray-600">Category:</label>
                            <span className="block text-black border-b border-gray-300 pb-1">{selectedCrop.category}</span>
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600">Season:</label>
                            <span className="block text-black border-b border-gray-300 pb-1">{selectedCrop.season}</span>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={onClose} className="w-1/2 py-2 bg-[#8b4513] text-white rounded-full shadow-lg hover:bg-[#6b3410] transition-colors">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCropPage;