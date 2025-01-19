import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { deleteLog, selectLog } from '../slices/MonitoryLogSlice';
import AddButton from '../component/AddButton';
import AddLogPage from '../popup/monitorylog/AddMonitoryLog';
import UpdateLogPage from '../popup/monitorylog/UpdateMonitoryLog';
import ViewLogPage from '../popup/monitorylog/ViewMonitoryLog';
import DeleteButton from "../component/DeleteButton.tsx";

const MonitoryLogPage: React.FC = () => {
    const logs = useSelector((state: RootState) => state.log.logs);
    const dispatch = useDispatch();
    const [showAddLog, setShowAddLog] = useState(false);
    const [showUpdateLog, setShowUpdateLog] = useState(false);
    const [showViewLog, setShowViewLog] = useState(false);

    const handleAddLog = () => {
        setShowAddLog(true);
    };

    const handleCloseAddLog = () => {
        setShowAddLog(false);
    };

    const handleUpdateLog = (id: string) => {
        dispatch(selectLog(id));
        setShowUpdateLog(true);
    };

    const handleCloseUpdateLog = () => {
        setShowUpdateLog(false);
    };

    const handleViewLog = (id: string) => {
        dispatch(selectLog(id));
        setShowViewLog(true);
    };

    const handleCloseViewLog = () => {
        setShowViewLog(false);
    };

    const handleDeleteLog = (id: string) => {
        dispatch(deleteLog(id));
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="header flex justify-between items-center mb-5">
                <div className="search-section flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="search-input w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <select className="dropdown w-70 h-11 p-2.5 border border-gray-300 rounded text-lg">
                        <option value="">Field Id</option>
                        <option value="field1">Field 1</option>
                        <option value="field2">Field 2</option>
                    </select>
                    <button className="search-button w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <AddButton label="Add Monitory Log" onClick={handleAddLog} />
            </div>
            <table className="log-table w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Log Date</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Observation</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Observed Image</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Field Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Staff Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Equipment Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {logs.map(log => (
                    <tr key={log.id} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{log.logDate}</td>
                        <td className="p-3.5 border-b border-gray-300">{log.observation}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <img src={log.image} alt="Log" className="w-20 h-20 object-cover rounded-lg" />
                        </td>
                        <td className="p-3.5 border-b border-gray-300">{log.fieldName}</td>
                        <td className="p-3.5 border-b border-gray-300">{log.staffName}</td>
                        <td className="p-3.5 border-b border-gray-300">{log.equipmentName}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewLog(log.id)}
                                    className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-eye"></i>
                            </button>
                            <button onClick={() => handleUpdateLog(log.id)}
                                    className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-pencil"></i>
                            </button>
                            <DeleteButton onClick={() => handleDeleteLog(log.id)}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddLog && <AddLogPage onClose={handleCloseAddLog} />}
            {showUpdateLog && <UpdateLogPage onClose={handleCloseUpdateLog} />}
            {showViewLog && <ViewLogPage onClose={handleCloseViewLog} />}
        </div>
    );
};

export default MonitoryLogPage;