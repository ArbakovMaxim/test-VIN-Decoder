import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('Layout/Layout'));
const Home = lazy(() => import('pages/Home'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));
const VariablesId = lazy(() => import('pages/VariablesId/VariablesId'));
const VariablesCar = lazy(() => import('pages/VariablesCar/VariablesCar'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/variables" element={<VariablesCar />} />
            <Route path="/variables/:ID" element={<VariablesId />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
