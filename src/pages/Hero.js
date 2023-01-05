import React from 'react';

function TEST ({setModifPage}) {
    return (
        <>
            <h1>PersonaFy. un nouvel outil pour aider les UX designers à réaliser leurs personae</h1>
            <p>Tu es utilisateur et tu veux aider un UX designer ? 
            <br></br>Réponds aux formulaire.
            <br></br>On se charge du reste</p>
            <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Répondre au formulaire</a>
        </>
        );
    }


export default TEST;