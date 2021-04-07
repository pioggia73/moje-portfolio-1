import { createGlobalStyle } from "styled-components";
const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

:root {

// ##### COLOURS ##### //
    --clr-pink: #f39189;
    --clr-dirty-pink: #bb8082;
    --clr-dirty-blue: #6e7582;
    --clr-blue: #046582;
    --clr-white: #f7f3e9;


// ##### FONTS ##### //
    --main-font: font-family: 'Open Sans', sans-serif;
    --letter-spacing: .2rem;
    --max-width: 1363px;
};

body {
    font-size: 62.5%;
    font-family: var(--main-font);
    max-width: var(--max-width);
};

a {
    color: var(--clr-white);
    text-decoration: none;
};

h1, h3 {
    color: var(--clr-white);
};

h1{
    font-size: calc(1.5rem + 1vw);
    line-height: 1.5;
};

h3 {
    font-size: calc(1rem + 1vw);
};

// ##### BUTTONS

.btn {
    display: block;
    background-color: var(--clr-dirty-blue);
    align-self: flex-start;
    padding: .7rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    border: none;
    position: relative;
    overflow: hidden; 
};

.btn::after {
    content: '';
    background-color: var(--clr-blue);
    position: absolute;
    
};





























`;

export default Globals;
