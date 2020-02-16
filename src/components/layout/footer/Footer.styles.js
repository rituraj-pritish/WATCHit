import styled from 'styled-components';
import sizes from '../../../sizes';

export const FooterContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background: #000;
  margin-top: auto;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 50px ${({ theme }) => theme.padding.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media ${sizes.md} {
    padding: 50px ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.mob} {
    padding: 50px ${({ theme }) => theme.padding.mob};
  }
`;

export const TmdbLogo = styled.img`
  width: 150px;
  height: 70px;
`;

export const Copyright = styled.div`
  font-size: 1.3rem;
  align-self: flex-end;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const SocialIcon = styled.i`
  font-size: 25px;
  margin: 1rem 0;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TmdbDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BigLinks = styled.div`
  display: flex;
  font-size: 1.7rem;
  margin-bottom: 20px;

  a {
    margin: 0 20px;
  }
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  align-items: center;

  @media ${sizes.sm} {
    flex-direction: column;
    height: 200px;
  }
`;
