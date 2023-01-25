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

      <h2 className='Titre'>Qu'aimes-tu ?</h2>

      <section className='Question'>
      <h3>Comment te définirais-tu ?</h3>
      <label className='nom_categorie'> Esprit</label>
        <label className='personalite'>
          <label htmlFor="Introvertie">Introvertie</label>
          <section className='espace'>
          <input type="range" name="personalite" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
          <datalist>
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
            <option value="40"></option>
            <option value="50"></option>
            <option value="60"></option>
            <option value="70"></option>
            <option value="80"></option>
            <option value="90"></option>
            <option value="100"></option>
          </datalist>
          </section>
          <label htmlFor="Extravertie">Extravertie</label>
        </label>

        <label className='nom_categorie'> Energie</label>
        <label className='personalite'>
          <label for="Introvertie"> Intuitif<span className='fantome'>............</span></label>
          <section className='espace'>
          <input type="range" name="personalite" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
          <datalist>
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
            <option value="40"></option>
            <option value="50"></option>
            <option value="60"></option>
            <option value="70"></option>
            <option value="80"></option>
            <option value="90"></option>
            <option value="100"></option>
          </datalist>
          </section>
          <label for="Extravertie">Observateur</label>
        </label>
        
        
        <label className='nom_categorie'> Nature </label>
        <label className='personalite'>
          <label for="Introvertie"> Pensée<span className='fantome'>......</span></label>
          <section className='espace'>
          <input type="range" name="personalite" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
          <datalist>
          <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
            <option value="40"></option>
            <option value="50"></option>
            <option value="60"></option>
            <option value="70"></option>
            <option value="80"></option>
            <option value="90"></option>
            <option value="100"></option>
          </datalist>
          </section>
          <label for="Extravertie">Sentiment</label>
        </label>

        
        <label className='nom_categorie'> Tactique</label>
        <label className='personalite'>
          <label for="Introvertie"> Jugement<span className='fantome'>....</span></label>
          <section className='espace'>
          <input type="range" name="personalite" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
          <datalist>
            <option value="10"></option>
            <option value="20"></option>
            <option value="30"></option>
            <option value="40"></option>
            <option value="50"></option>
            <option value="60"></option>
            <option value="70"></option>
            <option value="80"></option>
            <option value="90"></option>
            <option value="100"></option>
          </datalist>
          </section>
          <label for="Extravertie">Prospection</label>
        </label>
      </section>

        <section className='Question'>
          <label className='interets'>
          <h2>À quel point aimes-tu ça ?</h2>
          <label className='nom_categorie'> Cinéma </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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

            <label className='nom_categorie'> Cuisine </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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

            <label className='nom_categorie'> Musique </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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

            <label className='nom_categorie'> Réseaux sociaux </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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

            <label className='nom_categorie'> Sport </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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

            <label className='nom_categorie'> Voiture </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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
            
            <label className='nom_categorie'> Voyage </label>
          <section className='espace'></section>
          <input type="range" name="interets" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
            <datalist id="tickmarks">
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
          </label>
        </section>

        <section className='Question'>
          <label className='outils'>
          Quels sont les problèmes que tu rencontres ?            
          <select name="outils">
              <option value="Pas assez d’organisation">Pas assez d’organisation</option>
              <option selected value="Manque de temps">Manque de temps</option>
              <option value="Pas assez de connaissance">Pas assez de connaissance</option>
              <option selected value="Habite loin">Habite loin</option>
            </select>
          </label>
        </section>

        <section className='Question'>
          <label className='outils'>
            Quels outils utilisent-tu souvent ?
            <select name="outils">
              <option value="Suite Adobe">Suite Adobe</option>
              <option selected value="Suite Office">Suite Office</option>
              <option value="Google Drive">Google Drive</option>
            </select>
          </label>
        </section>


        <a onClick={() => setModifPage("FormF")} className="cta suivant" href="#" title="">Terminer</a>
        </form>
        {/* <Footer></Footer> */}
    </div>
  )}

export default Formulaire2;