import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Activity {
    type: string;
    message: string;
    time: string;
}

interface ActivityState {
    activities: Activity[];
}

const initialState: ActivityState = {
    activities: [],
};

export const fetchActivities = createAsyncThunk('activity/fetchActivities', async () => {
    // Fetch activities from an API or define them statically
    return [
        { type: 'alert', message: 'Disease detected in Tomato field B4', time: '2 hours ago' },
        { type: 'success', message: 'Irrigation completed in Wheat field A2', time: '4 hours ago' },
        { type: 'info', message: 'New crop health report available', time: '6 hours ago' },
    ];
});

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchActivities.fulfilled, (state, action) => {
            state.activities = action.payload;
        });
    },
});

export default activitySlice.reducer;