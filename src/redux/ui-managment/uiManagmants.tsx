import { createSlice } from "@reduxjs/toolkit";
interface initilaType {
    theme:'light' | 'dark'
}


const initialState : initilaType={
    theme:'light'
}


export const uiReducerSlice = createSlice({
    name:"ui-manager",
    initialState,
    reducers:{
        toggleTheme:(state : initilaType)=>{
            state.theme=(state.theme=='dark' ? 'light' : 'dark')
        }
    }
})

export const {toggleTheme}=uiReducerSlice.actions

const uiManagerReducer=uiReducerSlice.reducer
export default uiManagerReducer