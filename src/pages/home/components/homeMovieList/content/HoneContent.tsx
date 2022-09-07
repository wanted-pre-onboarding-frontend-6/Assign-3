import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const HomeContent = (props: any) => {
  return (
    <Container>
      <PosterWrapper>
        <img src={IMAGE_URL + props.poster_path} alt="movie-poster" />
      </PosterWrapper>
      <DetailContainer>
        <Title>{props.title}</Title>
        <VoteAverageContainer>
          <FontAwesomeIcon icon={['fas', 'star']} />
          <span>{props.vote_average}</span>
        </VoteAverageContainer>
        <Overview>{props.overview}</Overview>
      </DetailContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 610px;
  overflow: hidden;
  margin: 20px;
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

export default HomeContent;
