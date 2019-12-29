import styled from 'styled-components';
import sizes from '../../../sizes';

export const Tab = styled.span`
  font-size: 1.3rem;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    font-size: 2rem;
  `}
`;
