import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
