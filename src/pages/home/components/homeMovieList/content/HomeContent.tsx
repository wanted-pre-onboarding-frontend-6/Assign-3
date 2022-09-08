import usePopularMoviesList from 'queries/movie/PopularMoviesList';
import React, { FC, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MovieContent from 'components/content/MovieContent';
import { LoadingSpinner } from 'styles/Common';
import { MovieResult } from 'types/api/Movie.type';
import { InfiniteData } from 'react-query';
import { AxiosResponse } from 'axios';

interface HomeContentProps {
  movieListItem: InfiniteData<AxiosResponse<any, any>> | undefined;
  setMovieListItem: SetStateAction<any>;
}

const HomeContent: FC<HomeContentProps> = ({ movieListItem, setMovieListItem }) => {
  const { data, isFetching, fetchNextPage } = usePopularMoviesList();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!data) return;
    console.log(data);
    setMovieListItem(data);
  }, [data]);

  useEffect(() => {
    if (!inView || isFetching) return;
    fetchNextPage();
  }, [inView]);

  return (
    <HomeContentWrapper>
      <>
        {movieListItem &&
          movieListItem.pages?.map(
            (page: { data: { results: Array<MovieResult> } }, i: React.Key | null | undefined) => (
              <React.Fragment key={i}>
                {page.data.results.map((movie: MovieResult) => (
                  <MovieContent key={movie.id} data={movie} />
                ))}
              </React.Fragment>
            ),
          )}
        <div ref={ref}>{isFetching && <LoadingSpinner />}</div>
      </>
    </HomeContentWrapper>
  );
};

export default HomeContent;

const HomeContentWrapper = styled.div`
  min-height: 100vh;
  width: calc(100% - 340px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 64px;
`;
