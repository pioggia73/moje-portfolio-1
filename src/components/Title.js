import React from 'react';
import styled from 'styled-components';

const Title = ({title}) => {
    return (
        <Wrapper>
            <div>
                <h2 className='section-title'>{title || 'default title' }</h2> 
                <div className='underline'></div> 
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.div`

    .section-title {
        color: var(--clr-dirty-pink);
        text-align: center;
    };

    .underline {
        height: .1rem;
        width: 5rem;
        margin: 0 auto 2rem auto;
        background: var(--clr-dirty-pink);
    };

`

export default Title;
