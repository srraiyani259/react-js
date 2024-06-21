
import React, { useState } from 'react';

const StudentItem = ({ student, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(student.name);
  const [grade, setGrade] = useState(student.grade);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setName(student.name);
    setGrade(student.grade);
  };

  const handleUpdate = () => {
    onUpdate(student.id, { name, grade });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" value={grade} onChange={e => setGrade(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{student.name}</span>
          <span>{student.grade}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default StudentItem;
