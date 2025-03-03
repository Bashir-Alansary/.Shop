import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    showSubcart: boolean,
}

const initialState: StateType = {
    showSubcart: false,
}


export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        setShowSubcart: (state, action: PayloadAction<boolean>) => { state.showSubcart = action.payload},
        toggleSubcart: (state) => { state.showSubcart = !state.showSubcart },

      },
})


export const { setShowSubcart, toggleSubcart } = globalSlice.actions;
export default globalSlice.reducer;