
import React from 'react'
import NavBar from "./Navbar";

const BookView = (props) => {
  if(props.location.state===undefined) 
    return <h1>this is not login</h1>

    const {title,img,author}= {...props.location.state.book};

  return (
    <div>
    <NavBar/>
    <article
      id="Book"
      onMouseOver={() => {
        console.log(title);
      }}
      onClick={() => {
        console.log(author);
      }}>
      <img src={img} alt="" id="img" />
      <h1 className="Title">{title}</h1>
      <h4 className="Author">{author}</h4>
    </article>
    </div>
  );
};
export default BookView
