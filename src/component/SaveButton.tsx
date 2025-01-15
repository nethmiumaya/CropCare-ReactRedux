import React from 'react';

interface SaveButtonProps {
    label: string;
    onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-1/2 h-10 bg-[#8b4513] text-white rounded mr-2"
        >
            {label}
        </button>
    );
};

export default SaveButton;