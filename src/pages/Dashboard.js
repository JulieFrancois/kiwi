import React from 'react';
import Footer from '../components/Footer';

function Dashboard ({setModifPage}) {
return(
    <>
    <div class="Side-bar">

        <div className='Box-menu'>
                <div className='li-mneu Active-menu'>
                    <img className='icon-menu' src="/socialmedia/Vector.png"/>
                    <div className='title-menu'> Formulaire 1 </div>
                </div>
        </div>
               
            
        <div className='li-mneu +formualaire'>
            <img className='icon-menu' src="/socialmedia/Vector.png"/>
            <div className='title-menu'>+ Nouveau formulaire</div>
        <div>

        <div className='li-mneu logout'>
        <   img className='icon-menu' src="/socialmedia/Vector.png"/>
            <div className="title-menu">Se déconnecter</div>
        </div>
        
        </div>

        
        </div> 
    </div> 


        <div className="Page">
        <div className="Box-elements">
            <div class="box-element-flex">
                <div className="chart-box">
                <div className="title-element">Persona</div>
                <div className="chart-box-main">
                    <div className="text_box">
                        <h1> Formulaire 1 </h1>
                        <p>Description du formulaire en une ou 2 lignes </p>
                        <p>Nombres de questions : 20</p>
                        <p>Nombres de réponses : 12</p>
                        <p>Lien : https://www.pinterest.fr/ </p>
                        <button> Voir mon persona </button>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>   
    </>
    )
  }

  export default Dashboard;