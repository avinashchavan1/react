import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = (username, age) => {
    setUsers((prevState) => {
      return [{ name: username, age: age, id: Math.random() }, ...prevState];
    });
  };
  return (
    <div>
      <AddUser onAdduser={addNewUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
