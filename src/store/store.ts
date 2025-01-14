import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/LoginReducer';
import vehicleReducer from '../reducers/VehicleReducer';
import staffReducer from '../reducers/StaffReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicle: vehicleReducer,
        staff: staffReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;