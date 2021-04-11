import React from 'react';
import {FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/monika-wasilewska-8098921a9/",
  },
  {
    id: 2,
    icon: <FaGithubSquare />,
    url: "https://github.com/pioggia73",
  },
  {
    id: 3,
    icon: <FaTwitterSquare />,
    url: "https://www.linkedin.com/in/monika-wasilewska-8098921a9/",
  },
];

const tempSocialLinks = socialLinks.map((socialLink => {
    return (
        <li key={socialLink.id}>
            <a href={socialLink.url} className='social-link'>
                {socialLink.icon}
            </a>
        </li>
    )
}));

const SocialLinks = ({styleClass}) => {
    return (
        <ul className = {`social-links ${styleClass ? styleClass : ''}`} >
            {tempSocialLinks}
        </ul>
    )
};

export default SocialLinks;
