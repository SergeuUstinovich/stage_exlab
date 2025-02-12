import './styles/global/App.scss';
import { Suspense, lazy } from 'react';
import { LoaderPage } from './ui/Loader/LoaderPage';
import { Route, Routes } from 'react-router-dom';
import ProfileUser from './pages/ProfileUser/ProfileUser';
import PrivateRoute from './utils/PrivateRoute';
import SearchPage from './pages/SearchPage/SearchPage';
import Restaurant from './components/Restaurant/Restaurant';

const Layout = lazy(() => import('./pages/Layout/Layout'));
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('./components/AboutPage/AboutPage'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className='loader__page'>
            <LoaderPage />
          </div>
        }
      >
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={'services'} element={<AboutPage />} />
            <Route path={'search'} element={<SearchPage />} />
            <Route path={'restaurant/:id'} element={<Restaurant />} />
            <Route
              path={'profile'}
              element={
                <PrivateRoute>
                  <ProfileUser />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
