import React from 'react'

function Empl(props) {
  return (
<>
{
    
    <div className='main'>
      <table border={3}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.post}</td>
              <td>{p.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    
    }
</>
  )
}

export default Empl