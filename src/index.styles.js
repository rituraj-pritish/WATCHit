import styled from 'styled-components';
import sizes from './sizes';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-image: radial-gradient(
    circle,
    rgba(210, 208, 208, 0.53) 0%,
    rgba(210, 208, 208, 0.02) 90%
  );
  margin: 30px 0;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 90vh;

  @media ${sizes.md} {
    height: 65vh;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 4;
  width: 100%;
  height: 90vh;
  color: white;
  background: #000;
  opacity: 0.6;

  @media ${sizes.md} {
    height: 65vh;
  }
`;

export const OverlayContent = styled.div`
  color: white;
  margin: 30px;
  z-index: 4;
  position: absolute;
`;

export const SmallImage = styled.div`
  min-width: 16rem;
  height: 24rem;
  margin-right: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.text.primary)};
`;
