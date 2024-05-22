import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    todo : todoReducer
  },
})