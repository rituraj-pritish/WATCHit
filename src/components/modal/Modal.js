import React, { useRef, useEffect } from 'react';
import { ModalBox, ModalContainer } from './Modal.styles';

const Modal = ({ open, closeModal,children }) => {
  const node = useRef();

  const handleClick = e => {
    if(!node.current.contains(e.target)) {
      // closeModal()
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <ModalContainer open={open}>
      <ModalBox ref={node}>
        {children}
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
