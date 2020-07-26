import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Questions from './components/Questions';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/questions" component={Questions} />
        <Redirect from="/" exact to="/questions" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
