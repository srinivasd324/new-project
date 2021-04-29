import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import userclass from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helper/Wrapper'

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

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
    console.log(nameInputRef.current.value);
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
    <Wrapper>
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
              ref={nameInputRef}
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
              ref={ageInputRef}
            />
          </div>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
