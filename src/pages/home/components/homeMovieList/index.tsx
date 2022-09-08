import { useState } from 'react';
import HomeContent from './content/HomeContent';
import HomeSideBar from './sidebar/HomeSidebar';
import styled from 'styled-components';
import { InfiniteData } from 'react-query';
import { AxiosResponse } from 'axios';

const HomeMoveList = () => {
  const [movieListItem, setMovieListItem] = useState<
    InfiniteData<AxiosResponse<any, any>> | undefined
  >();
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
