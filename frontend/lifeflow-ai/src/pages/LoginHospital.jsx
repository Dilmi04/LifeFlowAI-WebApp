import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const LoginHospital = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '',
    rememberMe: false 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hospital-dashboard');
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

        <div className="auth-card">
          {/* Logo */}
          <div className="auth-logo">
            <div className="logo-circle">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your LifeFlow AI account</p>

          {/* User Type Label */}
          <div className="user-type-label">I am a:</div>
          
          {/* User Type Toggle */}
          <div className="user-type-toggle">
            <button 
              type="button"
              className="toggle-btn"
              onClick={() => navigate('/login-donor')}
            >
              Donor
            </button>
            <button 
              type="button"
              className="toggle-btn active hospital-active"
            >
              Hospital
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Email Address:</label>
              <input 
                type="email" 
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input 
                type="password" 
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-extras">
              <label className="remember-checkbox">
                <input 
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            {/* Sign In Button */}
            <button type="submit" className="btn-signin hospital-signin">
              Sign In
            </button>

            {/* Divider */}
            <div className="divider">
              <span>Or</span>
            </div>

            {/* Social Login */}
            <div className="social-buttons">
              <button type="button" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
                  <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
                  <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.958H.957C.347 6.173 0 7.548 0 9c0 1.452.348 2.827.957 4.042l3.007-2.335z"/>
                  <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
                </svg>
                Google
              </button>
              <button type="button" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="auth-footer">
              Don't have an account? <Link to="/signup-hospital">Sign Up Now</Link>
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

export default LoginHospital;