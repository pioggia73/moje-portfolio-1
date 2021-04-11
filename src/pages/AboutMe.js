import React from 'react';
import styled from 'styled-components';
import About from '../images/about-me.jpg';

const AboutMe = () => {
    return (
      <Wrapper>
        <section className="about-section">
          <div className = 'about-text'>
            <h3>About Me</h3>
            <div className="underline"></div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className= 'about-img'>
            <img src={About} alt="about me" />
          </div>
        </section>
      </Wrapper>
    );
};

const Wrapper = styled.section`
  .about-section {
  }

  .about-text {
  }

  .about-img {
    img {
      height: 20rem;
      width: 20rem;
      //border-radius: 50%;
      object-fit: cover;
      position: relative;

      img:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--clr-dirty-blue);
        top: 0;
        left: 0;

      }
    }
  }
`;

export default AboutMe;
