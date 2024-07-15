import React, { useState, useEffect, useMemo } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './Firebase';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { notification } from 'antd';
import { ref, set } from "firebase/database";
import { database } from './Firebase';
import { Footer } from 'antd/es/layout/layout';

const Context = React.createContext({
  name: 'Default',
});

function SignUp() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ name: '', password: '' });

  const openNotification = (message, description) => {
    api.success({
      message: message,
      description: description,
      placement: 'topRight',
    });
  };

  const contextValue = useMemo(
    () => ({
      name: '',
    }),
    [],
  );

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setValue(result.user.email);
        localStorage.setItem("email", result.user.email);
        openNotification('Sign in successful', 'You have signed in with Google successfully.');
        setTimeout(() => navigate('/'), 2000); 
      })
      .catch((error) => {
        console.error(error);
        api.error({
          message: 'Sign in failed',
          description: 'There was an error signing in with Google. Please try again.',
          placement: 'topRight',
        });
      });
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setValue(userEmail);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (name.trim() === '') {
      setError(prev => ({ ...prev, name: 'User name is required' }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, name: '' }));
    }

    if (password.trim() === '') {
      setError(prev => ({ ...prev, password: 'Password is required' }));
      hasError = true;
    } else {
      setError(prev => ({ ...prev, password: '' }));
    }

    if (!hasError) {
      const newUserRef = ref(database, `users/${name}`);
      set(newUserRef, { name, password });
      setName('');
      setPassword('');
      openNotification('Sign up successful', 'You have signed up successfully.');
      setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
    }
  };

  return (
    <>
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div>
        {value ? (
          <p>Redirecting to home...</p>
        ) : (
          <div>
            <center>
            <p className='form-title'>What's your phone number or email?</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter Your Email' name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
              {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
              <input type="password" placeholder='Enter Password' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
              <button type="submit">Sign In</button>
              
                <div className="or">
                  <div className="line"></div>
                  <p>or</p>
                  <div className="line"></div>
                </div>
                <button type="button" className="signin-button" onClick={handleClick}>Sign in with Google</button>
            </form>
            </center>
          </div>
        )}
      </div>
    </Context.Provider>
    </>
  );
}

export default SignUp;
