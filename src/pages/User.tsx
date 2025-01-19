import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { selectUser, deleteUser } from '../slices/UserSlice';
import AddUser from '../popup/user/AddUser';
import UpdateUser from '../popup/user/UpdateUser';
import ViewUser from '../popup/user/ViewUser';
import AddButton from '../component/AddButton';
import DeleteButton from '../component/DeleteButton';

const User: React.FC = () => {
    const userList = useSelector((state: RootState) => state.user.userList);
    const dispatch = useDispatch();
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [showViewUser, setShowViewUser] = useState(false);

    const handleAddUser = () => {
        setShowAddUser(true);
    };

    const handleCloseAddUser = () => {
        setShowAddUser(false);
    };

    const handleViewUser = (id: string) => {
        dispatch(selectUser(id));
        setShowViewUser(true);
    };

    const handleCloseViewUser = () => {
        setShowViewUser(false);
    };

    const handleUpdateUser = (id: string) => {
        dispatch(selectUser(id));
        setShowUpdateUser(true);
    };

    const handleCloseUpdateUser = () => {
        setShowUpdateUser(false);
    };

    const handleDeleteUser = (id: string) => {
        dispatch(deleteUser(id));
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <button className="w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <AddButton label="Add User" onClick={handleAddUser} />
            </div>
            <table className="w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Email</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Role</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {userList.map(user => (
                    <tr key={user.id} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{user.email}</td>
                        <td className="p-3.5 border-b border-gray-300">{user.role}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewUser(user.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-eye"></i>
                            </button>
                            <button onClick={() => handleUpdateUser(user.id)} className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-pencil"></i>
                            </button>
                            <DeleteButton onClick={() => handleDeleteUser(user.id)} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddUser && <AddUser onClose={handleCloseAddUser} />}
            {showUpdateUser && <UpdateUser onClose={handleCloseUpdateUser} />}
            {showViewUser && <ViewUser onClose={handleCloseViewUser} />}
        </div>
    );
};

export default User;