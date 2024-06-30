import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Config';

const SignIn = () => {
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
