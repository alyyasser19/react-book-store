import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Book from './Book';
import Alert from './AlertsAPI';
import React, { useState, useEffect } from 'react';


const url = 'https://api.jsonbin.io/b/600c4fa8bca934583e40b589';


function Books() {
  const [books,setBooks]=useState([]);

  const getUsers = async()=>{
    const response = await fetch(url);
    const cur= await response.json();
    setBooks(cur);
  }

  useEffect(()=>{
    getUsers();
  },[])

  return (
    <section>
    <NavBar/>
    <Alert message="Your Best Manga Source"/>
    <div id="container">
      {books.map((book) =>{
        return ( 
          <Book key={book.web} {...book}></Book>
          );
        }
        )
      }
      </div>
    </section>
  );
}

export default Books;