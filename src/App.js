import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const  App = () => {
  const[enteredUserValues, setUserValues] = useState([]);

  const enteredValues = (getValues) => {
    setUserValues((prevData) => {
      return [...prevData,getValues];
    });
  };



  return (
    <div>
      <AddUser onSubmitUser={enteredValues}/>
      {enteredUserValues.length && <UserList users={enteredUserValues} />}
    </div>
  );
}

export default App;
