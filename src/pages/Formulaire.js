import React from 'react';
import useForm from '../utile/useform';
import Footer from '../components/Footer';
import { formToJSON } from 'axios';

function Formulaire({setModifPage, setformdata,formdata}) {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
  setformdata({...formdata,...data})
  setModifPage("Form2")

  })

  return (
    <>
      <div className="formFond"></div>
      <div className="formFond2"></div>
      <div className="bonhomme2"></div>
      <div className="bonhomme3"></div>
      <img onClick={() => setModifPage("App")} className="picto" src="./material-symbols_arrow-downward-rounded.png" title=""></img>
          {/* console.log("click") */}
      <form ref={FormRef} onSubmit={handleSubmit} className="formulaire">

      <h2 className='Titre'>Qui es-tu ?</h2>
        <section className='Question'>
          <label  className="age" >
            Quel âge as-tu ? 
            <input type="number" name="age" placeholder=" Ex : 23" required/>
          </label>
          </section>
          <section className='Question'>
              <label className="genre">
              <p>Quel est ton genre ?</p>
              <div>
                  <input type="radio" className="radio" name="genre" value="Femme" required/>
                  <label for="Femme">Femme</label>
              </div>
              <div>
                  <input type="radio" className="radio" name="genre" value="Homme"/>
                  <label for="Homme">Homme</label>
              </div>

              </label>
          </section>

          <section className='Question'>

          <label className="ville">
            Dans quelle ville habites-tu ?
            <input type="text" name="ville" placeholder="Paris, Marseille, Massy..." required/> 
          </label>
          </section>

          <section className='Question'>
          <label className="activite">
          Quel est ton domaine d'activité ?
          <select name="domaine" required defaultValue="Sélectionner">
            <option selected value="">Sélectionner</option>
            <option value="Développement web">Développement web</option>
            <option value="Graphisme">Graphisme</option>
            <option value="Art">Art</option>
            <option value="Commerce">Commerce</option>
            <option value="Relation client">Relation client</option>
            <option value="Droit">Droit</option>
          </select>

          </label>

          </section>
      
          <section className='Question'>
          {/* <button className="suivant">Suivant</button> */}
          <button type="submit" className="cta suivant" href="#" title="">Suivant</button>
          </section>
          </form>
        </>
    )
}
export default Formulaire;

