import React from 'react';

function Hero ({setModifPage}) {
    return (
        <>
            <h1 className='Titre paddong'>Un nouvel outil pour aider les UX designers<br></br> à réaliser leurs personas</h1>
            <p>Tu es utilisateur et tu veux aider un UX designer ? 
            <br></br>Réponds aux formulaire.
            <br></br>On se charge du reste</p>
            <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Répondre au formulaire</a>

            {/* background */}
            <div className="bonhomme1"></div>
            <div className="bgHero"></div>
        </>
        );
    }

export default Hero;