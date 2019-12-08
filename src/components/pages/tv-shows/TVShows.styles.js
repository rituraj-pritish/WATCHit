import styled from 'styled-components';
import sizes from '../../../sizes';

export const TVShowsContainer = styled.div`
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