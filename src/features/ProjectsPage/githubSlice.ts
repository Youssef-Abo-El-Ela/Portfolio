import { createSlice } from "@reduxjs/toolkit";
import { GitHubRepo } from "../../types/githubRepos";


const githubSlice = createSlice({
    name: "github",
    initialState: {
        repos: [] as GitHubRepo[],
    },
    reducers: {
        setRepos(state, action) {
            state.repos = action.payload;
        }
    },
});

export const { setRepos } = githubSlice.actions;
export default githubSlice.reducer;