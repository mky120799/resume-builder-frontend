import { createSlice } from "@reduxjs/toolkit";

const bioInitailState = {
    profileImage: "anuragaffection",
    firstName: "",
    lastName: "",
    role: "",
    description: "",
}

const bioSlice = createSlice({
    name: "bio",
    initialState: bioInitailState,
    reducers: {
        modifyBio: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { modifyBio } = bioSlice.actions
export default bioSlice.reducer;




// 01. return action.payload;
// 02. return { ...state, ...action.payload };
// both are doing the same task, learn the difference


// 01. return action.payload;
// Overwrites the entire state with the action payload, potentially discarding other state data.

// 02. return { ...state, ...action.payload };
// Retains existing state and merges in updates from the action payload, preserving non-modified fields.