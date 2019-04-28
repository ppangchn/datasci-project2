import React from 'react';
import Header from './components/Header';
import Home from './pages/home';
import {Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
