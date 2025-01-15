import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Equipment {
    id: string;
    name: string;
    type: string;
    status: string;
}

interface EquipmentState {
    equipmentList: Equipment[];
    selectedEquipment: Equipment | null;
}

const initialState: EquipmentState = {
    equipmentList: [],
    selectedEquipment: null,
};

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment: (state, action: PayloadAction<Equipment>) => {
            state.equipmentList.push(action.payload);
        },
        deleteEquipment: (state, action: PayloadAction<string>) => {
            state.equipmentList = state.equipmentList.filter(equipment => equipment.id !== action.payload);
        },
        selectEquipment: (state, action: PayloadAction<string>) => {
            state.selectedEquipment = state.equipmentList.find(equipment => equipment.id === action.payload) || null;
        },
        clearSelectedEquipment: (state) => {
            state.selectedEquipment = null;
        },
    },
});

export const { addEquipment, deleteEquipment, selectEquipment, clearSelectedEquipment } = equipmentSlice.actions;
export default equipmentSlice.reducer;