import React from 'react';
import { useParams } from 'react-router-dom';
import useGetMovieDetails from 'queries/movieDetail/Details';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data } = useGetMovieDetails(movieId as string);

  if (!data) {
    return null;
  }

  const Video_url = BASE_SRC + data.videos.results[0].key;
  const Poster_src = VIDEO_SRC + data.poster_path;

  return (
    <Container>
      <MovieTitleContainer>
        <PlayerWrapper>
          <ReactPlayer url={Video_url} playing muted width="100%" height="100%" />
        </PlayerWrapper>
        <TitleWrapper>
          {data.title}
          &nbsp;<span>({data.original_title})</span>&nbsp;&nbsp;
          <span> 평점 : {data.vote_average}</span>
        </TitleWrapper>
        <OverviewWrapper>&nbsp;{data.overview}</OverviewWrapper>
        <TaglineWrapper>{data.tagline}</TaglineWrapper>
        <Divide />
      </MovieTitleContainer>
      <PosterContainer>
        <img src={Poster_src} />
      </PosterContainer>
      <MovieInfoContainer>
        <p>
          production_companies : &nbsp;
          {data.production_companies.map(
            (el: { id: number; name: string; logo_path: string; origin_country: string }) =>
              el.name + ',',
          )}
        </p>
        <p>production_countries : {data.production_countries[0].name}</p>
        <p>release_date : {data.release_date}</p>
        <p>runtime : {data.runtime} 분</p>
        <p>genres : {data.genres.map((el: { id: number; name: string }) => el.name + ',')}</p>
        {data.belongs_to_collection && <p>시리즈 : {data.belongs_to_collection.name}</p>}
        <p>spoken_languages : {data.spoken_languages[0].name}</p>
        <p>popularity : {data.popularity}</p>
        {data.homepage && <a href={data.homepage}>homepage : {data.homepage} </a>}
      </MovieInfoContainer>
    </Container>
  );
};

export default MovieDetail;

const BASE_SRC = process.env.REACT_APP_IMAGE_URL;
const VIDEO_SRC = 'https://www.youtube.com/watch?v=';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const MovieTitleContainer = styled.div`
  width: 100%;
  height: 1000px;
`;
const PlayerWrapper = styled.div`
  position: absolute;
  width: 50%;
  height: 520px;
  left: 5%;
  top: 10%;
`;
const TitleWrapper = styled.div`
  position: absolute;
  width: 771px;
  height: 199px;
  left: 60%;
  top: 12%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;

  color: #ffffff;
  span:nth-child(1) {
    color: #999999;
    font-size: ${props => props.theme.fontSize.xLarge};
  }
  span:nth-child(2) {
    color: #f24e1e;
    font-size: ${props => props.theme.fontSize.xLarge};
  }
`;

const OverviewWrapper = styled.div`
  position: absolute;
  width: 648px;
  height: 433px;
  left: 58%;
  top: 18%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #999999;
`;

const TaglineWrapper = styled.div`
  position: absolute;
  width: 648px;
  height: 433px;
  left: 60%;
  top: 40%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #999999;
`;

const Divide = styled.div`
  position: absolute;
  width: 1741px;
  height: 8px;
  left: 179px;
  top: 47%;

  background: #e81818;
`;

const PosterContainer = styled.div`
  width: 500px;
  margin-left: 8%;
  padding-bottom: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieInfoContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 40%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 58px;

  color: #999999;
`;
