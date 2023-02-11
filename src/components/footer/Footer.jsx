import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { FooterStyles } from './FooterStyles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyles>
      <p>
        {currentYear} &copy; Designed by Chukwuma Ezeobika. All rights reserved.
      </p>
      <div className="container">
        <h3>Contact</h3>
        <div className="contact-info">
          <div className="phone">
            <BiPhone />
            <p>+2348035033550</p>
          </div>
          <div className="mail">
            <MdOutlineMail />
            <p>mezeobika32@gmail.com</p>
          </div>
        </div>
      </div>
      <p>Yoke Marketing Nigeria Coding Task.</p>
    </FooterStyles>
  );
};

export default Footer;