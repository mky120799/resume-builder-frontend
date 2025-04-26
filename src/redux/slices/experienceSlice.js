import { createSlice } from "@reduxjs/toolkit";

const experienceInitialState = [
    {
        job_title: '',
        organization_name: '',
        start_year: '',
        end_year: '',
    }
]

const experienceSlice = createSlice({
    name: "experience",
    initialState: experienceInitialState,
    reducers: {
        modifyExperience: (state, action) => {
            state.length = 0;
            state.push(...action.payload);
        }
    }
})

export const { modifyExperience } = experienceSlice.actions;
export default experienceSlice.reducer;