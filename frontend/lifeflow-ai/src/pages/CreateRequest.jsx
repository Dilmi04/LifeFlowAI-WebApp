import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateRequest.css';

const CreateRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '1',
    urgency: 'High',
    location: '',
    patientDetails: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate back to hospital dashboard after submission
    navigate('/hospital-dashboard');
  };

  return (
    <div className="create-request-page">
      <div className="request-modal">
        {/* Header */}
        <div className="modal-header">
          <div className="header-left">
            <div className="header-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="header-text">
              <h1>Create Emergency Request</h1>
              <p>AI-powered donor matching will begin immediately</p>
            </div>
          </div>
          <button className="close-btn" onClick={() => navigate('/hospital-dashboard')}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="request-form">
          {/* Required Blood Type */}
          <div className="form-section">
            <label className="form-label required">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
              </svg>
              Required Blood Type *
            </label>
            <div className="blood-type-grid">
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                <button
                  key={type}
                  type="button"
                  className={`blood-type-btn ${formData.bloodType === type ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, bloodType: type})}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="form-section">
            <label className="form-label required">Quantity (Units) *</label>
            <input
              type="number"
              min="1"
              max="10"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              className="form-input"
              required
            />
          </div>

          {/* Urgency Level */}
          <div className="form-section">
            <label className="form-label required">Urgency Level *</label>
            <div className="urgency-tabs">
              {['Critical', 'High', 'Medium'].map(level => (
                <button
                  key={level}
                  type="button"
                  className={`urgency-tab ${formData.urgency === level ? 'active' : ''} ${level.toLowerCase()}`}
                  onClick={() => setFormData({...formData, urgency: level})}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Specific Location */}
          <div className="form-section">
            <label className="form-label required">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Specific Location / Department *
            </label>
            <input
              type="text"
              placeholder="eg.: Emergency Room, Surgery Ward B"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="form-input"
              required
            />
          </div>

          {/* Patient Case Details */}
          <div className="form-section">
            <label className="form-label required">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              Patient Case Details *
            </label>
            <textarea
              placeholder="Brief description of medical condition/ emergency"
              value={formData.patientDetails}
              onChange={(e) => setFormData({...formData, patientDetails: e.target.value})}
              className="form-textarea"
              rows="4"
              required
            />
          </div>

          {/* AI Matching Info */}
          <div className="ai-matching-info">
            <h3>AI Matching Process</h3>
            <p>Once submitted, our AI instantly analyze, location, blood type compatibility, donor availability and readiness scores to find the best matches within 60 seconds.</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            Submit Emergency Request
          </button>
        </form>
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

export default CreateRequest;