import React from 'react'
import { Outlet } from 'react-router-dom'

import NavbarComponent from '../components/NavbarComponent'

const App = () => {
  return (
    <>
        <NavbarComponent />
        <Outlet />
    </>
  )
}

export default App