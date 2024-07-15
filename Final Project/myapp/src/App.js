import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Ride from './Pages/Ride/Ride';
import Drive from './Pages/Drive/Drive';
import Business from './Pages/Business/Business';
import DownloadApp from './Pages/Home/DownloadApp';
import SignUp from './Pages/SignUp/SignUp';
import SearchSection from './Pages/Ride/SearchSection';
import { RideProvider } from './Pages/Ride/RideContaxt';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/ride" element={<RideProvider><Ride /></RideProvider>} />
        <Route path="/drive" element={<RideProvider><Drive /></RideProvider>} />
        <Route path="/business" element={<Business />} />
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;