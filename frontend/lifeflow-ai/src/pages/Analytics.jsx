import React from 'react';
import { Link } from 'react-router-dom';
import './Analytics.css';

const Analytics = () => {
  return (
    <div className="analytics-page">
      {/* Header */}
      <header className="analytics-header">
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

      <div className="analytics-container">
        <h1>AI Insights & Analytics</h1>
        <p className="page-subtitle">Data-driven insights to optimize your blood coordination</p>

        <div className="analytics-layout">
          {/* Left Column */}
          <div className="analytics-left">
            {/* Key Metrics */}
            <div className="metrics-grid">
              <div className="metric-card red">
                <div className="metric-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <div className="metric-value">94.7%</div>
                <div className="metric-label">Success Rate This Month</div>
              </div>

              <div className="metric-card blue">
                <div className="metric-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="metric-value">11 min</div>
                <div className="metric-label">Average Response Time</div>
              </div>

              <div className="metric-card green">
                <div className="metric-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div className="metric-value">347</div>
                <div className="metric-label">Donors Nearby</div>
              </div>

              <div className="metric-card orange">
                <div className="metric-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div className="metric-value">68%</div>
                <div className="metric-label">Most-Requested Type</div>
              </div>
            </div>

            {/* Most Requested Blood Types */}
            <div className="chart-card">
              <h2>Most Requested Blood Types</h2>
              <div className="blood-types-chart">
                <div className="blood-type-bar">
                  <div className="bar-header">
                    <span className="blood-type-badge o-positive">O+</span>
                    <span className="percentage">38%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill red" style={{width: '38%'}}></div>
                  </div>
                </div>

                <div className="blood-type-bar">
                  <div className="bar-header">
                    <span className="blood-type-badge a-positive">A+</span>
                    <span className="percentage">28%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill blue" style={{width: '28%'}}></div>
                  </div>
                </div>

                <div className="blood-type-bar">
                  <div className="bar-header">
                    <span className="blood-type-badge b-positive">B+</span>
                    <span className="percentage">18%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill green" style={{width: '18%'}}></div>
                  </div>
                </div>

                <div className="blood-type-bar">
                  <div className="bar-header">
                    <span className="blood-type-badge ab-positive">AB+</span>
                    <span className="percentage">10%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill orange" style={{width: '10%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Request Trends */}
            <div className="chart-card">
              <h2>Weekly Request Trends</h2>
              <div className="weekly-chart">
                {[
                  { day: 'Monday', value: 12, max: 15 },
                  { day: 'Tuesday', value: 8, max: 15 },
                  { day: 'Wednesday', value: 15, max: 15 },
                  { day: 'Thursday', value: 11, max: 15 },
                  { day: 'Friday', value: 20, max: 20 },
                  { day: 'Saturday', value: 18, max: 20 },
                  { day: 'Sunday', value: 14, max: 20 }
                ].map((item, index) => (
                  <div key={index} className="day-bar">
                    <div className="day-label">{item.day}</div>
                    <div className="day-bar-container">
                      <div className="day-bar-fill" style={{height: `${(item.value / item.max) * 100}%`}}>
                        <span className="day-value">{item.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peak Demand Times */}
            <div className="chart-card">
              <h2>Peak Demand Times</h2>
              <div className="demand-times">
                <div className="demand-item high">
                  <div className="demand-badge high-badge">HIGH</div>
                  <div className="demand-details">
                    <strong>Weekends</strong>
                    <p>6:00 PM - 10:00 PM</p>
                    <span className="demand-note">Average 8 requests per hour</span>
                  </div>
                </div>

                <div className="demand-item medium">
                  <div className="demand-badge medium-badge">MEDIUM</div>
                  <div className="demand-details">
                    <strong>Friday Evening/Evening</strong>
                    <p>6:00 PM - 09:00 PM</p>
                    <span className="demand-note">Average 6 requests per hour</span>
                  </div>
                </div>

                <div className="demand-item low">
                  <div className="demand-badge low-badge">LOW</div>
                  <div className="demand-details">
                    <strong>Weekday morning</strong>
                    <p>6:00 AM - 12:00 PM</p>
                    <span className="demand-note">Average 2 requests per hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="analytics-right">
            {/* AI Recommendations */}
            <div className="recommendations-card">
              <div className="card-header ai-header">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
                <h2>AI Recommendations</h2>
              </div>

              <div className="recommendation-item">
                <div className="rec-icon">💡</div>
                <div>
                  <strong>Optimize Stock Levels</strong>
                  <p>Increase O+ and A- inventory by 30% for best readiness during weekends</p>
                </div>
              </div>

              <div className="recommendation-item">
                <div className="rec-icon">⏰</div>
                <div>
                  <strong>Best Request Times</strong>
                  <p>Schedule non-urgent requests on weekday mornings for faster response times</p>
                </div>
              </div>

              <div className="recommendation-item">
                <div className="rec-icon">📊</div>
                <div>
                  <strong>Optimize Stock Levels</strong>
                  <p>15+ donor events nearby. Consider organizing a team to join and recruit</p>
                </div>
              </div>
            </div>

            {/* Response Time Analysis */}
            <div className="chart-card">
              <h2>Response Time Analysis</h2>
              
              <div className="response-time-item high-priority">
                <div className="rt-header">
                  <span>High Priority Requests</span>
                  <strong>8 min</strong>
                </div>
                <div className="rt-bar">
                  <div className="rt-fill" style={{width: '53%'}}></div>
                </div>
                <p className="rt-note">On target (goal: less than 10 min)</p>
              </div>

              <div className="response-time-item medium-priority">
                <div className="rt-header">
                  <span>Medium Priority Requests</span>
                  <strong>12min</strong>
                </div>
                <div className="rt-bar">
                  <div className="rt-fill" style={{width: '60%'}}></div>
                </div>
                <p className="rt-note">On target (goal: less than 20 min)</p>
              </div>

              <div className="response-time-item low-priority">
                <div className="rt-header">
                  <span>Low Priority Requests</span>
                  <strong>16min</strong>
                </div>
                <div className="rt-bar">
                  <div className="rt-fill" style={{width: '40%'}}></div>
                </div>
                <p className="rt-note">On target (goal: less than 40 min)</p>
              </div>
            </div>

            {/* Donor Location Distribution */}
            <div className="chart-card">
              <h2>Donor Location Distribution</h2>
              <div className="location-distribution">
                <div className="location-item">
                  <span className="location-label">0-5 km radius</span>
                  <div className="location-bar">
                    <div className="location-fill" style={{width: '42%'}}></div>
                    <span className="location-count">147 donors</span>
                  </div>
                  <span className="location-percentage">42%</span>
                </div>

                <div className="location-item">
                  <span className="location-label">5-10 km radius</span>
                  <div className="location-bar">
                    <div className="location-fill" style={{width: '38%'}}></div>
                    <span className="location-count">137 donors</span>
                  </div>
                  <span className="location-percentage">38%</span>
                </div>

                <div className="location-item">
                  <span className="location-label">10-15 km radius</span>
                  <div className="location-bar">
                    <div className="location-fill" style={{width: '20%'}}></div>
                    <span className="location-count">63 donors</span>
                  </div>
                  <span className="location-percentage">20%</span>
                </div>
              </div>
            </div>

            {/* Monthly Performance */}
            <div className="performance-card">
              <h2>Monthly Performance</h2>
              <div className="performance-grid">
                <div className="perf-item">
                  <div className="perf-value green">28</div>
                  <div className="perf-label">Completed Requests</div>
                </div>
                <div className="perf-item">
                  <div className="perf-value blue">3</div>
                  <div className="perf-label">Active Requests</div>
                </div>
                <div className="perf-item">
                  <div className="perf-value red">2</div>
                  <div className="perf-label">Canceled</div>
                </div>
                <div className="perf-item">
                  <div className="perf-value orange">94.7%</div>
                  <div className="perf-label">Success Rate</div>
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

export default Analytics;