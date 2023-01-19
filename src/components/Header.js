import React from 'react';

function Header({setModifPage}) {
  return (
    <header>
        <img className="logo" src="/PersonaFy..svg"/>
        <nav>
        <a onClick={() => setModifPage("Dashboard")} className="cta" href="#" title=""><img src="/socialmedia/Group27.png"/></a>
        </nav>
    </header>
  );
}


export default Header;
