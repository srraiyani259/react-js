import React from 'react'
import './DownloadApp.css';
import Footer from '../../components/Footer/Footer';

function DownloadApp() {
  const handleGoogle = (URL) =>{
    window.open("https://play.google.com/store/apps/details?id=com.ubercab&uclick_id=ec6352cd-50a2-4e74-b2be-f2bea6449a7b", '_blank')
  }

  const handleApple = (URL) =>{
    window.open("https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792?referrer=singular_click_id%3D099c6536-f6a5-43eb-a29c-b1fe4ba155cd", '_blank')
  }
  return (
    <div>
        <section>
          <div className="download-app">
            <div className="sub-app-text">
              <h1>Always the ride <br /> you want</h1>
              <p>With Uber, your destination is at your fingertips. Just open the <br /> app and enter where you're going, and a nearby driver will help <br /> you get there reliably.</p>
              <div className="buttons">
              <button className='google-play' onClick={handleGoogle}>Get it on Google Play</button> <br />
              <button className='apple-store'onClick={handleApple}>Download on the App Store</button>
              </div>
            </div>
            <div className="sub-app-image">

            </div>
          </div>
        </section>

        <section>
        <div className="uber-hero-app">
        <div className="uber-hero-image-app"></div>
          <div className="sub-hero-text-app">
            <h1>Book a ride now</h1>
            <p>Request a ride, hop in, and go.</p>
            <div className="input-app">
              <input type="text" name="" id="" placeholder="Enter Location" />
              <i className="fa-solid fa-map-pin input-icon"></i> <br />
              <input type="text" name="" id="" placeholder="Enter Destination" />
              <i className="fa-solid fa-map-pin input-icon"></i> <br />
              <button>See prices</button>
            </div>
          </div>
          
        </div>
        </section>
        <Footer/>
    </div>
  )
}

export default DownloadApp