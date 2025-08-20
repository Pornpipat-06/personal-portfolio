import React from 'react';

function Contact() {
  return (
    <div className="page-container">
      <h1>ข้อมูลติดต่อ</h1>
      <div className="card">
        <p>หากคุณสนใจในผลงานของผม หรือต้องการพูดคุย สามารถติดต่อได้ทางช่องทางด้านล่างนี้เลยครับ</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:youremail@example.com">youremail@example.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">Your Name</a></li>
          <li><strong>GitHub:</strong> <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer">yourusername</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;