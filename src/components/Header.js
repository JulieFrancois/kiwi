import React from 'react';

function Header() {
  return (
    <header>
        <nav>
          <img class="logo" src="/logo.png"/>
            <ul>
                <li><a href="" title="">pricing</a></li>
                <li><a href="" title="">blog</a></li>
                <li><a href="" title="">widgets</a></li>
                <li><a href="" title="">feedback</a></li>
            </ul>
        </nav>
        <div>
            <a href="" title="">sign in</a>
            <a className="bouton" href="" title="">sign up for free</a>
        </div>
    </header>
  );
}


export default Header;
