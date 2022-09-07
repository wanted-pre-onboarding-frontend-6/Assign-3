import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from 'components/spinner/Spinner';
import Layout from 'components/layout/Layout';

const HomePage = lazy(() => import('pages/home'));
const TopRated = lazy(() => import('pages/top-rated'));

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/now" element={<HomePage />} />
              <Route path="/upcoming" element={<HomePage />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/movie/detail/:movieId" element={<HomePage />} />
              <Route path="/search" element={<HomePage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default Routing;
