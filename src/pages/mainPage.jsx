import React from "react";
import Upload from "../components/upload";
import './mainpage.css';

const UploadPage = () => {
  return (
    <div className="upload-page">
      <div className="sidebar">
        <div className="logo-container">
          <img src="/mainlogo.svg" alt="Logo" />
          <div className="logo-text">Base</div>
        </div>
        <div className="menu">
          <div className="menu-item">
            <img src="/dashboard.svg" alt="Dashboard" />
            <div className="menu-text">Dashboard</div>
          </div>
          <div className="menu-item active">
            <img src="/upload.svg" alt="Upload" />
            <div className="menu-text active-text">Upload</div>
          </div>
          <div className="menu-item">
            <img src="/invoice.svg" alt="Invoice" />
            <div className="menu-text">Invoice</div>
          </div>
          <div className="menu-item">
            <img src="/schedule.svg" alt="Schedule" />
            <div className="menu-text">Schedule</div>
          </div>
          <div className="menu-item">
            <img src="/calender.svg" alt="Calendar" />
            <div className="menu-text">Calendar</div>
          </div>
          <div className="menu-item">
            <img src="/notification.svg" alt="Notification" />
            <div className="menu-text">Notification</div>
          </div>
          <div className="menu-item">
            <img src="/settings.svg" alt="Settings" />
            <div className="menu-text">Settings</div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Upload />
      </div>
    </div>
  );
};

export default UploadPage;
