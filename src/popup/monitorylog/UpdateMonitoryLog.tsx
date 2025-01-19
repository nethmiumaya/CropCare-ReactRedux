import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateLog, clearSelectedLog } from '../../slices/MonitoryLogSlice';
import { useNavigate } from 'react-router-dom';

interface UpdateLogPageProps {
    onClose: () => void;
}

const UpdateLogPage: React.FC<UpdateLogPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedLog = useSelector((state: RootState) => state.log.selectedLog);
    const [log, setLog] = useState(selectedLog);

    useEffect(() => {
        if (selectedLog) {
            setLog(selectedLog);
        }
    }, [selectedLog]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLog({ ...log, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLog({ ...log, image: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (log) {
            dispatch(updateLog(log));
            navigate('/home/monitoring-log');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Update Monitory Log</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="date"
                            name="logDate"
                            placeholder="Log Date"
                            value={log.logDate}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="observation"
                            placeholder="Observation"
                            value={log.observation}
                            onChange={handleChange}
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
                        {log.image && (
                            <img
                                src={log.image}
                                alt="Log preview"
                                className="mt-2 w-20 h-20 object-cover rounded-lg"
                            />
                        )}
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="fieldName"
                            placeholder="Field Name"
                            value={log.fieldName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="staffName"
                            placeholder="Staff Name"
                            value={log.staffName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            name="equipmentName"
                            placeholder="Equipment Name"
                            value={log.equipmentName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <button type="submit" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Update</button>
                        <button type="button" onClick={onClose} className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateLogPage;