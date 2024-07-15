import React, { useState } from 'react';

function InputItem({ onSearch }) {
  const [pickUp, setPickUp] = useState('');
  const [dropOff, setDropOff] = useState('');

  const handleSearch = () => {
    onSearch({ pickUp, dropOff });
  };

  return (
    <div>
      <input
        type="text"
        value={pickUp}
        onChange={(e) => setPickUp(e.target.value)}
        placeholder='Pick up location'
      />
      <input
        type="text"
        value={dropOff}
        onChange={(e) => setDropOff(e.target.value)}
        placeholder='Drop off location'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default InputItem;
