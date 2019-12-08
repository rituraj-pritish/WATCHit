import styled from 'styled-components';

export const AlertsContainer = styled.div`
  position: fixed;
  z-index: 50;
  margin: auto;
  bottom: 5%;
  height: auto;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
`;

export const Alert = styled.div`
  background: ${({ color }) => color};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  font-size: 1.5rem;
  border-radius: 10px;
`;

export const CloseIcon = styled.i`
  cursor: pointer;
  margin-left: 20px;
`;
