import React from 'react';
import "./booking_driver.css"

const DriverDetail = () => {
  const driver = {
    name: 'Gulu Butt',
    availability: true,
    experience: '4+ years',
    Domain: 'LTV',
    region: 'City A',
    rent: '$50/hr',
    driver: true
  };

  return (
    <div className="driver-container">
      <div className="image_driver">
      </div>

      <h1>{driver.name}</h1>
      <p className={driver.availability ? 'availability' : 'unavailability'}>
        {driver.availability ? 'Available' : 'Not Available'}
      </p>
      <p>Experience: {driver.experience}</p>
      <p>Domain: {driver.Domain}</p>
      <p>Region: {driver.region}</p>
      <p>Rent: {driver.rent}</p>
      <p>Driver: {driver.driver ? 'Available' : 'Not Available'}</p>

      {/* Add any additional details you want to display for the driver */}

      <button type="button" className="btn btn-secondary button_space">Edit</button>
      <button type="button" className="btn btn-dark button_space">Remove</button>
    </div>
  );
};

export default DriverDetail;
