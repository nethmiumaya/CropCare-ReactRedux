import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { clearSelectedLog } from '../../slices/MonitoryLogSlice';

interface ViewLogPageProps {
    onClose: () => void;
}

const ViewLogPage: React.FC<ViewLogPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const selectedLog = useSelector((state: RootState) => state.log.selectedLog);

    useEffect(() => {
        return () => {
            dispatch(clearSelectedLog());
        };
    }, [dispatch]);

    if (!selectedLog) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4 bg-[#fff6ee] p-4 rounded-t-lg">
                    <h1 className="text-xl font-bold text-[#8b4513]">View Monitory Log</h1>
                    <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-10 h-10" />
                </header>
                <div className="bg-[#fff6ee] p-4 rounded-b-lg">
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex-1">
                            <label className="text-gray-600">Log Date:</label>
                            <span className="block text-black border-b border-gray-300 pb-1">{selectedLog.logDate}</span>
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600">Observation:</label>
                            <span className="block text-black border-b border-gray-300 pb-1">{selectedLog.observation}</span>
                        </div>
                    </div>
                    <div className="log-image">
                        <img id="view-log-image" src={selectedLog.image} alt="Log Image" className="mt-2 w-20 h-20 object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex-1">
                            <label className="text-gray-600">Field Name:</label>
                            <input
                                type="text"
                                value={selectedLog.fieldName}
                                readOnly
                                className="block w-full text-black border-b border-gray-300 pb-1"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600">Staff Name:</label>
                            <input
                                type="text"
                                value={selectedLog.staffName}
                                readOnly
                                className="block w-full text-black border-b border-gray-300 pb-1"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-gray-600">Equipment Name:</label>
                            <input
                                type="text"
                                value={selectedLog.equipmentName}
                                readOnly
                                className="block w-full text-black border-b border-gray-300 pb-1"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={onClose} className="w-1/2 py-2 bg-[#8b4513] text-white rounded-full shadow-lg hover:bg-[#6b3410] transition-colors">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewLogPage;