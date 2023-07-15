import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'helpers/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <button onClick={toggleTheme}>toggleTheme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
