import React from 'react';
import Footer from '../components/Footer';

function Hero ({setModifPage}) {
    return (
        <>
            <h1 className='Titre paddong'>Un nouvel outil pour aider les UX designers à réaliser<br></br> leurs personas</h1>
            <p>Tu es utilisateur et tu veux aider un UX designer ? 
            <br></br>Réponds aux formulaire.
            <br></br>On se charge du reste</p>
            <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Répondre au formulaire</a>
            <div className="bonhomme1"></div>
            <div className="bgHero"></div>
            {/* <Footer></Footer> */}
        </>
        );
    }

export default Hero;