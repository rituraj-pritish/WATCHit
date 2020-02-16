import styled from 'styled-components';
import sizes from '../../../sizes';

export const SidebarContainer = styled.div`
  display: none;
  @media ${sizes.md} {
    display: block;
  }
`;

export const StyledSidebar = styled.div`
  position: absolute;
  z-index: 10;
  background: linear-gradient(to right, #1f4037, #99f2c8);
  top: 0;
  left: 0;
  padding-top: 50px;
  width: 280px;
  height: 100vh;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  display: none;

  @media ${sizes.md} {
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
    width: 100%;

    &:hover {
      color: black;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      color: white;
      margin: 0 40px;
      padding: 5px 0;
      width: 100%;
    }
  }
`;
