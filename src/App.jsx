import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/App.css'; // Import CSS หลัก

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet /> {/* เนื้อหาของแต่ละหน้าจะถูกแสดงที่นี่ */}
      </main>
      <Footer />
    </div>
  );
}

export default App;