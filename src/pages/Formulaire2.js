import React from 'react';
import useForm from '../utile/useform';

function Formulaire2({setModifPage, setformdata, formdata}) {

  const [FormRef,handleSubmit,resetForm] = useForm((data)=>{
    let DATA= {...formdata,...data}
    setModifPage("FormF")

    const interestNumber = Object.entries({Voitures:parseInt(DATA.voitures),Musique:parseInt(DATA.musique),RéseauxSociaux:parseInt(DATA.socialmedia),
      Cuisine:parseInt(DATA.cuisine),Sport:parseInt(DATA.sport),Voyage:parseInt(DATA.voyage),Cinéma:parseInt(DATA.cinema)});
      
      interestNumber.sort((a, b) => b[1] - a[1]);
      const topValues = interestNumber.slice(0, 3);

      // FONCTION POST QUI FONCTIONNE
      fetch("https://illustrious-cat-7fb4d9.netlify.app/api/persona", {
        method: "POST",
        headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
            age:parseInt(DATA.age),
            gender:DATA.genre,
            city:DATA.ville,
            activity:DATA.domaine,
            spirit:parseInt(DATA.spirit),
            energy:parseInt(DATA.energy),
            nature:parseInt(DATA.nature),
            tactic:parseInt(DATA.tactic),
            interest:[topValues[0][0],topValues[1][0], topValues[2][0]],
            frustrations:DATA.frustrations,
            tools:DATA.outils
            }),
      })
  })
    
  return (
    <div>
      {/* Background */}
      <div className="form2Fond"></div>
      <div className="form2Fond2"></div>
      <div className="bonhomme4"></div>
      <div className="bonhomme5"></div>
      
      {/* BOUTON RETOUR */}
      <img onClick={() => setModifPage("Form")} className="picto" src="./material-symbols_arrow-downward-rounded.png" title=""></img>

      <form ref={FormRef} onSubmit={handleSubmit} className="formulaire">
        <h2 className='Titre'>Qu'aimes-tu ?</h2>
        <section className='Question'>
          <h3>Comment te définirais-tu ?</h3>
          <label className='nom_categorie'> Esprit</label>
            <label className='personalite'>
              <label htmlFor="Introvertie">Introvertie</label>
                <input type="range" name="spirit" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
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
              <label htmlFor="Extravertie">Extravertie</label>
            </label>

        <label className='nom_categorie'> Energie</label>
        <label className='personalite'>
          <label for="Introvertie"> Intuitif<span className='fantome'>............</span></label>
            <input type="range" name="energy" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
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
          <label for="Extravertie">Observateur</label>
        </label>
        
        <label className='nom_categorie'>Nature</label>
        <label className='personalite'>
          <label for="Introvertie">Pensée<span className='fantome'>......</span></label>
            <input type="range" name="nature" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
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
          <label for="Extravertie">Sentiment</label>
        </label>

        
        <label className='nom_categorie'>Tactique</label>
        <label className='personalite'>
          <label for="Introvertie">Jugement<span className='fantome'>....</span></label>
            <input type="range" name="tactic" id="volume" min="0" max="100"  step="1" className='custom-slider custom-slider-bullet'/>
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
          <label for="Extravertie">Prospection</label>
        </label>
      </section>

        <section className='Question'>
          <label className='interets'>
            <h2>À quel point aimes-tu ça ?</h2>
            <label className='nom_categorie'>Cinéma</label>
            <input type="range" name="cinema" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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

            <label className='nom_categorie'>Cuisine</label>
            <input type="range" name="cuisine" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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

            <label className='nom_categorie'>Musique</label>
            <input type="range" name="musique" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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

            <label className='nom_categorie'>Réseaux sociaux</label>
            <input type="range" name="socialmedia" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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

            <label className='nom_categorie'>Sport</label>
            <input type="range" name="sport" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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

            <label className='nom_categorie'>Voitures</label>
            <input type="range" name="voitures" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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
            
            <label className='nom_categorie'>Voyage</label>
            <input type="range" name="voyage" id="volume" min="1" max="10"  step="1" list="tickmarks" className='custom-slider custom-slider-bullet'/>
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
          <select name="frustrations" required defaultValue="Sélectionner">
              <option selected value="">Sélectionner</option>
              <option value="Pas assez d’organisation">Pas assez d’organisation</option>
              <option value="Manque de temps">Manque de temps</option>
              <option value="Pas assez de connaissance">Pas assez de connaissance</option>
              <option value="Habite loin">Habite loin</option>
            </select>
          </label>
        </section>

        <section className='Question'>
          <label className='outils'>
            Quels outils utilisent-tu souvent ?
            <select name="outils" required defaultValue="Sélectionner" >
              <option selected value="">Sélectionner</option>
              <option value="Suite Adobe">Suite Adobe</option>
              <option value="Suite Office">Suite Office</option>
              <option value="Google Drive">Google Drive</option>
              <option value="Ordinateur">Ordinateur</option>
              <option value="Smartphone">Smartphone</option>
            </select>
          </label>
        </section>


        <button className="cta suivant" href="#" title="">Terminer</button>
      </form>
    </div>
  )}

export default Formulaire2;