import React from 'react';
import Header from './components/Header';
import Home from './pages/home';

import {Route} from 'react-router-dom';
import './App.css';
import Reviewer from './pages/reviewer';
import ReviewerCard from './components/ReviewerCard';

function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    <Route exact path="/reviewer" component={Reviewer}/>
    <Route path='/card' component={ReviewerCard}/>
    </div>
  );
}

export default App;
