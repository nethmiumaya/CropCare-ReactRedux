import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

interface ViewVehicleProps {
    onClose: () => void;
}

const ViewVehicle: React.FC<ViewVehicleProps> = ({ onClose }) => {
    const selectedVehicle = useSelector((state: RootState) => state.vehicle.selectedVehicle);
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const staff = staffList.find(staff => staff.id === selectedVehicle?.staff);

    if (!selectedVehicle) {
        return <div>No vehicle selected</div>;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="flex justify-between items-center p-4 bg-[#fff6ee]">
                    <h1 className="text-[#8b4513] text-xl font-normal m-0">View Vehicle</h1>
                    <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-10 h-10 object-contain" />
                </div>
                <div className="p-4 bg-[#fff6ee] rounded-lg m-4">
                    <div className="bg-white rounded-lg p-5">
                        <div className="flex gap-5 mb-5">
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">License Plate No:</label>
                                <span className="block text-black text-sm border-b border-gray-300 pb-1">{selectedVehicle.licensePlate}</span>
                            </div>
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Fuel Type:</label>
                                <span className="block text-black text-sm border-b border-gray-300 pb-1">{selectedVehicle.fuelType}</span>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5">
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Remarks:</label>
                                <span className="block text-black text-sm border-b border-gray-300 pb-1">{selectedVehicle.remarks}</span>
                            </div>
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Category:</label>
                                <span className="block text-black text-sm border-b border-gray-300 pb-1">{selectedVehicle.category}</span>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5">
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Status:</label>
                                <span className="block text-black text-sm border-b border-gray-300 pb-1">{selectedVehicle.status}</span>
                            </div>
                            <div className="flex-1">
                                <label className="text-gray-600 text-sm">Staff:</label>
                                <span className="block text-black text-sm border-b border-gray-300 pb-1">{staff ? `${staff.firstName} ${staff.lastName}` : 'N/A'}</span>
                            </div>
                        </div>
                        <div className="flex justify-center mt-7">
                            <button onClick={onClose} className="w-1/2 py-3 bg-[#8b4513] text-white rounded-full transition-colors duration-300 hover:bg-[#6b3410]">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewVehicle;