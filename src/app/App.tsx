import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )
}

export default App
