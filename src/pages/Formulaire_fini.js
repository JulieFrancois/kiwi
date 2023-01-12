import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from '../components/Header';
import Footer from '../components/Footer';

function Formulaire_fini(setModifPage) {
  
    //JSX
    return (
        <>
          {/* <Header></Header> */}
          <section className="Formulaire_fini">
          <h1>Félicitations <span className='ponctuation'>!</span></h1>
          <div className='texte'>
            <p>Tu as terminé ton formulaire.</p>
            <p>Envoie ce lien à tes utilisateurs pour découvrir ton persona</p>
          </div>

          <div className='lien'>
          <a onClick={() => setModifPage("FormF")} className="" href="#" title="">Lien à envoyer aux users</a>
          </div>
          
          <a onClick={() => setModifPage("FormF")} className="cta dashboard" href="#" title="">Voir mon dashboard</a>
            {/* <a className='dashboard'>Voir mon dashboard</a> */}
            
          </section>
          <Footer></Footer>
        </>
    );
  }

export default Formulaire_fini;