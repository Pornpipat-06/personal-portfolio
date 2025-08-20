import React from 'react';

function Experience() {
  return (
    <div className="page-container">
      <h1>ประสบการณ์ทำงาน</h1>
      <div className="card">
        <h3>[ตำแหน่งงาน]</h3>
        <p className="institution">[ชื่อบริษัท]</p>
        <p className="date">[เดือน ปีที่เริ่ม] - [เดือน ปีที่สิ้นสุด]</p>
        <ul>
          <li>[หน้าที่ความรับผิดชอบหลักข้อที่ 1]</li>
          <li>[หน้าที่ความรับผิดชอบหลักข้อที่ 2]</li>
          <li>[ความสำเร็จหรือโปรเจกต์ที่โดดเด่น]</li>
        </ul>
      </div>
      {/* เพิ่มรายการประสบการณ์อื่นๆ ได้ที่นี่ */}
    </div>
  );
}

export default Experience;