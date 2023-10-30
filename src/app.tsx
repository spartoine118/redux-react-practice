import React from 'react'
import './app.css'
import { useAppSelector, useAppDispatch } from './app/hook'
import { decrement, increment } from './slices/counter-slice'

function App (): JSX.Element {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  )
}

export default App
