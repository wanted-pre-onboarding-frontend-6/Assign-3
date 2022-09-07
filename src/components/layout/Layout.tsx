import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';

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
`;
