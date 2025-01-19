import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLog } from '../../slices/MonitoryLogSlice';
import { v4 as uuidv4 } from 'uuid';

interface AddLogPageProps {
    onClose: () => void;
}

const AddLogPage: React.FC<AddLogPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const [newLog, setNewLog] = useState({
        logDate: '',
        observation: '',
        image: '',
        fieldName: '',
        staffName: '',
        equipmentName: '',
    });

    const handleSaveLog = () => {
        dispatch(addLog({ ...newLog, id: uuidv4() }));
        onClose();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewLog({ ...newLog, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add Monitory Log</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="date"
                            placeholder="Log Date"
                            value={newLog.logDate}
                            onChange={(e) => setNewLog({ ...newLog, logDate: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Observation"
                            value={newLog.observation}
                            onChange={(e) => setNewLog({ ...newLog, observation: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brown-50 file:text-brown-700 hover:file:bg-brown-100"
                        />
                        {newLog.image && (
                            <img
                                src={newLog.image}
                                alt="Log preview"
                                className="mt-2 w-20 h-20 object-cover rounded-lg"
                            />
                        )}
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Field Name"
                            value={newLog.fieldName}
                            onChange={(e) => setNewLog({ ...newLog, fieldName: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Staff Name"
                            value={newLog.staffName}
                            onChange={(e) => setNewLog({ ...newLog, staffName: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Equipment Name"
                            value={newLog.equipmentName}
                            onChange={(e) => setNewLog({ ...newLog, equipmentName: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <button type="button" onClick={handleSaveLog} className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Save</button>
                        <button type="button" onClick={onClose} className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLogPage;