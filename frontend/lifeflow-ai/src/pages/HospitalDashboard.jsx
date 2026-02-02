import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const HospitalDashboard = () => {
  return (
    <div className="dashboard-page hospital-dashboard">
      {/* Header */}
      <header className="dashboard-header hospital-header">
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
          <Link to="/analytics" className="view-analytics-btn">AI Insights</Link>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      <div className="dashboard-container hospital-container">
        {/* Hospital Title */}
        <div className="hospital-title">
          <h1>City General Hospital</h1>
          <p>Managing critical blood supply and donor coordination</p>
        </div>

         <div className="map">      
        <Link to="/live-map" className="view-analytics-btn">Live Map</Link>
       </div>

        <div className="hospital-layout">
          {/* Left Column */}
          <div className="hospital-main">
            {/* Create Emergency Request Card */}
            <Link to="/create-request" className="emergency-request-card">
              <div className="request-card-content">
                <h2>Create Emergency Blood Request</h2>
                <p>AI will instantly analyze donor needs to provide the fastest match</p>
              </div>
              <div className="request-card-icon">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>
            </Link>

            {/* Quick Stats */}
            <div className="hospital-stats">
              <div className="stat-card urgent">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <h3>3</h3>
                  <p>Active Requests</p>
                </div>
              </div>

              <div className="stat-card completed">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <h3>28</h3>
                  <p>Completed This Week</p>
                </div>
              </div>

              <div className="stat-card donors">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <h3>347</h3>
                  <p>Available Donors Nearby</p>
                </div>
              </div>

              <div className="stat-card time">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <h3>11m</h3>
                  <p>AVG Response Time</p>
                </div>
              </div>
            </div>

            {/* Current Active Requests */}
            <div className="active-requests-section">
              <h2>Current Active Requests</h2>

              {/* Request Card 1 - URGENT */}
              <div className="request-card urgent-card">
                <div className="request-header-row">
                  <span className="request-badge urgent-badge">URGENT</span>
                  <h3>Emergency Request #2347</h3>
                </div>
                <p className="request-blood">Blood Type: O+ | 3 units</p>
                <p className="request-time">Created 2 min ago • 50 out of 500 donors contacted</p>

                <div className="request-progress">
                  <div className="progress-item accepted">
                    <div className="progress-count">5</div>
                    <div className="progress-label">Accepted</div>
                  </div>
                  <div className="progress-item pending">
                    <div className="progress-count">25</div>
                    <div className="progress-label">Pending</div>
                  </div>
                  <div className="progress-item declined">
                    <div className="progress-count">3</div>
                    <div className="progress-label">Declined</div>
                  </div>
                </div>

                <Link to="/request-monitoring" className="monitor-btn">Monitor Request</Link>
              </div>

              {/* Request Card 2 - MEDIUM */}
              <div className="request-card medium-card">
                <div className="request-header-row">
                  <span className="request-badge medium-badge">MEDIUM</span>
                  <h3>Emergency Request #1249</h3>
                </div>
                <p className="request-blood">Blood Type: A- | 2 units</p>
                <p className="request-time">Created 45 min ago • 60 out of 800 donors contacted</p>

                <div className="request-progress">
                  <div className="progress-item accepted">
                    <div className="progress-count">8</div>
                    <div className="progress-label">Accepted</div>
                  </div>
                  <div className="progress-item pending">
                    <div className="progress-count">32</div>
                    <div className="progress-label">Pending</div>
                  </div>
                  <div className="progress-item declined">
                    <div className="progress-count">7</div>
                    <div className="progress-label">Declined</div>
                  </div>
                </div>

                <Link to="/request-monitoring" className="monitor-btn">Monitor Request</Link>
              </div>

              {/* Request Card 3 - LOW */}
              <div className="request-card low-card">
                <div className="request-header-row">
                  <span className="request-badge low-badge">LOW</span>
                  <h3>Emergency Request #1243</h3>
                </div>
                <p className="request-blood">Blood Type: B+ | 1 unit</p>
                <p className="request-time">Created 2 hr ago • 80 out of 900 donors contacted</p>

                <div className="request-progress">
                  <div className="progress-item accepted">
                    <div className="progress-count">12</div>
                    <div className="progress-label">Accepted</div>
                  </div>
                  <div className="progress-item pending">
                    <div className="progress-count">48</div>
                    <div className="progress-label">Pending</div>
                  </div>
                  <div className="progress-item declined">
                    <div className="progress-count">15</div>
                    <div className="progress-label">Declined</div>
                  </div>
                </div>

                <Link to="/request-monitoring" className="monitor-btn">Monitor Request</Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon success">✓</div>
                  <div className="activity-content">
                    <h4>Request #2347 fulfilled</h4>
                    <p>3 donors successfully matched for Blood Type O+</p>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon info">👤</div>
                  <div className="activity-content">
                    <h4>New Donor Accepted Request #2347</h4>
                    <p>Mary Jane confirmed to donate at 4:30pm today</p>
                  </div>
                </div>

                <div className="activity-item">
                  <div className="activity-icon cancel">📝</div>
                  <div className="activity-content">
                    <h4>Request #2348 Canceled</h4>
                    <p>Stock was obtained from external source</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hospital-sidebar">
            {/* Blood Stock Status */}
            <div className="sidebar-card stock-card">
              <h3>Blood Stock Status</h3>
              <div className="stock-grid">
                <div className="stock-item low">
                  <span className="stock-type">O+</span>
                  <span className="stock-status">Low</span>
                </div>
                <div className="stock-item critical">
                  <span className="stock-type">A-</span>
                  <span className="stock-status">Critical</span>
                </div>
                <div className="stock-item adequate">
                  <span className="stock-type">AB+</span>
                  <span className="stock-status">Adequate</span>
                </div>
                <div className="stock-item adequate">
                  <span className="stock-type">B-</span>
                  <span className="stock-status">Adequate</span>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="sidebar-card insights-card">
              <div className="insights-header">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
                <h3>All Insights</h3>
              </div>

              <div className="insights-list">
                <div className="insight-item">
                  <h4>Blood Stock Status</h4>
                  <p>Inventory: RPX - 10PM</p>
                </div>
                <div className="insight-item">
                  <h4>In Demand</h4>
                  <p>O+ Blood Type</p>
                </div>
                <div className="insight-item">
                  <h4>Staff Shift</h4>
                  <p>New York South - Operating 11PM to 7AM</p>
                </div>
                <div className="insight-item">
                  <h4>Inventory Total</h4>
                  <p>90 Days - 200 Units</p>
                </div>
              </div>

              <Link to="/analytics" className="view-analytics-btn">View Full Analytics</Link>
            </div>

            {/* Available Donors Map */}
            <div className="sidebar-card map-card">
              <div className="map-header">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h3>Available Donors Map</h3>
              </div>
              <div className="map-visual">
                <svg viewBox="0 0 300 200" className="mini-map">
                  <rect width="300" height="200" fill="#E8F4F8" rx="8"/>
                  <circle cx="150" cy="100" r="6" fill="#E63946"/>
                  <circle cx="100" cy="80" r="4" fill="#5FB89E"/>
                  <circle cx="200" cy="120" r="4" fill="#5FB89E"/>
                  <circle cx="130" cy="140" r="4" fill="#5FB89E"/>
                  <circle cx="180" cy="90" r="4" fill="#5FB89E"/>
                  <text x="150" y="185" fontSize="12" fill="#666" textAnchor="middle">347 Donors Available Nearby</text>
                </svg>
              </div>
            </div>

            {/* Donor Location Distribution */}
            <div className="sidebar-card distribution-card">
              <h3>Donor Location Distribution</h3>
              <div className="distribution-list">
                <div className="distribution-item">
                  <span className="location-name">Downtown Area</span>
                  <div className="distribution-bar">
                    <div className="bar-fill" style={{width: '35%'}}></div>
                  </div>
                  <span className="location-count">89(+)</span>
                </div>

                <div className="distribution-item">
                  <span className="location-name">Midtown</span>
                  <div className="distribution-bar">
                    <div className="bar-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="location-count">213(+)</span>
                </div>

                <div className="distribution-item">
                  <span className="location-name">Outer Blocks</span>
                  <div className="distribution-bar">
                    <div className="bar-fill" style={{width: '25%'}}></div>
                  </div>
                  <span className="location-count">347</span>
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

export default HospitalDashboard;