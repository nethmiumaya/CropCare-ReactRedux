import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/LoginSlice.ts';
import vehicleReducer from '../slices/VehicleSlice.ts';
import staffReducer from '../slices/StaffSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicle: vehicleReducer,
        staff: staffReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;