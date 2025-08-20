import React from 'react';
import './Footer.css'; // เราจะสร้างไฟล์ CSS นี้ทีหลัง

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Your Name. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;