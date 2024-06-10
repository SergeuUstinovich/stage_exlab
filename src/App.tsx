import './App.scss'
import { Suspense, lazy } from 'react'
import { LoaderPage } from './utils/Loader/LoaderPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'


const MainPage = lazy(()=> import('./components/MainPage/MainPage'))
const AboutPage = lazy(()=> import('./components/AboutPage/AboutPage'))

function App() {

  

  return (
    <>
      <header>
        <div className='container'>
          <Navbar />
        </div>
      </header>
      <main>
        <div className='container'>
        <Suspense fallback={<div className='loader__page'><LoaderPage /></div>}>
          <Routes>
              <Route path={'/'} element={<MainPage />} />
              <Route path={'/services'} element={<AboutPage />} />
          </Routes>
        </Suspense>
        </div>
      </main>
      <footer>
        <div className='container'>

        </div>
      </footer>
    </>
  )
}

export default App
