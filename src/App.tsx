import './App.scss'
import { Suspense, lazy } from 'react'
import { LoaderPage } from './utils/Loader/LoaderPage'
import { Route, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm/AuthForm'

const Layout = lazy(()=> import('./components/Layout/Layout'))
const MainPage = lazy(()=> import('./components/MainPage/MainPage'))
const AboutPage = lazy(()=> import('./components/AboutPage/AboutPage'))

function App() {

  return (
    <>
      <Suspense fallback={
        <div className='loader__page'>
          <LoaderPage />
        </div>}>
        <Routes>
          <Route path={'*'} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={'services'} element={<AboutPage />} />
          </Route>
          {/* <Route path={'/authoriz'} element={<AuthForm />} /> */}
        </Routes>
      </Suspense>
    </>
  )
}

export default App
