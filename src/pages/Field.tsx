import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { deleteField, selectField } from '../slices/FieldSlice';
import AddButton from '../component/AddButton';
import AddFieldPage from '../popup/field/AddField';
import DeleteButton from "../component/DeleteButton.tsx";
import UpdateFieldPage from "../popup/field/UpdateField.tsx";
import ViewFieldPage from "../popup/field/ViewField.tsx";

const FieldPage: React.FC = () => {
    const fields = useSelector((state: RootState) => state.field.fields);
      const dispatch = useDispatch();
    const [showAddField, setShowAddField] = useState(false);
    const [showUpdateField, setShowUpdateField] = useState(false);
    const [showViewField, setShowViewField] = useState(false);

    const handleAddField = () => {
        setShowAddField(true);
    };

    const handleCloseAddField = () => {
        setShowAddField(false);
    };

    const handleUpdateField = (id: string) => {
        dispatch(selectField(id));
        setShowUpdateField(true);
    };
    const handleViewField = (id: string) => {
        dispatch(selectField(id));
        setShowViewField(true);
    };

    const handleCloseViewField = () => {
        setShowViewField(false);
    };
    const handleCloseUpdateField = () => {
        setShowUpdateField(false);
    };

    const handleDeleteField = (id: string) => {
        dispatch(deleteField(id));
    };

    return (
        <div className="w-full h-full p-5 rounded-lg shadow-md">
            <div className="header flex justify-between items-center mb-5">
                <div className="search-section flex items-center gap-2.5">
                    <input type="text" placeholder="Search by name" className="search-input w-89 h-11 p-2.5 border border-gray-300 rounded text-lg" />
                    <button className="search-button w-[100px] h-[35px] bg-[#fce7d9] text-[#8b4513] border-none rounded-full cursor-pointer text-sm transition-colors duration-300 hover:bg-[#f5ccb6]">Search</button>
                </div>
                <AddButton label="Add Field" onClick={handleAddField} />
            </div>
            <table className="field-table w-full border-collapse mt-5">
                <thead>
                <tr>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Field Name</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Field Location</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Extend Size</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Field Image</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Another Image</th>
                    <th className="p-3.5 text-left border-b border-gray-300 bg-gray-100 font-bold">Action</th>
                </tr>
                </thead>
                <tbody>
                {fields.map(field => (
                    <tr key={field.id} className="even:bg-gray-100 hover:bg-gray-200">
                        <td className="p-3.5 border-b border-gray-300">{field.name}</td>
                        <td className="p-3.5 border-b border-gray-300">{field.location}</td>
                        <td className="p-3.5 border-b border-gray-300">{field.size}</td>
                        <td className="p-3.5 border-b border-gray-300">
                            {field.images[0] && <img src={field.images[0]} alt="Field" className="w-20 h-20 object-cover rounded-lg" />}
                        </td>
                        <td className="p-3.5 border-b border-gray-300">
                            {field.images[1] && <img src={field.images[1]} alt="Another Field" className="w-20 h-20 object-cover rounded-lg" />}
                        </td>
                        <td className="p-3.5 border-b border-gray-300">
                            <button onClick={() => handleViewField(field.id)}
                                    className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-eye"></i>
                            </button>
                            <button onClick={() => handleUpdateField(field.id)}
                                    className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none">
                                <i className="bi bi-pencil"></i>
                            </button>
                            <DeleteButton onClick={() => handleDeleteField(field.id)}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showAddField && <AddFieldPage onClose={handleCloseAddField}/>}
            {showUpdateField && <UpdateFieldPage onClose={handleCloseUpdateField}/>}
            {showViewField && <ViewFieldPage onClose={handleCloseViewField}/>}
        </div>
    );
};

export default FieldPage;