import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name : 'blog',
    initialState : {
        contentsList : []
    },
    reducers : {
        //전체 컨텐츠 리스트
        setContentsList : (state,action) => {
            state.contentsList = action.payload;
        }
    }
    
});

export const {
    setContentsList
    
} = slice.actions;

export const blogActions = { ...slice.actions };
export default slice.reducer;