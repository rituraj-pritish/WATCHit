import styled from 'styled-components';

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 84%;
  border-radius: 20px;
  margin-bottom: 0.8rem;
`;

export const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;

export const Tooltip = styled.div`
  visibility: hidden;
  width: 100px;
  height: 42px;
  top: 54px;
  left: 50px;
  border-radius: 10px;
  z-index: 1;
  display: inline-block;
  position: absolute;
  background: ${({ theme }) => theme.palette.overlayBg};
`;

export const Added = styled.div`
  position: absolute;
  background: #3ff63f9c;
  padding: 10px;
  font-size: 25px;
  right: 20px;
  top: 0;
  z-index: 1;
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};

  transition: transform 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Add = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.palette.overlayBg};
  padding: 10px;
  font-size: 25px;
  right: 20px;
  top: -50px;
  z-index: 1;
  cursor: pointer;
  display: ${({ show }) => (show ? 'block' : 'none')};

  transition: transform 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Rating = styled.div`
  background: ${({ theme }) => theme.palette.overlayBg};
  color: white;
  position: absolute;
  top: 28px;
  z-index: 1;
  padding: 3px 8px 3px 2px;
  font-size: 14px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  transition: transform 0.3s;
`;
export const CarouselItemContainer = styled.div`
  width: 140px;
  text-align: center;

  &:hover ${CarouselImage} {
    transform: scale(1.1);
  }

  &:hover ${Rating} {
    transform: translateX(-100%);
  }

  &:hover ${Add} {
    transform: translateY(100%);
  }
`;

export const CarouselCard = styled.div``;
