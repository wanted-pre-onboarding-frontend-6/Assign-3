import styled from 'styled-components';
import MainImage from 'assets/img/flix-main.jpg';
import HomeMoiveList from './components/homeMovieList';

const HomePage = () => {
  return (
    <>
      <HomeMainImageWrapper>
        <img src={MainImage} />
        <div></div>
        <p>
          LET'S WATCH A MOIVE
          <br />
          <span>TOGETHER</span>
        </p>
      </HomeMainImageWrapper>
      <HomeListLine>
        <span>MOVIES LIST</span>
        <hr />
      </HomeListLine>
      <HomeMoiveList />
    </>
  );
};
export default HomePage;

const HomeMainImageWrapper = styled.div`
  position: relative;
  & > img {
    width: 100%;
    height: calc(100vh - 150px);
    object-fit: cover;
  }

  & > div {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100vh - 150px);
    background-color: rgba(255, 255, 255, 0.2);
  }

  & > p {
    width: 100%;
    text-align: center;
    position: absolute;
    font-weight: 900;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 128px;
    color: #feb23f;

    & > span {
      color: #fff;
    }
  }
`;

const HomeListLine = styled.div`
  width: 70%;
  margin: 48px 0;
  display: flex;
  align-items: center;
  flex: 1;
  color: #fff;
  font-size: 32px;
  margin-left: 64px;

  & hr {
    flex: 0 0 100%;
    margin-left: 32px;
    color: red;
    background-color: red;
    height: 3px;
  }
`;
