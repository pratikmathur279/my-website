import React, { Component } from 'react';

import { Route, HashRouter, BrowserRouter } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import classes from './App.css';

import HomepageBuilder from './containers/HomepageBuilder/HomepageBuilder';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Projects from './containers/Projects/Projects';
import Footer from '../src/components/UI/Footer/Footer';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div classes={classes.App}>
        
        <Layout/>
        <div className="content">
        <Route exact path="/" component={HomepageBuilder}/>
            <Route path="about" component={About}/>
            <Route path="projects" component={Projects}/>
            <Route path="contact" component={Contact}/>
        </div>

        <Footer>

        </Footer>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
