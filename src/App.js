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

  return (
    <>
      <div className="w-fit m-auto mt-[4rem]">
        <h1 className="text-[2rem]">CRUD App with Hooks</h1>
        <div className="flex my-4 gap-8">
          <div className="">
            <h2 className="text-[1.7rem]">Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
          <div className="">
            <h2 className="text-[1.7rem] px-4">View users</h2>
            <UserTable users={users} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
