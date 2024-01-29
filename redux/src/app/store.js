import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})