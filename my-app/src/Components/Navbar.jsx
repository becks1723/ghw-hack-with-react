import React , {useState} from 'react';
import '../stylesheets/App.css';

function Navbar() {
  const [showLinks, setShowsLinks] = useState(false);
  return(
    <nav className="navbar">
      <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden" : ""}>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </div>
        <button onClick={() => setShowsLinks(!showLinks)}>Open</button>
      </div>
      <div className='rightSide'>
        <input type="text" placeholder="searching..."></input>
        <button className='search-button'>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
 
