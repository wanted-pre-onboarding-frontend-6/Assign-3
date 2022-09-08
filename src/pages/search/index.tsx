import MovieContent from 'components/content/MovieContent';
import { useLocation } from 'react-router-dom';
import useSearchMoviesList from 'queries/movie/SearchMovicesList';
import styled from 'styled-components';
import qs from 'query-string';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MovieResult } from 'types/api/Movie.type';

const SearchPage = () => {
  const SERACH_PARAM = useLocation().search;
  const QUREY_STRING = qs.parse(SERACH_PARAM);
  const { data, isFetching, fetchNextPage } = useSearchMoviesList(QUREY_STRING);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView || isFetching) return;
    fetchNextPage();
  }, [inView]);

  return (
    <Container>
      <TitleWrapper>
        <Title>SEARCH MOVIES</Title>
      </TitleWrapper>
      <MovieContainer>
        {data &&
          data.pages?.map(
            (page: { data: { results: Array<MovieResult> } }, i: React.Key | null | undefined) => (
              <React.Fragment key={i}>
                {page.data.results.map((movie: MovieResult) => (
                  <MovieContent key={movie.id} data={movie} />
                ))}
              </React.Fragment>
            ),
          )}
        <div ref={ref}></div>
      </MovieContainer>
    </Container>
  );
};
export default SearchPage;

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
