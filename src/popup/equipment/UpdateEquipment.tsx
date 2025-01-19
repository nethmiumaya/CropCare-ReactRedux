import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateEquipment, selectEquipment } from '../../slices/EquipmentSlice';
import SaveButton from '../../component/SaveButton';
import { useNavigate } from 'react-router-dom';

interface UpdateEquipmentProps {
    onClose: () => void;
}

const UpdateEquipment: React.FC<UpdateEquipmentProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedEquipment = useSelector((state: RootState) => state.equipment.selectedEquipment);
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const [equipment, setEquipment] = useState(selectedEquipment);

    useEffect(() => {
        if (selectedEquipment) {
            setEquipment(selectedEquipment);
        }
    }, [selectedEquipment]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (equipment) {
            dispatch(updateEquipment(equipment));
            navigate('/home/equipment'); // Navigate to the equipment page
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Update Equipment</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="equipment-name"
                            name="equipment-name"
                            placeholder="Equipment Name"
                            value={equipment?.name || ''}
                            onChange={(e) => setEquipment({ ...equipment, name: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="equipment-type"
                            name="equipment-type"
                            placeholder="Equipment Type"
                            value={equipment?.type || ''}
                            onChange={(e) => setEquipment({ ...equipment, type: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="equipment-status"
                            name="equipment-status"
                            placeholder="Equipment Status"
                            value={equipment?.status || ''}
                            onChange={(e) => setEquipment({ ...equipment, status: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <select
                            id="staffId"
                            name="staff"
                            value={equipment?.staff || ''}
                            onChange={(e) => setEquipment({ ...equipment, staff: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        >
                            <option value="">Select Staff</option>
                            {staffList.map(staff => (
                                <option key={staff.id} value={staff.id}>
                                    {staff.firstName} {staff.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <SaveButton label="Update" onClick={handleSubmit} />
                        <button type="button" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2" onClick={onClose}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;