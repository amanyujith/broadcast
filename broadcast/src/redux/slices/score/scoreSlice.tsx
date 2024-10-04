import { createSlice } from '@reduxjs/toolkit';

interface scoreState {
    value:number
}
const initialState : scoreState={
    value:600
}

export const scoreSlice = createSlice({
    name:'score',
    initialState,
    reducers:{
        setScore:(state,action)=>{
            const score=action.payload
            console.log("scoreslice",score);
            state.value=score;
        }
    }
})
export const {setScore} = scoreSlice.actions;
export default scoreSlice.reducer;
