import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useForm from '../utile/useform';


function Formulaire({setModifPage, setformdata}) {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Formulaire");setformdata(data)// Write your submit function here
  })

  return (
    <>
    {/* <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Retour</a> */}
   
    {/* {console.log(data)} */}
  
   <h1>Qui es-tu ?</h1>
   
    <form ref={FormRef} onSubmit={handleSubmit}>

        <label  className="age" >
          Quel âge as-tu ?
          <input type="number" name="age"/>
        </label>

        <label className="genre">
          Quel est ton genre ?
          <div>
          <input type="radio" id="huey" name="genre" value="Femme"/>
          <label for="Femme">Femme</label>
          </div>

          <div>
          <input type="radio" id="dewey" name="genre" value="Homme"/>
          <label for="Homme">Homme</label>
          </div>

          <div>
          <input type="radio" id="louie" name="genre" value="Autre"/>
          <label for="Autre">Autre</label>
          </div>

          <div>
          <input type="radio" id="louie" name="genre" value="Je ne souhaite pas préciser"/>
          <label for="Je ne souhaite pas préciser">Je ne souhaite pas préciser</label>
         </div>
    
         </label>

        <label className="ville">
          Dans quelle ville habites-tu ?
          <input type="text" name="ville" />
        </label>

        <label className="activite">
          
         Quel est ton domaine d'activité ?

        <select name="domaine">
        <option value="Art">Art</option>
        <option value="Droit">Droit</option>
        <option selected value="Politique">Politique</option>
        <option value="Vente">Vente</option>
        </select>

        </label>
     
        <button className="suivant">Suivant</button>

        </form>
    </>

    )
}

export default Formulaire;