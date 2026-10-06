import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screen/Home/Home'
import Navbar from '../Components/Navbar'
import CodeBaseEditor from '../Components/CodeBaseEditor'
import Login from '../Screen/Login/Login'
import SignUp from '../Screen/Register/SignUp'
import NotFound from '../Screen/NotFound/NotFound'
import SignUpOTP from '../Screen/Register/SignUpOTP'
import ForgotPassword from '../Screen/ForgotPassword/ForgotPassword'
import ForgotPasswordOTP from '../Screen/ForgotPassword/ForgotPasswordOtp'
import ChangePassword from '../Screen/ChangePassword/ChangePassword'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coding" element={<CodeBaseEditor />} />
        <Route path="/signup-otp" element={<SignUpOTP />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password-otp" element={<ForgotPasswordOTP />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
