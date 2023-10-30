import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../../app/store'

interface ToDoInterface {
  filter: string
  list: Array<{ name: string, checked: boolean }>
}

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    filter: 'all',
    list: [{ name: 'sample to do', checked: false }, { name: 'sample to do 2', checked: true }]
  },
  reducers: {
    checkState: state => {

    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    addToDo: (state, action: PayloadAction<{ name: string, checked: boolean }>) => {
      state.list.push(action.payload)
    }
  }
})

export const { checkState, changeFilter, addToDo } = toDoSlice.actions

export const selectToDo = (state: RootState): ToDoInterface => state.todo

export default toDoSlice.reducer
