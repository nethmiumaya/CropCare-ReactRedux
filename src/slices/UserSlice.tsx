import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    email: string;
    role: string;
}

interface UserState {
    userList: User[];
    selectedUser: User | null;
}

const initialState: UserState = {
    userList: [],
    selectedUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.userList.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const index = state.userList.findIndex(u => u.id === action.payload.id);
            if (index !== -1) {
                state.userList[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.userList = state.userList.filter(user => user.id !== action.payload);
        },
        selectUser: (state, action: PayloadAction<string>) => {
            state.selectedUser = state.userList.find(u => u.id === action.payload) || null;
        },
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        },
    },
});

export const { addUser, updateUser, deleteUser, selectUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;