import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screen/Home/Home'
import Navbar from '../Components/Navbar'
import CodeBaseEditor from '../Components/CodeBaseEditor'
import Login from '../Screen/Login/Login'
import SignUp from '../Screen/Register/SignUp'
import NotFound from '../Screen/NotFound/NotFound'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coding" element={<CodeBaseEditor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
