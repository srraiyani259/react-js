import React, { useEffect, useState } from 'react';
import { onValue, ref, remove, set, update } from "firebase/database";
import { database } from './config';
import './App.css';

function Registration() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [editName, setEditName] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditUser, setCurrentEditUser] = useState(null);

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

  const handleDelete = (username) => {
    const userRef = ref(database, `users/${username}`);
    remove(userRef)
      .then(() => {
        alert("User deleted");
      })
      .catch(error => {
        console.error("Error deleting user: ", error);
      });
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentEditUser(user);
    setEditName(user.name);
    setEditPassword(user.password);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const userRef = ref(database, `users/${currentEditUser.name}`);
    update(userRef, { name: editName, password: editPassword })
      .then(() => {
        setIsEditing(false);
        setCurrentEditUser(null);
        setEditName("");
        setEditPassword("");
      })
      .catch(error => {
        console.error("Error updating user: ", error);
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
        <br />
        <label>Password: </label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <input type='submit' value="Register" />
      </form>

      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}<br /><br/>
            <button className='btn' onClick={() => handleEdit(user)}>Edit</button><>&nbsp;&nbsp;&nbsp;</>
            <button className='btn' onClick={() => handleDelete(user.name)}>Delete</button>
          </li>
        ))}
      </ul>

      {isEditing && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleUpdate}>
            <label>Username: </label>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type='password' value={editPassword} onChange={(e) => setEditPassword(e.target.value)} />
            <br /><br />
            <input type='submit' value="Update" /><br/>
            <button className='btn2' onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Registration;