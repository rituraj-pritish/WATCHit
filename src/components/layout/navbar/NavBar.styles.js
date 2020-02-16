import styled from 'styled-components';
import sizes from '../../../sizes';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  background: ${({ theme }) => theme.palette.navColor};
  position: fixed;
  top: 0;
  z-index: 15;
  width: 100%;
  height: ${({ theme }) => theme.navHeight.aboveMd};
  font-size: 1.6rem;

  @media ${sizes.md} {
    height: ${({ theme }) => theme.navHeight.belowMd};
  }
`;

export const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 ${({ theme }) => theme.padding.xl};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media ${sizes.md} {
    padding: 0 ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.mob} {
    padding: 0 ${({ theme }) => theme.padding.mob};
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
  width: ${({ width }) => (width ? width + 'px' : '100%')};
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
  color: ${({ theme }) => theme.text.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  @media ${sizes.md} {
    width: 20px;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 3.5rem;

  @media ${sizes.md} {
    font-size: 2rem;
    margin-left: 20px;
  }

  @media ${sizes.sm} {
    display: none;
  }
`;

export const SmallLogo = styled(Link)`
  margin-left: 20px;
  font-size: 1.9rem;
  display: none;

  @media ${sizes.sm} {
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-left: -35px;

  @media ${sizes.md} {
    margin-left: 100px;
  }

  @media ${sizes.mob} {
    margin-left: 60px;
  }
`;

export const UserIcon = styled.i`
  font-size: 27px;
  cursor: pointer;

  @media ${sizes.md} {
    font-size: 30px;
  }
`;

export const IconLinks = styled.div`
  display: inline-block;

  a {
    margin-right: 15px;
    svg {
      width: 25px;
      path {
        fill: white;
      }
    }
  }

  @media ${sizes.md} {
    display: none;
  }
`;
