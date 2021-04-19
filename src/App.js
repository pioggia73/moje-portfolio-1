import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from './components/globals/globalStyles';

// components 
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// pages 
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import Overlay from './components/Overlay';
//import {AppContext} from './context/context';

function App() {

    // const isOpen = useContext(AppContext);
    // const toggleSidebar = useContext(AppContext);

  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  // };

  return (
    // <div>
    //   <GlobalStyles />
    //   <Router>
    //   <Navbar toggleSidebar = {toggleSidebar} />
    //   <Sidebar isOpen= {isOpen} toggleSidebar = {toggleSidebar}  />
    //     <Overlay  isOpen = {isOpen} />
    //     <Switch>
    //       <Route path="/" exact>
    //         <HomePage isOpen={isOpen} />
    //       </Route>
    //       <Route path="/contact">
    //         <ContactPage />
    //       </Route>
    //       <Route path="/about">
    //         <AboutMe />
    //       </Route>
    //       <Route path="/projects">
    //         <ProjectsPage />
    //       </Route>
    //       <Route path="*">
    //         <ErrorPage />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>

    <div>
      <GlobalStyles />
      <Router>
      <Navbar  />
      <Sidebar  />
        <Overlay  />
        <Switch>
          <Route path="/" exact>
            <HomePage  />
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
