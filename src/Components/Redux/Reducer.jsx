import { createSlice } from "@reduxjs/toolkit";
export const Mode = createSlice({
    name:"mode",
    initialState:{
        dark:"",
        light:""
    },
    reducers:{
        /** name kush vi rekh skde reducer da  */
        /************************ */
        darkmode:(state,action) =>{
            state.dark=action.payload
        },
        lightmode:(state,action) => {
            state.light=action.payload
        }
    }
})
/**********  darkmode light mode nu export krna through store */
export const {darkmode,lightmode} = Mode.actions;
export default Mode.reducer;