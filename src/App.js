import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'


import './index.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;