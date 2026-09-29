import { createSlice } from "@reduxjs/toolkit";
const ThemeSlice = createSlice(
    {
        name: "ThemeSlice",

        initialState: {
            Theme: true
        },
        reducers: {
            Theme: (state, action) => {
                Theme.state = action.payload
            }
        }
    }
)
export const { Theme } = ThemeSlice.actions
export default ThemeSlice.reducer