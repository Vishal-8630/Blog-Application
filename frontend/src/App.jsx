import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import NavbarComponent from './components/NavbarComponent'

const App = () => {
  return (
    <>
        <NavbarComponent />
        <ToastContainer />
        <Outlet />
    </>
  )
}

export default App