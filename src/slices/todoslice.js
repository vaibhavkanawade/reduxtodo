import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    list: [],
    inputstate: ""
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            // console.log(state, action);
            state.list.push(action.payload);
        },
        deletetodo: (state, action) => {
            // console.log(state, action);
            state.list = state.list.filter(ele => ele.id !== action.payload);
        },

        changeInput: (state, action) => {
            state.inputstate = action.payload;

        },
        editTodo: (state, action) => {

        }

    }
})



export default todoSlice.reducer;
export const { addtodo, changeInput, deletetodo, editTodo } = todoSlice.actions;