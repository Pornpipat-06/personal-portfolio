import React from 'react';

function Education() {
  return (
    <div className="page-container">
      <h1>ประวัติการศึกษา</h1>
      <div className="card">
        <h3>โรงเรียนศรีวิชัยวิทยา</h3>
        <p className="institution">สายสามัญทั่วไป</p>
        <p className="date">[2024] - [2025]</p>
        <p>เกรดเฉลี่ย: 3.53</p>
      </div>
      <div className="card">
        <h3>HogWarts</h3>
        <p className="institution">สาขาวิชาเวทย์มนต์ไฟ</p>
        <p className="date">[2015] - [2020]</p>
        <p>เกรดเฉลี่ย: 4.99</p>
      </div>
    </div>
  );
}

export default Education;