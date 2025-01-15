import React, { useState } from 'react';
import SaveButton from '../../component/SaveButton.tsx';

interface AddTaskPageProps {
    onClose: () => void;
}

const AddTask: React.FC<AddTaskPageProps> = ({ onClose }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add task logic here
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold text-[#6d4c41]">Add Task</h1>
                    <div className="flex items-center">
                        <img src="/src/assets/real_logo.svg" alt="Crop Care Logo" className="w-15 h-auto mr-9" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-2.5 justify-between w-full max-w-md">
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Task Title"
                            value={task.title}
                            onChange={(e) => setTask({ ...task, title: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Task Description"
                            value={task.description}
                            onChange={(e) => setTask({ ...task, description: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
                    </div>
                    <div className="w-full mb-2.5">
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
                            className="w-full h-10 p-1.5 border border-gray-300 rounded-lg text-sm"
                        />
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

export default AddTask;