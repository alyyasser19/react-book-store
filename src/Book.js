import React from 'react';
import { Link } from "react-router-dom";

const Book = ({img, title,author}) => {
    return (
      <article
        id="Book"
        onMouseOver={() => {
          console.log(title);
        }}
        onClick={() => {
          console.log(author);
        }}>
        <Link to={{ pathname: "/" + title, state: { book: {img,title,author} } }} id='book-link'>
          <img src={img} alt="" id="img" />
          <h1 className="Title">{title}</h1>
        </Link>
        <h4 className="Author">{author}</h4>
      </article>
    );
  }

export default Book
