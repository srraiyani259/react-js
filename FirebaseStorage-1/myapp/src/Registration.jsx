// import React, { useEffect, useState } from 'react';
// import { onValue, ref, set } from "firebase/database";
// import { database } from './config';

// function Registration() {

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [users, setUsers] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newUserRef = ref(database, `users/${name}`);
//     set(newUserRef, { name, password })
//       .then(() => {
//         setName("");
//         setPassword("");
//       })
//       .catch(error => {
//         console.error("Error adding user: ", error);
//       });
//   };

//   useEffect(() => {
//     const userRef = ref(database, 'users');
//     onValue(userRef, (snapshot) => {
//       const data = snapshot.val();

//       if (data) {
//         const userList = Object.keys(data).map((key) => ({
//           ...data[key],
//           id: key,  // To have a unique key for React
//         }));
//         setUsers(userList);
//       } else {
//         setUsers([]);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         <label>Username: </label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         <br /><br />
//         <label>Password: </label>
//         <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br /><br />
//         <input type='submit' />
//       </form>

//       <h2>Registered Users</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Registration;


import React, { useEffect, useState } from 'react';
import { onValue, ref, set } from "firebase/database";
import { database } from './config';
import './App.css';

function Registration() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUserRef = ref(database, `users/${name}`);
    set(newUserRef, { name, password })
      .then(() => {
        setName("");
        setPassword("");
      })
      .catch(error => {
        console.error("Error adding user: ", error);
      });
  };

  useEffect(() => {
    const userRef = ref(database, 'users');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const userList = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <label>Password: </label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <input type='submit' />
      </form>

      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Registration;
