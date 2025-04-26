import { createSlice } from "@reduxjs/toolkit";

const educationInitialState = [
    {
        degree: "",
        domain: "",
        university: "",
        start_year: "",
        end_year: "",
    }
]

const educationSlice = createSlice({
    name: "education",
    initialState: educationInitialState,
    reducers: {
        modifyEducation: (state, action) => {
            state.length = 0;
            state.push(...action.payload);
        }
    }
})

export const { modifyEducation } = educationSlice.actions
export default educationSlice.reducer;

// state.length = 0, removing all items from array 