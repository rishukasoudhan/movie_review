import React from 'react'
import "./App.css";
import Home from "./Home";
import SingleMovies from './SingleMovies';
import { Error } from './Error';
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/movie/:id" element={<SingleMovies/>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}


export default App;
