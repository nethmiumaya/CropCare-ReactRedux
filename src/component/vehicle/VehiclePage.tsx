import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { selectVehicle } from '../../reducers/VehicleReducer.ts';
import { useNavigate } from 'react-router-dom';
import AddVehicle from './AddVehicle.tsx';

const VehiclePage: React.FC = () => {
    const vehicles = useSelector((state: RootState) => state.vehicle.vehicles);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAddVehicle, setShowAddVehicle] = useState(false);

    const handleAddVehicle = () => {
        setShowAddVehicle(true);
    };

    const handleCloseAddVehicle = () => {
        setShowAddVehicle(false);
    };

    const handleViewVehicle = (licensePlate: string) => {
        dispatch(selectVehicle(licensePlate));
        navigate('/view-vehicle');
    };

    const handleUpdateVehicle = (licensePlate: string) => {
        dispatch(selectVehicle(licensePlate));
        navigate('/update-vehicle');
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <select className="w-70 h-11 p-2.5 border border-gray-300 rounded text-lg">
                        <option value="">Fuel Type</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Other">Other</option>
                    </select>
                    <button className="w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <button onClick={handleAddVehicle} className="w-[164px] h-[44px] bg-[#8b4513] text-white border-none rounded-l-full cursor-pointer text-lg transition-colors duration-300 hover:bg-[#a0522d]">Add Vehicle</button>
            </div>
            <table className="w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">License Plate No</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Remarks</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Category</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Status</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map(vehicle => (
                    <tr key={vehicle.licensePlate} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{vehicle.licensePlate}</td>
                        <td className="p-3.5 border-b border-gray-300">{vehicle.remarks}</td>
                        <td className="p-3.5 border-b border-gray-300">{vehicle.category}</td>
                        <td className="p-3.5 border-b border-gray-300">{vehicle.status}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewVehicle(vehicle.licensePlate)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">View</button>
                            <button onClick={() => handleUpdateVehicle(vehicle.licensePlate)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">Update</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddVehicle && <AddVehicle onClose={handleCloseAddVehicle} />}
        </div>
    );
};

export default VehiclePage;