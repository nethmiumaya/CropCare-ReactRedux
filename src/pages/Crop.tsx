import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { deleteCrop, selectCrop } from '../slices/CropSlice';
import AddButton from '../component/AddButton';
import AddCropPage from '../popup/crop/AddCrop';

const CropPage: React.FC = () => {
    const crops = useSelector((state: RootState) => state.crop.crops);
    const dispatch = useDispatch();
    const [showAddCrop, setShowAddCrop] = useState(false);
    const [showUpdateCrop, setShowUpdateCrop] = useState(false);
    const [showViewCrop, setShowViewCrop] = useState(false);

    const handleAddCrop = () => {
        setShowAddCrop(true);
    };

    const handleCloseAddCrop = () => {
        setShowAddCrop(false);
    };

    const handleUpdateCrop = (id: string) => {
        dispatch(selectCrop(id));
        setShowUpdateCrop(true);
    };

    const handleViewCrop = (id: string) => {
        dispatch(selectCrop(id));
        setShowViewCrop(true);
    };

    const handleCloseViewCrop = () => {
        setShowViewCrop(false);
    };

    const handleCloseUpdateCrop = () => {
        setShowUpdateCrop(false);
    };

    const handleDeleteCrop = (id: string) => {
        dispatch(deleteCrop(id));
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="header flex justify-between items-center mb-5">
                <div className="search-section flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="search-input w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <select className="dropdown w-70 h-11 p-2.5 border border-gray-300 rounded text-lg">
                        <option value="">Season</option>
                        <option value="off_season">Off Season</option>
                        <option value="season">Season</option>
                        <option value="Other">Other</option>
                    </select>
                    <button className="search-button w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <AddButton label="Add Crop" onClick={handleAddCrop} />
            </div>
            <table className="crop-table w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Common Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Scientific Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Category</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Season</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Crop Image</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {crops.map(crop => (
                    <tr key={crop.id} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{crop.commonName}</td>
                        <td className="p-3.5 border-b border-gray-300">{crop.scientificName}</td>
                        <td className="p-3.5 border-b border-gray-300">{crop.category}</td>
                        <td className="p-3.5 border-b border-gray-300">{crop.season}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <img src={crop.image} alt="Crop" className="w-20 h-20 object-cover rounded-lg" />
                        </td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewCrop(crop.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-eye"></i>
                            </button>
                            <button onClick={() => handleUpdateCrop(crop.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-pencil"></i>
                            </button>
                            <button onClick={() => handleDeleteCrop(crop.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddCrop && <AddCropPage onClose={handleCloseAddCrop} />}
        </div>
    );
};

export default CropPage;