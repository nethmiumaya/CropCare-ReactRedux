import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { updateVehicle, clearSelectedVehicle } from '../../slices/VehicleSlice.ts';
import { useNavigate } from 'react-router-dom';
import UpdateButton from '../../component/UpdateButton.tsx';

interface UpdateVehicleProps {
    onClose: () => void;
}

const UpdateVehicle: React.FC<UpdateVehicleProps> = ({ onClose }) => {
    const selectedVehicle = useSelector((state: RootState) => state.vehicle.selectedVehicle);
    const [vehicle, setVehicle] = useState(selectedVehicle || {
        licensePlate: '',
        fuelType: '',
        remarks: '',
        category: '',
        status: '',
        staff: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const staffList = useSelector((state: RootState) => state.staff.staffList);

    useEffect(() => {
        if (selectedVehicle) {
            setVehicle(selectedVehicle);
        }
    }, [selectedVehicle]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateVehicle(vehicle));
        dispatch(clearSelectedVehicle());
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center w-full mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Update Vehicle</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateLicensePlate"
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
                            id="updateFuelType"
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
                            id="updateRemarks"
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
                            id="updateCategory"
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
                            id="updateStatus"
                            name="status"
                            placeholder="Status"
                            value={vehicle.status}
                            onChange={(e) => setVehicle({ ...vehicle, status: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <select
                            id="updateStaff"
                            name="staff"
                            value={vehicle.staff}
                            onChange={(e) => setVehicle({ ...vehicle, staff: e.target.value })}
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
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="staffName"
                            name="staffName"
                            placeholder="Staff Name"
                            value={staffList.find(staff => staff.id === vehicle.staff)?.firstName + ' ' + staffList.find(staff => staff.id === vehicle.staff)?.lastName || ''}
                            readOnly
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <UpdateButton label="Update" onClick={handleSubmit} />
                        <button type="button" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2" onClick={onClose}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateVehicle;