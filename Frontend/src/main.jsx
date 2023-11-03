import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Post } from './pages/AreaAdmin/post'
import { Put } from './pages/AreaAdmin/Put'
import { Get } from './pages/AreaAdmin/Get'
import { Login } from './pages/Login/login'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/get' element={<Get />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/put/:id' element={<Put />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)