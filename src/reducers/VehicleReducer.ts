import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Vehicle {
    licensePlate: string;
    fuelType: string;
    remarks: string;
    category: string;
    status: string;
    staff: string;
}

interface VehicleState {
    vehicles: Vehicle[];
    selectedVehicle: Vehicle | null;
}

const initialState: VehicleState = {
    vehicles: [],
    selectedVehicle: null,
};

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle: (state, action: PayloadAction<Vehicle>) => {
            state.vehicles.push(action.payload);
        },
        updateVehicle: (state, action: PayloadAction<Vehicle>) => {
            const index = state.vehicles.findIndex(v => v.licensePlate === action.payload.licensePlate);
            if (index !== -1) {
                state.vehicles[index] = action.payload;
            }
        },
        selectVehicle: (state, action: PayloadAction<string>) => {
            state.selectedVehicle = state.vehicles.find(v => v.licensePlate === action.payload) || null;
        },
        clearSelectedVehicle: (state) => {
            state.selectedVehicle = null;
        },
    },
});

export const { addVehicle, updateVehicle, selectVehicle, clearSelectedVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;