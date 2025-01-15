import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addEquipment } from '../slices/EquipmentSlice';

const AddEquipment: React.FC = () => {
    const dispatch = useDispatch();
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const fieldList = useSelector((state: RootState) => state.field.fieldList); // Assuming you have a field slice

    const [equipment, setEquipment] = useState({
        name: '',
        type: '',
        status: '',
        staffId: '',
        fieldId: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEquipment({ ...equipment, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addEquipment(equipment));
        // Close the popup or reset the form as needed
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50 add-equipment-popup">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg form-container">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add Equipment</h1>
                    <div className="flex items-center">
                        <img src="/assets/images/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5 form-group">
                        <input
                            type="text"
                            id="equipment-name"
                            name="name"
                            placeholder="Equipment Name"
                            value={equipment.name}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5 form-group">
                        <input
                            type="text"
                            id="equipment-type"
                            name="type"
                            placeholder="Equipment Type"
                            value={equipment.type}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5 form-group">
                        <input
                            type="text"
                            id="equipment-status"
                            name="status"
                            placeholder="Equipment Status"
                            value={equipment.status}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5 form-group">
                        <select
                            id="staffId"
                            name="staffId"
                            value={equipment.staffId}
                            onChange={handleChange}
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
                    <div className="w-full mb-2.5 form-group">
                        <select
                            id="fieldId"
                            name="fieldId"
                            value={equipment.fieldId}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        >
                            <option value="">Select Field</option>
                            {fieldList.map(field => (
                                <option key={field.id} value={field.id}>
                                    {field.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-between mt-4 w-full buttons">
                        <button type="submit" className="w-1/2 h-10 bg-[#8b4513] text-white rounded mr-2 save-btn">Save</button>
                        <button type="button" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2 back-btn">Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;