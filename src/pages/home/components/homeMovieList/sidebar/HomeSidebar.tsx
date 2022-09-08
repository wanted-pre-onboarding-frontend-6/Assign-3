import styled from 'styled-components';

const HomeSideBar = () => {
  return (
    <HomeSideWrapper>
      <ul>
        <li>HOME</li>
        <li>popular</li>
        <li>now</li>
        <li>upcoming</li>
        <li>top-rated</li>
      </ul>
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
  color: ${props => props.theme.palette.fontColor};

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
