import React from 'react';
import useForm from '../utile/useform';
import Footer from '../components/Footer';

function Formulaire({setModifPage, setformdata}) {

// const Formulaire = ({setModifPage}) => {
const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {console.log(React.useState) // Write your submit function here
  })

  return (
    <div className="formFond">
    <div className="bonhomme2"></div>
    <div className="bonhomme3"></div>
    <img onClick={() => setModifPage("App")} className="picto" src="./material-symbols_arrow-downward-rounded.png" title=""></img>
        {/* console.log("click") */}
    <form ref={FormRef} onSubmit={handleSubmit} className="formulaire">

    <h1 className='Titre'>Qui es-tu ?</h1>
      <section className='Question'>
        <label  className="age" >
          Quel âge as-tu ? 
          <input type="number" name="age" placeholder=" Ex : 23"/>
        </label>
        </section>
        <section className='Question'>
            <label className="genre">
            <p>Quel est ton genre ?</p>
            <div>
                <input type="radio" className="radio" name="genre" value="Femme"/>
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
          <input type="text" name="ville" placeholder="Paris, Marseille, Massy..."/> 
        </label>
        </section>

        <section className='Question'>
        <label className="activite">
        Quel est ton domaine d'activité ?
        <select name="domaine">
        <option selected value="Développement web">Développement web</option>
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
        <a onClick={() => setModifPage("Form2")} className="cta suivant" href="#" title="">Suivant</a>
        </section>
        </form>
        {/* <Footer></Footer> */}
    </div>

    )
}
export default Formulaire;

