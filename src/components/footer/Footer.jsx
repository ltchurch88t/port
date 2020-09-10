import React from 'react';
import {Link} from 'react-router-dom';

const Footer = props => {
  return (
    <div className="Footer">
      <div class="grey-bg-block"></div>
      <div className="relative footer-container w-100 flex flex-wrap justify-evenly">
        <div className="w-50-l w-100 flex flex-wrap link-container">
          <div className="w-25-l w-80 mh-auto">
            <h4>Social Links</h4>
            <ul>
              <li>
                <a href="//facebook.com/laforrest-church">Facebook</a>
              </li>
              <li>
                <a href="//instagram.com/pushed_tooo_stops">Instagram</a>
              </li>
              <li>
                <a href="//linkedin.com/laforrest-church">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="w-25-l w-80 mh-auto">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-25-l w-80 mh-auto">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href="mailto:cephalodocs@gmail.com">Cephalodocs@gmail.com</a>
              </li>
              <li>
                <a href="tel:9016235760">(901) 623 5760</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-50-l w-100 cta-container flex flex-column">
          <h2>Ready to start your new project?</h2>
          <div className="btnContainer">
            <Link to="/contact" className="mainBtn">
              Let's go
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="">
          Copyright {new Date().getFullYear()} | LaForrest Church
        </p>
      </div>
    </div>
  );
};

export default Footer;
