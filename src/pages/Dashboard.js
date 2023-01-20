import React from 'react';
import Footer from '../components/Footer';

function Dashboard ({setModifPage}) {
return(
    <>
    <div class="Side-bar">

        <div class="Box-menu">
            <div class="ul-menu">
                <div class="li-mneu Active-menu">

                    <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                        <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                        <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                        <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                        <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                        <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                        <path
                            d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z" />
                        <path
                            d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                        <path
                            d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z" />
                        <path
                            d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z" />
                    </svg>

                    <div class="title-menu"> Formulaire 1 </div>

                </div>
            </div>
        </div>
               
            
        <div class="li-mneu +formualaire">
                <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                    <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                    <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                    <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                    <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                    <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                    <path
                        d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                    <path
                        d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
                </svg>
            <div class="title-menu">+ Nouveau formulaire</div>
        <div>

        <div class="li-mneu logout">
            <svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
                <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-general-link" />
                <style xmlns="" lang="en" type="text/css" id="dark-mode-custom-style" />
                <style xmlns="" lang="en" type="text/css" id="dark-mode-native-style" />
                <style xmlns="" lang="en" type="text/css" id="dark-mode-native-sheet" />
                <path
                    d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z" />
                <path
                    d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414L21.13,10.97,6,11a1,1,0,0,0,0,2H6l15.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z" />
            </svg>
            <div class="title-menu">Se déconnecter</div>
        </div>
        
        </div>

        
    </div> 
        </div> 
        <div class="Page">
        <div class="Box-elements">
            <div class="box-element-flex">
                <div class="chart-box">
                <div class="title-element">Persona</div>
                <div class="chart-box-main">
                    <div class="text_box">
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