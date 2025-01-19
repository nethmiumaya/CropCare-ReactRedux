import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="w-[231px] h-screen bg-white bg-opacity-70 flex flex-col p-5">
            <div className="flex justify-center py-5">
                <img src="src/assets/real_logo.svg" alt="Crop Care Logo" className="w-30 h-auto" />
            </div>
            <nav className="flex flex-col gap-4 mt-8 flex-1">
                <NavLink to="/home/dashboard" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Dashboard</NavLink>
                <NavLink to="/home/field" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Field</NavLink>
                <NavLink to="/home/staff" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Staff</NavLink>
                <NavLink to="/home/crop" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Crop</NavLink>
                <NavLink to="/home/equipment" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Equipment</NavLink>
                <NavLink to="/home/vehicle" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Vehicle</NavLink>
                <NavLink to="/home/monitoring-log" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Monitoring Log</NavLink>
                <NavLink to="/home/user" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Users</NavLink>
                <button className="mt-auto bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none" onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    );
};

export default Sidebar;