import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter-slice'
import toDoReducer from '../to-do-list/slices/to-do-slices'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: toDoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
