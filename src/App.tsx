import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Counter from './components/Counter'
import './index.scss'
import About from './pages/AboutPage/AboutPage'
import Main from './pages/MainPage/MainPage'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense } from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MainPageAsync />} />
            <Route path='/about' element={<AboutPageAsync />} />
          </Routes>
        </Suspense>
        {/* <Counter /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
