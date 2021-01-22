import React from 'react'

const Book = ({img, title,author}) => {
    return (
      <article id="Book" onMouseOver={()=>{console.log(title)}} onClick={()=>{console.log(author)}}>
      <img src={img} alt='' id="img" />
        <h1 className="Title" >
          {title}
      </h1>
      <h4 className="Author">{author}</h4>
      </article>
    )
  }

export default Book
