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
    line-height: 1.7;
};

a {
    color: var(--clr-white);
    text-decoration: none;
    list-style-type: none;
};

h1, h3 {
    color: var(--clr-white);
};

h1{
    font-size: calc(1.5rem + 1vw);
    line-height: 1.5;
};

h2 { font-size: calc(1.3rem + 1vw) };

h3 {
    font-size: calc(1rem + 1vw);
};

// ##### BUTTONS

.btn:link,
.btn:visited {
    display: inline-block;
    align-self: flex-start;
    padding: .7rem .1rem;
    border-radius: 1px;
    font-size: 1rem;
    position: relative; 
    transition: all .5s ease-in-out;
    letter-spacing: .2rem;
    z-index: 1;
};

.btn:link::after,
.btn:visited::after {
    content: '';
    background-color: var(--clr-dirty-blue);
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    border-radius: 1px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .45s;
    z-index: -1;
};

.btn:hover::after,
.btn:active::after {
    transform: scaleX(1);
    transform-origin: left;
};

.overlay {
    background-color: var(--clr-white);
}





























`;

export default Globals;
