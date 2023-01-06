import React from 'react';
import useForm from '../utile/useform';
import Footer from '../components/Footer';

function Formulaire({setModifPage, setformdata}) {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {console.log(React.useState) // Write your submit function here
  })

  return (
    <div>
    <img onClick={() => setModifPage("App")} className="picto" src="./material-symbols_arrow-downward-rounded.png" title=""></img>
        {/* console.log("click") */}
    <form ref={FormRef} onSubmit={handleSubmit} className="formulaire">

    <h1 className='Titre'>Qui es-tu ?</h1>
      <section className='Question'>
        <label  className="age" >
          Quel âge as-tu ? 
          <input type="number" name="age"/>
        </label>
        </section>
        <section className='Question'>
            <label className="genre">
            <p>Quel est ton genre ?</p>
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

         </section>

         <section className='Question'>

        <label className="ville">
          Dans quelle ville habites-tu ?
          <input type="text" name="ville" /> 
        </label>
        </section>

        <section className='Question'>
        <label className="activite">
        Quel est ton domaine d'activité ?
        <select name="domaine">
        <option value="Art">Art</option>
        <option value="Droit">Droit</option>
        <option selected value="Politique">Politique</option>
        <option value="Vente">Vente</option>
        </select>

        </label>

        </section>
    
        <section className='Question'>
        {/* <button className="suivant">Suivant</button> */}
        <a onClick={() => setModifPage("Form2")} className="cta suivant" href="#" title="">Suivant</a>
        </section>
        </form>
        <Footer></Footer>
    </div>

    )
}
export default Formulaire;

