import styled from 'styled-components';
import sizes from '../../sizes';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  background: ${({theme}) => theme.palette.navColor};
  position: fixed;
  top: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
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
  background: ${props => props.bg};
  cursor: pointer;
  border: none;
  outline: none;
  margin: 10px;
  height: 4rem;
  font-size: 1.4rem;
  width: 8.4rem;

  &:hover {
    opacity: 0.8;
  }

  @media ${sizes.md} {
    display: none;
  }
`;

export const IconButton = styled.button`
  background: ${props => props.bg};
  border: none;
  outline: none;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  margin: 10px;
  display: none;

  &:hover {
    opacity: 0.8;
  }

  @media ${sizes.md} {
    display: inline-block;
  }
`;

export const RoundedInput = styled.input`
  background: #eee;
  border: none;
  border-radius: 2rem;
  height: 4.2rem;
  padding: 0 2rem;
  width: ${({width}) =>width ? width + 'px' : '100%' };
  &:focus {
    outline: none;
  }

  @media ${sizes.md} {
    height: 3.2rem;
    width: 75%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const LeftContainer = styled.div`

  margin-left: 4rem;
  color: ${({theme}) => theme.text.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  @media ${sizes.lg} {
    margin-left: 2rem;
  }

  @media ${sizes.md} {
    width :20px;
  }
`;

export const RightContainer = styled.div`

  margin-right: 4rem;

  @media ${sizes.lg} {
    margin-right: 2rem;
  }

  @media ${sizes.md} {
    
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 3.5rem;

  @media ${sizes.md} {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  
`;
