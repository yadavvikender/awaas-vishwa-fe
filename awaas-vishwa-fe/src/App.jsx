import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NotFound404 from './pages/NotFound404'
import MainLayout from './layouts/MainLayout'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
      
      <Route path='/' element={<HomePage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/register' element={<LoginPage />}/>
      <Route path='/profile' element={<ProfilePage />}/>
      <Route path='/*' element={<NotFound404 />}/>
      </Route>
      
    </Routes>
  )
}

export default App
