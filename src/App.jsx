import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const Variables = lazy(() => import('pages/Variables/Variables'));
const VariableAll = lazy(() => import('pages/VariableAll/VariableAll'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/variables" element={<VariableAll />} />
            <Route path="/variables/:ID" element={<Variables />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
