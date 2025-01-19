import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface StatsState {
    totalCrops: number;
    totalStaff: number;
    totalEquipment: number;
    vehicleToday: number;
}

const initialState: StatsState = {
    totalCrops: 0,
    totalStaff: 0,
    totalEquipment: 0,
    vehicleToday: 0,
};

export const fetchStats = createAsyncThunk('stats/fetchStats', async () => {
    return {
        totalCrops: 6,
        totalStaff: 2,
        totalEquipment: 6,
        vehicleToday: 8,
    };
});

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStats.fulfilled, (state, action) => {
            state.totalCrops = action.payload.totalCrops;
            state.totalStaff = action.payload.totalStaff;
            state.totalEquipment = action.payload.totalEquipment;
            state.vehicleToday = action.payload.vehicleToday;
        });
    },
});

export default statsSlice.reducer;