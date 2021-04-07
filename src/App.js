import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from './components/globals/globalStyles';
// components 
import Navbar from './components/Navbar';
//import Sidebar from './components/Sidebar';

// pages 
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
