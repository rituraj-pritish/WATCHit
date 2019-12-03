import styled, { createGlobalStyle } from 'styled-components';
import sizes from '../../sizes'

export const Global = createGlobalStyle`
  html {
  font-size: 10px;
  background: #c31432;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #240b36, #c31432);
  background: linear-gradient(to right, #240b36, #c31432);
  color: white;
  overflow-x: hidden;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto',sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export const AppContainer = styled.div`
  margin-top: 64px;
  padding: 0 30px;
  font-size: 1.6rem;
  
`;
