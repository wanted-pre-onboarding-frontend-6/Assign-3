import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeSideBar = () => {
  return (
    <HomeSideWrapper>
      <ul>
        <li>popular</li>
        <li>now</li>
        <li>upcoming</li>
        <li>top-rated</li>
      </ul>
      <HomeListButton>
        <Link to="/">
          <p>HOME</p>
        </Link>
        <div>TOP</div>
        <div>BOTTOM</div>
      </HomeListButton>
    </HomeSideWrapper>
  );
};
export default HomeSideBar;

const HomeSideWrapper = styled.div`
  position: sticky;
  width: 340px;
  height: 100vh;
  top: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.fontColor};
  padding: 96px 0;

  & > ul {
    width: 100%;
    margin-bottom: 128px;
  }

  & > ul > li {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 32px 0;
    cursor: pointer;

    :hover {
      background-color: #999;
    }
  }
`;

const HomeListButton = styled.div`
  & > a > p {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  & > div {
    padding: 16px;
    width: 128px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 32px;
    background-color: rgba(255, 255, 255, 0.5);

    :hover {
      background-color: #999;
    }
  }
`;
