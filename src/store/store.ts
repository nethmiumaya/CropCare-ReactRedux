import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/LoginSlice';
import vehicleReducer from '../slices/VehicleSlice';
import staffReducer from '../slices/StaffSlice';
import equipmentReducer from '../slices/EquipmentSlice';
import fieldReducer from '../slices/FieldSlice';
import cropReducer from '../slices/CropSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicle: vehicleReducer,
        staff: staffReducer,
        equipment: equipmentReducer,
        field: fieldReducer,
        crop: cropReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;