import React from 'react';
import useForm from '../utile/useform';
<<<<<<< Updated upstream


function Formulaire({setModifPage, setformdata}) {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Formulaire");setformdata(data)// Write your submit function here
=======
function Formulaire({setModifPage}) {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {console.log(React.useState) // Write your submit function here
>>>>>>> Stashed changes
  })

  return (
    <>
<<<<<<< Updated upstream
    {/* <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Retour</a> */}
   
   <h1>Qui es-tu ?</h1>
   
    <form ref={FormRef} onSubmit={handleSubmit}>
=======
    <img onClick={() => setModifPage("App")} className="picto" src="./material-symbols_arrow-downward-rounded.png" title=""></img>
    {/* console.log("click") */}
>>>>>>> Stashed changes

    <form ref={FormRef} onSubmit={handleSubmit}>
        <label>
            Quel âge as-tu ?
            <input type="number" name="name" />
        </label>
<<<<<<< Updated upstream

        <label>
          Quel est ton genre ?
          <div>
          <input type="radio" id="huey" name="genre" value="Femme"/>
          <label for="Femme">Femme</label>
          </div>
=======
       <select name="domaine">
            <option value="Art">Art</option>
            <option value="Droit">Droit</option>
            <option selected value="Politique">Politique</option>
            <option value="Vente">Vente</option>
      </select>
      <button>Submit</button>

      <div>
          <input type="radio" id="huey" name="genre" value="Femme"/>
          <label htmlFor="Femme">Femme</label>
      </div>
>>>>>>> Stashed changes

          <div>
          <input type="radio" id="dewey" name="genre" value="Homme"/>
<<<<<<< Updated upstream
          <label for="Homme">Homme</label>
          </div>
=======
          <label htmlFor="Homme">Homme</label>
        </div>
>>>>>>> Stashed changes

          <div>
          <input type="radio" id="louie" name="genre" value="Autre"/>
<<<<<<< Updated upstream
          <label for="Autre">Autre</label>
          </div>

          <div>
          <input type="radio" id="louie" name="genre" value="Je ne souhaite pas préciser"/>
          <label for="Je ne souhaite pas préciser">Je ne souhaite pas préciser</label>
         </div>
    
         </label>

        <label>
          Dans quelle ville habites-tu ?
          <input type="text" name="name" />
        </label>

        <label>
          
         Quel est ton domaine d'activité ?

        <select name="domaine">
        <option value="Art">Art</option>
        <option value="Droit">Droit</option>
        <option selected value="Politique">Politique</option>
        <option value="Vente">Vente</option>
        </select>

        </label>

     
        <button>Suivant</button>


=======
          <label htmlFor="Autre">Autre</label>
        </div>

        <div>
            <input type="radio" id="louie" name="genre" value="Je ne souhaite pas préciser"/>
            <label htmlFor="Je ne souhaite pas préciser">Je ne souhaite pas préciser</label>
        </div>

        <input type="range" name="satisfaction" id="volume" min="0" max="11"  step="1" list="tickmarks"/>
        <datalist id="tickmarks">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
            <option value="8"></option>
            <option value="9"></option>
            <option value="10"></option>
        </datalist>
>>>>>>> Stashed changes

        </form>
    </>

    )
}

export default Formulaire;