import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { useNavigate } from 'react-router-dom';

const ViewVehicle: React.FC = () => {
    const selectedVehicle = useSelector((state: RootState) => state.vehicle.selectedVehicle);
    const navigate = useNavigate();

    if (!selectedVehicle) {
        return <div>No vehicle selected</div>;
    }

    return (
        <div className="view-vehicle-popup">
            <div className="popup-content">
                <div className="popup-header">
                    <h1 className="header-title">View Vehicle</h1>
                    <img src="/assests/images/real_logo.svg" alt="Crop Care Logo" className="header-logo" />
                </div>
                <div className="vehicle-details">
                    <div className="details-row">
                        <div className="detail-group">
                            <label>License Plate No :</label>
                            <span id="viewlicensePlateNo">{selectedVehicle.licensePlate}</span>
                        </div>
                        <div className="detail-group">
                            <label>Fuel Type :</label>
                            <span id="viewFuelType">{selectedVehicle.fuelType}</span>
                        </div>
                    </div>
                    <div className="details-row">
                        <div className="detail-group">
                            <label>Remarks :</label>
                            <span id="viewRemarks">{selectedVehicle.remarks}</span>
                        </div>
                        <div className="detail-group">
                            <label>Category :</label>
                            <span id="vewCategory">{selectedVehicle.category}</span>
                        </div>
                    </div>
                    <div className="details-row">
                        <div className="detail-group">
                            <label>Status :</label>
                            <span id="viewStatus">{selectedVehicle.status}</span>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="close-button" onClick={() => navigate('/vehicle')}>CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewVehicle;