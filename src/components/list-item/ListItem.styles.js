import styled from 'styled-components';

export const ListItemContainer = styled.div`
  width: 100%;
  height: 230px;
  background: white;
  color: black;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
`;

export const Details = styled.div`
  padding: 20px;
  flex-grow: 1;
  position: relative;

  p {
    font-size: 1.5rem;
  }

  a {
    color: inherit;
  }

  h3 {
    margin: 0;
    margin-right: 25px;
    display: inline-block;
  }
`;

export const Buttons = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
`;

export const Icon = styled.i`
  color: ${({isFavourite}) => isFavourite ? 'gold' : 'inherit'};
  background: #fff;
  margin-right: 12px;
  width: 30px;
  height: 30px;
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #c1c1c1;
`;

export const Button = styled.div`
  color: #c1c1c1;
  cursor: pointer;
  margin-right: 25px;

  &:hover ${Icon} {
    color: white;
    background: #c1c1c1;
  }
`;
