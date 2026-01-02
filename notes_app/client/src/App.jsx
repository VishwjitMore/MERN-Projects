import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Notes from "./components/Notes";
import Create from "./components/Create"
import Update from "./components/Update"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
