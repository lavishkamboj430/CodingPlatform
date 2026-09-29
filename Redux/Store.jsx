import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Login"
import ThemeSlice from "./Theme"
export const Store = configureStore(
    {
        reducer: {
            UserID: UserSlice,
            UserName: UserSlice,
            Token: UserSlice,
            Theme:ThemeSlice
        }
    }
)