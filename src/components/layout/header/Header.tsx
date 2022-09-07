import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderSearch from './search/Search';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/">IMRAB</Link>
      </HeaderLogo>
      <HeaderSearch />
      <HeaderNavList>
        <Link to="/now">
          <li>now</li>
        </Link>
        <Link to="/upcoming">
          <li>upcoming</li>
        </Link>
        <Link to="/top-rated">
          <li>top-rated</li>
        </Link>
      </HeaderNavList>
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${props => props.theme.palette.subColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

const HeaderLogo = styled.div`
  font-family: 'Bubblegum-sans';
  color: ${props => props.theme.palette.mainColor};
  font-size: 76px;
  font-weight: bold;
`;

const HeaderNavList = styled.ul`
  color: ${props => props.theme.palette.fontColor};
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 32px;

  & > a {
    li::after {
      content: '|';
      color: #999;
      margin: 0 1rem;
    }

    :last-child > li::after {
      content: '';
    }
  }
`;
