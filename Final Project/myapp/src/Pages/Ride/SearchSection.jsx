import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import UberGo from '../../components/assets/UberGo_v1.png';
import UberXL from '../../components/assets/package_UberXL_new_2022.png';
import Green from '../../components/assets/UberComfort_Green.png';
import Premier from '../../components/assets/package_UberComfort_new_2022.png';
import Taxi from '../../components/assets/Taxi_v1.png';
import { RideContext } from './RideContaxt';
import './Ride.css';

function SearchSection() {
  const [pickUpInput, setPickUpInput] = useState('');
  const [dropOffInput, setDropOffInput] = useState('');
  const [showRides, setShowRides] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [currTime, setCurrTime] = useState('');
  const navigate = useNavigate();
  const { setPickUpLocation, setDropOffLocation, setSelectedRide: setContextRide } = useContext(RideContext);

  const handleSearch = async () => {
    try {
      setTimeout(() => {
        const time = new Date().toLocaleTimeString();
        setCurrTime(time);
        setShowRides(true);
      }, 1000); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectRide = (ride) => {
    setSelectedRide(ride);
  };

  const handleRequestRide = () => {
    localStorage.setItem('pickUpLocation', pickUpInput);
    localStorage.setItem('dropOffLocation', dropOffInput);
    localStorage.setItem('selectedRide', selectedRide);
    
    setPickUpLocation(pickUpInput);
    setDropOffLocation(dropOffInput);
    setContextRide(selectedRide);

    message.success(`Requested ${selectedRide} sent successfully`);

    setTimeout(() => {
      navigate('/drive');
    }, 2000);
  };

  const renderActionButton = () => {
    if (!selectedRide) {
      return null; 
    }
    return (
      <div className="select-ride-button-container">
        <button className="select-ride-button" onClick={handleRequestRide}>
          Request {selectedRide}
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className='search-section'>
        <p className='search-section-title'>Find a trip</p>
        <input 
          type="text" 
          className='search-input'
          placeholder='Pick up location' 
          value={pickUpInput} 
          onChange={(e) => setPickUpInput(e.target.value)} 
        /> <br />
        <input 
          type="text" 
          className='search-input' 
          placeholder='Drop off location' 
          value={dropOffInput} 
          onChange={(e) => setDropOffInput(e.target.value)} 
        /> <br /> 
        <button 
          className='search-ride' 
          onClick={handleSearch}
          disabled={!pickUpInput || !dropOffInput}
        >
          Search
        </button>
      </div>

      {showRides && (
        <section>
          <p className='search-section-title'>Choose a ride</p>
          <div className="car">
              <div className="sub-cars" onClick={() => handleSelectRide('Uber Go')}>
                  <div className="car-img">
                    <img src={UberGo} alt="Uber Go" />
                  </div>
                  <div className="car-text">
                      <h1>Uber Go <span><i className="fa-solid fa-user"></i> 4</span></h1>
                      <p>3 mins away • {currTime} <br />
                      Affordable compact rides</p>
                      <h2 className="Price"><i className="fa-solid fa-indian-rupee-sign"></i>126.16</h2>
                  </div>
              </div>
              <div className="sub-cars" onClick={() => handleSelectRide('Uber XL')}>
                  <div className="car-img">
                    <img src={UberXL} alt="Uber XL" />
                  </div>
                  <div className="car-text">
                      <h1>Uber XL <span><i className="fa-solid fa-user"></i> 6</span></h1>
                      <p>5 mins away • {currTime} <br />
                      Comfortable SUVs</p>
                      <h2 className="Price"><i className="fa-solid fa-indian-rupee-sign"></i>270.86</h2>
                  </div>
              </div>
              <div className="sub-cars" onClick={() => handleSelectRide('Premier')}>
                  <div className="car-img">
                    <img src={Premier} alt="Premier" />
                  </div>
                  <div className="car-text">
                      <h1>Premier <span><i className="fa-solid fa-user"></i> 4</span></h1>
                      <p>3 mins away • {currTime} <br />
                      Affordable compact rides</p>
                      <h2 className="Price"><i className="fa-solid fa-indian-rupee-sign"></i>153.03</h2>
                  </div>
              </div>
              <div className="sub-cars" onClick={() => handleSelectRide('Green')}>
                  <div className="car-img">
                    <img src={Green} alt="Green" />
                  </div>
                  <div className="car-text">
                      <h1>Green <span><i className="fa-solid fa-user"></i> 4</span></h1>
                      <p>3 mins away • {currTime} <br />
                      Affordable compact rides</p>
                      <h2 className="Price"><i className="fa-solid fa-indian-rupee-sign"></i>153.03</h2>
                  </div>
              </div>
              <div className="sub-cars" onClick={() => handleSelectRide('Uber Taxi')}>
                  <div className="car-img">
                    <img src={Taxi} alt="Uber Taxi" />
                  </div>
                  <div className="car-text">
                      <h1>Uber Taxi</h1>
                      <p>4 mins away • {currTime} <br />
                      Local non-AC taxi cabs</p>
                      <h2 className="Price"><i className="fa-solid fa-indian-rupee-sign"></i>153.03</h2>
                  </div>
              </div>
          </div>
        </section>
      )}

      {selectedRide && renderActionButton()} 
      <br />
    </div>
  );
}

export default SearchSection;