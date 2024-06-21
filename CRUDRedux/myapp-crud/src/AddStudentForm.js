
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addStudent } from './action';

const AddStudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !grade.trim()) return;
    addStudent({ name, grade });
    setName('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={grade} onChange={e => setGrade(e.target.value)} placeholder="Grade" />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default connect(null, { addStudent })(AddStudentForm);
