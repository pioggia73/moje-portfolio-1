import React from 'react';
import styled from 'styled-components';
import NavLinks from  '../constants/links';
import { FaBars } from "react-icons/fa";


const Navbar = ({toggleSidebar}) => {

    return (
          <Wrapper>
              <nav className='navbar-container'>
                  <logo>LOGO</logo>
                  <button className='toggle-btn' onClick={toggleSidebar} >
                    <FaBars />
                    </button>
                  <NavLinks styleClass='nav-links' onClick={toggleSidebar}/>
              </nav>
          </Wrapper>
    )
};

const Wrapper = styled.nav`
  .navbar-container {
    padding: 1.2rem 2rem;
    background: var(--clr-dirty-pink);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
  };

  .toggle-btn { display: none; };

  .nav-links { display: flex; };

  .nav-links li {
    list-style: none;
    margin-left: calc(2rem + 2vw);
  };

  .nav-links a:link,
  .nav-links a:visited {
    font-size: 1.2rem;
    text-transform: uppercase;
    position: relative;
    padding: 0.3rem 0;
  };

  .nav-links a:link::before,
  .nav-links a:visited::before,
  .nav-links a:link::after,
  .nav-links a:visited::after {
    content: "";
    width: 100%;
    height: 0.1rem;
    background-color: var(--clr-pink);
    position: absolute;
    left: 0;
    transform: scaleX(0);
    transition: all .5s cubic-bezier(1, 0, 0, 1);
  };

  .nav-links a:link::after,
  .nav-links a:visited::after {
    top: 0;
    transform-origin: left;
  };

  .nav-links a:link::before,
  .nav-links a:visited::before {
    bottom: 0;
    transform-origin: right;
  };

  .nav-links a:hover::before,
  .nav-links a:active::before,
  .nav-links a:hover::after,
  .nav-links a:active::after {
    transform: scaleX(1);
  };

  // ##### media queries 

  @media screen and (max-width: 700px) {

    .toggle-btn { 
      display: block;
      font-size: 1.3rem;
      background: transparent;
      border: none;
      color: var(--clr-white);
      cursor: pointer;
      }

    .nav-links { display: none; }



  }

`



export default Navbar;
