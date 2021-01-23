import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Alert from './AlertsAPI';


function BookList() {
  
  return (
    <section>
    <NavBar/>
    <Alert message="Welcome to the Test Page"/>
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));