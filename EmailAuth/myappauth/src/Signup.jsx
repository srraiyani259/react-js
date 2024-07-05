import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './Config';
import SignIn from './Signin';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSignedUp(true);
      setUserEmail(email);
      console.log(email);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSignedUp(false);
      setUserEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  if (signedUp) {
    return (
      <div>
        <h2>Welcome, {userEmail}</h2>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div  className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <><br/><br/></>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <><br/><br/></>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
