import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "../layouts/NavBarRouteSlice";
import quoteReducer from "../features/HomePage/quoteSlice";
import blogPageReducer from "../features/BlogPage/BlogPageSlice";
import gitHubReducer from "../features/ProjectsPage/githubSlice";

export const store = configureStore({
    reducer: {
        currentRoute :  routeReducer,
        quote: quoteReducer,
        blogs: blogPageReducer,
        github: gitHubReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch