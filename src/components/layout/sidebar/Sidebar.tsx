import { useCallback } from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const onTopScrollHandler = useCallback((): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const onBottomScrollHandler = useCallback((): void => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <SidebarWrapper>
      <div onClick={onTopScrollHandler}>TOP</div>
      <div onClick={onBottomScrollHandler}>BOTTOM</div>
    </SidebarWrapper>
  );
};
export default Sidebar;

const SidebarWrapper = styled.div`
  position: fixed;
  background-color: #fff;
  opacity: 0.5;
  bottom: 40%;
  right: 5%;
  width: 120px;
  z-index: 1000;

  & > div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 36px;

    :hover {
      color: #999;
    }
  }
`;
