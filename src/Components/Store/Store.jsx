import { configureStore } from "@reduxjs/toolkit";
import { Mode } from "../Redux/Reducer";

export const store = configureStore({
    reducer:{
        mode:Mode,
    }
})