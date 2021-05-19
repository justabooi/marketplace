import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Myitems from './pages/Myitems';
import Create from './pages/Create';
import Navbar from './Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/marketplace" component={Marketplace}/>
        <Route path="/create" component={Create}/>
        <Route path="/myitems" component={Myitems}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
