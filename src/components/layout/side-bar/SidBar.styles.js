import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: absolute;
  z-index: 10;
  background: linear-gradient( to right, #1f4037 , #99f2c8);
  top: 0;
  left: 0;
  padding: 40px;
  width: 200px;
  height: 100vh;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  a{
    text-decoration: none;
    color: ${({theme}) => theme.text.primary};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
