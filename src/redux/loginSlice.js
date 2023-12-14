
import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice(
    {
        name: 'loginreducer',
        initialState: {
            value: {
                token: null,
            },
        },
        reducers: {
            login: (state, action) => {
                state.value.token = action.payload;
            }
        }
    }
);

export const { login } = loginSlice.actions;
export default loginSlice.reducer;