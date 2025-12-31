import { createSlice } from "@reduxjs/toolkit";
import { BlogPost } from "../../types/blogs";


const blogPageSlice = createSlice({
    name: "blogPage",
    initialState: {
        posts: [] as BlogPost[],
    },
    reducers: {
        storePosts: (state, action) => {
            const payload = action.payload;
            const newPost = {
                title : payload.title,
                published_timestamp: payload.published_timestamp,
                description: payload.description,
                url: payload.url,
            }
            state.posts.push(newPost);
        }
    },
});


export const { storePosts } = blogPageSlice.actions;
export default blogPageSlice.reducer;