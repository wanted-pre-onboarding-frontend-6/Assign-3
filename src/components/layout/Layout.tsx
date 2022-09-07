import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Footer from 'components/layout/footer/Footer';
import Header from 'components/layout/header/Header';
import Sidebar from 'components/layout/sidebar/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Sidebar />
        {children}
      </LayoutWrapper>
      <Footer />
    </>
  );
};
export default Layout;

const LayoutWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.subColor};
`;
