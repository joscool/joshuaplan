import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PrivateRoute from './components/layout/PrivateRoute'
import AnonymousRoute from './components/layout/AnonymousRoute'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/project/:id" component={ProjectDetails} />
          <AnonymousRoute path="/signin" component={SignIn} />
          <AnonymousRoute path="/signup" component={SignUp} />
          <PrivateRoute path="/create" component ={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
