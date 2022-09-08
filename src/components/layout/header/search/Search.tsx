import { useInput } from 'hooks/useInput';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderSearch = () => {
  const [seachValue, onChangSearchValue, setSearchValue] = useInput('');
  const naviate = useNavigate();

  const onSearchHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    naviate(`/search?query=${seachValue}`);
    setSearchValue('');
  };

  return (
    <form>
      <SearchInput
        type="text"
        placeholder="Search movie name"
        value={seachValue}
        onChange={onChangSearchValue}
      />
      <SearchButton onClick={onSearchHandler}>Search</SearchButton>
    </form>
  );
};
export default HeaderSearch;

const SearchInput = styled.input`
  width: 420px;
  height: 48px;
  padding-left: 16px;
`;

const SearchButton = styled.button`
  background-color: ${props => props.theme.palette.mainColor};
  color: ${props => props.theme.palette.fontColor};
  height: 48px;
  width: 76px;

  :hover {
    opacity: 0.5;
  }
`;
