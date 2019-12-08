import styled from 'styled-components';
import sizes from '../../../sizes';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  padding: ${({ theme }) => theme.padding.xl};

  @media ${sizes.lg} {
    padding: ${({ theme }) => theme.padding.lg};
  }

  @media ${sizes.md} {
    padding: ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.sm} {
    padding: ${({ theme }) => theme.padding.sm};
  }
`;

export const GradientButton = styled(Link)`
  color: ${props => props.color};
  background: linear-gradient(to right, #c33764, #1d2671);
  border: none;
  outline: none;
  width: 150px;
  cursor: pointer;
  height: 50px;
  font-size: 2rem;
  border-radius: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  margin: 10px 20px;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
