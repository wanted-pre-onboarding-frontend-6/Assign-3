import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from 'components/spinner/Spinner';
import Layout from 'components/layout/Layout';
import SearchPage from 'pages/search';
import TopRatedPage from 'pages/topRated';

const HomePage = lazy(() => import('pages/home'));
const NowPlaying = lazy(() => import('pages/nowPlaying'));
const MovieDetail = lazy(() => import('pages/movieDetail'));

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/now" element={<NowPlaying />} />
              <Route path="/upcoming" element={<HomePage />} />
              <Route path="/top-rated" element={<TopRatedPage />} />
              <Route path="/movie/detail/:movieId" element={<MovieDetail />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default Routing;
