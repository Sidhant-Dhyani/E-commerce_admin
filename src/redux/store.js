
import { configureStore } from '@reduxjs/toolkit';
import loginreducer from "../redux/loginSlice";

export default configureStore(
    {
        reducer: {
            loginreducer,
        },
    }
);