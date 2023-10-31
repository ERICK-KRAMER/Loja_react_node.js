import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Post } from './pages/post'
import { Put } from './pages/Put'
import { Get } from './pages/get'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Get />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/put/:id' element={<Put />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)