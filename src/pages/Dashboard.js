import React from 'react';
import Footer from '../components/Footer';

function Dashboard ({setModifPage}) {
return(
    <div class="board">
        <section class="sidebar">
            <a onClick={() => setModifPage("App")} className="whitelogo" href="#" title=""><img src="/WhitePersonaFy.svg"/></a>
            <div className='formu'>
                <h2 className='textB'>Mes formulaires</h2>
                <ul>
                    <li className='textB'>Formulaire 1</li>
                    <li className='textB'>Formulaire 2</li>
                    <li className='textB'>Formulaire 3</li>
                </ul>
                <a href="#" title="" className="create">Créer un formulaire</a>
            </div>
            <img className="whitelogobis" src="/WhiteP.svg"/> 
        </section> 

        <section className="page">
            <div className="box">
                <div className='content'>
                    <h1 className='textB Titre paddong'>Formulaire&nbsp;<span className='number'>#2</span></h1>
                    <div className='mininav'>
                        <a href="#" title="" className="">Aperçu</a>
                        <a href="#" title="" className="gras">Modifier</a>
                    </div>
                </div>
                <div>
                    <p className='textB'>Description du formulaire en une ou 2 lignes </p>
                    <p className='textB'>Nombres de questions : 20</p>
                    <p className='textB'>Nombres de réponses : 14</p>
                    <p className='textB'>Lien : https://www.pinterest.fr/ </p>
                    <a href="#" title="" className="boutonB">Voir le persona généré</a>
                </div>
            </div>
        </section>
    </div>
    )
  }

  export default Dashboard;