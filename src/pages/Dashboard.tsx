import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchActivities } from '../slices/ActivitySlice';
import { fetchStats } from '../slices/StateSlice';
import Chart from 'chart.js/auto';

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const activities = useSelector((state: RootState) => state.activity.activities);
    const stats = useSelector((state: RootState) => state.stats);

    useEffect(() => {
        dispatch(fetchActivities());
        dispatch(fetchStats());
        initializeChart();
    }, [dispatch]);

    const initializeChart = () => {
        const ctx = document.getElementById('cropHealthChart') as HTMLCanvasElement;
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Healthy Crops',
                        data: [65, 78, 66, 74, 85, 80],
                        borderColor: '#2ecc71',
                        tension: 0.4,
                        fill: false,
                    },
                    {
                        label: 'Affected Crops',
                        data: [28, 22, 21, 15, 12, 15],
                        borderColor: '#e74c3c',
                        tension: 0.4,
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Crop Health Trends',
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    return (
        <div className="dashboard-container flex flex-col p-5">
            <div className="dashboard-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="stats-card flex items-center p-5 bg-white rounded-lg shadow-md">
                    <i className="fas fa-seedling text-2xl text-[#8b4513]"></i>
                    <div className="stats-info ml-5">
                        <h3 className="text-sm text-gray-600">Total Crops</h3>
                        <p className="text-xl font-bold">{stats.totalCrops}</p>
                    </div>
                </div>
                <div className="stats-card flex items-center p-5 bg-white rounded-lg shadow-md">
                    <i className="fas fa-disease text-2xl text-[#8b4513]"></i>
                    <div className="stats-info ml-5">
                        <h3 className="text-sm text-gray-600">Total Staff</h3>
                        <p className="text-xl font-bold">{stats.totalStaff}</p>
                    </div>
                </div>
                <div className="stats-card flex items-center p-5 bg-white rounded-lg shadow-md">
                    <i className="fas fa-check-circle text-2xl text-[#8b4513]"></i>
                    <div className="stats-info ml-5">
                        <h3 className="text-sm text-gray-600">Total Equipment</h3>
                        <p className="text-xl font-bold">{stats.totalEquipment}</p>
                    </div>
                </div>
                <div className="stats-card flex items-center p-5 bg-white rounded-lg shadow-md">
                    <i className="fas fa-calendar-check text-2xl text-[#8b4513]"></i>
                    <div className="stats-info ml-5">
                        <h3 className="text-sm text-gray-600">Vehicle Today</h3>
                        <p className="text-xl font-bold">{stats.vehicleToday}</p>
                    </div>
                </div>
            </div>
            <div className="chart-container bg-white p-5 rounded-lg shadow-md mt-5">
                <h3 className="text-lg font-bold mb-3">Crop Overview</h3>
                <canvas id="cropHealthChart"></canvas>
            </div>
            <div className="recent-activities bg-white p-5 rounded-lg shadow-md mt-5">
                <h3 className="text-lg font-bold mb-3">Current Available</h3>
                <div className="activity-list">
                    {activities.map((activity, index) => (
                        <div key={index} className="activity-item flex items-center gap-3 mb-3">
                            <i className={`fas ${getActivityIcon(activity.type)} text-lg`} style={{ color: getActivityColor(activity.type) }}></i>
                            <div>
                                <p>{activity.message}</p>
                                <small>{activity.time}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const getActivityIcon = (type: string) => {
    const icons = {
        alert: 'fa-exclamation-circle',
        success: 'fa-check-circle',
        info: 'fa-info-circle',
    };
    return icons[type] || icons.info;
};

const getActivityColor = (type: string) => {
    const colors = {
        alert: '#e74c3c',
        success: '#2ecc71',
        info: '#3498db',
    };
    return colors[type] || colors.info;
};

export default Dashboard;