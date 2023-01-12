import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import useForm from '../utile/useform';
import Footer from '../components/Footer';

function Formulaire2({setModifPage, setformdata}) {

 // const Formulaire = ({setModifPage}) => {
  const [FormRef,handleSubmit,resetForm] = useForm((data)=>
    {setModifPage("Form2");setformdata(data)// Write your submit function here
  })
    
  return (
    <div>
      <img onClick={() => setModifPage("Form")} className="picto" src="./material-symbols_arrow-downward-rounded.png" title=""></img>
      <form ref={FormRef} onSubmit={handleSubmit} className="formulaire">

      <h1 className='Titre'>Qu'aimes-tu ?</h1>

      <section className='Question'>
        <label className='personalite'>
          <h2> Comment te définirais-tu ? </h2>
          <label className='nom_categorie'> Esprit </label>
          <section className='espace'>
          <label for="Introvertie">Introvertie</label>
          <input type="range" name="personalite" id="volume" min="0" max="11"  step="1"/>
          <datalist>
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
          <label for="Extravertie">Extravertie</label>
          </section>
        </label>
      </section>

        <section className='Question'>
          <label className='interets'>
          À quel point aimes-tu ça ? 
          <label className='nom_categorie'> Musique </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="0" max="11"  step="1" list="tickmarks"/>
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
          </label>
        </section>

        <section className='Question'>
          <label className='outils'>
            Quels outils utilisent-tu souvent ?
            <select name="outils">
              <option value="word">word</option>
              <option value="photoshop">Photoshop</option>
              <option selected value="excel">excel</option>
              <option value="docs">docs</option>
            </select>
          </label>
        </section>


        <a onClick={() => setModifPage("FormF")} className="cta suivant" href="#" title="">Terminer</a>
        </form>
        <Footer></Footer>
    </div>
  )}

export default Formulaire2;