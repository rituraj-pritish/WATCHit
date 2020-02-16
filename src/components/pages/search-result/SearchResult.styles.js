import styled from 'styled-components';
import sizes from '../../../sizes';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  margin: auto;
  padding: 20px 0;
  grid-column-gap: 30px;
  grid-row-gap: 70px;
  grid-template-columns: repeat(auto-fit, 180px);

  @media ${sizes.lg} {
    grid-template-columns: repeat(auto-fit, 160px);
  }

  @media ${sizes.mob} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PosterOverlay = styled.div`
  position: absolute;
  transform: rotateY(90deg);
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  height: 95%;
  width: 100%;
  transition: 0.2s 0.2s;
`;

export const OverlayContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.text.primary};
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.4s;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 180px;
  height: 270px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
  }

  @media ${sizes.lg} {
    width: 160px;
    height: 250px;
  }
`;
export const PosterDetails = styled.div``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text.primary};
`;
