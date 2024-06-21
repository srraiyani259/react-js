

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Student Grade App</h1>
        <AddStudentForm />
        <StudentList />
      </div>
    </Provider>
  );
};

export default App;
