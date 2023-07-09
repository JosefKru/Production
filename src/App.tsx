import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import About from './pages/AboutPage/AboutPage'
import Main from './pages/MainPage/MainPage'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense, useContext, useState } from 'react'
import { useTheme } from './theme/UseTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
