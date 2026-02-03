import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RequestMonitoring.css';

const RequestMonitoring = () => {
  const [filter, setFilter] = useState('all');

  const requests = [
    { 
      id: '#2347', 
      bloodType: 'O+', 
      units: 3, 
      status: 'Active', 
      priority: 'HIGH', 
      time: '2 min ago', 
      accepted: 5, 
      pending: 25, 
      declined: 3,
      hospital: 'City General Hospital'
    },
    { 
      id: '#2346', 
      bloodType: 'A-', 
      units: 2, 
      status: 'Fulfilled', 
      priority: 'MEDIUM', 
      time: '1 hr ago', 
      accepted: 8, 
      pending: 0, 
      declined: 5,
      hospital: 'St. Mary\'s Hospital'
    },
    { 
      id: '#2345', 
      bloodType: 'B+', 
      units: 4, 
      status: 'Active', 
      priority: 'LOW', 
      time: '3 hrs ago', 
      accepted: 12, 
      pending: 18, 
      declined: 7,
      hospital: 'Metro Health Center'
    },
    { 
      id: '#2344', 
      bloodType: 'AB+', 
      units: 1, 
      status: 'Cancelled', 
      priority: 'LOW', 
      time: '5 hrs ago', 
      accepted: 2, 
      pending: 0, 
      declined: 1,
      hospital: 'Memorial Hospital'
    },
  ];

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(r => r.status.toLowerCase() === filter);

  return (
    <div className="request-monitoring-page">
      {/* Header */}
      <header className="rm-header">
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

      <div className="rm-container">
        <h1>Request Monitoring</h1>
        <p className="rm-subtitle">Track and manage all blood donation requests in real-time</p>

        {/* Filter Tabs */}
        <div className="rm-filter-tabs">
          <button 
            className={filter === 'all' ? 'rm-tab-active' : 'rm-tab'} 
            onClick={() => setFilter('all')}
          >
            All Requests
          </button>
          <button 
            className={filter === 'active' ? 'rm-tab-active' : 'rm-tab'} 
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={filter === 'fulfilled' ? 'rm-tab-active' : 'rm-tab'} 
            onClick={() => setFilter('fulfilled')}
          >
            Fulfilled
          </button>
          <button 
            className={filter === 'cancelled' ? 'rm-tab-active' : 'rm-tab'} 
            onClick={() => setFilter('cancelled')}
          >
            Cancelled
          </button>
        </div>

        {/* Requests Table */}
        <div className="rm-table-wrapper">
          <div className="rm-table-header">
            <div>Request ID</div>
            <div>Hospital</div>
            <div>Blood Type</div>
            <div>Units</div>
            <div>Status</div>
            <div>Priority</div>
            <div>Time</div>
            <div>Responses</div>
            <div>Actions</div>
          </div>

          <div className="rm-table-body">
            {filteredRequests.map((request, index) => (
              <div key={index} className="rm-table-row">
                <div className="rm-request-id">{request.id}</div>
                <div className="rm-hospital">{request.hospital}</div>
                <div className="rm-blood-cell">
                  <span className="rm-blood-badge">{request.bloodType}</span>
                </div>
                <div className="rm-units">{request.units} units</div>
                <div className="rm-status-cell">
                  <span className={`rm-status-badge rm-status-${request.status.toLowerCase()}`}>
                    {request.status}
                  </span>
                </div>
                <div className="rm-priority-cell">
                  <span className={`rm-priority-badge rm-priority-${request.priority.toLowerCase()}`}>
                    {request.priority}
                  </span>
                </div>
                <div className="rm-time">{request.time}</div>
                <div className="rm-responses">
                  <div className="rm-response-mini">
                    <span className="rm-accepted">{request.accepted} ✓</span>
                    <span className="rm-pending">{request.pending} ⏱</span>
                    <span className="rm-declined">{request.declined} ✕</span>
                  </div>
                </div>
                <div className="rm-actions">
                  <Link to="/emergency-alert" className="rm-btn-view">View Details</Link>
                  {request.status === 'Active' && (
                    <button className="rm-btn-cancel">Cancel</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="rm-summary-grid">
          <div className="rm-summary-card">
            <div className="rm-summary-icon rm-icon-blue">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div className="rm-summary-content">
              <h3>Total Requests Today</h3>
              <div className="rm-summary-value">24</div>
              <p className="rm-summary-change rm-positive">+12% from yesterday</p>
            </div>
          </div>

          <div className="rm-summary-card">
            <div className="rm-summary-icon rm-icon-orange">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div className="rm-summary-content">
              <h3>Average Response Time</h3>
              <div className="rm-summary-value">11 min</div>
              <p className="rm-summary-change rm-positive">-3 min improvement</p>
            </div>
          </div>

          <div className="rm-summary-card">
            <div className="rm-summary-icon rm-icon-green">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div className="rm-summary-content">
              <h3>Success Rate</h3>
              <div className="rm-summary-value">94.5%</div>
              <p className="rm-summary-change rm-positive">+2.3% this week</p>
            </div>
          </div>

          <div className="rm-summary-card">
            <div className="rm-summary-icon rm-icon-red">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div className="rm-summary-content">
              <h3>Active Donors</h3>
              <div className="rm-summary-value">347</div>
              <p className="rm-summary-change">Available now</p>
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

export default RequestMonitoring;