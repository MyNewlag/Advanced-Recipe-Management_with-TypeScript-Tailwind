import { createSlice } from "@reduxjs/toolkit";

type themeType = 'light' | 'dark'
type initilaType ={
    theme:themeType
}

const initialState : initilaType={
    theme:localStorage.getItem('theme') as themeType
}


export const uiReducerSlice = createSlice({
    name:"ui-manager",
    initialState,
    reducers:{
        toggleTheme:(state : initilaType)=>{
            const newTheme=(state.theme=='dark' ? 'light' : 'dark')
            state.theme=newTheme
            localStorage.setItem("theme",newTheme)
        }
    }
})

export const {toggleTheme}=uiReducerSlice.actions

const uiManagerReducer=uiReducerSlice.reducer
export default uiManagerReducer




// import { createSlice } from "@reduxjs/toolkit";

// type initilaType ={
//     theme:'light' | 'dark'
// }


// const initialState : initilaType={
//     theme:localStorage.getItem('theme') as 'light' | 'dark'
// }


// export const uiReducerSlice = createSlice({
//     name:"ui-manager",
//     initialState,
//     reducers:{
//         toggleTheme:(state : initilaType)=>{
//             const newTheme=(state.theme=='dark' ? 'light' : 'dark')
//             state.theme=newTheme
//             localStorage.setItem("theme",newTheme)
//         }
//     }
// })

// export const {toggleTheme}=uiReducerSlice.actions

// const uiManagerReducer=uiReducerSlice.reducer
// export default uiManagerReducer