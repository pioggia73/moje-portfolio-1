import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Banner = () => {
    return (
        <Wrapper>
            <div className='banner'>
                <h3>I am Monika</h3>
                <h1>I am a Front-End developer</h1>
                <Link to='/contact' className='btn'>contact me</Link>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  .banner {
    background-color: var(--clr-dirty-pink);
    width: 40vw;
    height: 35vh;
    padding: calc(1.6rem + 0.6667vw);
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    animation: banner 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  @keyframes banner {
    0% {
      transform: translateX(50rem) rotate(360deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  };

  @media screen and (max-width: 700px) {
    .banner {
      width: 60vw;
      height: 40vh;
    }
  };

  @media screen and (max-width: 500px) {
    .banner {
      width: 70vw;
      height: 40vh;
    }
  };

  @media screen and (max-width: 300px) {
    .banner {
      width: 80vw;
      height: 40vh;
    }
  };
`

export default Banner;
