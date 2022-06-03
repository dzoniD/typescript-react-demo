import React from 'react';
import './App.css';
import { Greet } from "./components/Greet";
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';

function App() {
  const personName = {
    first:'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first:'Bruce',
      last: 'Wayne'
    },
    {
      first:'Clark',
      last: 'Kent'

    },
    {
      first:'Princess',
      last: 'Diana'

    }
  ]

  return (
    <div className="App">
      <Button handleClick={(event,id) => {console.log('handle click',event,id)}}/>
      {/* <Status status='success'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo di Caprio</Heading>
      </Oscar>
     <Greet name='Nikola' isLoggedIn={false} /> */}
       {/* <Person name={personName}/>
      <PersonList names={nameList}/> */}
    </div>
  );
}

export default App;
