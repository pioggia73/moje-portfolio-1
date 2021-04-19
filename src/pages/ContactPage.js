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
              <label htmlFor='name' className= 'form-label'>Full Name</label>
            </div>
            <div className="form-group">
              <input 
                type='email'
                name='email'
                id='email'
                className='form-control'
                placeholder='your email...' required
              />
              <label htmlFor='email' className='form-label'>Email Address</label>
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
                    className='btn-sumbit'
                    type='submit'
                >
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
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.8)
      ),
      url(${ContactImg});
    background-position: center;
    background-size: cover;
    height: 100vh;
    padding: calc(2rem + 2vh) calc(1rem + 2vw);
  };

  .form-container {
    width: 50vw;
    margin: 6rem auto 0 auto;
  };

  .form-group {
    input[type="text"],
    input[type="email"],
    textarea {
      font-size: calc(1rem +5vw);
      padding: 1vw 1.5vh;
      border: none;
      border-bottom: 1px solid var(--clr-dirty-pink);
      display: block;
      width: 100%;
      color: var(--clr-white);
      margin-bottom: 5vh;
      background: transparent;
      font-family: inherit;

      &:focus {
        outline: none;
        border: none;
        border-bottom: 1px solid var(--clr-dirty-blue);
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.95);
      }
    }
  };

  input:invalid {
    box-shadow: none;
  };

  input:placeholder-shown + label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.2rem);
  };

  label {
    font-size: 1vw;
    display: block;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--clr-dirty-pink);
    padding: 0 1vw;
  };

  button {
    background: var(--clr-dirty-pink);
    padding: .7rem 2rem;
    display: block;
    border: none;
    color: var(--clr-white);
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 5px;
    box-shadow: 0 .15rem .25rem rgb(110, 156, 152);
    letter-spacing: .3rem;
    font-size: 1rem;
    transition: all .5s ease-in-out;
    margin: 4rem auto 0 auto; 
  };

  button:hover {
    background: var(--clr-pink);
  }

  button:active {
    box-shadow: 0 .45rem .25rem rgba(75, 156, 68, .527);
    transform: translateY(.25rem);
  }

  

 
`;

export default ContactPage;
