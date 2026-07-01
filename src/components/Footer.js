import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>ABHISHEK B H</h3>
          <p>Full Stack Developer | AI/ML Engineer</p>
        </div>

        <div className="footer-contact">
          <a href="mailto:abhishekbh0476@gmail.com" className="footer-contact-item">
            <span className="footer-contact-icon">✉️</span>
            abhishekbh0476@gmail.com
          </a>
          <a href="tel:+919353236198" className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            +91 9353236198
          </a>
          <a
            href="https://drive.google.com/file/d/1uT4YK9cMqzzyGcNDutM2N1Cpqt62WGCd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-resume-btn"
          >
            📄 View Resume
          </a>
        </div>

        <div className="footer-year">
          &copy; {new Date().getFullYear()} Abhishek B H. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
