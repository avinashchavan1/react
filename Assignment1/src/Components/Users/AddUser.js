import { React, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [entertedUsername, setEnteredUsername] = useState("");
  const [entertedAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      entertedUsername.trim().length === 0 ||
      entertedAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Input(Non-empty values)",
      });
      return;
    }
    if (+entertedAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age(Greater than 1)",
      });
      return;
    }
    console.log(entertedAge, entertedUsername);
    props.onAdduser(entertedUsername, entertedAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const closeModal = () => {
    setError();
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={entertedUsername}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={entertedAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
