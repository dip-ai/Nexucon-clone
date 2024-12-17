import React, { useState } from 'react';
import './AdvantageList.css';

const AdvantageList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const advantages = [
    {
      title: 'Customer First',
      subtitle: 'Your success is our passion',
      details: "We are fully committed to our clients, prioritizing their needs above all else. Our approach revolves around delivering measurable, results-oriented solutions that drive return on investment (ROI). Through personalized strategies, we ensure that our efforts are directly aligned with our clients' objectives. Our emphasis on ethical values and tangible business outcomes underscores our dedication to client success.",
    },
    {
      title: 'Experienced passionate team',
      subtitle: 'Our Tech Maestros Lead the Way',
      details: 'We boast a team of highly experienced and certified professionals from globally recognized industries, each a proven expert in cutting-edge technologies. Our experts are not only innovative but also deeply committed to delivering excellence. Drawing from their extensive experience spanning across the globe, they consistently bring visionary perspectives to enhance your processes and add significant value to your endeavours.',
    },
    {
      title: 'Seamless global delivery centres',
      subtitle: 'Bridging Continents, Delivering Excellence',
      details: 'Our global delivery centres ensure uninterrupted business operations, with round-the-clock availability to meet your needs. This commitment guarantees timely completion of all tasks.',
    },
    {
      title: 'Budget-friendly excellence',
      subtitle: 'Delivering Quality at a Fraction of the Cost',
      details: 'Our adaptable model is dedicated to providing top-notch outcomes. With expert guidance, we achieve impactful results, maximizing your return on investment.',
    },
    {
      title: 'Ensuring Data Security',
      subtitle: 'Our Commitment to Protecting Your Information',
      details: 'With our unwavering dedication to compliance and rigorous protocols, we guarantee the meticulous protection of your data. This commitment extends to all aspects of our operations, conducted securely within our own premises.',
    },
    {
      title: 'Accelerating your Success',
      subtitle: 'Delivering Quality Through Innovation and Efficiency',
      details: "With our 'Machine First' approach, we unlock the complete potential of technology to revolutionize businesses and achieve unprecedented levels of efficiency and innovation. Prioritizing automation and a data-driven approach, we ensure success through ongoing improvement.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
     <p className="section-title">WHY US</p>
     <p className="section-head">WHY Partner With Us</p>
    <div className="advantages-container">
     
      {/* Image Section */}
      <img
        className="group"
        src="https://www.nexucon.com/assets/images/why/bg45.webp"
        alt="Group meeting"
      />

      {/* List Section */}
      <div className="advantages-list">
        
        <h2 className="section-subtitle">Our Standout Advantages</h2>

        {advantages.map((adv, index) => (
          <div key={index} className="advantage-item">
            {/* Main List Content */}
            <div
              className="advantage-header"
              onMouseEnter={() => handleToggle(index)}
            >
              <div className="advantage-title">
                <span className="advantage-icon">✔</span>
                <span>
                  <strong>{adv.title}</strong> - {adv.subtitle}
                </span>
              </div>
              {/* Dropdown Icon */}
              <span className="dropdown-icon">
                {activeIndex === index ? '▲' : '▼'}
              </span>
            </div>

            {/* Card Content */}
            {activeIndex === index && (
              <div className="advantage-details">
                <p>{adv.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AdvantageList;
