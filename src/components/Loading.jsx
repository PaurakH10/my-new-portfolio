import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="spinner"></div>
        <h1 className="loading-text">Paurakh Bhandari</h1>
        <p className="loading-subtitle">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Loading;
