import React from 'react';

function Header({setModifPage}) {
  return (
    <header>
        <a onClick={() => setModifPage("App")} href="#" title=""><img className="logo" src="/PersonaFy..svg"/></a>
        <nav>
        <a onClick={() => setModifPage("Dashboard")} href="#" title=""><img src="/socialmedia/Group27.png"/></a>
        </nav>
    </header>
  );
}


export default Header;
