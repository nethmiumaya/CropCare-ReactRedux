import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Crop {
    id: string;
    commonName: string;
    scientificName: string;
    category: string;
    season: string;
    image: string;
}

interface CropState {
    crops: Crop[];
    selectedCrop: Crop | null;
}

const initialState: CropState = {
    crops: [],
    selectedCrop: null,
};

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        addCrop: (state, action: PayloadAction<Crop>) => {
            state.crops.push(action.payload);
        },
        updateCrop: (state, action: PayloadAction<Crop>) => {
            const index = state.crops.findIndex(crop => crop.id === action.payload.id);
            if (index !== -1) {
                state.crops[index] = action.payload;
            }
        },
        deleteCrop: (state, action: PayloadAction<string>) => {
            state.crops = state.crops.filter(crop => crop.id !== action.payload);
        },
        selectCrop: (state, action: PayloadAction<string>) => {
            state.selectedCrop = state.crops.find(crop => crop.id === action.payload) || null;
        },
        clearSelectedCrop: (state) => {
            state.selectedCrop = null;
        },
    },
});

export const { addCrop, updateCrop, deleteCrop, selectCrop, clearSelectedCrop } = cropSlice.actions;
export default cropSlice.reducer;