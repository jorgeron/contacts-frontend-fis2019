import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './Contacts.js';


function App() {

  const contacts = [
    {
      name: "Federico",
      phone : "65453653"
    },
    {
      name: "Jose",
      phone: "676676787"
    }
  ];

  return (
    <div>
      <h1>Hello World!</h1>
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
