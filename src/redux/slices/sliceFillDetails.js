import { createSlice } from "@reduxjs/toolkit";

const fillDetailsInitialState = {
    value: 1
}

// updating value accordig to selected buttons 
// this value is used to render components of fillDetails
const sliceFillDetails = createSlice({
    name: "fillDetails",
    initialState: fillDetailsInitialState,
    reducers: {
        nextComponents: (state, action) => {
            state.value += action.payload;
        },
        previousComponents: (state, action) => {
            state.value -= action.payload
        },
        firstComponents: (state) => {
            state.value = 1;
        },
        switchComponents: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {
    nextComponents, previousComponents, firstComponents, switchComponents
} = sliceFillDetails.actions

export default sliceFillDetails.reducer