import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div>TOP</div>
      <div>BOTTOM</div>
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
