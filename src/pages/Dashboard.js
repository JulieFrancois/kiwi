import React from 'react';

function Dashboard ({setModifPage}) {
return(
    <div class="board">
        <section class="sidebar">
            <a onClick={() => setModifPage("App")} className="whitelogo" href="#" title=""><img src="/WhitePersonaFy.svg"/></a>
            <div className='formu'>
                <h2 className='textB'>Mes formulaires</h2>
                <ul>
                    <li className='textB paddong'><a href='#anchor1'>Formulaire 1</a></li>
                    <li className='textB paddong'><a href='#anchor2'>Formulaire 2</a></li>
                    <li className='textB paddong'><a href='#anchor3'>Formulaire 3</a></li>
                </ul>
                <a href="#" title="" className="create">Créer un formulaire</a>
            </div>
            <img className="whitelogobis" src="/WhiteP.svg"/> 
        </section> 

        <section className="page">
            <div className="box">
                <div className='content'>
                    <h2 id="anchor1"className='textB Titre paddong'>Formulaire&nbsp;<span className='number'>#1</span></h2>
                    <div className='mininav'>
                        <a href="#" title="" className="">Aperçu</a>
                        <a href="#" title="" className="gras">Modifier</a>
                    </div>
                </div>
                <div>
                    <p className='textB'>Description du formulaire en une ou 2 lignes </p>
                    <p className='textB'>Nombres de questions : 20</p>
                    <p className='textB'>Nombres de réponses : 14</p>
                    <p className='textB'>Lien : <a>https://personafy/form1</a></p>
                </div>
                <a href="#" title="" onClick={() => setModifPage("Persona")} className="boutonB">Voir le persona généré</a>
            </div>
            <div className="box">
                <div className='content'>
                    <h2 id="anchor2" className='textB Titre paddong'>Formulaire&nbsp;<span className='number'>#2</span></h2>
                    <div className='mininav'>
                        <a href="#" title="" className="">Aperçu</a>
                        <a href="#" title="" className="gras">Modifier</a>
                    </div>
                </div>
                <div>
                    <p className='textB'>Description du formulaire en une ou 2 lignes </p>
                    <p className='textB'>Nombres de questions : 20</p>
                    <p className='textB'>Nombres de réponses : 14</p>
                    <p className='textB'>Lien : <a>https://personafy/form2</a></p>
                </div>
                <a href="#" title="" onClick={() => setModifPage("Persona")} className="boutonB">Voir le persona généré</a>
            </div>
            <div className="box">
                <div className='content'>
                    <h2 id="anchor3" className='textB Titre paddong'>Formulaire&nbsp;<span className='number'>#3</span></h2>
                    <div className='mininav'>
                        <a href="#" title="" className="">Aperçu</a>
                        <a href="#" title="" className="gras">Modifier</a>
                    </div>
                </div>
                <div>
                    <p className='textB'>Description du formulaire en une ou 2 lignes </p>
                    <p className='textB'>Nombres de questions : 20</p>
                    <p className='textB'>Nombres de réponses : 14</p>
                    <p className='textB'>Lien : <a>https://personafy/form3</a></p>
                </div>
                <a href="#" title="" onClick={() => setModifPage("Persona")} className="boutonB">Voir le persona généré</a>
            </div>
        </section>
    </div>
    )
  }

  export default Dashboard;