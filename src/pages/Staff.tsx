import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { selectStaff, deleteStaff } from '../slices/StaffSlice.ts';
import AddStaff from '../popup/staff/AddStaff.tsx';
import UpdateStaff from '../popup/staff/UpdateStaff.tsx';
import ViewStaff from '../popup/staff/ViewStaff.tsx';
import AddButton from '../component/AddButton.tsx';
import DeleteButton from '../component/DeleteButton.tsx';

const Staff: React.FC = () => {
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const dispatch = useDispatch();
    const [showAddStaff, setShowAddStaff] = useState(false);
    const [showUpdateStaff, setShowUpdateStaff] = useState(false);
    const [showViewStaff, setShowViewStaff] = useState(false);

    const handleAddStaff = () => {
        setShowAddStaff(true);
    };

    const handleCloseAddStaff = () => {
        setShowAddStaff(false);
    };

    const handleViewStaff = (id: string) => {
        dispatch(selectStaff(id));
        setShowViewStaff(true);
    };

    const handleCloseViewStaff = () => {
        setShowViewStaff(false);
    };

    const handleUpdateStaff = (id: string) => {
        dispatch(selectStaff(id));
        setShowUpdateStaff(true);
    };

    const handleCloseUpdateStaff = () => {
        setShowUpdateStaff(false);
    };

    const handleDeleteStaff = (id: string) => {
        dispatch(deleteStaff(id));
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <button className="w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <AddButton label="Add Staff" onClick={handleAddStaff} />
            </div>
            <table className="w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">First Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Last Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Email</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {staffList.map(staff => (
                    <tr key={staff.id} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{staff.firstName}</td>
                        <td className="p-3.5 border-b border-gray-300">{staff.lastName}</td>
                        <td className="p-3.5 border-b border-gray-300">{staff.email}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewStaff(staff.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-eye"></i>
                            </button>
                            <button onClick={() => handleUpdateStaff(staff.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-pencil"></i>
                            </button>
                            <DeleteButton onClick={() => handleDeleteStaff(staff.id)} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddStaff && <AddStaff onClose={handleCloseAddStaff} />}
            {showUpdateStaff && <UpdateStaff onClose={handleCloseUpdateStaff} />}
            {showViewStaff && <ViewStaff onClose={handleCloseViewStaff} />}
        </div>
    );
};

export default Staff;