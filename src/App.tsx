import React from 'react';
import './App.css';
import { Greet } from "./components/Greet";
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContex';
import { User } from './components/context/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

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
      {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)}/>
      <List items={[ 1, 2, 3 ]} onClick={(item) => console.log(item)}/> */}
      <List 
        items={[ 
          { 
            id:1,
            first:'Clark', 
            last:'Kent' 
          }, 
          { 
            id:2,
            first:'Bruce',
            last: 'Wayne'
            }, 
          { 
            id:3,
            first:'Princess', 
            last: 'Dayana'
          },
          ]}
         onClick={(item) => console.log(item)}
        />
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem'}} /> */}
      {/* <Button handleClick={(event,id) => {console.log('handle click',event,id)}}/>
      <Input value='' handleChange={event => console.log(event)}/> */}
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
