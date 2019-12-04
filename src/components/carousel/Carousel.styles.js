import styled from 'styled-components';

export const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 87%;
  border-radius: 20px;
  margin-bottom: 0.8rem;
`;

export const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;
export const CarouselItemContainer = styled.div`
  width: 140px;
  text-align: center;

  &:hover ${CarouselImage} {
    transform: scale(1.1);
  }
`;

export const CarouselCard = styled.div``;
