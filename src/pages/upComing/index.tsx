import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MovieContent from 'components/content/MovieContent';
import useUpcomingMoviesList from 'queries/movie/UpcomingMoviesList';

const UpComingPage = () => {
  const { data, isFetching, fetchNextPage } = useUpcomingMoviesList();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView || isFetching) return;
    fetchNextPage();
  }, [inView]);

  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>UPCOMING MOVIES</Title>
        </TitleWrapper>
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
};
export default UpComingPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  padding: 20px 60px;
`;

const Title = styled.span`
  color: white;
  font-size: 20px;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
