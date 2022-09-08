import HomeSideBar from 'pages/home/components/homeMovieList/sidebar/HomeSidebar';
import { useState } from 'react';
import styled from 'styled-components';
import UpComingContent from './components/UpComingContent';

const UpComingPage = () => {
  const [movieListItem, setMovieListItem] = useState<any>([]);
  return (
    <Wrapper>
      <HomeSideBar />
      <UpComingContent movieListItem={movieListItem} setMovieListItem={setMovieListItem} />
    </Wrapper>
  );
};
export default UpComingPage;

const Wrapper = styled.div`
  display: flex;
`;
