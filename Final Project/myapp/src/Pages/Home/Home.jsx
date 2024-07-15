import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from '../../components/Footer/Footer';

function Home() {
  const navigate = useNavigate();

  const handleQrClick = () => {
    navigate('/download');
  };

  const handleQrClickapp = (URL) => {
    window.open("https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792?referrer=singular_click_id%3D099c6536-f6a5-43eb-a29c-b1fe4ba155cd", '_blank');
  };

  return (
    <div>
      <section>
        <div className="uber-hero">
          <div className="sub-hero-text">
            <h1>Go anywhere with <br /> Uber</h1>
            <p>Request a ride, hop in, and go.</p>
            <div className="input">
              <input type="text" name="" id="" placeholder="Enter Location" />
              <i className="fa-solid fa-map-pin input-icon"></i> <br />
              <input type="text" name="" id="" placeholder="Enter Destination" />
              <i className="fa-solid fa-map-pin input-icon"></i> <br />
              <button>See prices</button>
            </div>
          </div>
          <div className="uber-hero-image"></div>
        </div>
      </section>

      <section>
        <div className="uber-hero-2">
          <div className="uber-hero-2-image"></div>
          <div className="uber-hero-2-text">
            <h1>Drive when you <br /> want, make what <br /> you need</h1>
            <p>Make money on your schedule with deliveries or rides—or <br /> both. You can use your own car or choose a rental <br /> through Uber.</p>
            <button>Get started</button> <a href="/">Already have an account? Sign in</a>
          </div>
        </div>
      </section>

      <section>
        <div className="uber-hero-3">
          <div className="uber-hero-3-text">
            <h1>The Uber you<br /> know, reimagined <br /> for business</h1>
            <p>Uber for Business is a platform for managing global rides and <br />meals, and local deliveries, for companies of any size.</p>
            <button>Get started</button> <a href="/">Check out our solutions</a>
          </div>
          <div className="uber-hero-3-image"></div>
        </div>
      </section>

      <section>
        <div className="uber-hero-4">
          <div className="uber-hero-4-image"></div>
          <div className="uber-hero-4-text">
            <h1>Make money by renting out <br /> your car</h1>
            <p>Connect with thousands of drivers and earn more per week <br />with Uber’s free fleet management tools.</p>
            <button>Get started</button>
          </div>
        </div>
      </section>

      <section>
        <div className="app">
          <h1>It’s easier in the apps</h1>
          <div className="app-qr">
            <div className="sub-app-qr" onClick={handleQrClick}>
              <div className="qr-image"></div>
              <div className="qr-text">
                <b>Download the Uber app</b>
                <p>Scan to Download</p>
              </div>
            </div>
            <div className="sub-app-qr" onClick={handleQrClickapp}>
              <div className="qr-image1"></div>
              <div className="qr-text">
                <b>Download the Driver app</b>
                <p>Scan to Download</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;
