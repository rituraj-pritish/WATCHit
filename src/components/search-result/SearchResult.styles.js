import styled from 'styled-components';
import sizes from '../../sizes'

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

export const Poster = styled.div`
  width: 200px;
  height: 300px;

  @media ${sizes.lg} {
    width: 160px;
    height: 250px;
  }
`
