import React from 'react';
import Header from './myComponent/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './myComponent/Home';
import Skills from './myComponent/Skills';
import Project from './myComponent/Project';
import Contact from './myComponent/Contact';
import Footer from './myComponent/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Project" component={Project} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;


