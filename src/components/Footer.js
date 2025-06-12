import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer" style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem' }}>
      &copy; {new Date().getFullYear()} My Modern React Site
    </footer>
  );
}

export default Footer;