import React, { Suspense, lazy } from 'react'
import './app.css'
import { useAppSelector, useAppDispatch } from './app/hook'
import { decrement, increment } from './slices/counter-slice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App (): JSX.Element {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const ToDo = lazy(async () => await import('./to-do-list/pages/to-do'))
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path='/to-do' element={<ToDo/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
