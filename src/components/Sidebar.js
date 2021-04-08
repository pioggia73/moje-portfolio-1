import React from 'react';
import styled from 'styled-components';
import NavLinks from '../constants/links';
import {FaTimes} from 'react-icons/fa';

const Sidebar = ({isOpen, toggleSidebar} ) => {
    return (
        <Wrapper>
            <aside className = {`sidebar ${isOpen? 'show-sidebar' : ''}`}>
                <div>
                   <button onClick= {toggleSidebar} 
                   className = 'close-btn' >
                       <FaTimes/>
                       </button>
                </div>
                <div>
                    <NavLinks />
                </div>

            </aside>
        </Wrapper>
    )
};

const Wrapper = styled.div`

    .sidebar {
        background: var(--clr-dirty-pink);
        height: 100%;
        width: 40%;
        position: fixed;
        top:0%;
        right: 0%;
        opacity: 0;
        transform: translateX(100%);
        transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        z-index: 200;
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
        right:1rem;
        font-size: 1.5rem;
        cursor: pointer;
    };

    








`

export default Sidebar;
