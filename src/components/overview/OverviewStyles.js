import styled from 'styled-components';
import sizes from '../../sizes';

export const Icon = styled.i`
  color: ${({ theme, color }) => color || theme.palette.gold};
  cursor: pointer;
  font-size: ${props => props.size + 'rem'};
  margin: ${props => props.margin};
`;

export const Rating = styled.div`
  display: inline-flex;
  align-items: baseline;
`;

export const Favourite = styled.i`
  cursor: pointer;
  font-size: 30px;
  margin: 10px;
  grid-area: favourite;
  color: ${({ color }) => color && color};
`;

export const OverviewContainer = styled.div`
  display: grid;
  grid-template-areas: 'title title favourite' 'poster overview overview';
  align-items: center;
  row-gap: 1rem;
  column-gap: 2rem;
`;

export const OverviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  grid-area: overview;
`;

export const Poster = styled.div`
  min-width: 16rem;
  height: 24rem;
  grid-area: poster;

  @media ${sizes.xxl} {
    height: 36rem;
  }
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 3.5rem;
`;

export const Read = styled.span`
  cursor: pointer;
`;
