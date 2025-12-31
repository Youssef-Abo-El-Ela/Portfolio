import { createSlice } from "@reduxjs/toolkit";
import { NavBarRoutes } from "../enums/NavBar";


export const routeSlice = createSlice({
    name: "navBarRoute",
    initialState: {
        currentRoute: NavBarRoutes.HOME,
    },
    reducers: {
        changeRoute: (state , action)=>{            
            state.currentRoute = action.payload;
        }
    }
});

export const { changeRoute } = routeSlice.actions;

export default routeSlice.reducer;