import styled from 'styled-components';

const HeaderSearch = () => {
  return (
    <div>
      <SearchInput type="text" placeholder="Search movie name" />
      <SearchButton>Search</SearchButton>
    </div>
  );
};
export default HeaderSearch;

const SearchInput = styled.input`
  width: 420px;
  height: 48px;
  padding-left: 16px;
`;

const SearchButton = styled.button`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.fontColor};
  height: 48px;
  width: 76px;

  :hover {
    opacity: 0.5;
  }
`;
