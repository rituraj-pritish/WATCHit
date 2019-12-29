import styled from 'styled-components';
import sizes from '../../../sizes';

export const FooterContainer = styled.div`
  justify-self: flex-end;
  box-sizing: border-box;
  clear: both;
  position: relative;
  padding: 50px 100px;
  width: 100%;
  height: 50vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
    padding: 0;
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
`;

export const SocialIcon = styled.i`
  font-size: 25px;
`

export const Icons = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TmdbDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BigLinks = styled.div`
  display: flex;
  font-size: 1.7rem;
  margin-bottom: 20px;

  a {
    margin: 0 20px;
  }
`

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  align-items: center;
`