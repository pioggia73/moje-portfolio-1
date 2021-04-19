import React, {useContext} from 'react';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import {FaTimes} from 'react-icons/fa';
import {AppContext} from '../context/context';

// const Sidebar = ({isOpen, toggleSidebar} ) => {

//     return (
//       <Wrapper>
//         <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
//           <div>
//             <button onClick={toggleSidebar} className="close-btn">
//               <FaTimes />
//             </button>
//           </div>
//           <div>
//             <NavLinks styleClass = {`${isOpen ? "sidebar-links" : ""}`} />
//             <SocialLinks styleClass = {`${isOpen ? 'sidebar-icons' : ''}`} />
//           </div>
//         </aside>
//       </Wrapper>
//     );
// };

const Sidebar = () => {

  const {isOpen, toggleSidebar} = useContext(AppContext);
 
 
  return (
    <Wrapper>
      <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
        <div>
          <button onClick={toggleSidebar} className="close-btn">
            <FaTimes />
          </button>
        </div>
        <div ocClick={toggleSidebar}>
          <NavLinks styleClass={`${isOpen ? "sidebar-links" : ""}`}  />
          <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    background: var(--clr-dirty-pink);
    height: 100%;
    width: 40%;
    position: fixed;
    top: 0%;
    right: 0%;
    opacity: 0;
    transform: translateX(100%);
    transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 200;
    display: grid;
    place-items: center;
  };

  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  };

  .close-btn {
    background: transparent;
    color: var(--clr-white);
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  };

  .sidebar-links li a:link,
  .sidebar-links li a:visited {
    display: block;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    padding: 0.2rem;
    position: relative;
    z-index: 1;
  };

  .sidebar-links li a:link::after,
  .sidebar-links li a:visited::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--clr-dirty-blue);
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all .5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    z-index: -1;
  };

  .sidebar-links li a:hover::after,
  .sidebar-links li a:active::after {
    opacity: 1;
    transform: scaleX(1);
  };

  .sidebar-links li {
    list-style: none;
    animation: slideRight 0.75s ease-in-out 0.3s forwards;
    opacity: 0;
  };

  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  };

  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  };

  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  };

  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  };

  @keyframes slideRight {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  };

  // ######  SOCIAL ICONS

  .sidebar-icons {
    display: flex;
    justify-content: space-between;
  };

  .sidebar-icons li {
    list-style: none;
    margin-top: 1rem;
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  };

  @keyframes slideUp {
    0% {
      transform: translateY(20rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  };

  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.50s;
  };

  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.75s;
  };

  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 1s;
  };

  .social-link {
    font-size: 1.5rem;
    transition: all .5s ease;
  };

  .social-link:hover {
    color: var(--clr-dirty-blue);
  };
`;

export default Sidebar;
