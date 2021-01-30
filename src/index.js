import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './Books';
import Login from './Login';
import Test from './test';
import BookV from './BookView';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState} from "react";

function MangaHub() {

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/:title" exact component={BookV}></Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<MangaHub />, document.getElementById('root'));
