import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './Books';
import Login from './Login'
import React, { useState, useEffect } from 'react';

function MangaHub() {


  return (
  <Login/>
  );
}

ReactDOM.render(<MangaHub />, document.getElementById('root'));
