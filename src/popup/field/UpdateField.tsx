import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateField, clearSelectedField } from '../../slices/FieldSlice';
import UpdateButton from '../../component/UpdateButton';
import {useNavigate} from "react-router-dom";

interface UpdateFieldPageProps {
    onClose: () => void;
}

const UpdateFieldPage: React.FC<UpdateFieldPageProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedField = useSelector((state: RootState) => state.field.selectedField);
    const [field, setField] = useState(selectedField );

    useEffect(() => {
        if (selectedField) {
            setField(selectedField);
        }
    }, [selectedField]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (field) {
            dispatch(updateField(field));
        navigate('/home/field');
    }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedImages = [...field.images];
                updatedImages[index] = reader.result as string;
                setField({ ...field, images: updatedImages });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Update Field</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateFieldName"
                            name="name"
                            placeholder="Field Name"
                            value={field.name}
                            onChange={(e) => setField({ ...field, name: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateFieldLocation"
                            name="location"
                            placeholder="Field Location"
                            value={field.location}
                            onChange={(e) => setField({ ...field, location: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="updateFieldSize"
                            name="size"
                            placeholder="Field Size"
                            value={field.size}
                            onChange={(e) => setField({ ...field, size: e.target.value })}
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
                                {field.images[index] && (
                                    <img
                                        src={field.images[index]}
                                        alt={`Field preview ${index + 1}`}
                                        className="mt-2 w-20 h-20 object-cover rounded-lg"
                                    />
                                )}
                            </div>
                        ))}
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

export default UpdateFieldPage;