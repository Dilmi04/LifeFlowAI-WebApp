import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const DonorDashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <Link to="/" className="dashboard-logo">
            <div className="logo-icon-dash">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span>LifeFlow AI</span>
          </Link>
        </div>
        <div className="header-right">
  <Link to="/donor-profile" className="icon-btn-header" title="Profile">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  </Link>
          <button className="icon-btn-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <Link to="/" className="icon-btn-header">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h1>Welcome back, John!</h1>
          <p>Ready to make a difference today?</p>
        </div>

        {/* Main Grid */}
        <div className="donor-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Availability Status */}
            <div className="status-card available">
              <div className="status-header">
                <h3>Availability Status</h3>
                <span className="status-badge available-badge">Available</span>
              </div>
              <p>Last donation: 6 months ago • Available to donate</p>
            </div>

            {/* Your Blood Group */}
            <div className="blood-group-card">
              <div className="blood-type-display">
                <div className="blood-icon">O+</div>
                <div>
                  <h4>Type O Positive</h4>
                  <p>High Demand for this type</p>
                </div>
              </div>
              <div className="impact-stats">
                <div className="impact-item">
                  <strong>12</strong>
                  <span>Total Donations</span>
                </div>
              </div>
            </div>

            {/* Your Impact */}
            <div className="impact-card">
              <h3>Your Impact</h3>
              <div className="impact-list">
                <div className="impact-detail">
                  <span>Lives Saved</span>
                  <strong>36</strong>
                </div>
                <div className="impact-detail">
                  <span>Hospitals Helped</span>
                  <strong>8</strong>
                </div>
                <div className="impact-detail">
                  <span>Response Rate</span>
                  <strong>95%</strong>
                </div>
              </div>
            </div>

            {/* Emergency Alerts */}
            <div className="alerts-section">
              <div className="section-header">
                <h3>Emergency Alerts</h3>
                <span className="alert-count">2 Active</span>
              </div>

              <Link to="/emergency-alert" className="alert-card urgent-alert">
                <div className="alert-header">
                  <span className="alert-badge urgent">URGENT</span>
                  <span className="alert-time">5-10 min away</span>
                </div>
                <h4>URGENT: O+ Blood Needed</h4>
                <p>City General Hospital</p>
                <p className="alert-details">3 units needed • 2.5 km away</p>
                <div className="alert-actions">
                  <button className="btn-alert accept">Accept Request</button>
                  <button className="btn-alert decline">Decline</button>
                </div>
              </Link>

              <Link to="/emergency-alert" className="alert-card medium-alert">
                <div className="alert-header">
                  <span className="alert-badge medium">MEDIUM</span>
                  <span className="alert-time">15 minutes ago</span>
                </div>
                <h4>O+ Blood Request</h4>
                <p>Metro Health Center</p>
                <p className="alert-details">2 units needed</p>
                <div className="alert-actions">
                  <button className="btn-alert accept-outline">Accept Request</button>
                  <button className="btn-alert decline">Decline</button>
                </div>
              </Link>
            </div>

            {/* Recent Donations */}
            <div className="recent-donations">
              <h3>Recent Donations</h3>
              <div className="donation-list">
                <div className="donation-item">
                  <div>
                    <strong>St. Mary's Hospital</strong>
                    <p>November 15, 2023</p>
                  </div>
                  <span className="status-completed">Completed</span>
                </div>
                <div className="donation-item">
                  <div>
                    <strong>City General Hospital</strong>
                    <p>September 8, 2023</p>
                  </div>
                  <span className="status-completed">Completed</span>
                </div>
                <div className="donation-item">
                  <div>
                    <strong>Memorial Medical Center</strong>
                    <p>July 3, 2023</p>
                  </div>
                  <span className="status-completed">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Next Eligible Donation */}
            <Link to="/donor-profile" className="next-donation-card">
              <h3>Next Eligible Donation</h3>
              <p className="date-large">March 15, 2024</p>
              <p className="days-left">In 45 days</p>
            </Link>

            {/* Nearby Hospitals */}
            <div className="nearby-hospitals">
              <h3>Nearby Hospitals</h3>
              
              <div className="hospital-item">
                <div className="hospital-icon">🏥</div>
                <div className="hospital-info">
                  <strong>City General Hospital</strong>
                  <p>2.5 km away</p>
                </div>
              </div>

              <div className="hospital-item">
                <div className="hospital-icon">🏥</div>
                <div className="hospital-info">
                  <strong>St. Mary's Hospital</strong>
                  <p>4.2 km away</p>
                </div>
              </div>

              <div className="hospital-item">
                <div className="hospital-icon">🏥</div>
                <div className="hospital-info">
                  <strong>Metro Health Center</strong>
                  <p>5.8 km away</p>
                </div>
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

export default DonorDashboard;