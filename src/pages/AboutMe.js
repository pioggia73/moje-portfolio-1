import React from 'react';
import styled from 'styled-components';
import About from '../images/about-me.jpg';
import Title from  '../components/Title';

const AboutMe = () => {
    return (
      <Wrapper>
        <section className="about-section">
          <Title title='About me' />

            <article className = 'about-me-container '>
              <div className = 'about-text'>
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
                  <div className='image-container'>
                    <img src={About} alt="about me" />
                  </div>
                </div>
            </article>
        </section>
      </Wrapper>
    );
};

const Wrapper = styled.section`
  .about-section {
    padding: calc(2rem + 2vh) calc(1rem + 2vw);
    position: relative;
  }

  .about-section:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 40%;
    background-color: var(--clr-white); 
    z-index: -1;
  }

  .about-me-container {
    display: flex;
    padding: calc(2rem + 2vh) calc(1rem + 2vw);
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
  }

  .about-text { flex-basis: 40vw;
    p {
      padding: calc(1rem + 2vh) calc(1rem + 2vw);
      font-size: 1.3vw;
    }
  }

  .about-img {
    flex-basis: 40vw;
    display: flex;
    justify-content: center;
  }

  .image-container {
    width: calc(15rem + 10vw);
    height: calc(17rem + 10vh);
    position: relative;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .image-container:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--clr-dirty-pink);
    top: 0;
    left: 0;
    transform: translate(1rem);
    z-index: -1;
    position: absolute;
    border-radius: 50%;
  }

  @media screen and (max-width: 1000px) {
    .about-section { padding: calc(1rem + 2vh) 0; } }

  @media screen and (max-width: 900px) {
    .about-text p { font-size: 1.5vw; } }

  @media screen and (max-width: 750px) {
    .about-me-container { flex-direction: column; }

    .about-text  p {
      font-size: 3vw;
      justify-content: flex-start;
    }
  };

`;

export default AboutMe;
