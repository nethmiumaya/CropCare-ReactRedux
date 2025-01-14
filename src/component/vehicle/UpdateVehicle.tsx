import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { updateVehicle, clearSelectedVehicle } from '../../reducers/VehicleReducer.ts';
import { useNavigate } from 'react-router-dom';

const UpdateVehicle: React.FC = () => {
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

    useEffect(() => {
        if (selectedVehicle) {
            setVehicle(selectedVehicle);
        }
    }, [selectedVehicle]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateVehicle(vehicle));
        dispatch(clearSelectedVehicle());
        navigate('/vehicle');
    };

    return (
        <div className="update-vehicle-popup">
            <div className="form-container">
                <header>
                    <h1>Update Vehicle</h1>
                    <div className="logo">
                        <img src="/assests/images/real_logo.svg" alt="Crop Care Logo" />
                    </div>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="updateLicensePlate"
                            name="licensePlate"
                            placeholder="License Plate Number"
                            value={vehicle.licensePlate}
                            onChange={(e) => setVehicle({ ...vehicle, licensePlate: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="updateFuelType"
                            name="fuelType"
                            placeholder="Fuel Type"
                            value={vehicle.fuelType}
                            onChange={(e) => setVehicle({ ...vehicle, fuelType: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="updateRemarks"
                            name="remarks"
                            placeholder="Remarks"
                            value={vehicle.remarks}
                            onChange={(e) => setVehicle({ ...vehicle, remarks: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="updateCategory"
                            name="category"
                            placeholder="Category"
                            value={vehicle.category}
                            onChange={(e) => setVehicle({ ...vehicle, category: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="updateStatus"
                            name="status"
                            placeholder="Status"
                            value={vehicle.status}
                            onChange={(e) => setVehicle({ ...vehicle, status: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            id="updateStaff"
                            name="staff"
                            value={vehicle.staff}
                            onChange={(e) => setVehicle({ ...vehicle, staff: e.target.value })}
                        >
                            <option value="">Select Staff</option>
                            {/* Add staff options here */}
                        </select>
                    </div>
                    <div className="buttons">
                        <button type="submit" className="btn update-btn" id="updateVehicleBtn">Update</button>
                        <button type="button" className="btn back-btn" onClick={() => navigate('/vehicle')}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateVehicle;