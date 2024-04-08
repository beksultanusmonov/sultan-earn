import { useState } from 'react'
import './App.scss'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// components
import Face from './components/Face'

function App() {
  
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Face/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
