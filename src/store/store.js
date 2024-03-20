//conatin whole app state and data 


import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices/todoslice';
const store = configureStore({
    reducer: {
        todoReducer
    },
})

export default store;