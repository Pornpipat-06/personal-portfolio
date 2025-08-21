import React from 'react';

function Experience() {
  return (
    <div className="page-container">
      <h1>ประสบการณ์ทำงาน</h1>
      <div className="card">
        <h3>ผู้จัดการทีม</h3>
        <p className="institution">Manchester United</p>
        <p className="date">[2020] - [2022]</p>
        <ul>
          <li>คอยดูแลเรื่องการซ้อมต่างๆ</li>
          <li>จัดรูปแบบแผนการเล่นใหม่ๆ</li>
          <li>ได้แชมป์พรีเมียร์ลีก 1 สมัยและแชมป์ยูโรป้า 1 สมัย</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;