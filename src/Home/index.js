import React from 'react'
import './index.css'

function Home() {
    return (
        <>
            <header className="header">
            <div className="logo-box">
             <img className="logo" src='./logo.png' alt="Logo"></img>
             <h1 className='logo-text'>MangaHub</h1>
             </div>
             <div className="heading-center">
             <h1 className='heading-center-text'>Your Best Manga Source!</h1>
            <a href="#" className="btn btn-manga">Browse Manga</a>
             </div>
             </header>
        </>
    );
}

export default Home
