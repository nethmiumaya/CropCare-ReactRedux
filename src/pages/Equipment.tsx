import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { deleteEquipment, selectEquipment } from '../slices/EquipmentSlice';
import AddButton from '../component/AddButton';
import AddEquipment from '../popup/equipment/AddEquipment';
import UpdateEquipment from '../popup/equipment/UpdateEquipment';
import ViewEquipment from '../popup/equipment/ViewEquipment';

const Equipment: React.FC = () => {
    const equipmentList = useSelector((state: RootState) => state.equipment.equipmentList);
    const dispatch = useDispatch();
    const [showAddEquipment, setShowAddEquipment] = useState(false);
    const [showUpdateEquipment, setShowUpdateEquipment] = useState(false);
    const [showViewEquipment, setShowViewEquipment] = useState(false);

    const handleAddEquipment = () => {
        setShowAddEquipment(true);
    };

    const handleCloseAddEquipment = () => {
        setShowAddEquipment(false);
    };

    const handleDeleteEquipment = (id: string) => {
        dispatch(deleteEquipment(id));
    };

    const handleViewEquipment = (id: string) => {
        dispatch(selectEquipment(id));
        setShowViewEquipment(true);
    };

    const handleCloseViewEquipment = () => {
        setShowViewEquipment(false);
    };

    const handleUpdateEquipment = (id: string) => {
        dispatch(selectEquipment(id));
        setShowUpdateEquipment(true);
    };

    const handleCloseUpdateEquipment = () => {
        setShowUpdateEquipment(false);
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <select className="w-70 h-11 p-2.5 border border-gray-300 rounded text-lg">
                        <option value="">Type</option>
                        <option value="Type1">Type1</option>
                        <option value="Type2">Type2</option>
                    </select>
                    <button className="w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <AddButton label="Add Equipment" onClick={handleAddEquipment} />
            </div>
            <table className="w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Type</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Status</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {equipmentList.map(equipment => (
                    <tr key={equipment.id} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{equipment.name}</td>
                        <td className="p-3.5 border-b border-gray-300">{equipment.type}</td>
                        <td className="p-3.5 border-b border-gray-300">{equipment.status}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewEquipment(equipment.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-eye"></i>
                            </button>
                            <button onClick={() => handleUpdateEquipment(equipment.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-pencil"></i>
                            </button>
                            <button onClick={() => handleDeleteEquipment(equipment.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddEquipment && <AddEquipment onClose={handleCloseAddEquipment} />}
            {showUpdateEquipment && <UpdateEquipment onClose={handleCloseUpdateEquipment} />}
            {showViewEquipment && <ViewEquipment onClose={handleCloseViewEquipment} />}
        </div>
    );
};

export default Equipment;