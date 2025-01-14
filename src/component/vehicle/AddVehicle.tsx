import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVehicle } from '../../reducers/VehicleReducer.ts';
import { useNavigate } from 'react-router-dom';

interface AddVehicleProps {
    onClose: () => void;
}

const AddVehicle: React.FC<AddVehicleProps> = ({ onClose }) => {
    const [vehicle, setVehicle] = useState({
        licensePlate: '',
        fuelType: '',
        remarks: '',
        category: '',
        status: '',
        staff: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addVehicle(vehicle));
        navigate('/vehicle');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add Vehicle</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="licensePlate"
                            name="licensePlate"
                            placeholder="License Plate Number"
                            value={vehicle.licensePlate}
                            onChange={(e) => setVehicle({ ...vehicle, licensePlate: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="fuelType"
                            name="fuelType"
                            placeholder="Fuel Type"
                            value={vehicle.fuelType}
                            onChange={(e) => setVehicle({ ...vehicle, fuelType: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="remarks"
                            name="remarks"
                            placeholder="Remarks"
                            value={vehicle.remarks}
                            onChange={(e) => setVehicle({ ...vehicle, remarks: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Category"
                            value={vehicle.category}
                            onChange={(e) => setVehicle({ ...vehicle, category: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="status"
                            name="status"
                            placeholder="Status"
                            value={vehicle.status}
                            onChange={(e) => setVehicle({ ...vehicle, status: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <select
                            id="staff"
                            name="staff"
                            value={vehicle.staff}
                            onChange={(e) => setVehicle({ ...vehicle, staff: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        >
                            <option value="">Select Staff</option>
                            {/* Add staff options here */}
                        </select>
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <button type="submit" className="w-1/2 h-10 bg-[#8b4513] text-white rounded mr-2">Save</button>
                        <button type="button" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2" onClick={onClose}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVehicle;