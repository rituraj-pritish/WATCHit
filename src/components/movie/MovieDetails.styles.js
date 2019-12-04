import styled from 'styled-components';
import sizes from '../../sizes';

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
`;

export const BackdropOverlay = styled.div`
  background: linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%);
  position: absolute;
  top: 0;
  z-index: 4;
  width: 100%;
  height: 90vh;
  color: white;

  @media ${sizes.md} {
    height: 65vh;
  }
`;

export const Icon = styled.i`
  color: ${({ theme, color }) => color || theme.palette.gold};
  cursor: pointer;
  font-size: ${props => props.size + 'rem'};
  margin: ${props => props.margin};
`;

export const DetailsOverviewContainer = styled.div`
  position: relative;
  display: flex;
  bottom: -16rem;

  @media ${sizes.md} {
    display: none;
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Rating = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

export const Summary = styled.div`
  display: none;

  @media ${sizes.md} {
    display: flex;
    flex-direction: column;
  }
`;
