import React from 'react';
import logo from './logo.svg';
import "./style.css"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <body>
      <main>
        <Header></Header>
        <section className="hero">
          <h1>PersonaFy. un nouvel outil pour aider les UX designers à réaliser leurs personae</h1>
          <p>Tu es utilisateur et tu veux aider un UX designer ? 
          <br></br>Réponds aux formulaire.
          <br></br>On se charge du reste</p>
          <a className="cta" href="" title="">Répondre au formulaire</a>
        </section>
        <Footer></Footer>
      </main>
    </body>
  );
}


export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // import Test from './Test';
// import Header from './components/Header';
// import styled from 'styled-components';
// import { FaBeer } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="App" >
//       {/* <Test></Test> */}
//       {/* <Header></Header> */}

//     </div>
//   );
// }

// const Button = styled.button`
//   color: grey;
// `;




// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }


// export default App;