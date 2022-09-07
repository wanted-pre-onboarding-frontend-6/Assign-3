import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spinner from 'components/spinner/Spinner';
import Layout from 'components/layout/Layout';
import HomePage from 'pages/home';

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
              <Route path="/top-rated" element={<HomePage />} />
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
