import './App.scss'
import { Suspense, lazy, useState } from 'react'
import HeaderNavigation from './pages/HeaderNavigation/HeaderNavigation'
import { LoaderPage } from './utils/Loader/LoaderPage'
import { Route, Routes } from 'react-router-dom'
import Modal from './utils/Modal/Modal'


const MainPage = lazy(()=> import('./components/MainPage/MainPage'))
const AboutPage = lazy(()=> import('./components/AboutPage/AboutPage'))

function App() {

  

  return (
    <>
      <header>
        <div className='container'>
          <HeaderNavigation />
        </div>
      </header>
      <main>
        <div className='container'>
        <Suspense fallback={<LoaderPage />}>
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
