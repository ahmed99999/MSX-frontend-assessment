import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import QuestionDetails from './components/QuestionDetails';
import Questions from './components/Questions';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/questions/:id" component={QuestionDetails} />
        <Route path="/questions" component={Questions} />
        <Redirect from="/" exact to="/questions" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
