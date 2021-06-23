import React from 'react'
import Field from './components/Field/field';
import Avatar from './components/Avatar/avatar'
import './App.css'
const  App=()=> {

  return (
    <div data-testid="app"  className="wrapper">
      <Avatar/>

      <Field/>

    </div>
  );
}

export default App;
