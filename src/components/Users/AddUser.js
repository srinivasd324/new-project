import React, { Component, useState } from "react";
import Card from "../UI/Card";
import userclass from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [eneteredUserName, setUserName] = useState("");
  const [eneteredAge, setAge] = useState("");
  const [erroShow, setErrorShow] = useState();

  const userNamehandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitUserHandler = (event) => {
    event.preventDefault();
    if (
      eneteredUserName.trim().length === 0 ||
      eneteredAge.trim().length === 0
    ) {
        setErrorShow({
          title: "Invalid Input",
          message: "Please enter a valid name and age...",
        });
        return;
    }
    if (parseInt(eneteredAge) < 1) {
        setErrorShow({
            title: "Invalid age",
            message: "Please enter a valid age...",
          });
      return;
    }
    const enteredValues = {
      name: eneteredUserName,
      age: eneteredAge,
    };
    props.onSubmitUser(enteredValues);
    setUserName("");
    setAge("");
  };

  const setErrorDefault = () => {
    setErrorShow(null);
  };

  return (
    <div>
      {erroShow && (
        <ErrorModal
          title={erroShow.title}
          message={erroShow.message}
          onConfirm={setErrorDefault}
        />
      )}
      <Card className={userclass.input}>
        <form id="userForm" onSubmit={submitUserHandler}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              name="userName"
              type="text"
              value={eneteredUserName}
              onChange={userNamehandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age(Years)</label>
            <input
              id="age"
              name="age"
              type="number"
              value={eneteredAge}
              onChange={ageHandler}
            />
          </div>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
