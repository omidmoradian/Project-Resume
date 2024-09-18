import React from 'react';
import './footer.css'
import {Instagram, Telegram, Twitter} from "@mui/icons-material";
const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Resume</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>
            <div className='footer__socials'>
                <a href="https://Instagram.com"><Instagram/></a>
                <a href="https://Telegram.com"><Telegram/></a>
                <a href="https://twitter.com"><Twitter/></a>
            </div>
            <div className='footer__copyright'>
                <small>$copy;Resume Tutotrials, All Right</small>
            </div>
        </footer>
    );
};

export default Footer;
