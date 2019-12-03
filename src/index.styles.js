import styled from 'styled-components';
import sizes from './sizes'

export const BackgroundImage = styled.div`
  position: absolute;
  top: ${props => props.top};
  right: 0;
  left: 0;
  width: 100%;
  height: 90vh;

  @media ${sizes.md} {
    height: 65vh;
    margin-top: -14px;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  right: 0;
  z-index: 4;
  width: 100%;
  height: 90vh;
  color: white;
  background: #000;
  opacity: 0.6;

  @media ${sizes.md} {
    height: 65vh;
    margin: ${props => props.mr}
  }
`;

export const OverlayContent = styled.div`
  color: white;
  position: absolute;
  margin: 30px;
  z-index: 5;
`;

export const SmallImage = styled.div`
  min-width: 16rem;
  height: 24rem;
  margin-right: 30px;
`;
