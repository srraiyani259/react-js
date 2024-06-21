

let nextStudentId = 0;

export const addStudent = student => ({
  type: 'ADD_STUDENT',
  payload: {
    id: nextStudentId++,
    ...student,
  },
});

export const deleteStudent = id => ({
  type: 'DELETE_STUDENT',
  payload: id,
});

export const updateStudent = (id, updatedStudent) => ({
  type: 'UPDATE_STUDENT',
  payload: {
    id,
    updatedStudent,
  },
});
