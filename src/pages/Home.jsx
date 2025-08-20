import React from 'react';
import profilePic from '../assets/profile.jpg'; // เอารูปโปรไฟล์ของคุณใส่ใน assets

function Home() {
  return (
    <div className="page-container home-container">
      <img src={profilePic} alt="My Profile" className="profile-picture" />
      <h1>สวัสดีครับ, ผม [ชื่อของคุณ]</h1>
      <p className="subtitle">[ตำแหน่งงานของคุณ, เช่น Full-Stack Developer | UX/UI Enthusiast]</p>
      <p>
        ยินดีต้อนรับสู่โปรไฟล์ของผม ที่นี่คือพื้นที่ที่ผมรวบรวมผลงาน ประสบการณ์
        และเส้นทางการเรียนรู้ในโลกของการพัฒนาซอฟต์แวร์
      </p>
    </div>
  );
}

export default Home;