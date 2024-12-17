import React, { useState } from 'react';
import './AdvantageCard.css';

const AdvantageCard = ({ title, description, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="advantage-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <div className="advantage-main">
        <div className="advantage-icon">✔</div>
        <div>
          <h4 className="advantage-title">{title}</h4>
          <p className="advantage-description">{description}</p>
        </div>
        <div className="dropdown-icon">{isHovered ? '▲' : '▼'}</div>
      </div>

      {/* Hover Card */}
      {isHovered && (
        <div className="advantage-details">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default AdvantageCard;
