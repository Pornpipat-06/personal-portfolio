import React from 'react';

function Education() {
  return (
    <div className="page-container">
      <h1>ประวัติการศึกษา</h1>
      <div className="card">
        <h3>[ชื่อปริญญา], [สาขาวิชา]</h3>
        <p className="institution">[ชื่อมหาวิทยาลัย]</p>
        <p className="date">[ปีที่เริ่ม] - [ปีที่จบ]</p>
        <p>เกรดเฉลี่ย: [GPAX]</p>
      </div>
       {/* เพิ่มรายการการศึกษาอื่นๆ ได้ที่นี่ */}
    </div>
  );
}

export default Education;