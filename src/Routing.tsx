import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from 'components/spinner/Spinner';
import Layout from 'components/layout/Layout';

const HomePage = lazy(() => import('pages/home'));
const SearchPage = lazy(() => import('pages/search'));
const NowPlaying = lazy(() => import('pages/nowPlaying'));
const MovieDetail = lazy(() => import('pages/movieDetail'));
const UpComingPage = lazy(() => import('pages/upComing'));
const TopLatedPage = lazy(() => import('pages/topRated'));

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/now" element={<NowPlaying />} />
              <Route path="/upcoming" element={<UpComingPage />} />
              <Route path="/top-rated" element={<TopLatedPage />} />
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
