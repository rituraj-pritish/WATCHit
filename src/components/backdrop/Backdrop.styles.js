import styled from 'styled-components';
import sizes from '../../sizes';

export const BackdropContainer = styled.div`
  position: relative;
  height: calc(100vh - 64px);

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
  height: calc(100vh - 64px);
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

export const Poster = styled.div`
  min-width: 16rem;
  height: 24rem;
  margin-right: 30px;
`;
