import React from 'react';
import logo from './logo.svg';
import "./style.css"
import Header from './components/Header';

function App() {
  return (
    <body>
      <Header></Header>
      <section className="hero">
        <h1>Turn your testimonials into your most powerful <span>marketing weapon</span></h1>
        <p>Collect text and video testimonials. Share them everywhere. Convert more visitors and close more deals</p>
        {/* <form id="myForm">
          <input id="eMail" name="name" value="Your email">
          <input type="submit" value="Envoyer !">
        </form> */}
      <img src="/hero.png"></img>
      

    </section>
    </body>
  );
}


export default App;
