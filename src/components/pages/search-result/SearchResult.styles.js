import styled from 'styled-components';
import sizes from '../../../sizes';
import { Link } from 'react-router-dom';

export const SearchResultsContainer = styled.div`
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

export const Grid = styled.div`
  display: grid;
  padding: 30px;
  justify-content: center;
  margin: auto;
  grid-gap: 4%;
  grid-template-columns: repeat(auto-fit, 200px);

  @media ${sizes.lg} {
    grid-template-columns: repeat(auto-fit, 160px);
    padding: 20px 0;
  }

  @media ${sizes.md} {
    row-gap: 35px;
  }

  @media ${sizes.mob} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
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
  width: 160px;
  height: 238px;
  transition: 0.4s;
  border-radius: 5px;
`;

export const PosterContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  cursor: pointer;

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
