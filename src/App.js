import EditUserForm from './forms/EditUserForm';
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./tables/UserTable";
import { useState } from "react";

function App() {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <>
      <div className="w-fit m-auto mt-[4rem]">
        <h1 className="text-[2rem]">CRUD App with Hooks</h1>
        <div className="flex my-4 gap-8">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="">
              <h2 className="text-[1.7rem]">Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          <div className="">
            <h2 className="text-[1.7rem] px-4">View users</h2>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
