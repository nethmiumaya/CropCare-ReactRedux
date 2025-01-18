import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Field {
    id: string;
    name: string;
    location: string;
    size: string;
    image: string;
    anotherImage: string;
}

interface FieldState {
    fields: Field[];
    selectedField: Field | null;
}

const initialState: FieldState = {
    fields: [],
    selectedField: null,
};

const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        addField: (state, action: PayloadAction<Field>) => {
            state.fields.push(action.payload);
        },
        deleteField: (state, action: PayloadAction<string>) => {
            state.fields = state.fields.filter(field => field.id !== action.payload);
        },
        selectField: (state, action: PayloadAction<string>) => {
            state.selectedField = state.fields.find(field => field.id === action.payload) || null;
        },
        clearSelectedField: (state) => {
            state.selectedField = null;
        },
    },
});

export const { addField, deleteField, selectField, clearSelectedField } = fieldSlice.actions;
export default fieldSlice.reducer;