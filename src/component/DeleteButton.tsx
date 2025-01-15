import React from 'react';

interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-1.5 border-none bg-none cursor-pointer text-lg text-[#a0522d] focus:outline-none"
        >
            <i className="bi bi-trash"></i>
        </button>
    );
};

export default DeleteButton;