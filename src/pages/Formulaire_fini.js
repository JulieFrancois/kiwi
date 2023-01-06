import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Formulaire_fini(setModifPage) {
  
    //JSX
    return (
        <>
          {/* <Header></Header> */}
          <section className="Formulaire_fini">
          <h1>Félicitations !</h1>
            <p>Tu as terminé ton formulaire. 
            <br></br>Envoie ce lien à tes utilisateurs pour découvrir ton persona
            <br></br></p>
            <a>Lien à envoyer aux utilisateurs</a>
            <a>Voir mon dashboard</a>
          </section>
          <Footer></Footer>
        </>
    );
  }

export default Formulaire_fini;