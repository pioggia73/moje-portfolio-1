import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {AppContext} from '../context/context';

const links = [

    {
        id:1,
        text: 'home',
        url: '/'
    },
    {
        id: 2,
        text: 'projects',
        url: '/projects'
    },
    {
        id: 3,
        text: 'about me',
        url: '/about'
    },
    {
        id: 4,
        text: 'contact',
        url: '/contact'
    }
];

const tempLinks = links.map(link => {
   
    return (
        <li key={link.id}>
            <Link to={link.url}>{link.text}</Link>
        </li>
    )
});

const NavLinks = ({styleClass}) => {
     const {closeOverlay} = useContext(AppContext);
     console.log(closeOverlay)
 
    return (
        <ul className={`page-links ${styleClass? styleClass : ''}`}  onClick = {closeOverlay}>
            {tempLinks}
        </ul>
    )
};

export default NavLinks;