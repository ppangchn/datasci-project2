import React from 'react';
import Header from './components/Header';
import Home from './pages/home';

import {Route} from 'react-router-dom';
import './App.css';
import Reviewer from './pages/reviewer';
import ReviewerCard from './components/ReviewerCard';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    <Route exact path="/reviewer" component={Reviewer}/>
    <Route path='/123' component={UserCard}/>
    </div>
  );
}

export default App;
