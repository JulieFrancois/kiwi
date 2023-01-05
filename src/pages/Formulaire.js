import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useForm from '../utile/useform';
function Formulaire() {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {console.log(data) // Write your submit function here
  })

  return (
    <>
    {/* <a onClick={() => setModifPage("Form")} className="cta" href="#" title="">Retour</a> */}
    <form ref={FormRef} onSubmit={handleSubmit}>

        <label>
          Quel âge as-tu ?
          <input type="number" name="name" />
        </label>

       <select name="domaine">
        <option value="Art">Art</option>
        <option value="Droit">Droit</option>
        <option selected value="Politique">Politique</option>
        <option value="Vente">Vente</option>
      </select>
      <button>Submit</button>

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

        </form>
    </>

    )
}

export default Formulaire;