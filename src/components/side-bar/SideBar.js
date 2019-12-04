import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { SidebarContainer } from './SidBar.styles';
import Hamburger from '../Hamburger';

const SideBar = ({ open, setOpen }) => {
  const node = useRef();

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setOpen(false));
  return (
    <div ref={node}>
      <Hamburger open={open} setOpen={setOpen} />
      <SidebarContainer ref={node} open={open}>
        <ul>
          <li key='1'>
            <Link to='/discover'>Discover</Link>
          </li>
          <li key='2'>
            <Link to='/'>Link</Link>
          </li>
          <li key='3'>
            <Link to='/'>Link</Link>
          </li>
        </ul>
      </SidebarContainer>
    </div>
  );
};

export default SideBar;
