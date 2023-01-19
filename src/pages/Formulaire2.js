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
      <h2>Comment te définirais-tu ?</h2>
      <label className='nom_categorie'> Esprit</label>
        <label className='personalite'>
          <label for="Introvertie">Introvertie</label>
          <section className='espace'>
          <input type="range" name="personalite" id="volume" min="0" max="11"  step="1" className='custom-slider custom-slider-bullet'/>
          <datalist>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </datalist>
          </section>
          <label for="Extravertie">Extravertie</label>
        </label>
      </section>

        <section className='Question'>
          <label className='interets'>
          À quel point aimes-tu ça ? 
          <label className='nom_categorie'> Musique pop </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="0" max="11"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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
              <option value="word">Word</option>
              <option value="photoshop">Photoshop</option>
              <option selected value="excel">Excel</option>
              <option value="docs">Docs</option>
            </select>
          </label>
        </section>


        <a onClick={() => setModifPage("FormF")} className="cta suivant" href="#" title="">Terminer</a>
        </form>
        <Footer></Footer>
    </div>
  )}

export default Formulaire2;