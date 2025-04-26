import { createSlice } from "@reduxjs/toolkit";

const keySkillsInitialState = ['','',''];

const keySkillsSlice = createSlice({
    name : 'keySkills',
    initialState : keySkillsInitialState,
    reducers : {
        keySkillsReducer : (state, action) => {
            state.length = 0;
            state.push(...action.payload);
        },
    }
})

export const {keySkillsReducer} = keySkillsSlice.actions;
export default keySkillsSlice.reducer; 
