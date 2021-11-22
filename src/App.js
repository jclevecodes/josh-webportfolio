import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Header from './pagesdata/header/Header.js'
import AboutMeInfo from './pagesdata/aboutme/AboutMe.js';



import GlobalStyle from './globalStyles';

import './App.css';

function App() {
  return (
    <Router className="App">
      <Navbar>

      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Header />
          <AboutMeInfo />
        </Route>
      </Switch>
      <Footer>

      </Footer>
      <GlobalStyle>

      </GlobalStyle>
    </Router>
  );
}

export default App;
