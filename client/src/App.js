import React from 'react';
import NavBar from './components/Navbar';
import  './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Login';
import CreatePost from './components/screens/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/" >
      <Home />
      </Route>
      <Route path="/Signin">
        <Signin />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
      <Route path="/Profile">
      <Profile />
      </Route>
      <Route path="/Create">
      <CreatePost/>
      </Route>
      </BrowserRouter>
  );
}

export default App;
