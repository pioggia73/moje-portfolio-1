import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ContactImg from '../images/ContactImg.jpg';

const ContactPage = () => {
    return (
      <Wrapper>
        <section className="contact-section">
          <Title title="Contact Me" />
          <form className="form-container">
            <div className="form-group">
              <input 
                type='text' 
                name='firstName' 
                id='name' 
                className ='form-control'
                placeholder ='your name...' required
            />
              <label for='name' className= 'form-label'>Full Name</label>
            </div>
            <div className="form-group">
              <input 
                type='email'
                name='email'
                id='email'
                className='form-control'
                placeholder='your email...' required
              />
              <label for='email' className='form-label'>Email Address</label>
            </div>
            <div className='form-group'>
                <textarea
                    name='message'
                    className='form-control'
                    row='15'
                    placeholder='your message here...'
                />
            </div>
            <div className='form-group'>
                <button 
                    className='btn'
                    type='submit'
                    value='send'>
                    Submit
                </button>

            </div>
          </form>
        </section>
      </Wrapper>
    );
};

const Wrapper = styled.section`
  .contact-section {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.7)
      ),
      url(${ContactImg});
    background-position: center;
    background-size: cover;
    height: 100vh;
    padding: calc(2rem + 2vh) calc(1rem + 2vw);
  };

  .form-container {
      /* background-color: lime; */
      width: 60vw;
      margin: 0 auto;
  };

  .form-group {
      input,
      textarea {
          font-size: 1vw;
          padding: 1vw 1.5vh;
          border: none;
          border-bottom: 1px solid var(--clr-dirty-pink);
          display: block;
          width: 100%;
          background: transparent;
      }
  }


  
`;

export default ContactPage;
