import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../component/SideBar';
import Vehicle from './Vehicle';
import Staff from './Staff';
import Equipment from './Equipment';
import Field from "./Field";
import CropPage from "./Crop";
import MonitoryLogPage from "./MonitoryLog";
import User from "./User";
import Dashboard from "./Dashboard";

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1">
                <div className="w-full h-20 bg-white bg-opacity-70 flex justify-between items-center p-4 rounded-lg">
                    <div>
                        <h1 className="text-brown-700 text-2xl">Welcome !!!</h1>
                        <p className="text-gray-600 text-lg">Nethmi Gunasekara</p>
                    </div>
                    <div className="text-right">
                        <p id="current-date" className="text-gray-800 text-lg">{new Date().toLocaleDateString()}</p>
                        <p id="current-time" className="text-gray-800 text-lg">{new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
                <div className="w-full h-full mt-4 bg-white bg-opacity-70 rounded-lg">
                    <Routes>
                        <Route path="vehicle" element={<Vehicle />} />
                        <Route path="staff" element={<Staff />} />
                        <Route path="equipment" element={<Equipment />} />
                        <Route path="field" element={<Field />} />
                        <Route path="crop" element={<CropPage />} />
                        <Route path="monitoring-log" element={<MonitoryLogPage />} />
                        <Route path="user" element={<User />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default HomePage;