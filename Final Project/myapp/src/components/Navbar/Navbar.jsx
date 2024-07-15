import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Dropdown, Menu, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../Pages/SignUp/Firebase';

const items = [
  { key: '1', label: <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">About us</a> },
  { key: '2', label: <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">Our Offerings</a> },
  { key: '3', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">How Uber works</a> },
  { key: '4', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Impact</a> },
  { key: '5', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Diversity, equity and inclusion</a> },
  { key: '6', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Sustainability</a> },
  { key: '7', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Explore</a> },
  { key: '8', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Newsroom</a> },
  { key: '9', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Investor relations</a> },
  { key: '10', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Blog</a> },
  { key: '11', label: <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">Careers</a> },
];

const languageMenu = (
  <Menu>
    <Menu.Item key="1">Select your preferred language</Menu.Item>
    <Menu.Item key="2">বাংলা</Menu.Item>
    <Menu.Item key="3">English</Menu.Item>
    <Menu.Item key="4">हिन्दी</Menu.Item>
    <Menu.Item key="5">ಕನ್ನಡ</Menu.Item>
    <Menu.Item key="6">मराठी</Menu.Item>
    <Menu.Item key="7">தமிழ்</Menu.Item>
    <Menu.Item key="8">తెలుగు</Menu.Item>
    <Menu.Item key="9">اردو</Menu.Item>
  </Menu>
);

function Navbar() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setIsSignedUp(true);
      const nameParts = userEmail.split('@')[0].split('.').map(part => part.replace(/[0-9]/g, ''));
      const name = nameParts.join(' ').trim();
      setUserName(name);
    }
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("email");
        setUserName('');
        message.success('You have signed out successfully.');
        setTimeout(() => navigate('/signup'), 2000); 
      })
      .catch((error) => {
        console.error(error);
        message.error('Failed to sign out.');
      });
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="drive-deliver">Drive & deliver</Menu.Item>
      <Menu.Item key="ride">Ride</Menu.Item>
      <Menu.Item key="uber-eats">Uber Eats</Menu.Item>
      <Menu.Item key="business">Uber for Business</Menu.Item>
      <Menu.Item key="account">Manage account</Menu.Item>       
      <Menu.Item key="sign-out">
        <a onClick={handleSignOut}>Sign out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="Header">
        <div className="sub-header">
          <div className="logo">
            <Link to="/">Uber</Link>
          </div>
          <nav>
            <ul>
              <li><Link to="/ride">Ride</Link></li>
              <li><Link to="/drive">Drive</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link>Uber Eats</Link></li>
              <li>
                <Dropdown overlay={<Menu items={items} />}>
                  <a onClick={(e) => e.preventDefault()}>
                    About <i className="fa-solid fa-chevron-down"></i>
                  </a>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-buttons">
          <Dropdown overlay={languageMenu}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              <button><i className="fa-solid fa-earth-americas"></i> &nbsp; EN</button>
            </a>
          </Dropdown>
          <button>Help</button>
          {!isSignedUp ? (
            <>
              <button ><Link id='login-btn' to='/SignUp'>Log in</Link></button>
              <button id="signup-btn"><Link to='/SignUp'>Sign up</Link></button>
            </>
          ) : (
            <Dropdown overlay={userMenu} placement="bottomRight">
              <button id="user-btn">{userName}</button>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
