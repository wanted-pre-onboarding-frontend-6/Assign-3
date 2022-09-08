import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const MovieContent = ({ data }: { data: any }) => {
  return (
    <Container>
      <PosterWrapper>
        <img src={IMAGE_URL + data.poster_path} alt="movie-poster" />
      </PosterWrapper>
      <DetailContainer>
        <Title>{data.title}</Title>
        <VoteAverageContainer>
          <FontAwesomeIcon icon={['fas', 'star']} />
          <span>{data.vote_average}</span>
        </VoteAverageContainer>
        <Overview>{data.overview}</Overview>
      </DetailContainer>
    </Container>
  );
};

export default MovieContent;

const Container = styled.div`
  width: 330px;
  height: 610px;
  margin: 8px;
  overflow: hidden;
`;

const PosterWrapper = styled.div`
  margin-bottom: 4px;
`;

const DetailContainer = styled.div`
  padding: 4px;
`;

const Title = styled.span`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

const VoteAverageContainer = styled.div`
  svg {
    color: orange;
  }

  span {
    margin-left: 4px;
    color: orange;
  }
`;

const Overview = styled.span`
  font-size: 14px;
  color: gray;
`;
