import { createSlice } from "@reduxjs/toolkit";

const projectsInitialState = [
    {
        project_name: "",
        tech_stack: "",
        github_link: "",
        live_link: "",
        description: ""
    }
]
const projectsSlice = createSlice({
    name: "projects",
    initialState: projectsInitialState,
    reducers: {
        modifyProjects: (state, action) => {
            state.length = 0;
            state.push(...action.payload);
        }
    }
})

export const { modifyProjects } = projectsSlice.actions;
export default projectsSlice.reducer;