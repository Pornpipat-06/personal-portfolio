import React from 'react';
import profilePic from '../assets/profile.jpg'; 

function Home() {
  return (
    <div className="page-container home-container">
      <img src={profilePic} alt="My Profile" className="profile-picture" />
      <h1>สวัสดีครับ, ผมนายพรพิพัฒน์ อินทรภิรมย์</h1>
      <p className="subtitle">[ตำแหน่งงานผู้จัดการทีม | Team manager]</p>
      <p>
        ยินดีต้อนรับสู่โปรไฟล์ของผม ที่นี่คือพื้นที่ที่ผมรวบรวมผลงาน ประสบการณ์
        และเส้นทางการเรียนรู้ต่างๆในโลก
      </p>
    </div>
  );
}

export default Home;