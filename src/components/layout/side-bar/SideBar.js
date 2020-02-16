import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { SidebarContainer, StyledSidebar } from './SidBar.styles';
import Hamburger from '../../Hamburger';

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
    <SidebarContainer ref={node}>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledSidebar ref={node} open={open}>
        <ul onClick={() => setOpen(false)}>
          <li key='3'>
            <Link to='/'>Home</Link>
          </li>
          <li key='1'>
            <Link to='/discover/movies'>Movies</Link>
          </li>
          <li key='2'>
            <Link to='/discover/tv-shows'>TV Shows</Link>
          </li>
        </ul>
      </StyledSidebar>
    </SidebarContainer>
  );
};

export default SideBar;
