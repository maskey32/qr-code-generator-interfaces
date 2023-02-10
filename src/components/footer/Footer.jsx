import React from 'react';
import { FooterStyles } from './FooterStyles';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <FooterStyles>
        <p>{currentYear} &copy; Designed by Chukwuma Ezeobika. All rights reserved.</p>
        <div className="container">
            <h3>Contact</h3>
            <p>+2348035033550</p>
            <p>mezeobika32@gmail.com</p>
        </div>
        <p>Yoke Marketing Nigeria Coding Task.</p>
    </FooterStyles>
  )
}

export default Footer;