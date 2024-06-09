import './App.scss'
import { lazy } from 'react'
import HeaderNavigation from './pages/HeaderNavigation/HeaderNavigation'
import { Button } from './utils/Button'


const MainPageAsync = lazy(()=> import('./components/MainPage/MainPage'))
const AboutPageAsync = lazy(()=> import('./components/AboutPage/AboutPage'))

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
        <MainPageAsync />
        </div>
      {/*<Suspense fallback={<Loader />}>
        <Routes>
            <Route path={'/'} element={<MainPageAsync />} />
            <Route path={'/about'} element={<AboutPageAsync />} />
          </Routes>
      </Suspense> */}
      </main>
      <footer>
        <div className='container'>

        </div>
      </footer>
    </>
  )
}

export default App
