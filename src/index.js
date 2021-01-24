import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from './Books';
import React, { useState, useEffect } from 'react';

function MangaHub() {


  return (
  <Books/>
  );
}

ReactDOM.render(<MangaHub />, document.getElementById('root'));
