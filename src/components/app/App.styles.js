import styled, { createGlobalStyle } from 'styled-components';
import sizes from '../../sizes'

export const Global = createGlobalStyle`
  html {
  font-size: 10px;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto',sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({theme}) => theme.text.primary};
  }

  a {
    text-decoration: none;
    color: ${({theme,color}) => color ? color : theme.text.primary};
  }

`;

export const AppContainer = styled.div`
  background: ${({theme}) => theme.palette.bgColor};
  font-size: 1.6rem;
  margin-top: 64px;

  @media ${sizes.md} {
    margin-top: 50px;
  }
`;
