import React from 'react';
import { Link } from 'react-router-dom';
import './EmergencyAlert.css';

const EmergencyAlert = () => {
  return (
    <div className="emergency-alert-page">
      {/* Header */}
      <header className="ea-header">
        <Link to="/" className="dashboard-logo">
          <div className="logo-icon-dash">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span>LifeFlow AI</span>
        </Link>
        <Link to="/donor-dashboard" className="back-link">Back to Dashboard</Link>
      </header>

      <div className="ea-container">
        <div className="ea-grid">
          {/* LEFT SIDE - Emergency Request Details */}
          <div className="ea-left">
            {/* Urgent Banner */}
            <div className="ea-urgent-banner">
              <div className="ea-urgent-content">
                <h1>URGENT BLOOD REQUEST</h1>
                <p>Your immediate response needed</p>
              </div>
              <div className="ea-timer">
                <div className="ea-timer-value">10:00</div>
                <div className="ea-timer-label">Time to Respond</div>
              </div>
            </div>

            {/* Hospital Info */}
            <div className="ea-hospital-card">
              <div className="ea-hospital-info">
                <h2>City General Hospital</h2>
                <p>Emergency Department - Open 24/7</p>
              </div>
              <span className="ea-priority-badge">HIGH PRIORITY</span>
            </div>

            {/* Quick Info Grid */}
            <div className="ea-info-grid">
              <div className="ea-info-box">
                <div className="ea-info-icon ea-icon-blood">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
                  </svg>
                </div>
                <div className="ea-info-label">Blood Type Needed</div>
                <div className="ea-info-value">O+</div>
              </div>

              <div className="ea-info-box">
                <div className="ea-info-icon ea-icon-location">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="ea-info-label">Distance</div>
                <div className="ea-info-value">2.3 km</div>
                <div className="ea-info-sub">~7 min drive</div>
              </div>

              <div className="ea-info-box">
                <div className="ea-info-icon ea-icon-time">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="ea-info-label">Request Time</div>
                <div className="ea-info-value">5 min ago</div>
                <div className="ea-info-sub">Jan 11, 2025 - 2:45 PM</div>
              </div>
            </div>

            {/* Request Details */}
            <div className="ea-details-section">
              <h3>Request Details</h3>

              <div className="ea-urgency-card">
                <div className="ea-urgency-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
                  </svg>
                </div>
                <div>
                  <h4>Urgency Level: HIGH</h4>
                  <p>Critical patient requires immediate blood transfusion. Multiple units needed for emergency surgery.</p>
                </div>
              </div>

              <div className="ea-stats-row">
                <div className="ea-stat-item">
                  <div className="ea-stat-label">Units Required</div>
                  <div className="ea-stat-value">2 Units</div>
                </div>
                <div className="ea-stat-item">
                  <div className="ea-stat-label">Donors Contacted</div>
                  <div className="ea-stat-value">18 donors nearby</div>
                </div>
              </div>

              {/* AI Match Score */}
              <div className="ea-ai-card">
                <div className="ea-ai-badge">AI</div>
                <div className="ea-ai-content">
                  <h4>AI Match Score</h4>
                  <p>You are a highly-likely match</p>
                  <div className="ea-match-stats">
                    <div className="ea-match-item">
                      <div className="ea-percentage">98%</div>
                      <div className="ea-match-label">Blood Type Match</div>
                    </div>
                    <div className="ea-match-item">
                      <div className="ea-percentage">95%</div>
                      <div className="ea-match-label">Proximity Score</div>
                    </div>
                    <div className="ea-match-item">
                      <div className="ea-status">Eligible</div>
                      <div className="ea-match-label">Donation Status</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospital Contact */}
              <div className="ea-contact-card">
                <h4>Hospital Contact Information</h4>
                <div className="ea-contact-details">
                  <p><strong>Emergency Line</strong><br/>+1 (555) 123-4567</p>
                  <p><strong>Blood Bank</strong><br/>123 Medical Center Drive, City, State 12345</p>
                  <p><a href="#">Get Directions</a></p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="ea-action-buttons">
                <button className="ea-btn-accept">Accept Request</button>
                <button className="ea-btn-decline">Decline</button>
              </div>

              <p className="ea-disclaimer">By accepting, you agree to donate blood at the specified hospital within 24 hours</p>
            </div>
          </div>

          {/* RIGHT SIDE - Real-Time Monitoring */}
          <div className="ea-right">
            <div className="ea-monitoring-card">
              <h2>Emergency Request #1247</h2>
              <p className="ea-monitoring-subtitle">Real-Time Emergency Alert Status Tracking</p>

              {/* Status Overview */}
              <div className="ea-status-grid">
                <div className="ea-status-item">
                  <div className="ea-status-icon ea-status-blood">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
                    </svg>
                  </div>
                  <div className="ea-status-label">Blood Type</div>
                  <div className="ea-status-value">O+</div>
                </div>

                <div className="ea-status-item">
                  <div className="ea-status-icon ea-status-units">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                    </svg>
                  </div>
                  <div className="ea-status-label">Required</div>
                  <div className="ea-status-value">2 Units</div>
                </div>

                <div className="ea-status-item">
                  <div className="ea-status-icon ea-status-time">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div className="ea-status-label">Time Elapsed</div>
                  <div className="ea-status-value">8 min</div>
                </div>

                <div className="ea-status-item">
                  <div className="ea-status-icon ea-status-donors">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <div className="ea-status-label">Donors Contacted</div>
                  <div className="ea-status-value">18</div>
                </div>
              </div>

              {/* Response Stats */}
              <div className="ea-response-stats">
                <div className="ea-response-box ea-response-accepted">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div className="ea-response-count">4</div>
                  <div className="ea-response-label">Accepted</div>
                </div>

                <div className="ea-response-box ea-response-pending">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  </svg>
                  <div className="ea-response-count">6</div>
                  <div className="ea-response-label">Pending Response</div>
                </div>

                <div className="ea-response-box ea-response-declined">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  <div className="ea-response-count">4</div>
                  <div className="ea-response-label">Declined</div>
                </div>
              </div>

              {/* Search Radius */}
              <div className="ea-search-card">
                <h3>Search Radius</h3>
                <p>Currently searching within 10 km radius</p>
                <button className="ea-expand-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Expand Search to 15km
                </button>
              </div>

              {/* Accepted Donors */}
              <div className="ea-donors-section">
                <h3 className="ea-section-title ea-title-accepted">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Accepted Donors (4)
                </h3>
                
                <div className="ea-donor-card ea-donor-accepted">
                  <div className="ea-donor-avatar ea-avatar-green">JD</div>
                  <div className="ea-donor-info">
                    <h4>John Doe</h4>
                    <p>O+ Blood Type</p>
                    <div className="ea-donor-meta">
                      <span>📍 2.5 km</span>
                      <span>🕐 Accepted 2 hrs ago</span>
                    </div>
                  </div>
                  <span className="ea-donor-status ea-status-confirmed">CONFIRMED</span>
                  <button className="ea-contact-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    Contact Donor
                  </button>
                </div>

                <div className="ea-donor-card ea-donor-accepted">
                  <div className="ea-donor-avatar ea-avatar-green">SJ</div>
                  <div className="ea-donor-info">
                    <h4>Sarah Johnson</h4>
                    <p>O+ Blood Type</p>
                    <div className="ea-donor-meta">
                      <span>📍 3.1 km</span>
                      <span>🕐 Accepted 1 min ago</span>
                    </div>
                  </div>
                  <span className="ea-donor-status ea-status-confirmed">CONFIRMED</span>
                  <button className="ea-contact-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                    Contact Donor
                  </button>
                </div>
              </div>

              {/* Pending Response */}
              <div className="ea-donors-section">
                <h3 className="ea-section-title ea-title-pending">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  </svg>
                  Pending Response (6)
                </h3>
                
                <div className="ea-donor-card ea-donor-pending">
                  <div className="ea-donor-avatar ea-avatar-orange">RW</div>
                  <div className="ea-donor-info">
                    <h4>Robert Wilson</h4>
                    <p>O+ Blood Type</p>
                    <div className="ea-donor-meta">
                      <span>📍 5.2 km</span>
                      <span>🕐 Notified 9 min ago</span>
                    </div>
                  </div>
                  <span className="ea-donor-status ea-status-pending">PENDING</span>
                </div>

                <div className="ea-donor-card ea-donor-pending">
                  <div className="ea-donor-avatar ea-avatar-orange">LA</div>
                  <div className="ea-donor-info">
                    <h4>Lisa Anderson</h4>
                    <p>O+ Blood Type</p>
                    <div className="ea-donor-meta">
                      <span>📍 2.6 km</span>
                      <span>🕐 Notified 1 min ago</span>
                    </div>
                  </div>
                  <span className="ea-donor-status ea-status-pending">PENDING</span>
                </div>
              </div>

              {/* Declined */}
              <div className="ea-donors-section">
                <h3 className="ea-section-title ea-title-declined">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  Declined (4)
                </h3>
                
                <div className="ea-donor-card ea-donor-declined">
                  <div className="ea-donor-avatar ea-avatar-gray">DM</div>
                  <div className="ea-donor-info">
                    <h4>Daniel Martinez</h4>
                    <p>O+ Blood Type</p>
                    <div className="ea-donor-meta">
                      <span>📍 8.4 km</span>
                      <span>🕐 Declined 8 min ago</span>
                    </div>
                  </div>
                  <span className="ea-donor-status ea-status-declined">DECLINED</span>
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

export default EmergencyAlert;