import React from "react";

function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="https://www.facebook.com/chandramohan.raj.3511/">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/cmraj07">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/chandraraj99/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/Cmraj07">
          <i className="fa fa-github"></i>
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="">Home</a>

          <a href="">Pricing</a>

          <a href="">About</a>

          <a href="">Contact</a>
        </p>

        <p>Chandra Mohan & Subham &copy; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
