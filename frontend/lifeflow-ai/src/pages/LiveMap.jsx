import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LiveMap.css';

const LiveMap = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('All Types');

  return (
    <div className="map-page">
      {/* Header */}
      <header className="map-header">
        <Link to="/" className="dashboard-logo">
          <div className="logo-icon-dash">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span>LifeFlow AI</span>
        </Link>
        <Link to="/hospital-dashboard" className="back-link">Back to Dashboard</Link>
      </header>

      <div className="map-container-page">
        <h1>Real-Time Coordination Map</h1>
        <p className="page-subtitle">Live view of hospitals, donors, and emergency requests in the network</p>

        <div className="map-layout">
          {/* Map Section */}
          <div className="map-section">
            {/* Blood Type Filter */}
            <div className="map-controls">
              <label>🩸 Filter by Blood Type:</label>
              <div className="blood-type-filters">
                {['All Types', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(type => (
                  <button
                    key={type}
                    className={`blood-filter-btn ${selectedBloodType === type ? 'active' : ''}`}
                    onClick={() => setSelectedBloodType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Display */}
            <div className="map-display">
              <svg viewBox="0 0 800 600" className="map-svg">
                {/* Map Background */}
                <rect width="800" height="600" fill="#E8F4F8"/>
                
                {/* Roads/Streets */}
                <line x1="100" y1="200" x2="700" y2="200" stroke="#C8D5E0" strokeWidth="3"/>
                <line x1="100" y1="400" x2="700" y2="400" stroke="#C8D5E0" strokeWidth="3"/>
                <line x1="250" y1="50" x2="250" y2="550" stroke="#C8D5E0" strokeWidth="3"/>
                <line x1="550" y1="50" x2="550" y2="550" stroke="#C8D5E0" strokeWidth="3"/>
                
                {/* Hospital Markers (Red) */}
                <g className="hospital-marker">
                  <circle cx="400" cy="300" r="12" fill="#E63946"/>
                  <text x="400" y="335" textAnchor="middle" fontSize="12" fill="#666">City General</text>
                </g>
                
                <g className="hospital-marker">
                  <circle cx="200" cy="150" r="10" fill="#E63946"/>
                  <text x="200" y="180" textAnchor="middle" fontSize="12" fill="#666">St. Mary's</text>
                </g>
                
                {/* Donor Markers (Green) */}
                <g className="donor-marker">
                  <circle cx="300" cy="250" r="8" fill="#06D6A0"/>
                  <circle cx="300" cy="250" r="12" fill="#06D6A0" opacity="0.3"/>
                </g>
                
                <g className="donor-marker">
                  <circle cx="500" cy="350" r="8" fill="#06D6A0"/>
                  <circle cx="500" cy="350" r="12" fill="#06D6A0" opacity="0.3"/>
                </g>
                
                <g className="donor-marker">
                  <circle cx="450" cy="200" r="8" fill="#06D6A0"/>
                  <circle cx="450" cy="200" r="12" fill="#06D6A0" opacity="0.3"/>
                </g>
                
                <g className="donor-marker">
                  <circle cx="600" cy="400" r="8" fill="#06D6A0"/>
                  <circle cx="600" cy="400" r="12" fill="#06D6A0" opacity="0.3"/>
                </g>
                
                {/* Blood Bank Markers (Blue) */}
                <g className="blood-bank-marker">
                  <circle cx="350" cy="450" r="10" fill="#4A7C9E"/>
                  <text x="350" y="480" textAnchor="middle" fontSize="12" fill="#666">Blood Bank</text>
                </g>
                
                {/* On-Route Donors (Orange) */}
                <g className="on-route-marker">
                  <circle cx="380" cy="280" r="8" fill="#FFB703"/>
                  <circle cx="380" cy="280" r="14" fill="#FFB703" opacity="0.2"/>
                  <line x1="380" y1="280" x2="400" y2="300" stroke="#FFB703" strokeWidth="2" strokeDasharray="5,5"/>
                </g>
              </svg>

              {/* Legend */}
              <div className="map-legend">
                <h4>Legend</h4>
                <div className="legend-item">
                  <div className="legend-marker hospital"></div>
                  <span>Hospital (Active Requests)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker donor"></div>
                  <span>Available Donor</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker blood-bank"></div>
                  <span>Blood Bank</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker on-route"></div>
                  <span>On-Route Donor</span>
                </div>
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="geographic-card">
              <h3>Geographic Distribution</h3>
              <p>6 Donors • 3 Hospitals</p>
              <div className="distribution-stats">
                <div className="dist-item">
                  <span className="dist-label">North Zone</span>
                  <span className="dist-count">2 donors</span>
                </div>
                <div className="dist-item">
                  <span className="dist-label">Central Zone</span>
                  <span className="dist-count">3 donors</span>
                </div>
                <div className="dist-item">
                  <span className="dist-label">South Zone</span>
                  <span className="dist-count">1 donor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="map-sidebar">
            {/* Network Statistics */}
            <div className="sidebar-card">
              <h3>Network Statistics</h3>
              
              <div className="stat-row">
                <span>Active Requests</span>
                <strong className="stat-value urgent">3</strong>
              </div>
              <div className="stat-row">
                <span>Available Donors</span>
                <strong className="stat-value success">3</strong>
              </div>
              <div className="stat-row">
                <span>Partner Hospitals</span>
                <strong className="stat-value">3</strong>
              </div>
            </div>

            {/* All Registered Donors */}
            <div className="sidebar-card donors-list">
              <h3>All Registered Donors</h3>
              
              <div className="donor-item available">
                <div className="donor-avatar-small">SC</div>
                <div className="donor-details">
                  <strong>Sarah Chen</strong>
                  <p>O+ Blood Type</p>
                  <span className="donor-distance">📍 2.5 km</span>
                </div>
                <span className="donor-badge available-badge">AVAILABLE</span>
              </div>

              <div className="donor-item on-call">
                <div className="donor-avatar-small">JD</div>
                <div className="donor-details">
                  <strong>John Doe</strong>
                  <p>A+ Blood Type</p>
                  <span className="donor-distance">📍 3.8 km</span>
                </div>
                <span className="donor-badge on-call-badge">ON-CALL</span>
              </div>

              <div className="donor-item available">
                <div className="donor-avatar-small">JA</div>
                <div className="donor-details">
                  <strong>Jane Anderson</strong>
                  <p>B+ Blood Type</p>
                  <span className="donor-distance">📍 5.2 km</span>
                </div>
                <span className="donor-badge available-badge">AVAILABLE</span>
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

export default LiveMap;