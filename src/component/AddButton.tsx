import React from 'react';

interface AddButtonProps {
    label: string;
    onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-[164px] h-[44px] bg-[#8b4513] text-white border-none rounded-l-full cursor-pointer text-lg transition-colors duration-300 hover:bg-[#a0522d]"
        >
            {label}
        </button>
    );
};

export default AddButton;