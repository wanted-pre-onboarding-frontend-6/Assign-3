import styled from 'styled-components';
import useTopRatedMoviesList from '../../queries/movie/TopRatedMoviesList';
import HomeContent from 'pages/home/components/homeMovieList/content/HoneContent';

const TopRated = () => {
  const data = useTopRatedMoviesList();

  return (
    <Container>
      <TitleWrapper>
        <Title>TOP-RATED MOVIES</Title>
      </TitleWrapper>
      <MovieContainer>
        {data.data?.data &&
          data.data?.data.results.map((data: any, idx: number) => (
            <HomeContent
              key={idx}
              id={data.id}
              poster_path={data.poster_path}
              title={data.title}
              vote_average={data.vote_average}
              overview={data.overview}
            />
          ))}
      </MovieContainer>
    </Container>
  );
};

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

export default TopRated;
