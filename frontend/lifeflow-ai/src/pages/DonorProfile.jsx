import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const DonorProfile = () => {
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    dateOfBirth: '12/05/1998',
    email: 'john.doe@gmail.com',
    gender: 'Male',
    phoneNumber: '+1(996) 234-5900',
    bloodGroup: 'O+',
    location: 'New York, NY 10001',
    weight: '70kg (154 lbs)',
    lastDonation: '15 December 2024',
    nextEligibleDate: '15 March 2025',
    emergencyAlert: true,
    emailNotifications: true,
    pushNotifications: false,
    monthlySummary: true
  });

  const availabilityDays = [
    { day: 'Monday', time: '9:00AM - 5:00PM', enabled: true },
    { day: 'Tuesday', time: '9:00AM - 5:00PM', enabled: true },
    { day: 'Wednesday', time: '9:00AM - 5:00PM', enabled: true },
    { day: 'Thursday', time: '9:00AM - 5:00PM', enabled: true },
    { day: 'Friday', time: '9:00AM - 5:00PM', enabled: true },
    { day: 'Saturday', time: '9:00AM - 5:00PM', enabled: true },
    { day: 'Sunday', time: '9:00AM - 5:00PM', enabled: true }
  ];

  return (
    <div className="dashboard-page profile-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="logo-section">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span>LifeFlow AI</span>
          </div>
        </div>
        <Link to="/donor-dashboard" className="back-to-dashboard">
          ← Back to Dashboard
        </Link>
      </header>

      <div className="dashboard-container">
        <div className="profile-container">
          <h1 className="profile-title">Donor Profile</h1>
          <p className="profile-subtitle">Manage your personal information and preferences</p>

          <div className="profile-grid">
            {/* Personal Information */}
            <div className="profile-section">
              <div className="section-header">
                <h2>Personal Information</h2>
                <button className="edit-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  Edit
                </button>
              </div>

              <div className="profile-avatar-section">
                <div className="profile-avatar">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3>John Doe</h3>
                <p>Donor ID: #DON-2024-1234</p>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <label>Full Name</label>
                  <p>{profile.fullName}</p>
                </div>
                <div className="info-item">
                  <label>Date of Birth</label>
                  <p>{profile.dateOfBirth}</p>
                </div>
                <div className="info-item">
                  <label>Email Address</label>
                  <p>{profile.email}</p>
                </div>
                <div className="info-item">
                  <label>Gender</label>
                  <p>{profile.gender}</p>
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  <p>{profile.phoneNumber}</p>
                </div>
                <div className="info-item">
                  <label>Blood Group</label>
                  <p className="blood-type-badge">{profile.bloodGroup}</p>
                </div>
                <div className="info-item full-width">
                  <label>Location</label>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Grid Donor */}
            <div className="profile-section">
              <h2>Grid Donor</h2>
              <div className="donor-stats-grid">
                <div className="donor-stat">
                  <label>Blood Group</label>
                  <div className="stat-value blood">{profile.bloodGroup}</div>
                </div>
                <div className="donor-stat">
                  <label>Weight</label>
                  <div className="stat-value">{profile.weight}</div>
                </div>
                <div className="donor-stat full-width">
                  <label>Last Donation</label>
                  <div className="stat-value">{profile.lastDonation}</div>
                </div>
                <div className="donor-stat full-width">
                  <label>Next Eligible Date</label>
                  <div className="stat-value highlight">{profile.nextEligibleDate}</div>
                </div>
              </div>
            </div>

            {/* Donation Information */}
            <div className="profile-section">
              <h2>Donation Information</h2>
              <div className="donation-info-grid">
                <div className="info-item">
                  <label>Last Donation</label>
                  <p>{profile.lastDonation}</p>
                </div>
                <div className="info-item">
                  <label>Next Eligible Date</label>
                  <p className="next-date">{profile.nextEligibleDate}</p>
                </div>
                <div className="info-item full-width">
                  <label>Eligibility</label>
                  <p className="eligibility-badge eligible">Eligible</p>
                </div>
              </div>
            </div>

            {/* Availability Schedule */}
            <div className="profile-section">
              <div className="section-header">
                <h2>Availability Schedule</h2>
                <button className="edit-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  Edit
                </button>
              </div>

              <div className="schedule-list">
                {availabilityDays.map((schedule, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-info">
                      <span className="day">{schedule.day}</span>
                      <span className="time">{schedule.time}</span>
                    </div>
                    <label className="toggle-switch small">
                      <input type="checkbox" defaultChecked={schedule.enabled} />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="profile-section">
              <h2>Notification Preferences</h2>
              <div className="notification-list">
                <div className="notification-item">
                  <div>
                    <h4>Emergency Alerts</h4>
                    <p>Receive urgent hospital blood notifications</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={profile.emergencyAlert} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="notification-item">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Get update via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={profile.emailNotifications} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="notification-item">
                  <div>
                    <h4>Push Alerts</h4>
                    <p>Receive live critical alerts</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={profile.pushNotifications} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="notification-item">
                  <div>
                    <h4>Monthly Summary</h4>
                    <p>Monthly report/updates</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked={profile.monthlySummary} />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="profile-section">
              <h2>Privacy & Security</h2>
              <div className="security-list">
                <button className="security-item">
                  <h4>Change Password</h4>
                  <p>Last changed 3 months ago</p>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
                <button className="security-item">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add extra security to your account</p>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
                <button className="security-item">
                  <h4>Privacy Settings</h4>
                  <p>Control who can view your information</p>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Link to="/chatbot" className="chatbot-float">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </Link>
    </div>
  );
};

export default DonorProfile;