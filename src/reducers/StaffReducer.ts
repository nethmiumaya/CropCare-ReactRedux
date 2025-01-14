import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Staff {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    contactNo: string;
    dob: string;
    joinDate: string;
    email: string;
    address: string;
    role: string;
}

interface StaffState {
    staffList: Staff[];
    selectedStaff: Staff | null;
}

const initialState: StaffState = {
    staffList: [],
    selectedStaff: null,
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.staffList.push(action.payload);
        },
        updateStaff: (state, action: PayloadAction<Staff>) => {
            const index = state.staffList.findIndex(s => s.id === action.payload.id);
            if (index !== -1) {
                state.staffList[index] = action.payload;
            }
        },
        selectStaff: (state, action: PayloadAction<string>) => {
            state.selectedStaff = state.staffList.find(s => s.id === action.payload) || null;
        },
        clearSelectedStaff: (state) => {
            state.selectedStaff = null;
        },
    },
});

export const { addStaff, updateStaff, selectStaff, clearSelectedStaff } = staffSlice.actions;
export default staffSlice.reducer;