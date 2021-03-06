import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from '../context/context';

// const Overlay = ({isOpen}) => {
//     return (
//         <Wrapper>
//             <div className = {`${isOpen ? 'overlay' : ''}`} >

//             </div>
//         </Wrapper>
//     )
// };

const Overlay = () => {

    const {isOpen} = useContext(AppContext);
  return (
    <Wrapper>
      <div className={`${isOpen ? "overlay" : ""}`}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: var(--clr-dirty-blue);
        opacity: .7;
        z-index: 10;
    };

`

export default Overlay;
