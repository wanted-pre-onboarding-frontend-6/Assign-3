import Layout from 'components/layout/Layout';
import HomePage from 'pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now" element={<HomePage />} />
          <Route path="/upcoming" element={<HomePage />} />
          <Route path="/top-rated" element={<HomePage />} />
          <Route path="/movie/detail/:movieId" element={<HomePage />} />
          <Route path="/search" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routing;
