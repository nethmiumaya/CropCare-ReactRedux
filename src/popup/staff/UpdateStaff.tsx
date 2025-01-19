import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { updateStaff, clearSelectedStaff } from '../../slices/StaffSlice.ts';
import UpdateButton from '../../component/UpdateButton.tsx';

interface UpdateStaffProps {
    onClose: () => void;
}

const UpdateStaff: React.FC<UpdateStaffProps> = ({ onClose }) => {
    const selectedStaff = useSelector((state: RootState) => state.staff.selectedStaff);
    const [staff, setStaff] = useState(selectedStaff || {
        id: '',
        firstName: '',
        lastName: '',
        designation: '',
        gender: '',
        contactNo: '',
        dob: '',
        joinDate: '',
        email: '',
        address: '',
        role: '',
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedStaff) {
            setStaff(selectedStaff);
        }
    }, [selectedStaff]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStaff({ ...staff, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateStaff(staff));
        dispatch(clearSelectedStaff());
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Update Staff</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateFirstName"
                            name="firstName"
                            placeholder="First Name"
                            value={staff.firstName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateLastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={staff.lastName}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateDesignation"
                            name="designation"
                            placeholder="Designation"
                            value={staff.designation}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <select
                            id="updateGender"
                            name="gender"
                            value={staff.gender}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        >
                            <option value="" disabled selected hidden>Gender</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateContactNumber"
                            name="contactNo"
                            placeholder="Contact No"
                            value={staff.contactNo}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="date"
                            id="updateDob"
                            name="dob"
                            placeholder="DOB"
                            value={staff.dob}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="date"
                            id="updateJoinDate"
                            name="joinDate"
                            placeholder="Join Date"
                            value={staff.joinDate}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="email"
                            id="updateEmail"
                            name="email"
                            placeholder="Email"
                            value={staff.email}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateAddress"
                            name="address"
                            placeholder="Address"
                            value={staff.address}
                            onChange={handleChange}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <select
                            id="updateRole"
                            name="role"
                            value={staff.role}
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
                        <UpdateButton label="Update" onClick={handleSubmit} />
                        <button type="button" className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2" onClick={onClose}>Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateStaff;