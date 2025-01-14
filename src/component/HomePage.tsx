import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import VehiclePage from './vehicle/VehiclePage.tsx';
import StaffPage from './StaffPage.tsx';

const HomePage: React.FC = () => {
    const [dateTime, setDateTime] = useState({
        date: '',
        time: '',
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
            const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            setDateTime({
                date: now.toLocaleDateString('en-US', dateOptions),
                time: now.toLocaleTimeString('en-US', timeOptions),
            });
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

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
                        <p id="current-date" className="text-gray-800 text-lg">{dateTime.date}</p>
                        <p id="current-time" className="text-gray-800 text-lg">{dateTime.time}</p>
                    </div>
                </div>
                <div className="w-full h-full mt-4 bg-white bg-opacity-70 rounded-lg">
                    <Routes>
                        <Route path="vehicle" element={<VehiclePage />} />
                        <Route path="staff" element={<StaffPage />} />
                        {/* Add other routes here */}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default HomePage;