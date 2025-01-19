import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../slices/UserSlice';
import SaveButton from '../../component/SaveButton';

interface AddUserProps {
    onClose: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ onClose }) => {
    const [user, setUser] = useState({
        id: '',
        email: '',
        password: '',
        role: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addUser({ ...user, id: Date.now().toString() }));
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add User</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <select
                            id="role"
                            name="role"
                            value={user.role}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        >
                            <option value="" disabled selected hidden>Role</option>
                            <option value="MANAGER">MANAGER</option>
                            <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                            <option value="SCIENTIST">SCIENTIST</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <SaveButton label="Save" onClick={handleSubmit} />
                        <button type="button" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2" onClick={onClose}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;