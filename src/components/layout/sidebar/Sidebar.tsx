import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  const [isActiveButton, setIsShowButton] = useState<boolean>(false);

  const onTopScrollHandler = useCallback((): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setIsShowButton(true);
      } else {
        setIsShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <div>
      {isActiveButton && (
        <SidebarWrapper>
          <button onClick={onTopScrollHandler}>TOP</button>
        </SidebarWrapper>
      )}
    </div>
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
