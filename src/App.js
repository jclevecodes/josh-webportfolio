import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/Contact';

import Header from './pagesdata/header/Header.js'
import AboutMeInfo from './pagesdata/aboutme/AboutMe.js';
import Projects from './pagesdata/projectsdata/ProjectsData.js';


import GlobalStyle from './globalStyles';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Router className="App">
        
          <Navbar>

          </Navbar>
            <Route exact path='/'>
              
                <Header />
                <AboutMeInfo />
              <Projects />
            </Route>
            <Route path="/contactform">
              <ContactForm />
            </Route>
          <Footer>

          </Footer>
          <GlobalStyle>

          </GlobalStyle>
      </Router>
    </div>
  );
}

export default App;