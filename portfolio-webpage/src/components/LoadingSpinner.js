import React from 'react';
import '../css/LoadingSpinner.css'; // Import CSS for styling the spinner

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      {/* Spinner animation */}
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingSpinner;
