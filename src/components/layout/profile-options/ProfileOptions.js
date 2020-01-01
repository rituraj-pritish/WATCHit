import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux'

import {logout} from '../../../actions/authActions'

const Options = styled.div`
  width: 120px;
  height: auto;
  padding: 10px 0;
  background: #fff;
  position: absolute;
  right: 20px;
  top: 55px;
  color: #484444;
  border-radius: 5px;

  a {
    color: inherit;
    width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;

    li {
      cursor: pointer;
      padding: 5px 10px;

      &:hover {
        color: #fff;
        background: #000;
      }
    }
  }
`;

const ProfileOptions = ({ setShow, profileIcon,logout }) => {
  const node = useRef();
  const handleClick = e => {
    if (e.target === profileIcon.current) return;
    if (!node.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <Options ref={node}>
      <ul onClick={() => setShow(false)}>
        <li>
          <Link to='/user/watchlist'>Watchlist</Link>
        </li>
        <li>
          <Link to='/user/favourites'>Favourites</Link>
        </li>
        <li onClick={logout}>Logout</li>
      </ul>
    </Options>
  );
};

export default connect(null,{logout})(ProfileOptions);
