import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import User from './components/User'
import Create from './components/Create'
import Update from './components/Update'


import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<User/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
