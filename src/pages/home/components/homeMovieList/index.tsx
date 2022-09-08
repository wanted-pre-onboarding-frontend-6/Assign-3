import { useState } from 'react';
import HomeContent from './content/HomeContent';
import HomeSideBar from './sidebar/HomeSidebar';
import styled from 'styled-components';

const HomeMoveList = () => {
  const [movieListItem, setMovieListItem] = useState<any>([]);
  return (
    <HoveMovieWraaper>
      <HomeSideBar />
      <HomeContent movieListItem={movieListItem} setMovieListItem={setMovieListItem} />
    </HoveMovieWraaper>
  );
};
export default HomeMoveList;

const HoveMovieWraaper = styled.div`
  display: flex;
`;
