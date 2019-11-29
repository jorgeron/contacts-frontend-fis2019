import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './Contact.js';


function App() {

  const contact = {
    name: "Federico",
    phone : "65453653"
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <Contact contact={contact}/>
    </div>
  );
}

export default App;
