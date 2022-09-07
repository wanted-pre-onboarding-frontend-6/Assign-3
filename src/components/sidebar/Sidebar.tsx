import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [showButton, setShowButton] = useState(false);

  const onScrollToTop = () => {
    window.scroll({
      top: 0,
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <>
      {showButton && (
        <SidebarWrapper>
          <button onClick={onScrollToTop}>TOP</button>
        </SidebarWrapper>
      )}
    </>
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

  & > button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 36px;

    :hover {
      color: #999;
    }
  }
`;
