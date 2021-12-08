import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import AddUser from './components/User/AddUser';

import UserList from './components/User/UserList';
import Home from './pages/Home';
import RegistrationPage from './pages/RegistrationPage';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>

      <hr />
      {/* <AddUser /> */}
    </div>
  );
}

export default App;
