import React, { Component } from 'react';
import './App.css';

import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="header">USER FORM APP</div>
        <UserForm />
        <UserList />
      </div>
    );
  }
}

export default App;
