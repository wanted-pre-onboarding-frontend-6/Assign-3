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
          <div onClick={onTopScrollHandler}>TOP</div>
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
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 24px;

    :hover {
      color: #999;
    }
  }
`;
