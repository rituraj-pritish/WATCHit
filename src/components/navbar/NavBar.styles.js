import styled from 'styled-components';
import sizes from '../../sizes';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  background: #1f4037; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #99f2c8,
    #1f4037
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #99f2c8,
    #1f4037
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  position: fixed;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  font-size: 1.6rem;

  @media ${sizes.md} {
    height: 50px;
  }
`;

export const RoundedButton = styled.button`
  padding: 10px;
  border-radius: 2rem;
  background : ${props => props.bg};
  cursor: pointer;
  border: none;
  outline: none;
  margin: 10px;
  height: 4rem;
  width: 6.4rem;

  &:hover {
    opacity: 0.8;
  }

  @media ${sizes.md} {
    height: 3.2rem;
    margin: 5px;

  }
`;

export const RoundedInput = styled.input`
  background: #eee;
  border: none;
  border-radius: 2rem;
  height: 4.2rem;
  padding: 0 2rem;
  width: ${props => props.width && props.width + 'px'};
  &:focus {
    outline: none;
  }

  @media ${sizes.md} {
    height: 3.2rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const LeftContainer = styled.div`
  position: absolute;
  left: 4rem;
  color: black;

  @media ${sizes.lg} {
    left: 2rem;
  }
`;

export const RightContainer = styled.div`
  position: absolute;
  right: 4rem;

  @media ${sizes.lg} {
    right: 2rem;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 3.5rem;
`;
