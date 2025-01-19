import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MonitoryLog {
    id: string;
    logDate: string;
    observation: string;
    image: string;
}

interface MonitoryLogState {
    logs: MonitoryLog[];
    selectedLog: MonitoryLog | null;
}

const initialState: MonitoryLogState = {
    logs: [],
    selectedLog: null,
};

const monitoryLogSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<MonitoryLog>) => {
            state.logs.push(action.payload);
        },
        updateLog: (state, action: PayloadAction<MonitoryLog>) => {
            const index = state.logs.findIndex(log => log.id === action.payload.id);
            if (index !== -1) {
                state.logs[index] = action.payload;
            }
        },
        deleteLog: (state, action: PayloadAction<string>) => {
            state.logs = state.logs.filter(log => log.id !== action.payload);
        },
        selectLog: (state, action: PayloadAction<string>) => {
            state.selectedLog = state.logs.find(log => log.id === action.payload) || null;
        },
        clearSelectedLog: (state) => {
            state.selectedLog = null;
        },
    },
});

export const { addLog, updateLog, deleteLog, selectLog, clearSelectedLog } = monitoryLogSlice.actions;
export default monitoryLogSlice.reducer;