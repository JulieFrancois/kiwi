import React from 'react';

function Header({setModifPage,ModifPage}) {
  return (
    <header className={ModifPage}>
        <a onClick={() => setModifPage("App")} className="logo" href="#" title=""><img src="/PersonaFy..svg"/></a>
        <a onClick={() => setModifPage("App")} className="whitelogo" href="#" title=""><img src="/WhitePersonaFy.svg"/></a>
        <nav className="logo">
        <a onClick={() => setModifPage("Dashboard")} href="#" title=""><img src="/socialmedia/test.png"/></a>
        <a onClick={() => setModifPage("Persona")} href="#" title=""><img src="/socialmedia/Group27.png"/></a>
        </nav>
        <nav className="whitelogo">
        <a onClick={() => setModifPage("Dashboard")} href="#" title=""><img src="/socialmedia/Vector.png"/></a>
        <a onClick={() => setModifPage("Persona")} href="#" title=""><img src="/socialmedia/WGroup 27.svg"/></a>
        </nav>
    </header>
  );
}


export default Header;
