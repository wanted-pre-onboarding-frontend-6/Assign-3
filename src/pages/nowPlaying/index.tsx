import useNowPlayingMoviesList from 'queries/movie/NowPlayingMoviesList';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MovieContent from 'components/content/MovieContent';

function NowPlaying() {
  const { data, isFetching, fetchNextPage } = useNowPlayingMoviesList();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView || isFetching) return;
    fetchNextPage();
  }, [inView]);

  return (
    <>
      <Container>
        <MovieContainer>
          {data &&
            data.pages?.map(
              (page: { data: { results: any[] } }, i: React.Key | null | undefined) => (
                <React.Fragment key={i}>
                  {page.data.results.map((movie: any) => (
                    <MovieContent key={movie.id} data={movie} />
                  ))}
                </React.Fragment>
              ),
            )}
          <div ref={ref}></div>
        </MovieContainer>
      </Container>
    </>
  );
}
export default NowPlaying;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
