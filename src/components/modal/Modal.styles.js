import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  color: black;
  top: 0;
  height: 100%;
  width: 100%;
  background: #cac3c3a8;
  z-index: 20;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  width: 50%;
  height: 50%;
  background: #eee;
`;
