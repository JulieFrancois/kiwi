import React from 'react';
// import Footer from '../components/Footer';

function Hero ({setModifPage}) {
    return (
        <>
            <div className="bonhomme1"></div>
            <h1>Un nouvel outil pour aider les UX designers à réaliser leurs personas</h1>
            <p>Tu es utilisateur et tu veux aider un UX designer ? 
            <br></br>Réponds aux formulaire.
            <br></br>On se charge du reste</p>
            <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Répondre au formulaire</a>
            {/* <Footer></Footer> */}
        </>
        );
    }


export default Hero;