import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const SignupDonor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    bloodGroup: '',
    location: '',
    lastDonationDate: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        {/* Back to Home */}
        <Link to="/" className="back-home">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 2L3 7h2v5h6V7h2L8 2z"/>
          </svg>
          Back to Home
        </Link>

        <div className="auth-card signup-card">
          {/* Logo */}
          <div className="auth-logo">
            <div className="logo-circle">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="auth-title">Create Your Account</h1>
          <p className="auth-subtitle">Join LifeFlow AI and start saving lives</p>

          {/* User Type Label */}
          <div className="user-type-label">I want to register as:</div>
          
          {/* User Type Toggle */}
          <div className="user-type-toggle">
            <button 
              type="button"
              className="toggle-btn active donor-active"
            >
              Donor
            </button>
            <button 
              type="button"
              className="toggle-btn"
              onClick={() => navigate('/signup-hospital')}
            >
              Hospital
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form signup-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name*</label>
                <input 
                  type="text" 
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input 
                  type="tel" 
                  placeholder="+94"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address*</label>
              <input 
                type="email" 
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Blood Group*</label>
              <div className="blood-group-selector">
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                  <button
                    key={type}
                    type="button"
                    className={`blood-btn ${formData.bloodGroup === type ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, bloodGroup: type})}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location*</label>
                <input 
                  type="text" 
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Donation Date</label>
                <input 
                  type="date" 
                  placeholder="yyyy/MM/dd"
                  value={formData.lastDonationDate}
                  onChange={(e) => setFormData({...formData, lastDonationDate: e.target.value})}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password*</label>
                <input 
                  type="password" 
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password*</label>
                <input 
                  type="password" 
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="terms-checkbox">
              <input 
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                required
              />
              <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
            </label>

            {/* Create Account Button */}
            <button type="submit" className="btn-signin donor-signin">
              Create Donor Account
            </button>

            {/* Sign In Link */}
            <p className="auth-footer">
              Already have an account? <Link to="/login-donor">Sign In Now</Link>
            </p>
          </form>
        </div>

        {/* Chatbot */}
        <Link to="/chatbot" className="chatbot-float-auth">
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SignupDonor;