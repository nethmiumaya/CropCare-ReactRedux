import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="w-[231px] h-screen bg-white bg-opacity-70 flex flex-col p-5">
            <div className="text-center py-5">
                <img src="src/assets/real_logo.svg" alt="Crop Care Logo" className="w-30 h-auto" />
            </div>
            <nav className="flex flex-col gap-4 mt-8 flex-1">
                <NavLink to="/home" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Dashboard</NavLink>
                <NavLink to="/field" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Field</NavLink>
                <NavLink to="/staff" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Staff</NavLink>
                <NavLink to="/crop" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Crop</NavLink>
                <NavLink to="/equipment" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Equipment</NavLink>
                <NavLink to="/vehicle" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Vehicle</NavLink>
                <NavLink to="/monitoring-log" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Monitoring Log</NavLink>
                <NavLink to="/users" className="bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none">Users</NavLink>
                <button className="mt-auto bg-[#8b4513] text-white no-underline p-3 text-left text-lg transition-opacity duration-300 rounded-r-lg border-none hover:opacity-90 focus:outline-none" onClick={() => window.location.href = '/index.html'}>Logout</button>
            </nav>
        </div>
    );
};

export default Sidebar;