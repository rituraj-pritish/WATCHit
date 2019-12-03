import styled from 'styled-components';
import sizes from '../../sizes'

export const Icon = styled.i`
  color: ${props => props.color};
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

  @media ${sizes.md} {

  }
`

export const Summary = styled.div`
  display: none;

  @media ${sizes.md} {
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: -330px;
  }
`