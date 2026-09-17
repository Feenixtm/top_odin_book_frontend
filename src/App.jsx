import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home';
import DevHeader from './components/DevHeader';
import SignUp from './components/forms/SignUp';
import Login from './components/forms/Login';

function App() {

  return (
    <BrowserRouter>
      
      <DevHeader/>

      <main className='h-[calc(100vh-3.5rem-1px)] p-4 md:px-8 bg-emerald-200'>

        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path='/sign-up' element={ <SignUp/> }></Route>
          <Route path='/login' element={ <Login/> }></Route>
        </Routes>

      </main>
      
    </BrowserRouter>
  )
}

export default App
