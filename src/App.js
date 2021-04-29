import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Wrapper from './components/Helper/Wrapper'

const  App = () => {
  const[enteredUserValues, setUserValues] = useState([]);

  const enteredValues = (getValues) => {
    setUserValues((prevData) => {
      return [...prevData,getValues];
    });
  };



  return (
    <React.Fragment>
      <AddUser onSubmitUser={enteredValues}/>
      {enteredUserValues.length && <UserList users={enteredUserValues} />}
    </React.Fragment>
  );
}

export default App;
