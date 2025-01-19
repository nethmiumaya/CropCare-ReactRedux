import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField } from '../../slices/FieldSlice';
import { v4 as uuidv4 } from 'uuid';

interface AddFieldPageProps {
    onClose: () => void;
}

const AddFieldPage: React.FC<AddFieldPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const [newField, setNewField] = useState({
        name: '',
        location: '',
        size: '',
        images: ['', ''],
    });

    const handleSaveField = () => {
        dispatch(addField({ ...newField, id: uuidv4() }));
        onClose();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedImages = [...newField.images];
                updatedImages[index] = reader.result as string;
                setNewField({ ...newField, images: updatedImages });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add Field</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Field Name"
                            value={newField.name}
                            onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Field Location"
                            value={newField.location}
                            onChange={(e) => setNewField({ ...newField, location: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            placeholder="Extend Size"
                            value={newField.size}
                            onChange={(e) => setNewField({ ...newField, size: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="space-y-4 w-full mb-2.5">
                        {[0, 1].map((index) => (
                            <div key={index} className="relative">
                                <input
                                    type="file"
                                    onChange={(e) => handleImageChange(e, index)}
                                    accept="image/*"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brown-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brown-50 file:text-brown-700 hover:file:bg-brown-100"
                                />
                                {newField.images[index] && (
                                    <img
                                        src={newField.images[index]}
                                        alt={`Field preview ${index + 1}`}
                                        className="mt-2 w-20 h-20 object-cover rounded-lg"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 w-full">
                        <button type="button" onClick={handleSaveField} className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Save</button>
                        <button type="button" onClick={onClose} className="w-1/2 h-10 bg-[#8b4513] text-white rounded ml-2">Back</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFieldPage;