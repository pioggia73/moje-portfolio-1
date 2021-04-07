import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img-1.jpg';
import Banner from './Banner';

const Background = () => {
    return (
       <Wrapper>
           <section className='bcg'>
            <Banner />
           </section>
       </Wrapper>
    )
};

const Wrapper = styled.section`
  .bcg {
    height: 100vh;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, .2),
        rgba(0, 0, 0, .7)
      ),
      url(${heroImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
  }
`;



export default Background;
