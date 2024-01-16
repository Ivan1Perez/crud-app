import React from 'react'

const UserTable = (props) => {
  return (
    <table className='table-styles'>
      <thead>
        <tr className='text-left'>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td className='flex gap-2'>
                <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button1"
                >
                  Edit
                </button>
                <button 
                  onClick={() => props.deleteUser(user.id)}
                  className="button1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UserTable