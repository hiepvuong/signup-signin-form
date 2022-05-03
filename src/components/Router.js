import React from 'react'
import { Routes, Route } from "react-router-dom"
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

function Router() {
  return (
    <Routes>
        <Route path='/signin' element={<SigninForm />} />
        <Route path='/signup' element={<SignupForm />} />
    </Routes>
  )
}

export default Router
