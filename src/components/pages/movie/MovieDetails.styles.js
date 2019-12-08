import styled from 'styled-components';
import sizes from '../../../sizes';

export const MovieDetailsContainer = styled.div`
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

export const BackdropContainer = styled.div`
  position: relative;
  height: 90vh;

  @media ${sizes.md} {
    height: 65vh;
  }

  @media ${sizes.sm} {
    height: 40vh;
  }
`;

export const Icon = styled.i`
  color: ${({ theme, color }) => color || theme.palette.gold};
  cursor: pointer;
  font-size: ${props => props.size + 'rem'};
  margin: ${props => props.margin};
`

export const Rating = styled.div`
  display: inline-flex;
  align-items: baseline;
`;




export const DetailsOverviewContainer = styled.div`
  position: relative;
  display: flex;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;


export const Poster = styled.div`
  min-width: 16rem;
  height: 24rem;
  margin-right: 30px;
`;