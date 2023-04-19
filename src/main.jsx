import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
import Profile from './pages/TelaDePerfilEditavel'
import Login from './pages/Login'


import './index.css'
import './pages/TelaDePerfilEditavel.css'
import './pages/MovieGrid.css'
import './pages/Login.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path= '/profile' element={<Profile />} />
          <Route path='/cadastrar' />
          <Route path='/login' element={<Login />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='search' element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
